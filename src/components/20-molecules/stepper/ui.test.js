import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Stepper - basic functionality').page(
  `${host}/iframe.html?id=components-stepper--stepper`
);

const TAG = 'axa-stepper';
const CLASS = '.m-stepper';

test('should render stepper', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();

  const $axaElemShadow = await Selector(
    () => document.querySelector(TAG).shadowRoot,
    { dependencies: { TAG } }
  );

  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});
