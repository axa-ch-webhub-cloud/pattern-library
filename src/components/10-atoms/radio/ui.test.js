import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Radio - basic functionality').page(
  `${host}/iframe.html?id=atoms-radio--radio-default`
);

test('should render radio', async t => {
  const radio = await Selector('axa-radio');
  await t.expect(radio.exists).ok();
});
