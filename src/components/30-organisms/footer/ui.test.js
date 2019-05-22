import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Footer - basic functionality')
  .page(`${host}/iframe.html?id=organisms-footer--footer`)
  .beforeEach(async t => {
    await t.maximizeWindow();
  });

const TAG = 'axa-footer';
const CLASS = '.o-footer';

test('should render footer with correct background color', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-footer').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
  await t
    .expect($axaElemShadowEl.getStyleProperty('background-color'))
    .eql('rgb(59, 63, 216)');
});

test('should correctly render footer titles', async t => {
  const $footerTitle = Selector(() =>
    document
      .querySelector('axa-footer')
      .shadowRoot.querySelector('.o-footer__tablet')
      .querySelector('.o-footer__title')
  );

  await t.expect($footerTitle.textContent).contains('axa & you');
  await t
    .expect($footerTitle.getStyleProperty('color'))
    .eql('rgb(255, 255, 255)');
  await t.expect($footerTitle.getStyleProperty('font-weight')).eql('700');
  await t.expect($footerTitle.getStyleProperty('font-size')).eql('16px');
  await t
    .expect($footerTitle.getStyleProperty('text-transform'))
    .eql('uppercase');
});

test('should correctly render footer link content', async t => {
  const $footer = Selector(() =>
    document
      .querySelector('axa-footer')
      .shadowRoot.querySelector('.o-footer__tablet')
  );

  const $contactLink = $footer.find('a').withText('Contact');
  await t.expect($contactLink.exists).ok();

  await t
    .expect($contactLink.getStyleProperty('color'))
    .eql('rgb(255, 255, 255)');
  await t
    .expect($contactLink.getStyleProperty('text-decoration'))
    .eql('none solid rgb(255, 255, 255)');
  await t.expect($contactLink.getStyleProperty('font-weight')).eql('400');
  await t.expect($contactLink.getStyleProperty('font-style')).eql('normal');
  await t.expect($contactLink.getStyleProperty('font-size')).eql('14px');
});

test('should render accordion only in mobile mode', async t => {
  await t.resizeWindow(576, 400);
  const $accordion = Selector(() =>
    document
      .querySelector('axa-footer')
      .shadowRoot.querySelector('.o-footer__accordion-content')
  );

  await t.expect($accordion.visible).notOk();
  await t.resizeWindow(575, 400);
  await t.expect($accordion.visible).ok();
});

test.only('should render facebook social media button', async t => {
  const $facebookButton = Selector(() =>
    document
      .querySelector('axa-footer')
      .shadowRoot.querySelector('.o-footer__tablet')
      .querySelector('.o-footer__social-media-list')
      .querySelector('a[href="https://www.facebook.com/axach/"]')
      .querySelector('svg')
  );

  await t.expect($facebookButton.visible).ok();
  await t.expect($facebookButton.getStyleProperty('width')).eql('25px');
  await t.expect($facebookButton.getStyleProperty('height')).eql('25px');
  await t
    .expect($facebookButton.find('path').getStyleProperty('color'))
    .eql('rgb(255, 255, 255)');
});

test('should correctly render social media title in desktop view', async t => {
  const $socialMediaTitle = Selector(() =>
    document
      .querySelector('axa-footer')
      .shadowRoot.querySelector('.o-footer__tablet')
      .querySelector('.o-footer__social-media-title')
  );

  await t.expect($socialMediaTitle.textContent).contains('stay in touch');

  await t.resizeWindow(575, 400);
  await t.expect($socialMediaTitle.visible).notOk();
  await t.resizeWindow(767, 400);
  await t.expect($socialMediaTitle.visible).notOk();
  await t.resizeWindow(991, 400);
  await t.expect($socialMediaTitle.visible).notOk();
  await t.resizeWindow(992, 400);
  await t.expect($socialMediaTitle.visible).ok();
  await t.resizeWindow(1200, 400);
  await t.expect($socialMediaTitle.visible).ok();
});
