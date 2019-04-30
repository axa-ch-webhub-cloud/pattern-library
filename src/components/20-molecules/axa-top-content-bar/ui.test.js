import { Selector } from 'testcafe';

fixture('Axa top content bar - basic functionality').page('http://localhost:9999/iframe.html?id=molecules-axa-top-content-bar--axa-top-content-bar-default');

const TAG = 'axa-axa-top-content-bar';
const CLASS = '.m-axa-top-content-bar';

test('should render axa-top-content-bar', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-axa-top-content-bar').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});