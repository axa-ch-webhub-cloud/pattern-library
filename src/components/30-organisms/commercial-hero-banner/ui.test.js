import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Commercial hero banner - basic functionality').page(
  `${host}/iframe.html?id=organisms-commercial-hero-banner--commercial-hero-banner`
);

const TAG = 'axa-commercial-hero-banner';
const ROOT_CLASS = '.o-commercial-hero-banner';

test('should render commercial-hero-banner', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-commercial-hero-banner').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(ROOT_CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

fixture('Commercial hero banner - Dark Mode').page(
  `${host}/iframe.html?id=organisms-commercial-hero-banner--commercial-hero-banner&knob-Variant=dark&knob-Src=https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg&knob-Position=top%20right`
);

test('should render in dark mode with background image position top right', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.getAttribute('variant')).eql('dark');
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-commercial-hero-banner').shadowRoot
  );

  await _assertBackgroundPositionTopRight($axaElemShadow, t);

  const container = $axaElemShadow.find('.o-commercial-hero-banner__container');
  await t.expect(container.visible).ok();
  await t
    .expect(container.hasClass('o-commercial-hero-banner__container--dark'))
    .ok();

  await _assertDarkBackgroundGradient(t, container);
});

async function _assertDarkBackgroundGradient(t, container) {
  await t
    .expect(container.getStyleProperty('background-image'))
    .eql(
      'linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0) 25%, transparent 70%, transparent)'
    );
}

async function _assertBackgroundPositionTopRight($axaElemShadow, t) {
  const root = await $axaElemShadow.find(ROOT_CLASS);
  await t.expect(root.getStyleProperty('background-position')).eql('100% 0%');
  return root;
}

fixture('Commercial hero banner - Content')
  .page(
    `${host}/iframe.html?id=organisms-commercial-hero-banner--commercial-hero-banner&knob-Variant=light&knob-Src=https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg&knob-Position=bottom%20left`
  )
  .beforeEach(async t => {
    await t.maximizeWindow();
  });

test('should render in light mode with background image position bottom left', async t => {
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-commercial-hero-banner').shadowRoot
  );
  await _assertBackgroundPositionBottomLeft($axaElemShadow, t);
  const container = $axaElemShadow.find('.o-commercial-hero-banner__container');
  await t.expect(container.visible).ok();
  await t
    .expect(container.hasClass('o-commercial-hero-banner__container--dark'))
    .notOk();
  await _assertLightBackgroundGradient(t, container);
});

async function _assertBackgroundPositionBottomLeft($axaElemShadow, t) {
  const root = await $axaElemShadow.find(ROOT_CLASS);
  await t.expect(root.getStyleProperty('background-position')).eql('0% 100%');
  return root;
}

async function _assertLightBackgroundGradient(t, container) {
  await t
    .expect(container.getStyleProperty('background-image'))
    .eql(
      'linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255) 25%, transparent 70%, transparent)'
    );
}

test('should use correct typography for mobile view', async t => {
  await t.resizeWindow(575, 700);

  const category = await _getCategoryNode(t);
  await t
    .expect(category.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(category.getStyleProperty('font-size')).eql('12px');
  await t.expect(category.getStyleProperty('font-weight')).eql('600');

  const title = await _getTitleNode(t);
  await t
    .expect(title.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect(title.getStyleProperty('font-size')).eql('24px');
  await t.expect(title.getStyleProperty('font-weight')).eql('700');

  const content = await _getContentNode(t);
  await t
    .expect(content.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(content.getStyleProperty('font-size')).eql('14px');
  await t.expect(content.getStyleProperty('font-weight')).eql('400');

  const disclaimer = await _getDisclaimerNode(t);
  await t
    .expect(disclaimer.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(disclaimer.getStyleProperty('font-size')).eql('13px');
  await t.expect(disclaimer.getStyleProperty('font-weight')).eql('400');
});

test('should use correct typography for tablet view', async t => {
  await t.resizeWindow(576, 700);

  const category = await _getCategoryNode(t);
  await t
    .expect(category.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(category.getStyleProperty('font-size')).eql('14px');
  await t.expect(category.getStyleProperty('font-weight')).eql('600');

  const title = await _getTitleNode(t);
  await t
    .expect(title.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect(title.getStyleProperty('font-size')).eql('36px');
  await t.expect(title.getStyleProperty('font-weight')).eql('700');

  const content = await _getContentNode(t);
  await t
    .expect(content.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(content.getStyleProperty('font-size')).eql('16px');
  await t.expect(content.getStyleProperty('font-weight')).eql('400');

  const disclaimer = await _getDisclaimerNode(t);
  await t
    .expect(disclaimer.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(disclaimer.getStyleProperty('font-size')).eql('13px');
  await t.expect(disclaimer.getStyleProperty('font-weight')).eql('400');
});

test.only('should use correct typography for desktop view', async t => {
  await t.resizeWindow(992, 700);

  const category = await _getCategoryNode(t);
  await t
    .expect(category.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(category.getStyleProperty('font-size')).eql('14px');
  await t.expect(category.getStyleProperty('font-weight')).eql('600');

  const title = await _getTitleNode(t);
  await t
    .expect(title.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect(title.getStyleProperty('font-size')).eql('48px');
  await t.expect(title.getStyleProperty('font-weight')).eql('700');

  const content = await _getContentNode(t);
  await t
    .expect(content.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(content.getStyleProperty('font-size')).eql('16px');
  await t.expect(content.getStyleProperty('font-weight')).eql('400');

  const disclaimer = await _getDisclaimerNode(t);
  await t
    .expect(disclaimer.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  await t.expect(disclaimer.getStyleProperty('font-size')).eql('13px');
  await t.expect(disclaimer.getStyleProperty('font-weight')).eql('400');
});

async function _getCategoryNode(t) {
  const categoryNode = await Selector('axa-commercial-hero-banner').find(
    '[slot="category"]'
  );
  await t.expect(categoryNode.exists).ok();
  return categoryNode;
}

async function _getTitleNode(t) {
  const titleNode = await Selector('axa-commercial-hero-banner').find(
    '[slot="title"]'
  );
  await t.expect(titleNode.exists).ok();
  return titleNode;
}

async function _getContentNode(t) {
  const contentNode = await Selector('axa-commercial-hero-banner').find(
    '[slot="content"]'
  );
  await t.expect(contentNode.exists).ok();
  return contentNode;
}
async function _getDisclaimerNode(t) {
  const disclaimerNode = await Selector('axa-commercial-hero-banner').find(
    '[slot="disclaimer"]'
  );
  await t.expect(disclaimerNode.exists).ok();
  return disclaimerNode;
}
