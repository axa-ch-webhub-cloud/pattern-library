const host = process.env.TEST_HOST_STORYBOOK_URL;

it('should render button', async () => {
  await page.goto(
    `${host}/iframe.html?id=examples-button-pure-html--clickable`
  );
  await page.waitForSelector('.a-button__flex-wrapper');
  const axaButtonText = await page.textContent('axa-button');

  expect(axaButtonText).toBe('You clicked me: 0, btw my event name is click');
});
