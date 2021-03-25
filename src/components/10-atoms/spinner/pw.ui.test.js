const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-spinner';

describe('Spinner', () => {
  it('should render', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-spinner--spinner&viewMode=story`
    );
    await page.waitForSelector(tag);
    const visible = await page.isVisible(tag);
    expect(visible).toBeTruthy();
  });
});
