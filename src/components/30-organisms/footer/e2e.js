import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('footer', () => {
  test('should change height dynamically', async ({ page }) => {
    await page.goto(fixtureURL('examples-footer-react--resize-dynamic'));

    expect((await page.locator('footer').boundingBox()).height).toBe(314.6875);

    await page.locator('#footerTestButton').click();

    expect((await page.locator('footer').boundingBox()).height).toBe(278.75);
  });
});
