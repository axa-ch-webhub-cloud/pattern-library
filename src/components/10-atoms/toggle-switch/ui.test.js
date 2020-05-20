import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Toggle Switch - basic functionality').page(
  `${host}/iframe.html?id=components-atoms-toggle-switch--toggle-switch`
);

const TAG = 'axa-toggle-switch';
const CLASS = '.a-toggle-switch';

test('should render toggle-switch', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();

  const $axaElemShadow = await Selector(
    () => document.querySelector(TAG).shadowRoot,
    { dependencies: { TAG } }
  );

  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});
