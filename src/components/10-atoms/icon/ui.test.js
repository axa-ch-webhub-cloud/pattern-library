import { Selector } from "testcafe";

fixture('Icon - show all icons').page('http://localhost:9999/iframe.html?id=atoms-icon--icon-show-all-icons');

const ICON_TAG = 'axa-icon';
const SVG_TAG = 'svg';

test('should render icon', async t => {
  const $axaIcon = await Selector(ICON_TAG);
  await t.expect($axaIcon.exists).ok();
  const $axaIconShadow = await Selector(() => document.querySelector('axa-icon').shadowRoot);
  const $axaIconShadowEl = await $axaIconShadow.find(SVG_TAG);
  await t.expect($axaIconShadowEl.exists).ok();
});


// TODO fix serving static files in testcafe
// fixture('Icon - icon from a resource').page('http://localhost:9999/iframe.html?id=atoms-icon--icon-icon-from-a-resource');
//
// test('should render icon from a resource', async t => {
//   const $axaIcon = await Selector(ICON_TAG);
//   await t.expect($axaIcon.exists).ok();
//   const $axaIconShadow = await Selector(() => document.querySelector('axa-icon').shadowRoot);
//   const $axaIconShadowEl = await $axaIconShadow.find(SVG_TAG);
//   await t.expect($axaIconShadowEl.exists).ok();
// });
