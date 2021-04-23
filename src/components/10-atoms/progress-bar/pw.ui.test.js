const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-progress-bar';

describe('Progress Bar', () => {
  it('should render', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-progress-bar--progress-bar&viewMode=story`
    );
    await page.waitForSelector(tag);
    const visible = await page.isVisible(tag);
    expect(visible).toBeTruthy();
  });
});
