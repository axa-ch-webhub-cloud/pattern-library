import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('text: italic', () => {
  test('should be italic', async ({ page }) => {
    await page.goto(fixtureURL('components-text--text', { italic: true }));

    expect(
      await page
        .locator('axa-text > p')
        .evaluate(el => window.getComputedStyle(el).fontStyle)
    ).toBe('italic');
  });
});
