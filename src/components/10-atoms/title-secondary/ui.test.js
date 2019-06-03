import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Title secondary - basic functionality').page(
  `${host}/iframe.html?id=atoms-title-secondary--title-secondary-default`
);

const TAG = 'axa-title-secondary';
const CLASS = '.a-title-secondary';

test('should render title-secondary', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-title-secondary').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});
