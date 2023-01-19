import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('input-file: basic', () => {
  test('should render icon', async ({ page }) => {
    await page.goto(fixtureURL('components-input-file--input-file'));

    await expect(page.locator('.a-input-file__icon')).toBeVisible();
  });

  test('should set text correctly', async ({ page }) => {
    await page.goto(
      fixtureURL('components-input-file--input-file', {
        text: 'test',
      })
    );

    await expect(page.locator('text="test"')).toBeVisible();
  });

  test('should set input file accept', async ({ page }) => {
    await page.goto(fixtureURL('components-input-file--input-file'));

    await expect(page.locator('.a-input-file__icon')).toBeVisible();
  });
});
