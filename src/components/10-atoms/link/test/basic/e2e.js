import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('link: basic', () => {
  test('should display default correctly', async ({ page }) => {
    await page.goto(fixtureURL('components-link--link'));

    expect(
      await page
        .locator('.a-link')
        .evaluate(el => window.getComputedStyle(el).color)
    ).toBe('rgb(0, 0, 143)');
  });
});
