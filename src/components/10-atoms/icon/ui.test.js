import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

const TAG = 'axa-icon';

const axaIconItem = Selector(
  () => {
    return document.querySelector(TAG);
  },
  { dependencies: { TAG } }
);
const svgImageItem = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('svg');

fixture('Icon - set as named property').page(
  `${host}/iframe.html?id=atoms-icon--icon`
);
test('should render svg icon', async t => {
  await t.expect(svgImageItem.exists).ok();
});

fixture('Icon - no icon is set').page(
  `${host}/iframe.html?id=atoms-icon--icon&knob-Select%20icon:=download&knob-Do%20not%20set%20icon%20property=true&knob-Load%20icon%20from%20this%20URL:=/svg/logo-axa.svg`
);
test('should not render svg icon', async t => {
  await t.expect(axaIconItem.exists).ok();
  await t.expect(svgImageItem.exists).notOk();
});

fixture('Icon - component properties').page(
  `${host}/iframe.html?id=atoms-icon--icon&knob-Select%20icon:=download&knob-Load%20icon%20from%20URL=true&knob-Load%20icon%20from%20this%20URL:=/svg/logo-axa.svg`
);
test('should set size to auto', async t => {
  await t.expect(axaIconItem.getAttribute('size')).eql('auto');
});
