import { Selector } from 'testcafe';

fixture('Input text - basic functionality').page('http://localhost:9999/iframe.html?id=atoms-input-text--input-text-default');

const TAG = 'axa-input-text';
const CLASS = '.a-input-text__input';

test('should render input-text', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-input-text'));
  const $axaElemShadowEl = await $axaElemShadow.find('.a-input-text__input');
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should type something input-text', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-input-text'));
  const $axaButtonShadowEl = await $axaElemShadow.find('.a-input-text__input');
  await t
    .typeText($axaButtonShadowEl, 'Peter Parker')
    .expect($axaButtonShadowEl.value).eql('Peter Parker');
});
