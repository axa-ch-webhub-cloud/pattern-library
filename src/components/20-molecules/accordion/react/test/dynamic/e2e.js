import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../../utils/e2e-helpers';

test.describe('button react: dynamic', () => {
  test('should change text on state change', async ({ page }) => {
    await page.goto(
      fixtureURL('examples-accordion-react--demo-accordion-on-state-change')
    );

    await page.locator('text="Test Accordion on state change"').click();

    await expect(page.locator('text="true"')).toBeVisible();
  });
});
