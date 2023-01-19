import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../utils/e2e-helpers.cjs';
import {
  marginBottom,
  textsDesktop,
  textsMobile,
  fontFamilyPrimary,
  getTextStyles,
} from './e2e.helpers.js';

test.describe('text: size:desktop', () => {
  for (const size of Object.keys(textsDesktop)) {
    test(`should render T${size}`, async ({ page }) => {
      await page.goto(fixtureURL('components-text--text', { size }));

      expect(
        await page
          .locator('axa-text')
          .evaluate(el => window.getComputedStyle(el).marginBottom)
      ).toBe(marginBottom[size]);

      const textStyles = await page
        .locator('axa-text > p')
        .evaluate(getTextStyles);

      expect(textStyles).toEqual([
        ...Object.values(textsDesktop[size]),
        fontFamilyPrimary,
        '400',
        'normal',
      ]);
    });
  }
});

test.describe('text: size:mobile', () => {
  for (const size of Object.keys(textsMobile)) {
    test(`should render T${size}`, async ({ page }) => {
      await page.setViewportSize({
        width: 767,
        height: 767,
      });

      await page.goto(fixtureURL('components-text--text', { size }));

      const textStyles = await page
        .locator('axa-text > p')
        .evaluate(getTextStyles);

      expect(textStyles).toEqual([
        ...Object.values(textsMobile[size]),
        fontFamilyPrimary,
        '400',
        'normal',
      ]);
    });
  }
});
