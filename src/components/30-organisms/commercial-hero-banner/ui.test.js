import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Commercial Hero Banner - basic functionality').page(
  `${host}/iframe.html?id=components-commercial-hero-banner--commercial-hero-banner`
);

const TAG = 'axa-commercial-hero-banner';
const ROOT_CLASS = '.o-commercial-hero-banner';

test('should render commercial-hero-banner', async (t) => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector(TAG).shadowRoot,
    { dependencies: { TAG } }
  ).find(ROOT_CLASS);
  await t.expect($axaElemShadow.exists).ok();
});

fixture('Commercial Hero Banner - Dark Mode').page(
  `${host}/iframe.html?id=components-commercial-hero-banner--commercial-hero-banner&knob-Variant=dark&knob-Image%20Source=https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg`
);

test('should render in dark mode', async (t) => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.getAttribute('variant')).eql('dark');
  const $axaElemShadow = await Selector(
    () => document.querySelector(TAG).shadowRoot,
    { dependencies: { TAG } }
  );

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
      'linear-gradient(270deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 60%, rgb(0, 0, 0) 100%)'
    );
}

fixture('Commercial Hero Banner - Content')
  .page(
    `${host}/iframe.html?id=components-commercial-hero-banner--commercial-hero-banner&knob-Variant=light&knob-Image%20Source=https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg`
  )
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  });

test('should render in light mode', async (t) => {
  const $axaElemShadow = await Selector(
    () => document.querySelector(TAG).shadowRoot,
    { dependencies: { TAG } }
  );
  const container = $axaElemShadow.find('.o-commercial-hero-banner__container');
  await t.expect(container.visible).ok();
  await t
    .expect(container.hasClass('o-commercial-hero-banner__container--dark'))
    .notOk();
  await _assertLightBackgroundGradient(t, container);
});

async function _assertLightBackgroundGradient(t, container) {
  await t
    .expect(container.getStyleProperty('background-image'))
    .eql(
      'linear-gradient(270deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.9) 60%, rgb(255, 255, 255) 100%)'
    );
}

test('should use correct typography for mobile view', async (t) => {
  await t.resizeWindow(575, 700);

  const title = await _getTitleNode(t);
  await t
    .expect(title.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect(title.getStyleProperty('font-size')).eql('30px');
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
  await t.expect(disclaimer.getStyleProperty('font-size')).eql('14px');
  await t.expect(disclaimer.getStyleProperty('font-weight')).eql('400');
});

test('should use correct typography for tablet view', async (t) => {
  await t.resizeWindow(576, 700);

  const title = await _getTitleNode(t);
  await t
    .expect(title.getStyleProperty('font-family'))
    .eql('"Publico Headline", Georgia, serif');
  await t.expect(title.getStyleProperty('font-size')).eql('30px');
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
  await t.expect(disclaimer.getStyleProperty('font-size')).eql('14px');
  await t.expect(disclaimer.getStyleProperty('font-weight')).eql('400');
});

test('should use correct typography for desktop view', async (t) => {
  await t.resizeWindow(992, 700);

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
  await t.expect(disclaimer.getStyleProperty('font-size')).eql('14px');
  await t.expect(disclaimer.getStyleProperty('font-weight')).eql('400');
});

fixture('Commercial Hero Banner - Check addons')
  .page(
    `${host}/iframe.html?id=examples-commercial-hero-banner-pure-html--with-badges`
  )
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  });

test('should render badge and addon', async (t) => {
  const $axaHeroBanner = await Selector(TAG);

  const $addon = $axaHeroBanner.find(
    '.o-commercial-hero-banner-demo__addon-example'
  );
  await t.expect($addon.visible).ok();

  const $badge = $axaHeroBanner.find(
    '.o-commercial-hero-banner-demo__badge-wrapper'
  );
  await t.expect($badge.visible).ok();
  await t
    .expect($badge.getStyleProperty('background-color'))
    .eql('rgb(201, 20, 50)');
});

async function _getTitleNode(t) {
  const titleNode = await Selector(TAG).find('h1');
  await t.expect(titleNode.exists).ok();
  return titleNode;
}

async function _getContentNode(t) {
  const contentNode = await Selector(TAG).find('[slot="content"]');
  await t.expect(contentNode.exists).ok();
  return contentNode;
}

async function _getDisclaimerNode(t) {
  const disclaimerNode = await Selector(TAG).find('[slot="disclaimer"]');
  await t.expect(disclaimerNode.exists).ok();
  return disclaimerNode;
}

test('should set correct width for button', async (t) => {
  const expectedWidth = '157px';
  const $axaButtonLink = await Selector('axa-button-link');

  const $axaButtonLinkShadow = await Selector(
    () => document.querySelector('axa-button-link').shadowRoot
  );

  const $axaButtonShadowElement = await $axaButtonLinkShadow.find(
    '.a-button-link'
  );

  const setStyleWidthAttribute = ClientFunction((selector, styleValue) => {
    const element = selector();
    element.style.width = styleValue;
  });

  await setStyleWidthAttribute($axaButtonLink, expectedWidth);
  await t
    .expect($axaButtonShadowElement.getStyleProperty('width'))
    .eql(expectedWidth);
});
