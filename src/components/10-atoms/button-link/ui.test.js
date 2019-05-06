import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

const BUTTON_TAG = 'a-button-link';
const ICON_TAG = 'axa-icon';
const BUTTON_CLASS = '.a-button-link';

fixture('Button Link - basic functionality').page(
  `${host}/iframe.html?id=atoms-button-link-demos--feature-button-clickable`
);

test('should render button', async t => {
  const $axaButton = await Selector(BUTTON_TAG);
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(
    () => document.querySelector(BUTTON_TAG).shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t.expect($axaButtonShadowEl.exists).ok();
});

test('should style button default css (test axa blue bg color)', async t => {
  const $axaButtonShadow = await Selector(
    () => document.querySelector(BUTTON_TAG).shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(BUTTON_CLASS);
  await t
    .expect(await $axaButtonShadowEl.getStyleProperty('background-color'))
    .eql('rgb(0, 0, 143)');
});

fixture('Button Link - set properties').page(
  `${host}/iframe.html?id=atoms-button-link--button-link-default`
);

test('should set button element disabled', async t => {
  const setDisabled = ClientFunction(() => {
    document.querySelector(BUTTON_TAG).disabled = true;
  });
  await setDisabled();
  const $axaButtonLink = await Selector(BUTTON_TAG);
  await t.expect(await $axaButtonLink.hasAttribute('disabled')).ok();
});

fixture('Button Link - icon').page(
  `${host}/iframe.html?id=atoms-button-link--button-link-icon`
);

test('should render icon', async t => {
  const $axaButtonShadow = await Selector(
    () => document.querySelector(BUTTON_TAG).shadowRoot
  );
  const $axaIcon = await $axaButtonShadow.find(ICON_TAG);
  await t.expect($axaIcon.exists).ok();
});
