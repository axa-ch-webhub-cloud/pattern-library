import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Fieldset - basic functionality').page(
  `${host}/iframe.html?id=atoms-fieldset--fieldset-default`
);

const TAG = 'axa-fieldset';

test('should render fieldset', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
});
