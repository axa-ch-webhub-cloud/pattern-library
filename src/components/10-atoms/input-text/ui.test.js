import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Input text - basic functionality').page(
  `${host}/iframe.html?id=atoms-input-text--input-text-default`
);

const TAG = 'axa-input-text';
const CLASS = '.a-input-text__input';

test('should render input-text', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaTag = await Selector(() =>
    document.querySelector('axa-input-text')
  );
  const $axaTagElem = await $axaTag.find(CLASS);
  await t.expect($axaTagElem.exists).ok();
});

test('should type something input-text', async t => {
  const $axaTag = await Selector(() =>
    document.querySelector('axa-input-text')
  );
  const $axaButtonTagEl = await $axaTag.find(CLASS);
  await t
    .typeText($axaButtonTagEl, 'Pattern Warriors')
    .expect($axaButtonTagEl.value)
    .eql('Pattern Warriors');
});

fixture('Input text - basic functionality').page(
  `${host}/iframe.html?id=atoms-input-text--input-text-label`
);

test('should render label', async t => {
  const $axaLabel = await Selector('.a-input-text__label');
  await t.expect($axaLabel.exists).ok();
});

fixture('Input text - basic functionality').page(
  `${host}/iframe.html?id=atoms-input-text--input-text-required`
);

test('should show error message and have the right color', async t => {
  const setInvalid = ClientFunction(() => {
    document.querySelector('axa-input-text').valid = false;
  });
  await setInvalid();
  const $axaError = await Selector(() =>
    document.querySelector('.a-input-text__error')
  );
  await t.expect($axaError.exists).ok();
  await t
    .expect(await $axaError.getStyleProperty('color'))
    .eql('rgb(201, 20, 50)');
});

fixture('Input-text Form').page(
  `${host}/iframe.html?id=atoms-input-text-demos--feature-input-text-works-in-a-form`
);

test('should submit inputs correctly in form', async t => {
  // default
  const $InputText = await Selector(() => document.getElementById('default'));

  const $InputTextEl = await $InputText.find(CLASS);
  const text = 'Warrior';
  await t.typeText($InputTextEl, text);

  // email
  const $InputEmail = await Selector(() => document.getElementById('email'));

  const $InputEmailEl = await $InputEmail.find(CLASS);
  const email = 'pattern@warrior.ch';
  await t.typeText($InputEmailEl, email);

  // password
  const $InputPassword = await Selector(() =>
    document.getElementById('password')
  );

  const $InputPasswordEl = await $InputPassword.find(CLASS);
  const password = 'geheim';
  await t.typeText($InputPasswordEl, password);

  await t.click('#submit');
  await t
    .wait(50)
    .expect((await Selector('#form-data')).innerText)
    .eql(`default: ${text}\nemail: ${email}\npassword: ${password}`);
});
