import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers.cjs';

test.describe('dropdown', () => {
  test.describe('dropdown: form', () => {
    test('should submit', async ({ page }) => {
      await page.goto(fixtureURL('examples-dropdown-pure-html--in-a-form'));

      await page.click('axa-dropdown[data-test-id="dropdown-forms"]');
      await page.click(
        'axa-dropdown[data-test-id="dropdown-forms"] button[data-value="FR"]'
      );
      await page.click('#dropdown-form axa-button[type="submit"]');

      expect(
        await page.textContent('#dropdown-form span[id="form-data-lang"]')
      ).toBe('FR');
      expect(await page.locator('#dropdown-form').getAttribute('title')).toBe(
        'FR,2 '
      );
    });
  });
});
