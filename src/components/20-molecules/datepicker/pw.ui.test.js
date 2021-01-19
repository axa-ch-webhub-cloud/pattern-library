const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Datepicker', () => {
  it('should submit datepicker correctly in form', async () => {
    const datepickerForm = 'axa-datepicker[data-test-id="datepicker-forms"]';
    await page.goto(
      `${host}/iframe.html?id=examples-datepicker-pure-html--in-a-form`
    );
    await page.waitForSelector(datepickerForm);

    await page.type(
      `axa-datepicker[data-test-id="datepicker-forms"] .js-datepicker__input`,
      '29.2.2020'
    );
    await page.click('#datepicker-forms-submit');

    expect(await page.textContent('#form-data-date')).toBe(
      '29.2.2020 (of 1 submittable elements)'
    );
  });

  it('should not submit form if click on arrow buttons', async () => {
    const datepickerForm = 'axa-datepicker[data-test-id="datepicker-forms"]';
    await page.goto(
      `${host}/iframe.html?id=examples-datepicker-pure-html--in-a-form`
    );
    await page.waitForSelector(datepickerForm);

    await page.type(
      `axa-datepicker[data-test-id="datepicker-forms"] .js-datepicker__input`,
      '29.2.2020'
    );
    await page.click('.js-datepicker__input-button');
    await page.click('.js-datepicker__button-next');

    expect(await page.textContent('#form-data-date')).not.toBe(
      '29.2.2020 (of 1 submittable elements)'
    );
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
