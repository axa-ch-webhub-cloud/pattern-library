import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers';

const MOBILE_WIDTH_BREAKPOINT = { width: 575, height: 400 };

// Define the test suite
test.describe('footer', () => {
  // Define the test function
  test('should change height dynamically', async ({ page }) => {
    // Visit the website URL
    await page.goto(fixtureURL('examples-footer-react--resize-dynamic'));

    // Save the initial height of the footer element
    const footerBoundingBoxDefault = await page.locator('footer').boundingBox();
    const initialHeight = footerBoundingBoxDefault.height;

    // Click the button that changes the height of the footer element
    await page.locator('#footerTestButton').click();

    // Measure the new height of the footer element and check if it is at least 20 pixels smaller than the initial height
    // We use these 20 pixels, because the faded out content should have at least this height
    const footerBoundingBoxAfter = await page.locator('footer').boundingBox();
    expect(footerBoundingBoxAfter.height).toBeLessThan(initialHeight - 20);
  });

  test('should render footer with correct background color', async ({
    page,
  }) => {
    await page.goto(fixtureURL('components-footer--footer'));
    expect(
      await page
        .locator('.o-footer')
        .evaluate(el => window.getComputedStyle(el).backgroundColor)
    ).toBe('rgb(73, 118, 186)');
  });

  test('should render all social icons', async ({ page }) => {
    await page.goto(fixtureURL('components-footer--footer'));
    await expect(
      await page.locator('li.o-footer__social-media-item').count()
    ).toBe(6);
  });

  test('should render instagram icon', async ({ page }) => {
    await page.goto(fixtureURL('components-footer--footer'));
    const instagramSocialLink = page.locator('axa-footer > a:nth-child(13)');

    expect(await instagramSocialLink).toBeVisible();
    expect(
      await instagramSocialLink.evaluate(
        el => window.getComputedStyle(el).width
      )
    ).toBe('25px');
    expect(
      await instagramSocialLink.evaluate(
        el => window.getComputedStyle(el).height
      )
    ).toBe('25px');

    expect(await instagramSocialLink.count()).toBe(1);

    const instagramSocialSvg = instagramSocialLink.locator('svg');
    expect(
      await instagramSocialSvg.evaluate(el => window.getComputedStyle(el).width)
    ).toBe('25px');
    expect(
      await instagramSocialSvg.evaluate(
        el => window.getComputedStyle(el).height
      )
    ).toBe('25px');
    expect(await instagramSocialSvg.getAttribute('viewBox')).toBe('0 0 25 25');
    expect(await instagramSocialSvg.count()).toBe(1);
  });

  test('should render accordion only in mobile mode', async ({ page }) => {
    await page.goto(fixtureURL('components-footer--footer'));
    // Set viewport 1px above maximum mobile width breakpoint
    page.setViewportSize({ width: 576, height: 400 });

    const accordionFirstButton = page
      .locator('.o-footer__accordion-button-caret')
      .nth(0);

    // Measure that accordeon is not visible on desktop breakpoint
    expect(
      await accordionFirstButton.evaluate(
        el => window.getComputedStyle(el).display
      )
    ).toBe('none');

    page.setViewportSize(MOBILE_WIDTH_BREAKPOINT);
    // Measure that accordeon is visible on mobile breakpoint
    expect(await accordionFirstButton).toBeVisible();
  });

  test('should correctly open accordion on click', async ({ page }) => {
    await page.goto(fixtureURL('components-footer--footer'));
    page.setViewportSize(MOBILE_WIDTH_BREAKPOINT);

    const accordionFirstButton = page
      .locator('.o-footer__accordion-button')
      .nth(0);
    const accordionSecondButton = page
      .locator('.o-footer__accordion-button')
      .nth(1);

    expect(await accordionFirstButton).toBeVisible();
    expect(await accordionSecondButton).toBeVisible();

    const accordionFirstContent = page
      .locator('.js-footer__main-content-panel')
      .nth(0);
    const accordionSecondContent = page
      .locator('.js-footer__main-content-panel')
      .nth(1);

    expect(
      await accordionFirstContent.evaluate(
        el => window.getComputedStyle(el).maxHeight
      )
    ).toBe('0px');
    expect(
      await accordionSecondContent.evaluate(
        el => window.getComputedStyle(el).maxHeight
      )
    ).toBe('0px');

    await page.click('.o-footer__accordion-button>>nth=0');

    expect(
      await accordionSecondContent.evaluate(
        el => window.getComputedStyle(el).maxHeight
      )
    ).toBe('0px');
    expect(
      await accordionFirstContent.evaluate(
        el => window.getComputedStyle(el).maxHeight
      )
    ).not.toBe('0px');
  });

  test('should render caret correctly on open', async ({ page }) => {
    await page.goto(fixtureURL('components-footer--footer'));
    await page.setViewportSize(MOBILE_WIDTH_BREAKPOINT);

    const accordionButtonCaret = page
      .locator('.js-footer__accordion-button-caret')
      .nth(0);

    expect(await accordionButtonCaret).not.toHaveClass(
      /o-footer__accordion-button-caret--open/
    );

    await page.click('.o-footer__accordion-button>>nth=0');

    expect(await accordionButtonCaret).toHaveClass(
      /o-footer__accordion-button-caret--open/
    );
  });

  test('should correctly render social media title in desktop view', async ({
    page,
  }) => {
    await page.goto(fixtureURL('components-footer--footer'));

    const socialMediaTitle = page.locator('axa-footer > h2:nth-child(11)');

    expect(await page.textContent('axa-footer > h2:nth-child(11)')).toBe(
      'stay in touch'
    );

    page.setViewportSize(MOBILE_WIDTH_BREAKPOINT);
    expect(
      await socialMediaTitle.evaluate(el => window.getComputedStyle(el).display)
    ).toBe('none');
    page.setViewportSize({ width: 767, height: 400 });
    expect(
      await socialMediaTitle.evaluate(el => window.getComputedStyle(el).display)
    ).toBe('none');
    page.setViewportSize({ width: 991, height: 400 });
    expect(
      await socialMediaTitle.evaluate(el => window.getComputedStyle(el).display)
    ).toBe('none');
    page.setViewportSize({ width: 992, height: 400 });
    expect(
      await socialMediaTitle.evaluate(el => window.getComputedStyle(el).display)
    ).toBe('block');
    page.setViewportSize({ width: 1200, height: 400 });
    expect(
      await socialMediaTitle.evaluate(el => window.getComputedStyle(el).display)
    ).toBe('block');
  });
});
