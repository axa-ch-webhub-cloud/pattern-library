import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../../utils/e2e-helpers.cjs';

test.describe('toggle-switch react: basic', () => {
  test('should fire correct change event in controlled mode', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL(
        'examples-toggle-switch-react--toggle-switch-controlled-with-on-change-listener'
      )
    );

    expect(await page.textContent('.axa-toggle-switch-demo__event-info')).toBe(
      '-'
    );

    await page.click('axa-toggle-switch');

    expect(await page.textContent('.axa-toggle-switch-demo__event-info')).toBe(
      'true'
    );

    await page.click('axa-toggle-switch');

    expect(await page.textContent('.axa-toggle-switch-demo__event-info')).toBe(
      'true'
    );
  });

  test('should show error message', async ({ page }) => {
    await page.goto(
      fixtureURL('components-toggle-switch--toggle-switch', {
        error: 'Error Message',
      })
    );

    expect(await page.textContent('.a-toggle-switch__error-message')).toBe(
      'Error Message'
    );
  });

  test('should change state when checked', async ({ page }) => {
    await page.goto(
      fixtureURL(
        'examples-toggle-switch-react--toggle-switch-controlled-with-on-change'
      )
    );

    await page.locator('.a-toggle-switch').click();

    expect(
      await page.locator('.a-toggle-switch__input').isChecked()
    ).toBeTruthy();
  });
});
