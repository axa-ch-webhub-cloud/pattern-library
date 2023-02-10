import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('footer', () => {
  test('should change height dynamically', async ({ page }) => {
    await page.goto(fixtureURL('examples-footer-react--resize-dynamic'));

    const footerBoundingBoxDefault = await page.locator('footer').boundingBox();
    const initialHeight = footerBoundingBoxDefault.height;

    await page.locator('#footerTestButton').click();

    const footerBoundingBoxAfter = await page.locator('footer').boundingBox();
    expect(footerBoundingBoxAfter.height).toBeLessThan(initialHeight);
  });
});
