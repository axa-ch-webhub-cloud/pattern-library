import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Testimonials - basic functionality').page(`${host}/iframe.html?id=organisms-testimonials--testimonials-default`);

const TAG = 'axa-testimonials';
const CLASS = '.o-testimonials';

test('should render testimonials', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-testimonials').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});