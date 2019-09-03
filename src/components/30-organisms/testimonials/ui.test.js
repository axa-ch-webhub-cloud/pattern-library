import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Testimonials - basic functionality').page(
  `${host}/iframe.html?id=organisms-testimonials--testimonials`
);

const TAG = 'axa-testimonials';
const CLASS = '.o-testimonials';
const $axaElemShadow = Selector(
  () => document.querySelector(TAG).shadowRoot,
  { dependencies: { TAG } }
);

test('should render testimonials', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();

  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should set title text', async t => {
  const $titleElement = await $axaElemShadow.find('.o-testimonials__title');
  await t.expect($titleElement.textContent).eql('Customer Reviews');
});

test('should set subtitle text', async t => {
  const $subTitleElement = await $axaElemShadow.find('.o-testimonials__subtitle');
  await t.expect($subTitleElement.textContent).eql('AXA works hard to provide the best service possible to its customers.');
});

test('should find axa-carousel tag if attribute showallinline is not set', async t => {
  const $carouselElement = await $axaElemShadow.find('axa-carousel');
  await t.expect($carouselElement.exists).ok();
});

fixture('Testimonials - attribute showallinline is set').page(
  `${host}/iframe.html?id=organisms-testimonials--testimonials&knob-title=Customer Reviews&knob-Text=AXA works hard to provide the best service possible to its customers.&knob-autorotatedisabled=&knob-autorotatetime=5000&knob-keysenabled=true&knob-showallinline=true`
);

test('should find inline class if attribute showallinline is set', async t => {
  const $inlineElement = await $axaElemShadow.find('.o-testimonials__content__inline');
  await t.expect($inlineElement.exists).ok();
});
