import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';

test.describe('text: bold', () => {
  test('should be bold', async ({ page }) => {
    await page.goto(fixtureURL('components-text--text', { bold: true }));

    expect(
      await page
        .locator('axa-text > p')
        .evaluate(el => window.getComputedStyle(el).fontWeight)
    ).toBe('700');
  });
});
