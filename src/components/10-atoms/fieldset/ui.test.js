import { Selector } from 'testcafe';

fixture('Fieldset - basic functionality').page(
  'http://localhost:9999/iframe.html?id=atoms-fieldset--fieldset-default'
);

const TAG = 'axa-fieldset';

test('should render fieldset', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
});
