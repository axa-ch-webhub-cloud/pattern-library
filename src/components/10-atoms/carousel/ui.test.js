/*
// temporarly deactivate test because of issue #1338

import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Carousel - basic functionality').page(`${host}/iframe.html?id=atoms-carousel--carousel`);

const TAG = 'axa-carousel';
const CLASS = '.a-carousel';

test('should render carousel', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-carousel').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
}); */
