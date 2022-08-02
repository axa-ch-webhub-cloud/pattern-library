import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('text', () => {
  test.describe('text: variant', () => {
    test('should render the 4th size variant', async ({ page }) => {
      await page.goto(
        fixtureURL('components-text--text', { variant: 'size-4' })
      );

      expect(
        await page
          .locator('axa-text > p')
          .evaluate(el => window.getComputedStyle(el).fontSize)
      ).toBe('14px');
    });
  });
});
