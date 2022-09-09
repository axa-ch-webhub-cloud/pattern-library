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
      width: 576,
      height: 576,
    });

    await page.goto(
      fixtureURL('components-fieldset--fieldset', { horizontal: 'stretch' })
    );

    const fieldsetStyles = await page
      .locator('axa-fieldset > * > * >> nth=0')
      .evaluate(el => {
        const styles = window.getComputedStyle(el);

        return [styles.width, styles.marginRight];
      });

    // 514px width of the radio correspond to 100% in a 576px window
    expect(fieldsetStyles).toEqual(['514px', '0px']);
  });
});
