const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-text';

describe('Text', () => {
  it('should render the 4th size variant', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-text--text&knob-variant=size-4&knob-text=Is%20your%20car%20your%20pride%20and%20joy%2C%20or%20just%20a%20means%20of%20getting%20from%20A%20to%0A%20&viewMode=story`
    );
    await page.waitForSelector(tag);

    const textFontSize = await page.evaluate(() => {
      return getComputedStyle(
        document.querySelector('#root > div > axa-text > p')
      ).fontSize;
    });

    expect(textFontSize).toBe('14px');
  });
});
