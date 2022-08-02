import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

test.describe('accordion', () => {
  test('should open', async ({ page }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
      })
    );

    const accordionContentMaxHeight = await page
      .locator('.m-accordion__content--open')
      .evaluate(el => {
        return window.getComputedStyle(el).maxHeight;
      });

    expect(parseInt(accordionContentMaxHeight, 10) !== 0).toBeTruthy();
  });

  test('should render icon', async ({ page }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
      })
    );

    await expect(page.locator('svg >> nth=0 ')).toBeVisible();
  });

  test('should be small title', async ({ page }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
        small: true,
      })
    );

    expect(
      await page
        .locator('.m-accordion__title >> nth=0')
        .evaluate(el => window.getComputedStyle(el).fontSize)
    ).toBe('16px');
  });

  test('should be disabled', async ({ page }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
        disabled: true,
      })
    );

    expect(
      await page
        .locator('.m-accordion__title-container--disabled >> nth=0')
        .evaluate(el => window.getComputedStyle(el).color)
    ).toBe('rgb(204, 204, 204)');
  });

  test('should set the max-height, if window size change.', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-accordion--accordion', {
        open: true,
      })
    );

    const content = page.locator('.m-accordion__content--open');

    const getContentMaxHeight = async () =>
      content.evaluate(el => window.getComputedStyle(el).maxHeight);

    const delay = time => new Promise(resolve => setTimeout(resolve, time));

    const contentMaxHeight = await getContentMaxHeight();
    await page.setViewportSize({ width: 500, height: 500 });

    // After Accordion rewrite delete test
    await delay(500);

    const expectedContentMaxHeight = await getContentMaxHeight();

    expect(
      parseInt(expectedContentMaxHeight, 10) > parseInt(contentMaxHeight, 10)
    ).toBeTruthy();
  });

  test('should change text on state change', async ({ page }) => {
    await page.goto(
      fixtureURL('examples-accordion-react--demo-accordion-on-state-change')
    );

    await page.click('text=Test Accordion on state change');

    expect(await page.textContent('text=true')).toBe('true');
  });
});
