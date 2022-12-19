import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('textarea: basic', () => {
  test('should type something textarea', async ({ page }) => {
    await page.goto(fixtureURL('components-textarea--textarea'));

    await page.locator('.a-textarea__textarea').type('Pattern Warriors');

    await expect(await page.locator('.a-textarea__textarea').inputValue()).toBe(
      'Pattern Warriors'
    );
  });

  test('should show error message and have the right color', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-textarea--textarea', {
        error: 'error',
        invalid: true,
      })
    );

    await expect(page.locator('text="error"')).toHaveText('error');

    expect(
      await page
        .locator('text="error"')
        .evaluate(el => window.getComputedStyle(el).color)
    ).toBe('rgb(201, 20, 50)');
  });

  test('should correctly show character count with counter within text', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-textarea--textarea', {
        checkMark: true,
        maxLength: 5,
        counterMax: 'Over character limit!',
      })
    );

    await expect(page.locator('text="Still 4 characters left"')).toBeVisible();
    await expect(page.locator('.a-textarea__check')).toBeVisible();

    await page.locator('.a-textarea__textarea').type('Patt');
    await expect(await page.locator('.a-textarea__textarea').inputValue()).toBe(
      'Patt'
    );
    await page.locator('.a-textarea__textarea').type('e');
    await expect(await page.locator('.a-textarea__textarea').inputValue()).toBe(
      'Patte'
    );
    await expect(page.locator('text="Over character limit!"')).toBeVisible();
  });
});
