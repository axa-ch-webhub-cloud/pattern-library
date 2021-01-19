const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Dropdown', () => {
  it('should submit correct value to form', async () => {
    const dropdownSelector = 'axa-dropdown[data-test-id="dropdown-forms"]';
    await page.goto(
      `${host}/iframe.html?id=examples-dropdown-pure-html--in-a-form`
    );
    await page.waitForSelector(dropdownSelector);

    await page.click(dropdownSelector);
    await page.click(
      'axa-dropdown[data-test-id="dropdown-forms"] button[data-value="FR"]'
    );
    await page.click('#dropdown-form axa-button[type="submit"]');

    expect(
      await page.textContent('#dropdown-form span[id="form-data-lang"]')
    ).toBe('FR');

    // test that native onchange callback fired upon selecting the 2nd option
    // and returned the expected event.detail values
    const dropdownForm = await page.$('#dropdown-form');
    expect(await dropdownForm.getAttribute('title')).toBe('FR,2 ');
  });
});
