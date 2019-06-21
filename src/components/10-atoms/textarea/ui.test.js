import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Textarea - basic functionality').page(`${host}/iframe.html?id=atoms-textarea--textarea-default`);

const TAG = 'axa-textarea';
const CLASS = '.a-textarea';





test('should render textarea', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaTagInnerEl = await $axaElem.find(CLASS);
  await t.expect($axaTagInnerEl.exists).ok();
});
