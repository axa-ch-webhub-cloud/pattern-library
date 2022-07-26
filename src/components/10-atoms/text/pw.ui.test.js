const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-text';

describe('Text', () => {
  it('should render the 4th size variant', async () => {
    await page.goto(
      `${host}/iframe.html?args=variant:size-4&id=components-text--text&viewMode=story`
    );
    await page.waitForSelector(tag);

    const fontSize = await page.$eval(
      '#root > div > axa-text > p',
      el => window.getComputedStyle(el).fontSize
    );

    expect(fontSize).toBe('14px');
  });
});
