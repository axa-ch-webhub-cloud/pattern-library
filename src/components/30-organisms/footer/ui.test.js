import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';
// await t.resizeWindow(300, 1000);
fixture('Footer - basic functionality').page(
  `${host}/iframe.html?id=organisms-footer--footer`
);

const TAG = 'axa-footer';
const CLASS = '.o-footer';

test('should render footer', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-footer').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render footer titles', async t => {
  const $axaContainer = Selector(() =>
    document
      .querySelector('axa-footer')
      .shadowRoot.querySelector('.o-footer__title')
  );

  await t.expect($axaContainer.textContent).contains('axa & you');
});
