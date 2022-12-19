import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('textarea: readonly', () => {
  test('should be readonly', async ({ page }) => {
    await page.goto(
      fixtureURL('components-textarea--textarea', { readonly: true })
    );

    expect(
      await page
        .locator('.a-textarea__textarea')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(250, 250, 250)');
  });
});
