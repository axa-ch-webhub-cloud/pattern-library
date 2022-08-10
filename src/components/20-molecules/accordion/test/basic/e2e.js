import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('accordion: basic', () => {
  test('should open', async ({ page }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
      })
    );

    const accordionContentMaxHeight = await page
      .locator('.m-accordion__content--open')
      .evaluate(el => {
        return window.getComputedStyle(el).maxHeight;
      });

    expect(parseInt(accordionContentMaxHeight, 10) !== 0).toBeTruthy();
  });

  test('should render icon', async ({ page }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
      })
    );

    await expect(page.locator('svg >> nth=0 ')).toBeVisible();
  });

  test('should be small title', async ({ page }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
        small: true,
      })
    );

    expect(
      await page
        .locator('.m-accordion__title >> nth=0')
        .evaluate(el => window.getComputedStyle(el).fontSize)
    ).toBe('16px');
  });

  test('should be disabled', async ({ page }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
        disabled: true,
      })
    );

    expect(
      await page
        .locator('.m-accordion__button >> nth=0')
        .evaluate(el => window.getComputedStyle(el).color)
    ).toBe('rgb(204, 204, 204)');
  });
});
