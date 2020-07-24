import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Testimonials - basic functionality').page(
  `${host}/iframe.html?id=components-testimonials--testimonials`
);

const TAG = 'axa-testimonials';
const CLASS = '.o-testimonials';
const $elementTestimonialShadow = Selector(
  () => document.querySelector(TAG).shadowRoot,
  { dependencies: { TAG } }
);
const $elementTestimonial = Selector(() => document.querySelector(TAG), {
  dependencies: { TAG },
});

test('should render testimonials', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();

  const $elementTestimonialShadowEl = await $elementTestimonialShadow.find(
    CLASS
  );
  await t.expect($elementTestimonialShadowEl.exists).ok();
});

test('should set title text', async t => {
  const $titleElement = await $elementTestimonialShadow.find(
    '.o-testimonials__title'
  );
  await t.expect($titleElement.textContent).eql('Customer Reviews');
});

test('should set subtitle text', async t => {
  const $subTitleElement = await $elementTestimonialShadow.find(
    '.o-testimonials__subtitle'
  );
  await t
    .expect($subTitleElement.textContent)
    .eql(
      'AXA works hard to provide the best service possible to its customers.'
    );
});

test('should find axa-carousel tag if attribute showallinline is not set', async t => {
  const $carouselElement = await $elementTestimonialShadow.find('.js-carousel');
  await t.expect($carouselElement.exists).ok();
});

test('should set text to uppercase for elements with class "o-testimonials__author"', async t => {
  const $firstAuthorElementInDocument = await $elementTestimonial.find(
    '[class="o-testimonials__author"]'
  );
  await t
    .expect(
      await $firstAuthorElementInDocument.getStyleProperty('text-transform')
    )
    .eql('uppercase');
});

fixture('Testimonials - attribute showallinline is set').page(
  `${host}/iframe.html?id=components-testimonials--testimonials&knob-title=Customer Reviews&knob-Text=AXA works hard to provide the best service possible to its customers.&knob-autorotatedisabled=&knob-autorotatetime=5000&knob-keysenabled=true&knob-showallinline=true`
);

test('should find inline class if attribute showallinline is set', async t => {
  const $inlineElement = await $elementTestimonialShadow.find(
    '.o-testimonials__content__inline'
  );
  await t.expect($inlineElement.exists).ok();
});

test('should set margin for elements with class "o-testimonials__vertical-margin"', async t => {
  const $firstAuthorElementInDocument = await $elementTestimonial.find(
    '[class="o-testimonials__vertical-margin"]'
  );

  await t
    .expect(
      await $firstAuthorElementInDocument.getStyleProperty('margin-bottom')
    )
    .eql('20px')
    .expect(await $firstAuthorElementInDocument.getStyleProperty('margin-top'))
    .eql('20px');
});
