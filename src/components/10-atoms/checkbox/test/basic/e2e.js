import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('checkbox: basic', () => {
  test('should be toggleable', async ({ page }) => {
    await page.goto(fixtureURL('components-checkbox--checkbox'));

    const checkbox = page.locator('.a-checkbox__wrapper');

    await checkbox.uncheck();
    expect(await checkbox.isChecked()).toBeFalsy();

    await checkbox.check();
    expect(await checkbox.isChecked()).toBeTruthy();
  });

  test('should set refId on label and input', async ({ page }) => {
    await page.goto(fixtureURL('components-checkbox--checkbox'));

    const id = await page.locator('.a-checkbox__input').getAttribute('for');
    const labelFor = await page
      .locator('.a-checkbox__wrapper')
      .getAttribute('id');

    expect(id).toBe(labelFor);
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

  test('should style unchecked checkbox-icon inner box correctly', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-checkbox--checkbox', { checked: false })
    );

    expect(
      await page
        .locator('.a-checkbox__icon')
        .evaluate(el => window.getComputedStyle(el, ':after').backgroundColor)
    ).toBe('rgba(0, 0, 0, 0)');
  });

  test('should style checked disabled checkbox-icon inner box correctly', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-checkbox--checkbox', {
        checked: true,
        disabled: true,
      })
    );

    expect(
      await page
        .locator('.a-checkbox__icon')
        .evaluate(el => window.getComputedStyle(el, ':after').backgroundColor)
    ).toBe('rgb(204, 204, 204)');
  });

  test('should style checked error checkbox-icon inner box correctly', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-checkbox--checkbox', {
        checked: true,
        error: 'please deselect!',
      })
    );

    expect(
      await page
        .locator('.a-checkbox__icon')
        .evaluate(el => window.getComputedStyle(el, ':after').backgroundColor)
    ).toBe('rgb(0, 0, 143)');
  });
});
