import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers.cjs';

test.describe('modal', () => {
  test('should open modal', async ({ page }) => {
    await page.goto(fixtureURL('components-modal--modal', { open: true }));

    await expect(await page.locator('.o-modal__content')).toBeVisible();
  });

  test('should close modal', async ({ page }) => {
    await page.goto(fixtureURL('components-modal--modal', { open: true }));

    await page.click('.o-modal__upper-close-container-button');

    await expect(await page.locator('.o-modal__content')).toBeHidden();
  });

  test('should close by pressing outside the modal', async ({ page }) => {
    await page.goto(fixtureURL('components-modal--modal', { open: true }));

    await page.click('#root-inner');

    await expect(await page.locator('.o-modal__content')).toBeHidden();
  });

  test('should close modal by pressing escape on keyboard', async ({
    page,
  }) => {
    await page.goto(fixtureURL('components-modal--modal', { open: true }));

    await page.keyboard.press('Escape');

    await expect(page.locator('.o-modal__content')).toBeHidden();
  });

  test('should render children', async ({ page }) => {
    await page.goto(fixtureURL('components-modal--modal', { open: true }));

    expect(
      await page.textContent(
        '#root > div > axa-modal > axa-heading:nth-child(1)'
      )
    ).toBe('Liability insurance');
  });

  test('should not close modal in forced mode by pressing escape on keyboard', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-modal--modal', { open: true, forced: true })
    );

    await page.keyboard.press('Escape');

    await expect(page.locator('.o-modal__content')).toBeVisible();
  });

  test('should not close by pressing outside the modal', async ({ page }) => {
    await page.goto(
      fixtureURL('components-modal--modal', { open: true, forced: true })
    );

    await page.click('#root-inner');

    await expect(page.locator('.o-modal__content')).toBeVisible();
  });

  test('should not display top-bar with close icon', async ({ page }) => {
    await page.goto(
      fixtureURL('components-modal--modal', { open: true, forced: true })
    );

    await expect(
      page.locator('.o-modal__upper-close-container-button')
    ).toBeHidden();
  });

  test('should be small', async ({ page }) => {
    await page.goto(
      fixtureURL('components-modal--modal', { open: true, small: true })
    );

    expect(
      await page
        .locator('.o-modal__container')
        .evaluate(el => window.getComputedStyle(el).maxWidth)
    ).toBe('500px');
  });

  test('should remove margin-top from first child and margin-bottom from last child', async ({
    page,
  }) => {
    await page.goto(
      fixtureURL('components-modal--modal', { open: true, forced: true })
    );

    expect(
      await page
        .locator('axa-heading[size="2"]')
        .evaluate(el => window.getComputedStyle(el).margin)
    ).toBe('0px 0px 18px');
    expect(
      await page
        .locator('axa-button')
        .evaluate(el => window.getComputedStyle(el).margin)
    ).toBe('20px 0px 0px');
  });
});

test('should not display top-bar', async ({ page }) => {
  await page.goto(
    fixtureURL('components-modal--modal', { open: true, noHeader: true })
  );

  expect(await page.isVisible('.o-modal__upper-close-container')).toBe(false);
});

test('should display content with close icon', async ({ page }) => {
  await page.goto(
    fixtureURL('components-modal--modal', { open: true, noHeader: true })
  );

  await expect(
    page.locator('.o-modal__content .o-modal__upper-close-container-button')
  ).toBeVisible();
});

test('should remove padding for the root content element', async ({ page }) => {
  await page.goto(
    fixtureURL('components-modal--modal', { open: true, noHeader: true })
  );

  expect(
    await page
      .locator('.o-modal__content--noheader')
      .evaluate(el => window.getComputedStyle(el).padding)
  ).toBe('0px');
});
