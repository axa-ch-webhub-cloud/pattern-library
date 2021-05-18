import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Popup content - basic functionality').page(`${host}/iframe.html?id=components-popup-content--popup-content`);

const TAG = 'axa-popup-content';
const CLASS = '.a-popup__content';

test('should render popup-content', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-popup-content').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});
