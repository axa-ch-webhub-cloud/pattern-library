import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Input File - basic functionality').page(
  `${host}/iframe.html?id=components-input-file--input-file`
);

const INPUT_FILE_TAG = 'axa-input-file';
const ICON_TAG = '.js-input-file__icon';
const INPUT_FILE_CLASS = '.a-input-file';
const INPUT_FILE_INPUT_CLASS = '.a-input-file__input';

test('should render input-file', async (t) => {
  const $axaElem = await Selector(INPUT_FILE_TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemEl = await $axaElem.find(INPUT_FILE_CLASS);
  await t.expect($axaElemEl.exists).ok();
});

test('should set input file property icon', async (t) => {
  const $axaElem = await Selector(INPUT_FILE_TAG);
  await t.expect($axaElem.exists).ok();
  const $axaIcon = await $axaElem.find(ICON_TAG);
  await t.expect($axaIcon.exists).ok();
});

test('should pass width to internal button', async (t) => {
  const expectedWidth = '300px';

  const axaInputFile = Selector('axa-input-file');
  const axaInputFileLabel = axaInputFile.find('.a-input-file');

  const setStyleWidthAttribute = ClientFunction((selector, styleValue) => {
    const element = selector();
    element.style.width = styleValue;
  });

  await setStyleWidthAttribute(axaInputFile, expectedWidth);
  await t
    .expect(axaInputFileLabel.getStyleProperty('width'))
    .eql(expectedWidth);
});

test('should set text correctly', async (t) => {
  const setText = ClientFunction((text) => {
    const inputFile = document.querySelector('axa-input-file');
    inputFile.text = text;
  });

  const getText = ClientFunction(() => {
    const inputFile = document.querySelector('axa-input-file');
    return inputFile.textContent.trim();
  });

  await setText('qwertz');
  await t.expect(await getText()).eql('qwertz');
});

fixture('Input File - set property accept').page(
  `${host}/iframe.html?id=components-input-file--input-file&knob-text=Upload&knob-accept=application/pdf`
);

test('should set input file accept', async (t) => {
  const $axaElm = await Selector('axa-input-file');
  const $axaElmInput = await $axaElm.find(INPUT_FILE_INPUT_CLASS);
  await t
    .expect((await $axaElmInput.getAttribute('accept')) === 'application/pdf')
    .ok();
});

fixture('Input File - set property multiple').page(
  `${host}/iframe.html?id=components-input-file--input-file&knob-text=Upload&knob-multiple=true`
);

test('should set input file multiple', async (t) => {
  const $axaElm = await Selector('axa-input-file');
  const $axaElmInput = await $axaElm.find(INPUT_FILE_INPUT_CLASS);
  await t.expect(await $axaElmInput.hasAttribute('multiple')).ok();
});

fixture('Input File - set property capture').page(
  `${host}/iframe.html?id=components-input-file--input-file&knob-text=Upload&knob-capture=true`
);

test('should set input file capture', async (t) => {
  const $axaElm = await Selector('axa-input-file');
  const $axaElmInput = await $axaElm.find(INPUT_FILE_INPUT_CLASS);
  await t.expect(await $axaElmInput.hasAttribute('capture')).ok();
});

fixture('Input File - react smoke test').page(
  `${host}/iframe.html?id=examples-input-file-react--story`
);

test('should render react input file', async (t) => {
  const $axaButton = await Selector('axa-input-file');
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(() =>
    document.querySelector('axa-input-file')
  );
  const $axaButtonShadowEl = await $axaButtonShadow.find(INPUT_FILE_CLASS);
  await t.expect($axaButtonShadowEl.exists).ok();
});
