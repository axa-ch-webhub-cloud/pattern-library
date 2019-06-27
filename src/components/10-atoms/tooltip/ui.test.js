import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Tooltip - basic functionality').page(`${host}/iframe.html?id=atoms-tooltip--tooltip-default`);

const TAG = 'axa-tooltip';
const CLASS = '.a-tooltip';

test('should render tooltip', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-tooltip').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});