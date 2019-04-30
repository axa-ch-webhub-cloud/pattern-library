import { Selector } from 'testcafe';

fixture('Header - basic functionality').page('http://localhost:9999/iframe.html?id=organisms-header--header-default');

const TAG = 'axa-header';
const CLASS = '.o-header';

test('should render header', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-header').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});