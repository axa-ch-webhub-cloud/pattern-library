const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Modal', () => {
  it('should open modal', async () => {
    await openModal();

    expect(await page.isVisible('.o-modal-window')).toBe(true);
  });

  it('modal should close by button', async () => {
    await openModal();
    await page.click('.o-modal-window__close-button');

    expect(await page.isVisible('.o-modal-window')).toBe(false);
  });

  it('should close by pressing outside the modal', async () => {
    await openModal();
    await page.evaluate(() => {
      document
        .querySelector('axa-modal')
        .shadowRoot.querySelector('.o-modal--open')
        .click();
    });

    expect(await page.isVisible('.o-modal-window')).toBe(false);
  });

  it('should close by pressing escape on keyboard', async () => {
    await openModal();
    await page.keyboard.press('Escape');

    expect(await page.isVisible('.o-modal-window')).toBe(false);
  });

  it('should check if children are rendered', async () => {
    await openModal();

    expect(
      await page.textContent(
        '#root > div > axa-modal > axa-heading:nth-child(1)'
      )
    ).toBe('Haftpflichtversicherung');
  });
});

async function openModal() {
  await page.goto(`${host}/iframe.html?id=components--modal&viewMode=story`);
  await page.click('.js-modal-story__button');
}
