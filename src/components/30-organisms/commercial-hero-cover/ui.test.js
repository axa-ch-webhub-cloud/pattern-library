import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Commercial hero cover - basic functionality').page(`${host}/iframe.html?id=organisms-commercial-hero-cover--commercial-hero-cover-default`);

const TAG = 'axa-commercial-hero-cover';
const CLASS = '.o-commercial-hero-cover';

test('should render commercial-hero-cover', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-commercial-hero-cover').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});