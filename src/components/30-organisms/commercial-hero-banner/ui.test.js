// import { Selector } from 'testcafe';

// const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

// fixture('Commercial hero banner - basic functionality').page(
//   `${host}/iframe.html?id=organisms-commercial-hero-banner--commercial-hero-banner`
// );

// const TAG = 'axa-commercial-hero-banner';
// const CLASS = '.o-commercial-hero-banner';

// test.only('should render commercial-hero-banner', async t => {
//   await t.debug();
//   const $axaElem = await Selector(TAG);
//   await t.expect($axaElem.exists).ok();
//   const $axaElemShadow = await Selector(
//     () => document.querySelector('axa-commercial-hero-banner').shadowRoot
//   );
//   const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
//   await t.expect($axaElemShadowEl.exists).ok();
// });
