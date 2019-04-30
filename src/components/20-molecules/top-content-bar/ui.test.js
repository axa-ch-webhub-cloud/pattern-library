import { Selector } from 'testcafe';

fixture('Top content bar - basic functionality').page('http://localhost:9999/iframe.html?id=molecules-top-content-bar--top-content-bar-default');

const TAG = 'axa-top-content-bar';
const CLASS = '.m-top-content-bar';

test('should render top-content-bar', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-top-content-bar').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});