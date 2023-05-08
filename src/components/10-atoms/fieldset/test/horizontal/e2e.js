import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';

test.describe('fieldset: horizontal', () => {
  test('should render horizontally', async ({ page }) => {
    await page.goto(
      fixtureURL('components-fieldset--fieldset', { horizontal: 'horizontal' })
    );

    const fieldsetStyles = await page.locator('axa-fieldset').evaluate(el => {
      const styles = window.getComputedStyle(el);

      return [styles.display, styles.flexWrap, styles.flexDirection];
    });

    expect(fieldsetStyles).toEqual(['flex', 'wrap', 'row']);
  });

  test('should responsive stretch', async ({ page }) => {
    await page.setViewportSize({
      width: 575,
      height: 575,
    });

    await page.goto(
      fixtureURL('components-fieldset--fieldset', { horizontal: 'stretch' })
    );

    const fieldsetWidth = await page
      .locator('axa-fieldset > * > * >> nth=0')
      .evaluate(el => {
        return parseFloat(window.getComputedStyle(el).width);
      });

    // Natural width is 274px, so the stretched width should be greater than 300px
    expect(fieldsetWidth).toBeGreaterThan(300);
  });
});
