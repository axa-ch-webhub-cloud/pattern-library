const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Footer', () => {
  it('should change height dynamically', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-footer-react--resize-dynamic&viewMode=story`
    );

    const button = await page.$('#footerTestButton');
    let footer = await page.$('footer');

    expect((await footer.boundingBox()).height).toBe(310);

    await button.click();

    footer = await page.$('footer');
    expect((await footer.boundingBox()).height).toBe(275);
  });
});
