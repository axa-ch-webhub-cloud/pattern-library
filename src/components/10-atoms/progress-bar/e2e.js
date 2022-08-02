import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('progress-bar', () => {
  test('should be small', async ({ page }) => {
    await page.goto(
      fixtureURL('components-progress-bar--progress-bar', {
        small: true,
      })
    );

    expect((await page.locator('.a-progress-bar').boundingBox()).height).toBe(
      8
    );
  });

  test('should show text', async ({ page }) => {
    await page.goto(
      fixtureURL('components-progress-bar--progress-bar', {
        text: 'Progress Bar',
      })
    );

    expect(await page.textContent('text=Progress Bar')).toBe('Progress Bar');
  });

  test('should calculate the percentage', async ({ page }) => {
    await page.goto(
      fixtureURL('components-progress-bar--progress-bar', {
        value: 60,
        max: 300,
      })
    );

    await expect(page.locator('.a-progress-bar__loader')).toHaveAttribute(
      'style',
      'width: 20%'
    );
  });

  test('should not have a border radius', async ({ page }) => {
    await page.goto(
      fixtureURL('components-progress-bar--progress-bar', {
        noBorderRadius: true,
      })
    );

    expect(
      await page
        .locator('.a-progress-bar__border')
        .evaluate(el => window.getComputedStyle(el).borderRadius)
    ).toBe('0px');
  });
});
