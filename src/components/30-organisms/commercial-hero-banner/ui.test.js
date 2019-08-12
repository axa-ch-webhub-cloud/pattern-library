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

test.only('should use correct typography for mobile view', async t => {
  await t.resizeWindow(575, 700);

  const category = await getCategory(t);
  const title = await getTitle(t);
  const content = await getContent(t);
  const disclaimer = await getDisclaimer(t);
});

async function getCategory(t) {
  const categoryNode = await Selector('axa-commercial-hero-banner').find(
    '[slot="category"]'
  );
  await t.expect(categoryNode.exists).ok();
  return categoryNode;
}

async function getTitle(t) {
  const titleNode = await Selector('axa-commercial-hero-banner').find(
    '[slot="title"]'
  );
  await t.expect(titleNode.exists).ok();
  return titleNode;
}

async function getContent(t) {
  const contentNode = await Selector('axa-commercial-hero-banner').find(
    '[slot="content"]'
  );
  await t.expect(contentNode.exists).ok();
  return contentNode;
}
async function getDisclaimer(t) {
  const disclaimerNode = await Selector('axa-commercial-hero-banner').find(
    '[slot="disclaimer"]'
  );
  await t.expect(disclaimerNode.exists).ok();
  return disclaimerNode;
}
