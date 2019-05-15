import { Selector } from 'testcafe';

fixture('Input text - basic functionality').page('http://localhost:9999/iframe.html?id=atoms-input-text--input-text-default');

const TAG = 'axa-input-text';
const CLASS = '.a-input-text';

test('should render input-text', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-input-text').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});