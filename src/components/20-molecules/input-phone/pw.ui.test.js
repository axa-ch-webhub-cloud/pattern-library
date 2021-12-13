const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-input-phone';
const validPhoneNumber = '795002020';

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

describe('Input Phone', () => {
  it('should accept a valid phone number', async () => {
    await page.goto(
      `${host}/iframe.html?id=components--input-phone&knob-counter=Still&viewMode=story`
    );
    const hostElement = await page.waitForSelector(tag);
    await page.click('.js-dropdown__toggle');
    await page.waitForSelector('.m-dropdown__content');
    await selectGermany();
    await writePhoneNumber(validPhoneNumber);
    await expect(await hostElement.getAttribute('invalid')).toBe(null);
    await writePhoneNumber('79 500 20 20');
    await expect(await hostElement.getAttribute('invalid')).toBe(null);
  });

  it('should deny invalid inserted phone numbers', async () => {
    await page.goto(
      `${host}/iframe.html?id=components--input-phone&knob-counter=Still&viewMode=story`
    );
    const hostElement = await page.waitForSelector(tag);

    await writePhoneNumber('a');
    expect(await hostElement.getAttribute('invalid')).toBe('');
    expect(await page.isVisible('.m-input-phone__error--show')).toBeTruthy();

    await writePhoneNumber(validPhoneNumber);
    expect(await hostElement.getAttribute('invalid')).toBe(null);
    expect(
      await page.isVisible('.m-input-phone__error--show')
    ).not.toBeTruthy();

    await writePhoneNumber(`0${validPhoneNumber}`);
    expect(await hostElement.getAttribute('invalid')).toBe('');
    expect(await page.isVisible('.m-input-phone__error--show')).toBeTruthy();

    await writePhoneNumber(`${validPhoneNumber}123`);
    expect(await hostElement.getAttribute('invalid')).toBe('');
    expect(await page.isVisible('.m-input-phone__error--show')).toBeTruthy();
  });
});
