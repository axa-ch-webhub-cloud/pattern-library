const host = process.env.TEST_HOST_STORYBOOK_URL;
const delayTimeAnimation = 300;

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

describe('Footer', () => {
  it('should change height dynamically', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-footer-react--resize-dynamic&viewMode=story`
    );

    const button = await page.$('#footerTestButton');
    let footer = await page.$('footer');

    expect((await footer.boundingBox()).height).toBe(314.6875);

    await button.click();
    await delay(delayTimeAnimation);

    footer = await page.$('footer');
    expect((await footer.boundingBox()).height).toBe(278.75);
  });
});
