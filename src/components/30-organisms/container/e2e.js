import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('container', () => {
  test('should render container', async ({ page }) => {
    await page.goto(fixtureURL('components-container--container'));

    await expect(page.locator('.o-container')).toBeVisible();
  });
});
