import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers.cjs';

test.describe('icon', () => {
  test('should not render icon', async ({ page }) => {
    await page.goto(fixtureURL('components-icon--icon', { noIcon: true }));

    await expect(page.locator('svg')).toBeHidden();
  });

  test.describe('icon: size', () => {
    test('should be default', async ({ page }) => {
      await page.goto(fixtureURL('components-icon--icon'));

      const iconBoundingBox = await page.locator('svg').boundingBox();

      expect(iconBoundingBox.width).toBe(24);
      expect(iconBoundingBox.height).toBe(24);
    });

    test('should be small', async ({ page }) => {
      await page.goto(fixtureURL('components-icon--icon', { size: 'small' }));

      const iconBoundingBox = await page.locator('svg').boundingBox();

      expect(iconBoundingBox.width).toBe(20);
      expect(iconBoundingBox.height).toBe(20);
    });

    test('should be large', async ({ page }) => {
      await page.goto(fixtureURL('components-icon--icon', { size: 'large' }));

      const iconBoundingBox = await page.locator('svg').boundingBox();

      expect(iconBoundingBox.width).toBe(32);
      expect(iconBoundingBox.height).toBe(32);
    });

    test('should be original', async ({ page }) => {
      await page.goto(
        fixtureURL('components-icon--icon', { size: 'original' })
      );

      const iconBoundingBox = await page.locator('svg').boundingBox();

      expect(iconBoundingBox.width).toBe(24);
      expect(iconBoundingBox.height).toBe(24);
    });
  });
});
