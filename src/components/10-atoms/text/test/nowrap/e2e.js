import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('text:nowrap', () => {
  test('should not render inside a paragraph tag', async ({ page }) => {
    await page.goto(fixtureURL('components-icon--text', { nowrap: true }));

    await expect(page.locator('axa-text > p')).toBeHidden();
  });
});
