import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Input file - basic functionality').page(
  `${host}/iframe.html?id=atoms-input-file--input-file-default`
);

const TAG = 'axa-input-file';
const CLASS = '.a-input-file';

test('should render input-file', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemEl = await $axaElem.find(CLASS);
  await t.expect($axaElemEl.exists).ok();
});
