const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-input-phone';

describe('Input Phone', () => {
  it('should render component', async () => {
    await page.goto(
      `${host}/iframe.html?id=components--input-phone&viewMode=story`
    );
    await page.waitForSelector(tag);
    const visible = await page.isVisible(tag);
    expect(visible).toBeTruthy();
  });
});
