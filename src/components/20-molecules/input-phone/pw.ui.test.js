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
      `${host}/iframe.html?id=components--input-phone&knob-counter=Still&viewMode=story`
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
      `${host}/iframe.html?id=components--input-phone&knob-counter=Still&viewMode=story`
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
      `${host}/iframe.html?id=examples-input-phone-react--controlled-uncontrolled&args=&viewMode=story`
    );
    hostElement = await page.waitForSelector(tag);
    // we initially expect the default value of the React demo
    await assertChangeValue('795002020');

    await writePhoneNumber(validPhoneNumber);
    await assertValidComponent();

    await assertChangeValue(`+43 ${validPhoneNumber}`);
  });
});
