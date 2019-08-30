import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Icon - show all icons').page(
  `${host}/iframe.html?id=atoms-icon--icon-show-all-icons`
);

const ICON_TAG = 'axa-icon';
const SVG_TAG = 'svg';

test('should render icon', async t => {
  const $axaIcon = await Selector(ICON_TAG);
  await t.expect($axaIcon.exists).ok();
  const $axaIconShadow = await Selector(
    () => document.querySelector('axa-icon').shadowRoot
  );
  const $axaIconShadowEl = await $axaIconShadow.find(SVG_TAG);
  await t.expect($axaIconShadowEl.exists).ok();
});
