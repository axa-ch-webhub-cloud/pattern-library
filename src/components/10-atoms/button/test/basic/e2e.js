import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('button: basic', () => {
  test('should be button with axa blue bg', async ({ page }) => {
    await page.goto(fixtureURL('components-button--button'));

    expect(
      await page
        .locator('.a-button')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(0, 0, 143)');
  });

  test('should be disabled', async ({ page }) => {
    await page.goto(
      fixtureURL('components-button--button', {
        disabled: true,
      })
    );

    expect(
      await page
        .locator('axa-button[disabled] .a-button')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(229, 229, 229)');
  });
});

test('should be clickable (set different text after click)', async ({
  page,
}) => {
  await page.goto(fixtureURL('examples-button--clickable'));

  await page.locator('text="counter: 0"').click();

  await expect(page.locator('text="counter: 1"')).toBeVisible();
});
