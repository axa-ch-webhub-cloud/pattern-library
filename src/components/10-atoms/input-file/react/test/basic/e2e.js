import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../../utils/e2e-helpers.cjs';

test.describe('input-file react: basic', () => {
  test('should render input-file', async ({ page }) => {
    await page.goto(fixtureURL('components-input-file--input-file'));

    expect(page.locator('text="SELECT A FILE"').isVisible());
  });
});
