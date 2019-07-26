import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Policy features - basic functionality').page(`${host}/iframe.html?id=molecules-policy-features--policy-features`);

const TAG = 'axa-policy-features';
const CLASS = '.m-policy-features';

test('should render policy-features', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-policy-features').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render title', async t => {
  const titleElement = Selector(
    () => document.querySelector('axa-policy-features').shadowRoot
  ).find('h1');
  await t
    .expect(titleElement.textContent)
    .eql('A 5 star car insurance with affordable premium services');
});

test('should render default background dark-indigo', async t => {
  const $axaPolicyFeaturesArticleEl = Selector(
    () => document.querySelector('axa-policy-features').shadowRoot
  ).find('article');

  await t
    .expect(await $axaPolicyFeaturesArticleEl.getStyleProperty('background-color'))
    .eql('rgb(59, 63, 216)');
});
