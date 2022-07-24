import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Container - basic functionality').page(
  `${host}/iframe.html?args=&id=components-container--container&viewMode=story`
);

const TAG = 'axa-container';
const CLASS = '.o-container';

test('should render container', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-container').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});
