import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Policy features - basic functionality').page(`${host}/iframe.html?id=molecules-policy-features--policy-features-default`);

const TAG = 'axa-policy-features';
const CLASS = '.m-policy-features';

test('should render policy-features', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-policy-features').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});