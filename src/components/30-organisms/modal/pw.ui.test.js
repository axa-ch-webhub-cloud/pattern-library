const host = process.env.TEST_HOST_STORYBOOK_URL;
//Delay is needed because of the close animation (animation duration: 200ms + 100ms "extra time") !!!

describe('Modal', () => {
  it('should open modal', async () => {
    await openModal();

    expect(await page.isVisible('.o-modal__content')).toBe(true);
  });

  it('modal should close by button', async () => {
    await openModal();
    await page.click('.o-modal__upper-close-container-button');

    await delay(300);
    expect(await page.isVisible('.o-modal__content')).toBe(false);
  });

  it('should close by pressing outside the modal', async () => {
    await openModal();
    await page.evaluate(() => {
      document
        .querySelector('axa-modal')
        .shadowRoot.querySelector('.o-modal--open')
        .click();
    });

    await delay(300);
    expect(await page.isVisible('.o-modal__content')).toBe(false);
  });

  it('should close by pressing escape on keyboard', async () => {
    await openModal();
    await page.keyboard.press('Escape');

    await delay(300);
    expect(await page.isVisible('.o-modal__content')).toBe(false);
  });

  it('should check if children are rendered', async () => {
    await openModal();

    expect(
      await page.textContent(
        '#root > div > axa-modal > axa-heading:nth-child(1)'
      )
    ).toBe('Liability insurance');
  });

  it('should not close modal in forced mode by pressing escape on keyboard', async () => {
    await openForcedModal();

    await page.waitForSelector('.o-modal--open');
    await page.keyboard.press('Escape');

    expect(await page.isVisible('.o-modal__content')).toBe(true);
  });

  it('should not close by pressing outside the modal', async () => {
    await openForcedModal();

    await page.evaluate(() => {
      document
        .querySelector('axa-modal')
        .shadowRoot.querySelector('.o-modal--open')
        .click();
    });

    expect(await page.isVisible('.o-modal__content')).toBe(true);
  });

  it('should not display top-bar with close icon', async () => {
    await openForcedModal();

    expect(await page.isVisible('.o-modal__upper-close-container-button')).toBe(
      false
    );
  });

  it('should check if modal is set to small', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-modal--modal&knob-open=true&knob-small=true&viewMode=story`
    );

    const modalMaxWidth = await page.$eval(
      '.o-modal__container',
      el => window.getComputedStyle(el).maxWidth
    );

    expect(modalMaxWidth).toBe('500px');
  });
});

async function openModal() {
  await page.goto(
    `${host}/iframe.html?id=components-modal--modal&viewMode=story`
  );
}

async function openForcedModal() {
  await page.goto(
    `${host}/iframe.html?id=components-modal--modal&knob-open=true&knob-forced=true&viewMode=story`
  );
}

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}
