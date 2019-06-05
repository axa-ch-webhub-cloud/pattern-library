import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Text - basic functionality').page(
  `${host}/iframe.html?id=atoms-text--text-default`
);

const TAG = 'axa-text';
const CLASS = '.a-text';

test('should render text', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-text').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});
