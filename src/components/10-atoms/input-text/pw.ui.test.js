const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Input text', () => {
  it('should submit inputs correctly in form', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-input-text-pure-html--in-a-form&viewMode=story`
    );

    const defaultText = 'Warrior';
    const emailText = 'pattern@warrior.ch';
    const pwText = 'geheim';

    await page.type('#default', defaultText);
    await page.type('#email', emailText);
    await page.type('#password', pwText);

    await page.click('#submit');

    expect(await page.textContent('#default-id')).toBe(
      `default: ${defaultText}`
    );
    expect(await page.textContent('#email-id')).toBe(`email: ${emailText}`);
    expect(await page.textContent('#password-id')).toBe(`password: ${pwText}`);
  });

  it('should be readonly', async () => {
    await page.goto(
      `${host}/iframe.html?args=readonly:true&id=components-input-text--input-text&viewMode=story`
    );

    const inputBg = await page.$eval(
      '.a-input-text__input',
      el => window.getComputedStyle(el).backgroundColor
    );

    expect(inputBg).toBe('rgb(250, 250, 250)');
  });
});
