import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers.cjs';

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
  });
});
