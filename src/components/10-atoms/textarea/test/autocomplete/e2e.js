import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('textarea: autocomplete', () => {
  test('should enable autocomplete', async ({ page }) => {
    await page.goto(
      fixtureURL('components-textarea--textarea', { autocomplete: true })
    );

    expect(
      await page
        .locator('.a-textarea__textarea')
        .evaluate(el => el.getAttribute('autocomplete'))
    ).toBe('on');
  });

  test('should disable autocomplete', async ({ page }) => {
    await page.goto(
      fixtureURL('components-textarea--textarea', { autocomplete: false })
    );

    expect(
      await page
        .locator('.a-textarea__textarea')
        .evaluate(el => el.getAttribute('autocomplete'))
    ).toBe('off');
  });
});
