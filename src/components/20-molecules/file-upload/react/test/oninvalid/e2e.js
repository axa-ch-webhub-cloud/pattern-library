import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../../../../utils/e2e-helpers';

test.describe('file-upload: onInvalid', () => {
  test(`should add file trigger onInvalid and show error message`, async ({
    page,
  }) => {
    await page.goto(fixtureURL('examples-file-upload-react--file-upload'));

    await page
      .locator('text=Upload file')
      .setInputFiles(
        './src/components/20-molecules/file-upload/ui-test-files/testbig.pdf'
      );

    await expect(page.locator('text=onInvalid triggered')).toBeVisible();
    await expect(
      page.locator('text="File sizes exceed maximum size"')
    ).toBeVisible();
  });
});
