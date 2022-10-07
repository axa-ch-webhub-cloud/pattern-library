import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('text:tagless', () => {
  test('should not render inside a paragraph tag', async ({ page }) => {
    await page.goto(fixtureURL('components-icon--text', { tagless: true }));

    await expect(page.locator('axa-text > p')).toBeHidden();
  });
});
