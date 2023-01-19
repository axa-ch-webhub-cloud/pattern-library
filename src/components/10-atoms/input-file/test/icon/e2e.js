import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('input-file: icon', () => {
  test('should render icon', async ({ page }) => {
    await page.goto(fixtureURL('components-input-file--input-file'));

    await expect(page.locator('.a-input-file__icon')).toBeVisible();
  });
});
