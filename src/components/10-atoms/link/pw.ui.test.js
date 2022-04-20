const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Link', () => {
  it('should be block element if icon is present', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-link-react--link-inside-of-text&viewMode=story`
    );
    const cssDisplay = await page.$eval(
      '#axalink_icon > .a-link',
      (el) => window.getComputedStyle(el).display
    );

    expect(cssDisplay).toBe('inline-flex');
  });

  it('should be inline element if no icon is present', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-link-react--link-inside-of-text&viewMode=story`
    );
    const cssDisplay = await page.$eval(
      '#axalink_no_icon > .a-link',
      (el) => window.getComputedStyle(el).display
    );

    expect(cssDisplay).toBe('inline');
  });
});
