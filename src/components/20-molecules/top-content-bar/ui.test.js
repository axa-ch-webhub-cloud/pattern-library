import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Top content bar - basic functionality').page(
  `${host}/iframe.html?id=molecules-top-content-bar--top-content-bar-default-with-button`
);

const TAG = 'axa-top-content-bar';
const CLASS = '.m-top-content-bar';

test('should render top-content-bar', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-top-content-bar').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render warning top-content-bar', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-top-content-bar').shadowRoot
  );
  $axaElem.setAttribute('variant', 'warning');
  await t
    .expect(await $axaElemShadow.getStyleProperty('background-color'))
    .eql('rgb(201, 20, 50)');
});
