import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';
const TAG = 'axa-policy-features-item';
const CLASS = '.m-policy-features-item';
const defaultWindowHeight = 1000;
const lgWindowWidth = 992;
const mdWindowWidth = 768;
const smWindowWidth = 576;

// Selectors
const firstSvgElementInDocument = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('svg');

const firstH1ElementInDocument = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('h1');

const firstPElementInDocument = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('p');

const firstSectionElementInDocument = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('section');

fixture('Policy features item - basic functionality').page(
  `${host}/iframe.html?id=molecules-policy-features--policy-features`
);

test('should render policy-features-item', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadowEl = await Selector(
    () => {
      return document.querySelector(TAG).shadowRoot;
    },
    { dependencies: { TAG } }
  ).find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render title of first item', async t => {
  await t.expect(firstH1ElementInDocument.textContent).eql('Get Discount');
});

test('should render description of first item', async t => {
  await t
    .expect(firstPElementInDocument.textContent)
    .eql('A 5 star car insurance with affordable premium services');
});

test('should render svg icon of first item', async t => {
  await t.expect(firstSvgElementInDocument.exists).ok();
});

test('should set svg size for screen size md-up', async t => {
  await t
    .expect(await firstSvgElementInDocument.getStyleProperty('width'))
    .eql('96px')
    .expect(await firstSvgElementInDocument.getStyleProperty('height'))
    .eql('96px');
}).before(async t => {
  await t.resizeWindow(mdWindowWidth, defaultWindowHeight);
});

test('should set svg size for screen size smaller than md', async t => {
  await t
    .expect(await firstSvgElementInDocument.getStyleProperty('width'))
    .eql('42px')
    .expect(await firstSvgElementInDocument.getStyleProperty('height'))
    .eql('42px');
}).before(async t => {
  await t.resizeWindow(smWindowWidth, defaultWindowHeight);
});

test('should render title and description with size medium-1 on screen md', async t => {
  await t
    .expect(await firstH1ElementInDocument.getStyleProperty('font-size'))
    .eql('18px')
    .expect(await firstPElementInDocument.getStyleProperty('font-size'))
    .eql('18px');
}).before(async t => {
  await t.resizeWindow(mdWindowWidth, defaultWindowHeight);
});

test('should render title and description with size medium on screen size smaller than md', async t => {
  await t
    .expect(await firstH1ElementInDocument.getStyleProperty('font-size'))
    .eql('16px')
    .expect(await firstPElementInDocument.getStyleProperty('font-size'))
    .eql('16px');
}).before(async t => {
  await t.resizeWindow(smWindowWidth, defaultWindowHeight);
});

test('should set width of item with screen size lg-up', async t => {
  await t
    .expect(await firstSectionElementInDocument.getStyleProperty('width'))
    .eql('255px');
}).before(async t => {
  await t.resizeWindow(lgWindowWidth, defaultWindowHeight);
});

test('should set width of item with screen size md-up', async t => {
  await t
    .expect(await firstSectionElementInDocument.getStyleProperty('width'))
    .eql('210px');
}).before(async t => {
  await t.resizeWindow(mdWindowWidth, defaultWindowHeight);
});

test('should set width of item with screen size sm-up', async t => {
  await t
    .expect(await firstSectionElementInDocument.getStyleProperty('width'))
    .eql('240px');
}).before(async t => {
  await t.resizeWindow(smWindowWidth, defaultWindowHeight);
});
