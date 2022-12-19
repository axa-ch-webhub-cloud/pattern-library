import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers.cjs';

const getListItemComputedStyle = async page =>
  page.locator('text=Lorem ipsum').evaluate(el => window.getComputedStyle(el));

const getListStyleType = async (page, selector) =>
  page
    .locator(selector)
    .evaluate(el => window.getComputedStyle(el).listStyleType);

test.describe('list', () => {
  test.describe('list: variant', () => {
    test('should have correct css in default', async ({ page }) => {
      await page.goto(fixtureURL('components-list--list'));

      const computedStyle = await getListItemComputedStyle(page);

      expect(computedStyle.paddingLeft).toBe('32px');
      expect(computedStyle.backgroundPosition).toBe('0px 10px');
      expect(computedStyle.margin).toBe('0px 0px 12px');

      expect(await getListStyleType(page, 'ul.m-list')).toBe('none');
    });

    test('should have correct css in ordered', async ({ page }) => {
      await page.goto(
        fixtureURL('components-list--list', { variant: 'ordered' })
      );

      const computedStyle = await getListItemComputedStyle(page);

      expect(computedStyle.paddingLeft).toBe('0px');
      expect(computedStyle.backgroundImage).toBe('none');
      expect(computedStyle.margin).toBe('0px 0px 12px');

      expect(await getListStyleType(page, 'ol.m-list')).toBe('none');
    });

    test('should have correct css in unstyled', async ({ page }) => {
      await page.goto(
        fixtureURL('components-list--list', { variant: 'unstyled' })
      );

      const computedStyle = await getListItemComputedStyle(page);

      expect(computedStyle.paddingLeft).toBe('0px');
      expect(computedStyle.backgroundImage).toBe('none');
      expect(computedStyle.margin).toBe('0px 0px 12px');

      expect(await getListStyleType(page, 'ul.m-list')).toBe('none');
    });

    test('should have correct css in icon', async ({ page }) => {
      await page.goto(fixtureURL('components-list--list', { variant: 'icon' }));

      const computedStyle = await getListItemComputedStyle(page);

      expect(computedStyle.paddingLeft).toBe('32px');
      expect(computedStyle.backgroundImage).toContain(
        'data:image/svg+xml;charset=UTF-8,<svg xmlns'
      );
      expect(computedStyle.backgroundPosition).toBe('0px 0px');
      expect(computedStyle.margin).toBe('0px 0px 12px');

      expect(await getListStyleType(page, 'ul.m-list')).toBe('none');
    });
  });
});
