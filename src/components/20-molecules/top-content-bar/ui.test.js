import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Top content bar - basic functionality').page(
  `${host}/iframe.html?id=components-top-content-bar--story`
);

const TAG = 'axa-top-content-bar';
const CLASS = '.m-top-content-bar';

test('should render top-content-bar', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-top-content-bar').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render warning top-content-bar', async t => {
  const setWarning = ClientFunction(() => {
    document.querySelector('axa-top-content-bar').variant = 'warning';
  });
  await setWarning();
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-top-content-bar')
      .shadowRoot.querySelector('.m-top-content-bar__container')
  );
  await t
    .expect(await $axaElemShadow.getStyleProperty('background-color'))
    .eql('rgb(201, 20, 50)');
});

test('should render axa-button top-content-bar', async t => {
  const setButton = ClientFunction(() => {
    document.querySelector('axa-top-content-bar').ctatext = 'Click';
  });
  await setButton();
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemBtn = await Selector(() =>
    document
      .querySelector('axa-top-content-bar')
      .shadowRoot.querySelector('.js-button')
  );
  await t.expect($axaElemBtn.exists).ok();
  await t.expect($axaElemBtn.getAttribute('variant')).eql('inverted');
});

test('should render axa-button-link top-content-bar', async t => {
  const setButton = ClientFunction(() => {
    document.querySelector('axa-top-content-bar').ctatext = 'Click';
    document.querySelector('axa-top-content-bar').href = 'http://www.axa.ch';
  });
  await setButton();
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemBtn = await Selector(() =>
    document
      .querySelector('axa-top-content-bar')
      .shadowRoot.querySelector('.js-button-link')
  );
  await t.expect($axaElemBtn.exists).ok();
  await t.expect($axaElemBtn.getAttribute('variant')).eql('inverted');
  await t.expect($axaElemBtn.getAttribute('href')).eql('http://www.axa.ch');
});

fixture('Top content bar - inline link').page(
  `${host}/iframe.html?id=components-top-content-bar--story&knob-Text=Undefined%20flighting%20object%20detected%20in%20your%20region.%20People%20are%20paniking.%20Stay%20calm&knob-Add%20axa-link=Test`
);

test('should render link as hyperlink and underline in top-content-bar', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemLink = await Selector(() =>
    document.querySelector('axa-top-content-bar').querySelector('axa-link')
  );
  await t.expect($axaElemLink.exists).ok();
  await t
    .expect($axaElemLink.getAttribute('variant'))
    .eql('hyperlink-white-underline');
});
