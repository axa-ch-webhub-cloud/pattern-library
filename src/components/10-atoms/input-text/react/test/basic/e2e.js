import { expect, test } from '@playwright/test';

import { fixtureURL } from '../../../../../../utils/e2e-helpers';

test.describe('input-text react: basic', () => {
  test('should fire onKeyDown callback on user input', async ({ page }) => {
    await page.goto(
      fixtureURL('examples-input-text-react--input-text-on-key-down-event')
    );

    const key = 'x';

    await page.locator('.a-input-text__input').type(key);

    await expect(page.locator(`text="${key}"`)).toHaveText(key);
  });

  test('should fire onKeyUp callback on user input', async ({ page }) => {
    await page.goto(
      fixtureURL('examples-input-text-react--input-text-on-key-up-event')
    );

    const key = 'x';

    await page.locator('.a-input-text__input').type(key);

    await expect(page.locator(`text="${key}"`)).toHaveText(key);
  });

  test('should format value on currency', async ({ page }) => {
    await page.goto(
      fixtureURL('examples-input-text-react--input-text', { currency: 'chf' })
    );

    await page.locator('.a-input-text__input').fill('1234');
    await page.locator('.a-input-text__input').press('Tab');

    expect(await page.locator('.a-input-text__input').inputValue()).toBe(
      'CHF 1’234.00'
    );
  });

  test('should display correct default value', async ({ page }) => {
    await page.goto(
      fixtureURL('examples-input-text-react--input-text', {
        defaultValue: 'qwertz',
      })
    );

    expect(await page.locator('.a-input-text__input').inputValue()).toBe(
      'qwertz'
    );
  });
});
