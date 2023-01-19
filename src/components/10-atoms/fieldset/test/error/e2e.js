import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('fieldset: error', () => {
  test('should render an error message', async ({ page }) => {
    await page.goto(
      fixtureURL('components-fieldset--fieldset', {
        error: 'Invalid selection',
      })
    );

    await expect(page.locator('axa-fieldset', ':after')).toBeVisible();
  });
});
