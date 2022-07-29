const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Textarea', () => {
  it('should be readonly', async () => {
    await page.goto(
      `${host}/iframe.html?args=readonly:true&id=components-textarea--textarea&viewMode=story`
    );

    const inputBg = await page.$eval(
      '.a-textarea__textarea',
      el => window.getComputedStyle(el).backgroundColor
    );

    expect(inputBg).toBe('rgb(250, 250, 250)');
  });
});
