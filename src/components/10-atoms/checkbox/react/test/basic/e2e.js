import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../../utils/e2e-helpers.cjs';

test.describe('checkbox react: basic', () => {
  test('should shows correct controlled behavior', async ({ page }) => {
    await page.goto(fixtureURL('examples-checkbox-react--default-with-label'));

    const frozenControl = await page.locator('input[data-test-id="frozen"]');
    const checkbox = await page.locator('.a-checkbox__wrapper');

    await checkbox.uncheck();
    expect(await checkbox.isChecked()).toBeFalsy();

    await checkbox.check();
    expect(await checkbox.isChecked()).toBeTruthy();

    // freeze controlled state
    await frozenControl.click();

    await checkbox.click();
    await expect(page.locator('text="checked: true"')).toBeVisible();
  });
});
