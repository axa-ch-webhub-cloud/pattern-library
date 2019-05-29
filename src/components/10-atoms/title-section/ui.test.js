import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Title section - basic functionality').page(
  `${host}/iframe.html?id=atoms-title-section--title-section`
);

const TAG = 'axa-title-section';
const CLASS = '.a-title-section';

test('should render title-section', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-title-section').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

fixture('Title section - basic functionality').page(
  `${host}/iframe.html?id=atoms-title-section--title-section-white`
);

test('should render a title with white color', async t => {
  const getTextColor = ClientFunction(() => {
    const titleSection = document.querySelector('axa-title-section').shadowRoot;
    return window
      .getComputedStyle(titleSection.querySelector('.a-title-section--white'))
      .getPropertyValue('color');
  });
  const measuredColor = await getTextColor();
  await t.expect(measuredColor).eql('rgb(255, 255, 255)');
});
