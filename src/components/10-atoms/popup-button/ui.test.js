import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Popup button - basic functionality').page(`${host}/iframe.html?id=atoms-popup-button--popup-button-default`);

const TAG = 'axa-popup-button';
const CLASS = '.a-popup-button';

test('should render popup-button', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-popup-button').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});