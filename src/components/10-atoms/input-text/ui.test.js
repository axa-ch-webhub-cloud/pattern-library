import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Input text - basic functionality').page(
  `${host}/iframe.html?id=atoms-input-text--input-text`
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
  const $axaTagElem = await $axaTag.find(CLASS);
  await t
    .selectText($axaTagElem)
    .pressKey('delete')
    .typeText($axaTagElem, 'Pattern Warriors')
    .expect($axaTagElem.value)
    .eql('Pattern Warriors');
});

test('should show error message and have the right color', async t => {
  const setInvalid = ClientFunction(() => {
    document.querySelector('axa-input-text').invalid = true;
    document.querySelector('axa-input-text').error = 'error';
  });
  await setInvalid();
  const $axaError = await Selector(() =>
    document.querySelector('.a-input-text__error')
  );
  await t.expect($axaError.innerText).eql('error');
  await t
    .expect(await $axaError.getStyleProperty('color'))
    .eql('rgb(201, 20, 50)');
});

fixture('Input text - Form').page(
  `${host}/iframe.html?id=atoms-input-text-demos--feature-input-text-works-in-a-form`
);

test('should render label', async t => {
  const $axaLabel = await Selector('.a-input-text__label');
  await t.expect($axaLabel.exists).ok();
});

test('should submit inputs correctly in form', async t => {
  // default
  const $InputText = await Selector(() => document.getElementById('default'));
  const text = 'Warrior';
  await t.typeText($InputText, text);

  // email
  const $InputEmail = await Selector(() => document.getElementById('email'));
  const email = 'pattern@warrior.ch';
  await t.typeText($InputEmail, email, { paste: true });

  // password
  const $InputPassword = await Selector(() =>
    document.getElementById('password')
  );
  const password = 'geheim';
  await t.wait(50).typeText($InputPassword, password);

  await t.click('#submit');
  await t
    .wait(50)
    .expect((await Selector('#default-id')).innerText)
    .eql(`default: ${text}`);
  await t
    .expect((await Selector('#email-id')).innerText)
    .eql(`email: ${email}`);
  await t
    .expect((await Selector('#password-id')).innerText)
    .eql(`password: ${password}`);
});
