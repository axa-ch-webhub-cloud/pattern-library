import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('radio: basic', () => {
  test('should only select one radio in a given group', async ({ page }) => {
    await page.goto(fixtureURL('components-radio--radio'));

    await page.locator('axa-radio[value="1"] .a-radio__wrapper').click();
    expect(await page.locator('input[value="1"]').isChecked()).toBeTruthy();
    expect(await page.locator('input[value="2"]').isChecked()).toBeFalsy();
    expect(await page.locator('input[value="3"]').isChecked()).toBeFalsy();

    await page.locator('axa-radio[value="3"] .a-radio__wrapper').click();
    expect(await page.locator('input[value="1"]').isChecked()).toBeFalsy();
    expect(await page.locator('input[value="2"]').isChecked()).toBeFalsy();
    expect(await page.locator('input[value="3"]').isChecked()).toBeTruthy();
  });

  test('should style checked checkbox-icon inner box correctly', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-checkbox--checkbox', { checked: true })
    );

    expect(
      await page
        .locator('.a-checkbox__icon')
        .evaluate(el => window.getComputedStyle(el, ':after').backgroundColor)
    ).toBe('rgb(0, 0, 143)');
  });

  test('should style checked radio-icon inner box correctly', async ({
    page,
  }) => {
    await page.goto(fixtureURL('components-radio--radio', { checked: true }));

    expect(
      await page
        .locator('axa-radio[value="1"] .a-radio__icon')
        .evaluate(el => window.getComputedStyle(el, ':after').backgroundColor)
    ).toBe('rgb(0, 0, 143)');
  });

  test('should style checked disabled radio-icon inner box correctly', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-radio--radio', { checked: true, disabled: true })
    );

    expect(
      await page
        .locator('axa-radio[value="1"] .a-radio__icon')
        .evaluate(el => window.getComputedStyle(el, ':after').borderColor)
    ).toBe('rgb(204, 204, 204)');
  });

  test('should style disabled radio-icon inner box correctly', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-radio--radio', { checked: false, disabled: true })
    );

    expect(
      await page
        .locator('axa-radio[value="1"] .a-radio__icon')
        .evaluate(el => window.getComputedStyle(el, ':after').borderColor)
    ).toBe('rgba(0, 0, 0, 0)');
  });
});
