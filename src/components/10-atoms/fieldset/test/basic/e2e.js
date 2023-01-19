import { test, expect } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('fieldset: basic', () => {
  test('should render fieldset', async ({ page }) => {
    await page.goto(fixtureURL('components-fieldset--fieldset'));

    await expect(page.locator('axa-fieldset')).toBeVisible();
  });
});
