import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

// Define the test suite
test.describe('footer', () => {
  // Define the test function
  test('should change height dynamically', async ({ page }) => {
    // Visit the website URL
    await page.goto(fixtureURL('examples-footer-react--resize-dynamic'));

    // Save the initial height of the footer element
    const footerBoundingBoxDefault = await page.locator('footer').boundingBox();
    const initialHeight = footerBoundingBoxDefault.height;

    // Click the button that changes the height of the footer element
    await page.locator('#footerTestButton').click();

    // Measure the new height of the footer element and check if it is at least 20 pixels smaller than the initial height
    const footerBoundingBoxAfter = await page.locator('footer').boundingBox();
    expect(footerBoundingBoxAfter.height).toBeLessThan(initialHeight - 20);
  });
});
