import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('input-text: autocomplete', () => {
  test('should enable autocomplete', async ({ page }) => {
    await page.goto(
      fixtureURL('components-input-text--input-text', { autocomplete: true })
    );

    expect(
      await page
        .locator('.a-input-text__input')
        .evaluate(el => el.getAttribute('autocomplete'))
    ).toBe('on');
  });

  test('should disable autocomplete', async ({ page }) => {
    await page.goto(
      fixtureURL('components-input-text--input-text', { autocomplete: false })
    );

    expect(
      await page
        .locator('.a-input-text__input')
        .evaluate(el => el.getAttribute('autocomplete'))
    ).toBe('off');
  });
});
