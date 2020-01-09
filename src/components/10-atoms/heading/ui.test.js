import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture
  .only('Heading - Desktop')
  .page(`${host}/iframe.html?id=atoms-heading--heading`);

const TAG = 'axa-heading';
const CLASS = '.a-heading';

async function _getHeadingElement(t, rank, variant) {
  const $headingElement = await Selector(TAG);
  await t.expect($headingElement.exists).ok();
  const $axaElemShadow = await Selector(
    () =>
      document
        .querySelector(
          `axa-heading[rank='${rank}']${
            variant ? `[variant="${variant}"]` : ''
          }`
        )
        .shadowRoot.querySelector(CLASS),
    { dependencies: { rank, variant } }
  );
  const $nativeHeadingElement = $axaElemShadow;
  await t.expect($nativeHeadingElement.exists).ok();
  return $nativeHeadingElement;
}

test('should render h1 primary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '1', '');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('62px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('72px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.62px');
});

test('should render h2 primary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '2', '');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('48px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('54px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.48px');
});

test('should render h3 primary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '3', '');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('36px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('42px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.36px');
});

test('should render h4 primary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '4', '');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('28px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('32px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.28px');
});

test('should render h5 primary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '5', '');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('24px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('29px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.24px');
});

test('should render h6 primary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '6', '');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('20px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('26px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.2px');
});

test('should render h1 secondary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '1', 'secondary');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('62px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('72px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.62px');
});

test('should render h2 secondary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '2', 'secondary');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('48px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('54px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.48px');
});

test('should render h3 secondary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '3', 'secondary');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('36px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('42px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.36px');
});

test('should render h4 secondary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '4', 'secondary');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('28px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('32px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.28px');
});

test('should render h5 secondary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '5', 'secondary');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('24px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('29px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.24px');
});

test('should render h6 secondary correctly on desktop', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t, '6', 'secondary');

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect($axaElemShadowEl.getStyleProperty('font-weight')).eql('400');
  await t.expect($axaElemShadowEl.getStyleProperty('font-style')).eql('normal');
  await t.expect($axaElemShadowEl.getStyleProperty('font-size')).eql('20px');
  await t.expect($axaElemShadowEl.getStyleProperty('line-height')).eql('26px');
  await t
    .expect($axaElemShadowEl.getStyleProperty('letter-spacing'))
    .eql('-0.2px');
});
