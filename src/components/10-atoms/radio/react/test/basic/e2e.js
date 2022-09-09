import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../../utils/e2e-helpers';

test.describe('radio react: basic', () => {
  test('should show controlled-component behaviour', async ({ page }) => {
    await page.goto(
      fixtureURL('examples-radio-react--radio-button-controlled')
    );

    await page.locator('#button').click();
    await page.locator('#radio2').click();

    expect(await page.locator('#radio1 input').isChecked()).toBeFalsy();
    expect(await page.locator('#radio2 input').isChecked()).toBeTruthy();

    await page.locator('#freeze').click();
    await page.locator('#radio1').click();

    await expect(page.locator('#checked')).toHaveText('checked: ⟨false, true⟩');

    await page.locator('#freeze').click();
    await page.locator('#radio1').click();

    expect(await page.locator('#radio1 input').isChecked()).toBeTruthy();
    expect(await page.locator('#radio2 input').isChecked()).toBeFalsy();

    // rendering axa-radios invisible cleanly removes them from DOM without exceptions being thrown
    await page.locator('#visible').click();

    await expect(page.locator('#radio1')).toBeHidden();
    await expect(page.locator('#radio2')).toBeHidden();
  });
});
