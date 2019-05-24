import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Image upload - basic functionality').page(`${host}/iframe.html?id=molecules-image-upload--image-upload-default`);

const TAG = 'axa-image-upload';
const CLASS = '.m-image-upload';

test('should render image-upload', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(() => document.querySelector('axa-image-upload').shadowRoot);
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});