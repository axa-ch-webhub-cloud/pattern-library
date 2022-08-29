import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('input-text', () => {
  test('should be readonly', async ({ page }) => {
    await page.goto(
      fixtureURL('components-input-text--input-text', { readonly: true })
    );

    expect(
      await page
        .locator('.a-input-text__input')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(250, 250, 250)');
  });

  test('should fire onKeyDown callback on user input', async ({ page }) => {
    await page.goto(
      fixtureURL('examples-input-text-react--input-text-on-key-down-event')
    );

    const text = 'x';

    await page.locator('.a-input-text__input').type(text);

    expect(
      await page.locator('#inputtext-react-testoutput').textContent()
    ).toEqual(text);
  });
});
