const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-spinner';

describe('Spinner', () => {
  it('should render all three spinner dots', async () => {
    await openSpinner();
    await page.waitForSelector(tag);

    expect(
      (await page.isVisible('.a-spinner__dot-1')) &&
        (await page.isVisible('.a-spinner__dot-2')) &&
        (await page.isVisible('.a-spinner__dot-3'))
    ).toBeTruthy();
  });

  it('should change the spinner color correctly', async () => {
    await openSpinner();
    await page.waitForSelector(tag);

    await page.evaluate((evaluateTag) => {
      document
        .querySelector(evaluateTag)
        .setAttribute('color', 'inverted-white');
    }, tag);

    const axaSpinner = await page.$(tag);
    expect(await axaSpinner.getAttribute('color')).toBe('inverted-white');
  });
});

async function openSpinner() {
  await page.goto(
    `${host}/iframe.html?id=components-spinner--spinner&viewMode=story`
  );
}
