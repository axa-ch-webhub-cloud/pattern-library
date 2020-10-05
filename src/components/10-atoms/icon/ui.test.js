import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

const TAG = 'axa-icon';

const axaIconItem = Selector(
  () => {
    return document.querySelector(TAG);
  },
  { dependencies: { TAG } }
);
const axaIconShadowRootString = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).withExactText('undefined');
const svgImageItem = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('svg');

fixture('Icon - set as named property').page(
  `${host}/iframe.html?id=components-icon--icon`
);
test('should render svg icon with correct size', async t => {
  await t.expect(svgImageItem.getStyleProperty('width')).eql('24px');
  await t.expect(svgImageItem.getStyleProperty('height')).eql('24px');
});

fixture('Icon - no icon is set').page(
  `${host}/iframe.html?id=components-icon--icon&knob-Do%20not%20set%20icon%20on%20component=true&knob-Load%20icon%20this%20way:=prop&knob-Value%20for%20%22Named%20property%22=download&knob-Value%20for%20%22URL%22=/svg/logo-axa.svg&knob-Value%20for%20%22SVG%20string%22=%3Csvg%20width=%22100px%22%20height=%22100px%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2096%2096%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M34.11%2074.27v4.6m34.5-48.23A21.21%2021.21%200%200%200%2048%2015.5a21.23%2021.23%200%200%200-20.53%2015.07m.43%2012.23a21.61%2021.61%200%200%200%2040.29-.07m1.19-12.18a4.91%204.91%200%200%200-.77.09%2019.36%2019.36%200%200%201-.42%2012.09%205.23%205.23%200%200%200%201.19.14A5.92%205.92%200%200%200%2075%2036.71a5.92%205.92%200%200%200-5.62-6.16zm-1.19%2012.18a19.36%2019.36%200%200%200%20.42-12.09%22/%3E%3Cpath%20d=%22M27.31%2042.87a4%204%200%200%200%20.59-.07%2019.34%2019.34%200%200%201-.43-12.23h-.16m29.51-8.23c-2.77%200-5-3.45-5-6.47m2.49%2010.58c-4.85%200-8.79-5.29-8.79-10.58M24.33%2076.94l12.84%202.53a61.28%2061.28%200%200%200%2022.35%200l12.84-2.53m-9.78-2.67v4.6%22/%3E%3Cpath%20d=%22M24.33%2076.94c0-13.26%2010.75-20.46%2024-20.46s24%207.2%2024%2020.46M54.57%2057.37a6.23%206.23%200%201%201-12.45%200M27.81%2042.73a5.23%205.23%200%200%201-1.19.14A5.92%205.92%200%200%201%2021%2036.71a5.92%205.92%200%200%201%205.65-6.16%204.91%204.91%200%200%201%20.77.09%22/%3E%3C/g%3E%3C/svg%3E`
);
test('should not render svg icon', async t => {
  await t.expect(axaIconItem.exists).ok();
  await t.expect(svgImageItem.exists).notOk();
});
test('should not render "undefined" string', async t => {
  await t.expect(axaIconShadowRootString.exists).notOk();
});

fixture('Icon - component properties').page(
  `${host}/iframe.html?id=components-icon--icon&knob-Load%20icon%20this%20way%20(Fill%20values%20below):=url&knob-Value%20for%20%22Named%20property%22=download&knob-Value%20for%20%22URL%22=/svg/logo-axa.svg&knob-Value%20for%20%22SVG%20string%22=%3Csvg%20width=%22100px%22%20height=%22100px%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2096%2096%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M34.11%2074.27v4.6m34.5-48.23A21.21%2021.21%200%200%200%2048%2015.5a21.23%2021.23%200%200%200-20.53%2015.07m.43%2012.23a21.61%2021.61%200%200%200%2040.29-.07m1.19-12.18a4.91%204.91%200%200%200-.77.09%2019.36%2019.36%200%200%201-.42%2012.09%205.23%205.23%200%200%200%201.19.14A5.92%205.92%200%200%200%2075%2036.71a5.92%205.92%200%200%200-5.62-6.16zm-1.19%2012.18a19.36%2019.36%200%200%200%20.42-12.09%22/%3E%3Cpath%20d=%22M27.31%2042.87a4%204%200%200%200%20.59-.07%2019.34%2019.34%200%200%201-.43-12.23h-.16m29.51-8.23c-2.77%200-5-3.45-5-6.47m2.49%2010.58c-4.85%200-8.79-5.29-8.79-10.58M24.33%2076.94l12.84%202.53a61.28%2061.28%200%200%200%2022.35%200l12.84-2.53m-9.78-2.67v4.6%22/%3E%3Cpath%20d=%22M24.33%2076.94c0-13.26%2010.75-20.46%2024-20.46s24%207.2%2024%2020.46M54.57%2057.37a6.23%206.23%200%201%201-12.45%200M27.81%2042.73a5.23%205.23%200%200%201-1.19.14A5.92%205.92%200%200%201%2021%2036.71a5.92%205.92%200%200%201%205.65-6.16%204.91%204.91%200%200%201%20.77.09%22/%3E%3C/g%3E%3C/svg%3E`
);
test('should set size to auto', async t => {
  await t.expect(axaIconItem.getAttribute('size')).eql('auto');
});
