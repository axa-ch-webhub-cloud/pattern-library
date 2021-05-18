const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Modal', () => {
  it('should open modal', async () => {
    await openModal();

    expect(await page.isVisible('.o-modal__content')).toBe(true);
  });

  it('modal should close by button', async () => {
    await openModal();
    await page.click('.o-modal__upper-close-container-button');

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

    expect(await page.isVisible('.o-modal__content')).toBe(false);
  });

  it('should close by pressing escape on keyboard', async () => {
    await openModal();
    await page.keyboard.press('Escape');

    expect(await page.isVisible('.o-modal__content')).toBe(false);
  });

  it('should check if children are rendered', async () => {
    await openModal();

    expect(await page.textContent('#root > div > axa-modal > axa-heading:nth-child(1)')).toBe('Liability insurance');
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

    expect(await page.isVisible('.o-modal__upper-close-container-button')).toBe(false);
  });
});

async function openModal() {
  await page.goto(`${host}/iframe.html?id=components-modal--modal&viewMode=story`);
}

async function openForcedModal() {
  await page.goto(`${host}/iframe.html?id=components-modal--modal&knob-open=true&knob-forced=true&viewMode=story`);
}
