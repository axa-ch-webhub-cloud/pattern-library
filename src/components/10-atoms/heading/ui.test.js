import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Heading - basic functionality').page(
  `${host}/iframe.html?id=atoms-heading--heading`
);

const TAG = 'axa-heading';
const CLASS = '.a-heading';

async function _getHeadingElement(t) {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() =>
    document.querySelector('axa-heading').shadowRoot.querySelector('.a-heading')
  );
  // const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  const $axaElemShadowEl = $axaElemShadow;
  await t.expect($axaElemShadowEl.exists).ok();
  return $axaElemShadowEl;
}

test('should render h1 primary correctly', async t => {
  const $axaElemShadowEl = await _getHeadingElement(t);

  await t
    .expect($axaElemShadowEl.getStyleProperty('font-family'))
    .eql('"Source Sans Pro", Arial, sans-serif');
  // font-family: "Source Sans Pro", Arial, sans-serif;
  //   font-weight: 400;
  //   font-style: normal;
  //   font-size: 24px;
  //   line-height: 29px;
  //   letter-spacing: -0.01em;
});
