import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Button Link - basic functionality').page(
  `${host}/iframe.html?id=components-button-link--button-link`
);

test('should render button-link', async (t) => {
  const $axaButton = await Selector('axa-button-link');
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button-link').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find('.a-button-link');
  await t.expect($axaButtonShadowEl.exists).ok();
});

test('should style button-link default css (test axa blue bg color)', async (t) => {
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button-link').shadowRoot
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find('.a-button-link');
  await t
    .expect(await $axaButtonShadowEl.getStyleProperty('background-color'))
    .eql('rgb(0, 0, 143)');
});

test('should pass width to internal button', async (t) => {
  const expectedWidth = '300px';
  const $axaButtonLink = await Selector('axa-button-link');

  const $axaButtonLinkShadow = await Selector(
    () => document.querySelector('axa-button-link').shadowRoot
  );

  const $axaButtonShadowElement = await $axaButtonLinkShadow.find(
    '.a-button-link'
  );

  const setStyleWidthAttribute = ClientFunction((selector, styleValue) => {
    const element = selector();
    element.style.width = styleValue;
  });

  await setStyleWidthAttribute($axaButtonLink, expectedWidth);
  await t
    .expect($axaButtonShadowElement.getStyleProperty('width'))
    .eql(expectedWidth);
});

fixture('Button Link - set properties').page(
  `${host}/iframe.html?id=components-button-link--button-link`
);

test('should set button element disabled', async (t) => {
  const setDisabled = ClientFunction(() => {
    document.querySelector('axa-button-link').disabled = true;
  });
  await setDisabled();
  const $axaButtonLink = await Selector('axa-button-link');
  await t.expect(await $axaButtonLink.hasAttribute('disabled')).ok();
});

fixture('Button Link - icon').page(
  `${host}/iframe.html?id=examples-button-link-pure-html--icon-visible`
);

test('should render icon', async (t) => {
  // give axa-button-link time to instantiate
  await t.wait(50);
  const $axaButtonShadow = await Selector(
    () => document.querySelector('axa-button-link').shadowRoot
  );
  const $axaIcon = await $axaButtonShadow.find('.js-button-link__arrow');
  await t.expect($axaIcon.exists).ok();
});

fixture('Button Link - clickable').page(
  `${host}/iframe.html?id=examples-button-link-pure-html--clickable`
);

test("shouldn't be clickable", async (t) => {
  const setDisabled = ClientFunction(() => {
    document.querySelector('axa-button-link').disabled = true;
  });
  await setDisabled();
  const $axaButtonLink = await Selector('axa-button-link');
  await t.click($axaButtonLink);
  await t.expect($axaButtonLink.innerText).contains('0');
});
