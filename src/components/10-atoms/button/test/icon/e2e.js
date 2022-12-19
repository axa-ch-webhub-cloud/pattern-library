import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('button: icon', () => {
  test('should render icon', async ({ page }) => {
    await page.goto(
      fixtureURL('components-button--button', {
        icon: 'download',
      })
    );

    await expect(page.locator('.a-button__icon')).toBeVisible();
  });

  test('should render arrow icon', async ({ page }) => {
    await page.goto(
      fixtureURL('components-button--button', {
        icon: 'arrow-right',
      })
    );

    await expect(page.locator('.a-button__arrow')).toBeVisible();
  });
});
