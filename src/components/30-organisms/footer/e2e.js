import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers.cjs';

test.describe('footer', () => {
  test('should change height dynamically', async ({ page }) => {
    await page.goto(fixtureURL('examples-footer-react--resize-dynamic'));

    const footerBoundingBoxDefault = await page.locator('footer').boundingBox();
    expect(footerBoundingBoxDefault.height).toBe(314.6875);

    await page.locator('#footerTestButton').click();

    const footerBoundingBoxAfter = await page.locator('footer').boundingBox();
    expect(footerBoundingBoxAfter.height).toBe(278.75);
  });
});
