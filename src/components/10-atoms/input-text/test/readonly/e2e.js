import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('input-text: readonly', () => {
  test('should be readonly', async ({ page }) => {
    await page.goto(
      fixtureURL('components-input-text--input-text', { readonly: true })
    );

    expect(
      await page
        .locator('.a-input-text__input')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(250, 250, 250)');
  });
});
