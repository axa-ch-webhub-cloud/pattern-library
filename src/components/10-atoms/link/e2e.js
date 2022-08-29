import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('link', () => {
  test.describe('link: icon', () => {
    test('should be block element, if icon is present', async ({ page }) => {
      await page.goto(fixtureURL('examples-link-react--link-inside-of-text'));

      expect(
        await page
          .locator('#axalink_icon > .a-link')
          .evaluate(el => window.getComputedStyle(el).display)
      ).toBe('inline-flex');
    });

    test('should be inline element, if no icon is present', async ({
      page,
    }) => {
      await page.goto(fixtureURL('examples-link-react--link-inside-of-text'));

      expect(
        await page
          .locator('#axalink_no_icon > .a-link')
          .evaluate(el => window.getComputedStyle(el).display)
      ).toBe('inline');
    });
  });
});
