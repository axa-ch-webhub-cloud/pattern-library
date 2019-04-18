import { Selector, ClientFunction } from 'testcafe';

fixture('Button - basic functionality').page('http://localhost:9999/iframe.html?id=atoms-button--button-click-event');

const BUTTON_TAG = 'axa-button';
const BUTTON_CLASS = '.a-button';

test('should render button', async t => {
  const $axaButton = await Selector(BUTTON_TAG);
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(() => document.querySelector('axa-button').shadowRoot);
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t.expect($axaButtonShadowEl.exists).ok();
});

test('should style button default css (test axa blue bg color)', async t => {
  const $axaButtonShadow = await Selector(() => document.querySelector('axa-button').shadowRoot);
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t.expect(await $axaButtonShadowEl.getStyleProperty('background-color')).eql('rgb(0, 0, 143)');
});

test('should clickable (set different text after click)', async t => {
  const $axaButton = await Selector(BUTTON_TAG);
  await t.click($axaButton);
  await t.expect($axaButton.innerText).contains('1');
});

fixture('Button - set properties').page('http://localhost:9999/iframe.html?id=atoms-button--button-default-primary');

test('should set button element disabled', async t => {
  const setDisabled = ClientFunction(() => {
    document.querySelector('axa-button').disabled = true;
  });
  await setDisabled();
  const $axaButtonShadow = await Selector(() => document.querySelector('axa-button').shadowRoot);
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t.expect(await $axaButtonShadowEl.hasAttribute('disabled')).ok();
});

test('should set button element type', async t => {
  const setType = ClientFunction(() => {
    document.querySelector('axa-button').type = 'submit';
  });
  await setType();
  const $axaButtonShadow = await Selector(() => document.querySelector('axa-button').shadowRoot);
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t.expect((await $axaButtonShadowEl.getAttribute('type')) === 'submit').ok();
});

// TODO test icon smoke
