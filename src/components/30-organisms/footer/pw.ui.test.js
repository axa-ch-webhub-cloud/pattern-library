const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Footer', () => {
  it('should change height dynamically', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-footer-react--resize-dynamic&viewMode=story`
    );

    const button = await page.$('#footerTestButton');
    const footer = await page.$('footer');

    expect((await footer.boundingBox()).height).toBe(314.6875);

    await button.click();

    expect((await footer.boundingBox()).height).toBe(278.75);

    await button.click();
    await page.waitForSelector('[slot=column-0-item-9]');

    expect((await footer.boundingBox()).height).toBe(314.6875);
  });
});
