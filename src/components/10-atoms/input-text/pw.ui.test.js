const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Input text', () => {
  it('should submit inputs correctly in form', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-input-text-pure-html--in-a-form`
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

  test('should fire onKeyDown callback on user input', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-input-text-react--using-onkeydown-event`
    );

    const text = 'x';
    const input = page.locator(
      '#inputtext-react-inputfield-on-key-pressed .a-input-text__input'
    );
    const output = page.locator('#inputtext-react-testoutput');

    await input.type(text);

    expect(await output.textContent()).toEqual(text);
  });
});
