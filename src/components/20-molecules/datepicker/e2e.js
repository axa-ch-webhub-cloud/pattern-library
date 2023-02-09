import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('datepicker', () => {
  test.describe('datepicker: form', () => {
    test('should submit', async ({ page }) => {
      await page.goto(fixtureURL('examples-datepicker-pure-html--in-a-form'));

      await page.fill(
        `axa-datepicker[data-test-id="datepicker-forms"] .js-datepicker__input`,
        '29.2.2020'
      );
      await page.click('#datepicker-forms-submit');

      const formDataDate = await page.textContent('#form-data-date');
      expect(
        formDataDate === '29.2.2020 (of 1 submittable elements)' ||
          formDataDate === "'29.02.2020 (of 1 submittable elements)'"
      ).toBeTruthy();
    });

    test('should not be submit when clicking the arrow keys', async ({
      page,
    }) => {
      await page.goto(fixtureURL('examples-datepicker-pure-html--in-a-form'));

      await page.fill(
        `axa-datepicker[data-test-id="datepicker-forms"] .js-datepicker__input`,
        '29.2.2020'
      );

      await page.click('.js-datepicker__input-button');
      await page.click('.js-datepicker__button-next');

      expect(await page.textContent('#form-data-date')).not.toBe(
        '29.02.2020 (of 1 submittable elements)'
      );
    });

    test('should just add years of a given range', async ({ page }) => {
      await page.goto(fixtureURL('components-datepicker--datepicker'));

      const datepicker = await page.locator('axa-datepicker');
      await datepicker.evaluate(node => {
        node.allowedyears = ['1999-2000'];
      });

      const datepickerYearDropdown = await page.locator(
        'axa-datepicker .js-datepicker__dropdown-year'
      );
      const itemsString = await datepickerYearDropdown.getAttribute('items');

      const itemsArray = JSON.parse(itemsString);

      expect(itemsArray.length).toBe(2);
      expect(itemsString).toContain('"value":"1999"');
      expect(itemsString).toContain('"value":"2000"');
      expect(itemsString).not.toContain('"value":"2020"');
    });

    test('should fire the right events', async ({ page }) => {
      await page.goto(
        fixtureURL('examples-datepicker-pure-html--with-onchange-handler')
      );

      const datepickerForm = await page.locator(
        `axa-datepicker[data-test-id="datepicker-onchange"]`
      );
      expect(datepickerForm).toBeTruthy();

      await page.locator('.js-datepicker__input-button').click();

      await page
        .locator('.m-datepicker__calendar-current-month[data-day="16"]')
        .click();
      expect(await page.locator('.event-log').inputValue()).toContain(
        `{"name":"date","value":"16.2.2020"}\n\n`
      );

      await page
        .locator(
          'axa-datepicker[data-test-id="datepicker-onchange"] .js-datepicker__input'
        )
        .fill('29.2.1976');
      expect(await page.locator('.event-log').inputValue()).toContain(
        `\n\n{"name":"date","value":"29.2.1976"}\n\n`
      );
    });
  });
});
