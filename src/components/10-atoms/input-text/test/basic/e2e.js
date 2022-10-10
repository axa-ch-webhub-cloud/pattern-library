import { expect, test } from '@playwright/test';

import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('input-text: basic', () => {
  test('should type something input-text', async ({ page }) => {
    await page.goto(fixtureURL('components-input-text--input-text'));

    await page.locator('.a-input-text__input').type('Pattern Warriors');

    await expect(await page.locator('.a-input-text__input').inputValue()).toBe(
      'Pattern Warriors'
    );
  });

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

  test('should show error message and have the right color', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-input-text--input-text', {
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
      fixtureURL('components-input-text--input-text', {
        checkMark: true,
        maxLength: 5,
      })
    );

    await expect(page.locator('text="Still 4 characters left"')).toBeVisible();
    await expect(page.locator('.a-input-text__check')).toBeVisible();

    await page.locator('.a-input-text__input').type('Patt');
    await expect(await page.locator('.a-input-text__input').inputValue()).toBe(
      'Patt'
    );
    await page.locator('.a-input-text__input').type('e');
    await expect(await page.locator('.a-input-text__input').inputValue()).toBe(
      'Patte'
    );
    await expect(page.locator('text="Over character limit!"')).toBeVisible();
  });

  test('should not show counter text if maxlength not set', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-input-text--input-text', {
        counter: 'chars left',
        maxLength: null,
      })
    );

    await expect(
      await page.locator('.a-input-text__counter-info')
    ).toBeHidden();
  });

  test('should have focus after initial rendering', async ({ page }) => {
    await page.goto(
      fixtureURL('components-input-text--input-text', {
        autofocus: true,
      })
    );

    await expect(page.locator('.a-input-text__input')).toBeFocused();
  });
});
