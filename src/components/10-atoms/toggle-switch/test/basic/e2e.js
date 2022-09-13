import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('toggle-switch: basic', () => {
  test('should set correct background-color to unchecked toggle-switch-slider', async ({
    page,
  }) => {
    await page.goto(fixtureURL('components-toggle-switch--toggle-switch'));

    expect(
      await page
        .locator('.a-toggle-switch__slider')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(153, 153, 153)');
  });

  test('should set correct background-color to checked toggle-switch-slider', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-toggle-switch--toggle-switch', {
        checked: true,
      })
    );

    expect(
      await page
        .locator('.a-toggle-switch__slider')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(28, 197, 78)');
  });

  test('should set correct background-color to unchecked disabled toggle-switch-slider', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-toggle-switch--toggle-switch', {
        disabled: true,
      })
    );

    expect(
      await page
        .locator('.a-toggle-switch__slider')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(245, 245, 245)');
  });

  test('should set correct background-color to checked disabled toggle-switch-slider', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-toggle-switch--toggle-switch', {
        disabled: true,
        checked: true,
      })
    );

    expect(
      await page
        .locator('.a-toggle-switch__slider')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(159, 217, 180)');
  });

  test('should change state, when clicked', async ({ page }) => {
    await page.goto(fixtureURL('components-toggle-switch--toggle-switch'));

    await page.locator('.a-toggle-switch').click();

    expect(
      await page.locator('.a-toggle-switch__input').isChecked()
    ).toBeTruthy();
  });

  test('should stay unchecked, when clicked', async ({ page }) => {
    await page.goto(
      fixtureURL(
        'examples-toggle-switch-react--toggle-switch-controlled-without-on-change'
      )
    );

    await page.locator('.a-toggle-switch').click();

    expect(
      await page
        .locator('.a-toggle-switch__slider')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(153, 153, 153)');
  });
});
