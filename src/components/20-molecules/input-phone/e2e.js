import { expect, test } from '@playwright/test';
import { fixtureURL } from '../../../utils/e2e-helpers.cjs';

const validPhoneNumber = '795213848';

/* TODO #2299
const selectNthCountry = async n => {
  await page.click('.js-dropdown__toggle');
  await page.waitForSelector('.m-dropdown__content');
  return page.evaluate(nth => {
    document
      .querySelector('axa-input-phone')
      .shadowRoot.querySelector(`button[data-index="${nth}"]`)
      .click();
  }, n);
};
*/

const assertInvalidAndErrorMessageShown = async page => {
  expect(await page.locator('axa-input-phone').getAttribute('invalid')).toBe(
    ''
  );
  expect(await page.isVisible('.m-input-phone__error')).toBeTruthy();
};

const assertValidComponent = async page => {
  expect(await page.locator('axa-input-phone').getAttribute('invalid')).toBe(
    null
  );
  expect(await page.isVisible('.m-input-phone__error')).not.toBeTruthy();
};

const assertChangeValue = async (page, phoneNumber) => {
  expect(await page.textContent('#inputtext-react-testoutput')).toBe(
    `Entered phone number (onChange): ${phoneNumber}`
  );
};

test.describe('input-phone', () => {
  test('should accept a valid phone number', async ({ page }) => {
    await page.goto(fixtureURL('components--input-phone'));

    await page.click('.js-dropdown__toggle');
    await page.waitForSelector('.m-dropdown__content');

    await page.locator('button[data-value="+49"]').click();
    await page.fill('.a-input-text__input', validPhoneNumber);
    await assertValidComponent(page);

    await page.fill('.a-input-text__input', '79 521 38 48');
    await assertValidComponent(page);
  });

  test('should deny invalid inserted phone numbers', async ({ page }) => {
    await page.goto(fixtureURL('components--input-phone'));

    await page.fill('.a-input-text__input', 'a');
    await assertInvalidAndErrorMessageShown(page);

    await page.fill('.a-input-text__input', validPhoneNumber);
    await assertValidComponent(page);

    await page.fill('.a-input-text__input', `0${validPhoneNumber}`);
    await assertInvalidAndErrorMessageShown(page);

    await page.fill('.a-input-text__input', `${validPhoneNumber}12345`);
    await assertInvalidAndErrorMessageShown(page);
  });

  test('should work with the onChange property', async ({ page }) => {
    await page.goto(
      fixtureURL(
        'examples-input-phone-react--input-phone-controlled-uncontrolled'
      )
    );

    // we initially expect the default value of the React demo
    await assertChangeValue(page, '795002020');

    await page.fill('.a-input-text__input', validPhoneNumber);
    await assertValidComponent(page);

    await assertChangeValue(page, `+43 ${validPhoneNumber}`);
  });

  /* TODO #2299
  it('should demonstrate React controlled mode', async () => {
    // set up
    await page.goto(
      `${host}/iframe.html?id=examples-input-phone-react--controlled-uncontrolled&args=&viewMode=story`
    );
    hostElement = await page.waitForSelector(tag);
    // set initial phone number and country code
    await writePhoneNumber('+1 888-944-9400');
    await assertChangeValue('+1 8889449400');
    // show that UI-changed number is reflected in callback value
    await page.keyboard.press('Backspace');
    await assertChangeValue('+1 888944940');
    // show that UI-changed country code is reflected in callback value
    await selectNthCountry(2);
    await assertChangeValue('+33 888944940');
    // freeze changes by clicking on checkbox
    await page.click('#input-phone-frozen-mode');
    // show that UI-changed number is reverted in UI and not reflected in callback value
    await writePhoneNumber('+1 888-944-9400');
    await assertChangeValue('+33 888944940');
    // show that UI-changed country code is reverted in UI and not reflected in callback value
    await selectNthCountry(0);
    await assertChangeValue('+33 888944940');
    // unfreeze byy clicking on checkbox again
    await page.click('#input-phone-frozen-mode');
    // show that UI-changed number is reflected in callback value
    await writePhoneNumber('+1 888-944-9412');
    await assertChangeValue('+1 8889449412');
    // show that UI-changed country code is reflected in callback value
    await selectNthCountry(0);
    await assertChangeValue('+41 8889449412');
  });
  */
});
