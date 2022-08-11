import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('button: form', () => {
  test('should submit inputs', async ({ page }) => {
    await page.goto(fixtureURL('examples-button--form'));

    const defaultText = 'Warrior';
    const emailText = 'pattern@warrior.ch';
    const pwText = 'geheim';

    await page.fill('#default', defaultText);
    await page.fill('#email', emailText);
    await page.fill('#password', pwText);

    await page.locator('#submit').click();

    await expect(page.locator('#form-data span')).toHaveText(
      [`default: ${defaultText}`, `email: ${emailText}`, `password: ${pwText}`],
      { timeout: 1000 }
    );
  });
});
