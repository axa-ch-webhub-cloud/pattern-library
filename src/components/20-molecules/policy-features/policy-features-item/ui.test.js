import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Policy features item - basic functionality').page(`${host}/iframe.html?id=molecules-policy-features--policy-features`);

const TAG = 'axa-policy-features-item';
const CLASS = '.policy-features-item';

test('should render policy-features-item', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-policy-features-item').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render title of first item', async t => {
  const firstH1ElementInDocument = Selector(
    () => document.querySelector('axa-policy-features-item').shadowRoot
  ).find('h1');
  await t
    .expect(firstH1ElementInDocument.textContent)
    .eql('Get Discount');
});

test('should render description of first item', async t => {
  const firstPElementInDocument = Selector(
    () => document.querySelector('axa-policy-features-item').shadowRoot
  ).find('p');
  await t
    .expect(firstPElementInDocument.textContent)
    .eql('A 5 star car insurance with affordable premium services');
});

test('should render svg icon of first item', async t => {
  const firstSvgElementInDocument = Selector(
    () => document.querySelector('axa-policy-features-item').shadowRoot
  ).find('svg');
  await t
    .expect(firstSvgElementInDocument.exists).ok();
});
