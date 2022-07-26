const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-input-phone';
const validPhoneNumber = '795213848';

let hostElement;

const selectGermany = async () => {
  return page.evaluate(evaluateTag => {
    document
      .querySelector(evaluateTag)
      .shadowRoot.querySelector('[data-value="+49"]')
      .click();
  }, tag);
};

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

const writePhoneNumber = async number => {
  return page.fill('.a-input-text__input', number);
};

const assertInvalidAndErrorMessageShown = async () => {
  expect(await hostElement.getAttribute('invalid')).toBe('');
  expect(await page.isVisible('.m-input-phone__error')).toBeTruthy();
};

const assertValidComponent = async () => {
  expect(await hostElement.getAttribute('invalid')).toBe(null);
  expect(await page.isVisible('.m-input-phone__error')).not.toBeTruthy();
};

const assertChangeValue = async phoneNumber => {
  expect(await page.textContent('#inputtext-react-testoutput')).toBe(
    `Entered phone number (onChange): ${phoneNumber}`
  );
};

describe('Input Phone', () => {
  it('should accept a valid phone number', async () => {
    await page.goto(
      `${host}/iframe.html?args=&id=components--input-phone&viewMode=story`
    );
    hostElement = await page.waitForSelector(tag);
    await page.click('.js-dropdown__toggle');
    await page.waitForSelector('.m-dropdown__content');

    await selectGermany();
    await writePhoneNumber(validPhoneNumber);
    await assertValidComponent();

    await writePhoneNumber('79 521 38 48');
    await assertValidComponent();
  });

  it('should deny invalid inserted phone numbers', async () => {
    await page.goto(
      `${host}/iframe.html?args=&id=components--input-phone&viewMode=story`
    );
    hostElement = await page.waitForSelector(tag);

    await writePhoneNumber('a');
    await assertInvalidAndErrorMessageShown();

    await writePhoneNumber(validPhoneNumber);
    await assertValidComponent();

    await writePhoneNumber(`0${validPhoneNumber}`);
    await assertInvalidAndErrorMessageShown();

    await writePhoneNumber(`${validPhoneNumber}12345`);
    await assertInvalidAndErrorMessageShown();
  });

  it('should work with the onChange property', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-input-phone-react--input-phone-controlled-uncontrolled&viewMode=story`
    );
    hostElement = await page.waitForSelector(tag);
    // we initially expect the default value of the React demo
    await assertChangeValue('795002020');

    await writePhoneNumber(validPhoneNumber);
    await assertValidComponent();

    await assertChangeValue(`+43 ${validPhoneNumber}`);
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
