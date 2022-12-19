import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers.cjs';

test.describe('spinner', () => {
  test('should render spinner', async ({ page }) => {
    await page.goto(fixtureURL('components-spinner--spinner'));

    await expect(page.locator('.a-spinner')).toBeVisible();
  });
});
