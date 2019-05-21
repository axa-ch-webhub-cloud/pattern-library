import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Footer - basic functionality').page(`${host}/iframe.html?id=organisms-footer--footer-default`);

const TAG = 'axa-footer';
const CLASS = '.o-footer';

test('should render footer', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-footer').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});