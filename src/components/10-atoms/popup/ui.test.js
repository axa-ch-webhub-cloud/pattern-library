import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('popup - basic functionality').page(`${host}/iframe.html?id=atoms-popup--popup-default`);

const TAG = 'axa-popup';
const CLASS = '.a-popup';

test('should render popup', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-popup').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});
