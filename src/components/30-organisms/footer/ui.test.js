import { Selector } from 'testcafe';

fixture('Footer - basic functionality').page('http://localhost:9999/iframe.html?id=organisms-footer--footer-default');

const TAG = 'axa-footer';
const CLASS = '.o-footer';

test('should render footer', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-footer').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});