import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('heading: secondary', () => {
  test(`should render heading secondary`, async ({ page }) => {
    await page.goto(
      fixtureURL('components-heading--heading', { secondary: true })
    );

    expect(
      await page
        .locator('.a-heading')
        .evaluate(el => window.getComputedStyle(el).fontFamily)
    ).toBe('"Publico Headline", Georgia, serif');
  });
});
