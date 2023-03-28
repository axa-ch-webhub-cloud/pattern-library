import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('datepicker', () => {
  test.describe('datepicker: form', () => {
    // Test case 1: Check whether the datepicker is working correctly in a form when submitted
    test('should submit', async ({ page }) => {
      // Navigate to the page with the datepicker
      await page.goto(fixtureURL('examples-datepicker-pure-html--in-a-form'));

      // Fill in the date input field
      await page.fill(
        `[data-test-id="datepicker-forms"] .js-datepicker__input`,
        '29.2.2020'
      );

      // Click on the submit button
      await page.click('#datepicker-forms-submit');

      // Check whether the form data contains the selected date
      const formDataDate = await page.textContent('#form-data-date');
      expect(
        formDataDate === '29.2.2020 (of 1 submittable elements)' ||
          formDataDate === "'29.02.2020 (of 1 submittable elements)'"
      ).toBeTruthy();
    });

    // Test case 2: Check whether the datepicker input is still valid after clicking arrow keys
    test('should not be submit when clicking the arrow keys', async ({
      page,
    }) => {
      // Navigate to the page with the datepicker
      await page.goto(fixtureURL('examples-datepicker-pure-html--in-a-form'));

      // Fill in the date input field
      await page.fill(
        `[data-test-id="datepicker-forms"] .js-datepicker__input`,
        '29.2.2020'
      );

      // Click on the datepicker input button
      await page.click('.js-datepicker__input-button');

      // Click on the next month arrow button
      await page.click('.js-datepicker__button-next');

      // Check whether the form data does not contain the selected date
      expect(await page.textContent('#form-data-date')).not.toBe(
        '29.02.2020 (of 1 submittable elements)'
      );
    });

    // Test case 3: Check whether the datepicker can add years of a given range
    test('should just add years of a given range', async ({ page }) => {
      // Navigate to the page with the datepicker
      await page.goto(fixtureURL('components-datepicker--datepicker'));

      // Set the allowed years of the datepicker to ['1999-2000']
      const datepicker = await page.locator('[data-test-id="datepicker"]');
      await datepicker.evaluate(node => {
        node.allowedyears = ['1999-2000'];
      });

      // Get the year dropdown of the datepicker and check whether it contains the correct years
      const datepickerYearDropdown = await page.locator(
        '[data-test-id="datepicker"] .js-datepicker__dropdown-year'
      );
      const itemsString = await datepickerYearDropdown.getAttribute('items');

      const itemsArray = JSON.parse(itemsString);

      expect(itemsArray.length).toBe(2);
      expect(itemsArray[0].value).toBe('2000');
      expect(itemsArray[1].value).toBe('1999');
      expect(itemsString).not.toContain('"value":"2020"');
    });

    // Test case 4: Check whether the datepicker fires the right events
    test('should fire the right events', async ({ page }) => {
      // Navigate to the page with the datepicker
      await page.goto(
        fixtureURL('examples-datepicker-pure-html--with-onchange-handler')
      );

      // Check whether the datepicker is present
      const datepickerForm = await page.locator(
        `[data-test-id="datepicker-onchange"]`
      );
      expect(datepickerForm).toBeTruthy();

      // Click on the datepicker input button
      await page.locator('.js-datepicker__input-button').click();

      // Click on the 16th day of the current month
      await page
        .locator('.m-datepicker__calendar-current-month[data-day="16"]')
        .click();

      // The date object is separated by a newline character in the event log (for better readability)
      // Therefore, we need to check for the presence of this character to ensure that we are matching the correct date
      expect(await page.locator('.event-log').inputValue()).toContain(
        `{"name":"date","value":"16.2.2020"}\n\n`
      );

      // Fill in the date input field with a new date
      await page
        .locator('[data-test-id="datepicker-onchange"] .js-datepicker__input')
        .fill('29.2.1976');

      // The date object is separated by a newline character in the event log (for better readability)
      // Therefore, we need to check for the presence of this character to ensure that we are matching the correct date
      expect(await page.locator('.event-log').inputValue()).toContain(
        `{"name":"date","value":"29.2.1976"}\n\n`
      );
    });
  });
});
