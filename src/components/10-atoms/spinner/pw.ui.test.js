const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-spinner';

describe('Spinner', () => {
  it('should render', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-spinner--spinner&viewMode=story`
    );
    await page.waitForSelector(tag);

    expect(
      (await page.isVisible('.a-spinner__dot-1')) &&
        (await page.isVisible('.a-spinner__dot-2')) &&
        (await page.isVisible('.a-spinner__dot-3'))
    ).toBeTruthy();
  });
});
