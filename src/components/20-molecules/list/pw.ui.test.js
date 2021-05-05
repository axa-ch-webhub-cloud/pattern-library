const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-list';

describe('List', () => {
  it('should render', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-list--list&viewMode=story`
    );
    await page.waitForSelector(tag);
    const visible = await page.isVisible(tag);
    expect(visible).toBeTruthy();
  });
});
