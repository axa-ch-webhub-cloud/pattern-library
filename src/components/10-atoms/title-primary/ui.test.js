import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Title primary - basic functionality').page(
  `${host}/iframe.html?id=atoms-title-primary--title-primary-size-1`
);

const TAG = 'axa-title-primary';
const CLASS = '.a-title-primary';

test('should render title-primary', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-title-primary').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});
