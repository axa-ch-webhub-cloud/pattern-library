import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';
import {
  headlinesDesktop,
  headlinesMobile,
  marginTopAndBottom,
  fontFamilyPrimary,
  getHeadingStyles,
} from './e2e.helpers';

test.describe('heading: size:desktop', () => {
  for (const size of Object.keys(headlinesDesktop)) {
    test(`should render H${size}`, async ({ page }) => {
      await page.goto(fixtureURL('components-heading--heading', { size }));

      const hostStyles = await page.locator('axa-heading').evaluate(el => {
        const styles = window.getComputedStyle(el);

        return [styles.marginTop, styles.marginBottom];
      });

      expect(hostStyles).toEqual([
        marginTopAndBottom[size],
        marginTopAndBottom[size],
      ]);

      const headingStyles = await page
        .locator('.a-heading')
        .evaluate(getHeadingStyles);

      expect(headingStyles).toEqual([
        ...Object.values(headlinesDesktop[size]),
        fontFamilyPrimary,
        '700',
        'normal',
      ]);
    });
  }
});

test.describe('heading: size:mobile', () => {
  for (const size of Object.keys(headlinesMobile)) {
    test(`should render H${size}`, async ({ page }) => {
      await page.setViewportSize({
        width: 767,
        height: 767,
      });

      await page.goto(fixtureURL('components-heading--heading', { size }));

      const hostStyles = await page.locator('axa-heading').evaluate(el => {
        const styles = window.getComputedStyle(el);

        return [styles.marginTop, styles.marginBottom];
      });

      expect(hostStyles).toEqual([
        marginTopAndBottom[size],
        marginTopAndBottom[size],
      ]);

      const headingStyles = await page
        .locator('.a-heading')
        .evaluate(getHeadingStyles);

      expect(headingStyles).toEqual([
        ...Object.values(headlinesMobile[size]),
        fontFamilyPrimary,
        '700',
        'normal',
      ]);
    });
  }
});
