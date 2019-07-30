import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';
const TAG = 'axa-policy-features';
const CLASS = '.m-policy-features';
const defaultWindowHeight = 1000;
const huge2WindowWidth = 992;
const hugeWindowWidth = 768;
const large1WindowWidth = 576;

const $axaPolicyFeaturesHeaderEl = Selector(
  () => document.querySelector('axa-policy-features').shadowRoot
).find('h1');

fixture('Policy features - basic functionality').page(
  `${host}/iframe.html?id=molecules-policy-features--policy-features`
);

test('should render policy-features', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-policy-features').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render title', async t => {
  await t
    .expect($axaPolicyFeaturesHeaderEl.textContent)
    .eql('A 5 star car insurance with affordable premium services');
});

test('should render default background dark-indigo', async t => {
  const $axaPolicyFeaturesArticleEl = Selector(
    () => document.querySelector('axa-policy-features').shadowRoot
  ).find('article');

  await t
    .expect(
      await $axaPolicyFeaturesArticleEl.getStyleProperty('background-color')
    )
    .eql('rgb(59, 63, 216)');
});

test('should render title with size huge-2 on screen lg', async t => {
  await t
    .expect(await $axaPolicyFeaturesHeaderEl.getStyleProperty('font-size'))
    .eql('48px');
}).before(async t => {
  await t.resizeWindow(huge2WindowWidth, defaultWindowHeight);
});

test('should render title with size huge on screen md', async t => {
  await t
    .expect(await $axaPolicyFeaturesHeaderEl.getStyleProperty('font-size'))
    .eql('30px');
}).before(async t => {
  await t.resizeWindow(hugeWindowWidth, defaultWindowHeight);
});

test('should render title with size large-1 on all other screen sizes', async t => {
  await t
    .expect(await $axaPolicyFeaturesHeaderEl.getStyleProperty('font-size'))
    .eql('24px');
}).before(async t => {
  await t.resizeWindow(large1WindowWidth, defaultWindowHeight);
});
