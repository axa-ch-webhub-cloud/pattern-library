import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

const BUTTON_TAG = 'axa-button';
const ICON_TAG = 'axa-icon';
const BUTTON_CLASS = '.a-button';

fixture('Button - basic functionality').page(
  `${host}/iframe.html?id=atoms-button-demos--feature-button-clickable`
);

test('should render button', async t => {
  const $axaButton = await Selector(BUTTON_TAG);
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t.expect($axaButtonShadowEl.exists).ok();
});

test('should style button default css (test axa blue bg color)', async t => {
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t
    .expect(await $axaButtonShadowEl.getStyleProperty('background-color'))
    .eql('rgb(0, 0, 143)');
});

test('should clickable (set different text after click)', async t => {
  const $axaButton = await Selector(BUTTON_TAG);
  await t.click($axaButton);
  await t.expect($axaButton.innerText).contains('1');
});

fixture('Button - set properties').page(
  `${host}/iframe.html?id=atoms-button--button`
);

test('should set button element disabled', async t => {
  const setDisabled = ClientFunction(() => {
    document.querySelector('axa-button').disabled = true;
  });
  await setDisabled();
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t.expect(await $axaButtonShadowEl.hasAttribute('disabled')).ok();
});

test('should set button element type', async t => {
  const setType = ClientFunction(() => {
    document.querySelector('axa-button').type = 'submit';
  });
  await setType();
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t
    .expect((await $axaButtonShadowEl.getAttribute('type')) === 'submit')
    .ok();
});

fixture('Button - render icon').page(
  `${host}/iframe.html?id=atoms-button-demos--feature-button-icon-visible`
);

test('should render icon', async t => {
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button').shadowRoot
  );
  const $axaIcon = await $axaButtonShadow.find(ICON_TAG);
  await t.expect($axaIcon.exists).ok();
});

fixture('Button - react smoke test').page(
  `${host}/iframe.html?id=atoms-button-react--button`
);

test('should render react button', async t => {
  const $axaButton = await Selector(BUTTON_TAG);
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t.expect($axaButtonShadowEl.exists).ok();
});

test('should set className', async t => {
  const $axaButton = await Selector(BUTTON_TAG);
  await t.expect($axaButton.exists).ok();

  await t.expect(await $axaButton.getAttribute('class')).eql('myCssClass');
});
