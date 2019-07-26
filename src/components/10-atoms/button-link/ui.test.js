import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Button Link - basic functionality').page(
  `${host}/iframe.html?id=atoms-button-link--button-link`
);

test('should render button-link', async t => {
  const $axaButton = await Selector('axa-button-link');
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button-link').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find('.a-button-link');
  await t.expect($axaButtonShadowEl.exists).ok();
});

test('should style button-link default css (test axa blue bg color)', async t => {
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button-link').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find('.a-button-link');
  await t
    .expect(await $axaButtonShadowEl.getStyleProperty('background-color'))
    .eql('rgb(0, 0, 143)');
});

fixture('Button Link - set properties').page(
  `${host}/iframe.html?id=atoms-button-link--button-link`
);

test('should set button element disabled', async t => {
  const setDisabled = ClientFunction(() => {
    document.querySelector('axa-button-link').disabled = true;
  });
  await setDisabled();
  const $axaButtonLink = await Selector('axa-button-link');
  await t.expect(await $axaButtonLink.hasAttribute('disabled')).ok();
});

fixture('Button Link - icon').page(
  `${host}/iframe.html?id=atoms-button-link--button-link`
);

test('should render icon', async t => {
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button-link').shadowRoot
  );
  const $axaIcon = await $axaButtonShadow.find('axa-icon');
  await t.expect($axaIcon.exists).ok();
});
