import { Selector } from 'testcafe';
import FooterAccessor, { FooterAccessorClass } from './ui.test.accessor';

const host = process.env.TEST_HOST_STORYBOOK_URL;
const TAG = 'axa-footer';
const VERSIONED_TAG = `${TAG}-aem`;
const CLASS = '.o-footer';
const versionedFooterAccessor = new FooterAccessorClass(VERSIONED_TAG);

fixture('Footer - React Smoketest').page(
  `${host}/iframe.html?id=examples-footer-react--callbacks&viewMode=story`
);

test('should render footer with working react callbacks', async t => {
  await t.setTestSpeed(0.5);
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-footer').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();

  await FooterAccessor.assertBackgroundColor(t, $axaElemShadowEl);

  const $contactLink = FooterAccessor.getSlotNode('column-0-item-0');

  await t.expect($contactLink.textContent).eql('Contact');
  await t.expect($contactLink.visible).ok();

  const $result = Selector('#clicked-link');
  await t.expect($result.textContent).contains(' -');

  await t.click($contactLink);
  /* Works locally, but not in Linux-based Azure Pipelines with latest Chrome
  await t
    .expect($result.innerText)
    .contains('https://axa.ch/en/private-customers.html'); */

  const $axaWorldwideLink = FooterAccessor.getSlotNode('column-0-title');

  await t.expect($axaWorldwideLink.visible).ok();
  await t.expect($axaWorldwideLink.textContent).eql('axa & you');

  const $facebookButton = FooterAccessor.getSlotNode('social-item-0');

  await t.expect($facebookButton.visible).ok();
  await t.click($facebookButton);
  /* Works locally, but not in Linux-based Azure Pipelines with latest Chrome
  await t
    .expect($result.textContent)
    .contains('https://www.facebook.com/axach/'); */
});

fixture('Footer - Demo Smoketest').page(
  `${host}/iframe.html?id=examples-footer-pure-html--callbacks&viewMode=story`
);

test('should render footer with working native callbacks', async t => {
  const $axaElem = await Selector(VERSIONED_TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector(VERSIONED_TAG).shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();

  await versionedFooterAccessor.assertBackgroundColor(t, $axaElemShadowEl);

  const $contactLink = versionedFooterAccessor.getSlotNode('column-0-item-0');

  await t.expect($contactLink.textContent).eql('Contact');
  await t.expect($contactLink.visible).ok();

  const $result = Selector('#clicked-link');
  await t.expect($result.textContent).contains(' -');

  await t.click($contactLink);

  const $facebookButton = versionedFooterAccessor.getSlotNode('social-item-0');

  await t.expect($facebookButton.visible).ok();
  await t.click($facebookButton);

  await t
    .expect($result.textContent)
    .contains('https://www.facebook.com/axach/');
});

fixture('Footer - without content').page(
  `${host}/iframe.html?id=examples-footer-pure-html--without-content&viewMode=story`
);

test('should not render empty accordions on mobile', async t => {
  const $footerTitleColumn0 = Selector(() =>
    document
      .querySelector(TAG)
      .shadowRoot.querySelector(`slot[name='column-0-title']`)
  );
  const $footerTitleColumn1 = Selector(() =>
    document
      .querySelector(TAG)
      .shadowRoot.querySelector(`slot[name='column-1-title']`)
  );

  await t.expect($footerTitleColumn0.exists).eql(false);
  await t.expect($footerTitleColumn1.exists).eql(false);
})
  .before(async t => {
    await t.resizeWindow(767, 767);
  })
  .after(async t => {
    await t.maximizeWindow();
  });
