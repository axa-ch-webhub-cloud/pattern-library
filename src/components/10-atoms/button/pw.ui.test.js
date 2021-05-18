const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Button', () => {
  it('should render button', async () => {
    await page.goto(`${host}/iframe.html?id=examples-button-pure-html--clickable`);
    await page.waitForSelector('.a-button__flex-wrapper');
    const axaButtonText = await page.textContent('axa-button');

    expect(axaButtonText).toBe('You clicked me: 0, btw my event name is click');
  });

  it('should submit before and after text child updates', async () => {
    const axaButtonSelector = '[data-test-id="button-submit-text-change"]';
    await page.goto(`${host}/iframe.html?id=examples-button-react--in-a-form`);
    await page.waitForSelector(axaButtonSelector);

    const axaButton = await page.$(axaButtonSelector);
    const getAxaButtonText = () => page.textContent(axaButtonSelector);

    expect(await getAxaButtonText()).toContain('0');

    await axaButton.click();
    expect(await getAxaButtonText()).toContain('1');

    await axaButton.click();
    expect(await getAxaButtonText()).toContain('2');
  });
});
