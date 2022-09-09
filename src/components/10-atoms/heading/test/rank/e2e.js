import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers';
import {
  headlinesDesktop,
  headlinesMobile,
  marginTopAndBottom,
  fontFamilyPrimary,
  getHeadingStyles,
} from './e2e.helpers';

test.describe('heading: rank:desktop', () => {
  for (const rank of Object.keys(headlinesDesktop)) {
    test(`should render H${rank}`, async ({ page }) => {
      await page.goto(fixtureURL('components-heading--heading', { rank }));

      const hostStyles = await page.locator('axa-heading').evaluate(el => {
        const styles = window.getComputedStyle(el);

        return [styles.marginTop, styles.marginBottom];
      });

      expect(hostStyles).toEqual([
        marginTopAndBottom[rank],
        marginTopAndBottom[rank],
      ]);

      const headingStyles = await page
        .locator('.a-heading')
        .evaluate(getHeadingStyles);

      expect(headingStyles).toEqual([
        ...Object.values(headlinesDesktop[rank]),
        fontFamilyPrimary,
        '700',
        'normal',
      ]);
    });
  }
});

test.describe('heading: rank:mobile', () => {
  for (const rank of Object.keys(headlinesMobile)) {
    test(`should render H${rank}`, async ({ page }) => {
      await page.setViewportSize({
        width: 767,
        height: 767,
      });

      await page.goto(fixtureURL('components-heading--heading', { rank }));

      const hostStyles = await page.locator('axa-heading').evaluate(el => {
        const styles = window.getComputedStyle(el);

        return [styles.marginTop, styles.marginBottom];
      });

      expect(hostStyles).toEqual([
        marginTopAndBottom[rank],
        marginTopAndBottom[rank],
      ]);

      const headingStyles = await page
        .locator('.a-heading')
        .evaluate(getHeadingStyles);

      expect(headingStyles).toEqual([
        ...Object.values(headlinesMobile[rank]),
        fontFamilyPrimary,
        '700',
        'normal',
      ]);
    });
  }
});
