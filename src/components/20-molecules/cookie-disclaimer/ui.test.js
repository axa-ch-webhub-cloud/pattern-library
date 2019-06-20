import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Cookie disclaimer - basic functionality').page(`${host}/iframe.html?id=molecules-cookie-disclaimer--cookie-disclaimer-default`);

const TAG = 'axa-cookie-disclaimer';
const CLASS = '.m-cookie-disclaimer';

test('should render cookie-disclaimer', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-cookie-disclaimer').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});