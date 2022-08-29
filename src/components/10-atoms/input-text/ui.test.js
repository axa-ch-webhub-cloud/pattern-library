import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;
const TAG = 'axa-input-text';
const CLASS = '.a-input-text__input';

fixture('Input text - basic functionality').page(
  `${host}/iframe.html?id=components-input-text--input-text&viewMode=story`
);

test('should render input-text', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaTag = await Selector(() =>
    document.querySelector('axa-input-text')
  );
  const $axaTagElem = await $axaTag.find(CLASS);
  await t.expect($axaTagElem.exists).ok();
});

test('should type something input-text', async t => {
  const $axaTag = await Selector(() =>
    document.querySelector('axa-input-text')
  );
  const $axaTagElem = await $axaTag.find(CLASS);
  await t
    .selectText($axaTagElem)
    .pressKey('delete')
    .typeText($axaTagElem, 'Pattern Warriors')
    .expect($axaTagElem.value)
    .eql('Pattern Warriors');
});

test('should show error message and have the right color', async t => {
  const setInvalid = ClientFunction(() => {
    document.querySelector('axa-input-text').invalid = true;
    document.querySelector('axa-input-text').error = 'error';
  });
  await setInvalid();
  const $axaError = await Selector(() =>
    document.querySelector('.a-input-text__error')
  );
  await t.expect($axaError.innerText).eql('error');
  await t
    .expect(await $axaError.getStyleProperty('color'))
    .eql('rgb(201, 20, 50)');
});

test('input element should have correct html attributes', async t => {
  const $axaInputElement = await Selector(() => document.querySelector(TAG), {
    dependencies: { TAG },
  }).find(CLASS);

  await t.expect($axaInputElement.getAttribute('inputmode')).eql('');
  await t.expect($axaInputElement.getAttribute('pattern')).eql('.*'); // const PATTERN_DEFAULT @ index.js
});

fixture('Input text - Max Length').page(
  `${host}/iframe.html?args=checkMark:true;maxLength:5&id=components-input-text--input-text&viewMode=story`
);

test('should correctly show character count with counter within text', async t => {
  const $axaTag = await Selector(() =>
    document.querySelector('axa-input-text')
  );
  const $counterInfo = await $axaTag.find('.a-input-text__counter-info');
  await t.expect($counterInfo.textContent).contains('Still 4 characters left');
  const $checkMark = await $axaTag.find('.a-input-text__check');
  await t.expect($checkMark.exists).ok();

  const $input = await $axaTag.find(CLASS);
  await t
    .selectText($input)
    .typeText($input, 'Patt', { replace: true })
    .expect($input.value)
    .eql('Patt');

  await t.expect($checkMark.exists).ok();
  await t.expect($counterInfo.textContent).contains('Still 0 characters');

  await t
    .selectText($input)
    .typeText($input, 'Pattern Warriors', { replace: true })
    .expect($input.value)
    .eql('Patte');

  await t.expect($checkMark.exists).notOk();
  await t.expect($counterInfo.textContent).contains('Over character limit!');
  await t
    .expect($counterInfo.getStyleProperty('color'))
    .eql('rgb(201, 20, 50)');
});

fixture('Input text - no maxlength').page(
  `${host}/iframe.html?id=examples-input-text-pure-html--no-maxlength-set&viewMode=story`
);

test('should not show counter text if maxlength not set', async t => {
  const $axaTag = await Selector(() =>
    document.querySelector('axa-input-text')
  );
  const $counterInfo = await $axaTag.find('.a-input-text__counter-info');
  await t.expect($counterInfo.exists).notOk();
});

fixture('Input text - no counter').page(
  `${host}/iframe.html?args=&id=examples-input-text-pure-html--no-counter-set&viewMode=story`
);

test('should not show counter text if counter (text) not set', async t => {
  const $axaTag = await Selector(() =>
    document.querySelector('axa-input-text')
  );
  const $counterInfo = await $axaTag.find('.a-input-text__counter-info');
  await t.expect($counterInfo.exists).notOk();
});

fixture('Input text - maxLength works with autocomplete').page(
  `${host}/iframe.html?id=examples-input-text-react--story-simulate-autocomplete`
);

fixture('Input text - Set attribute and "numeric"').page(
  `${host}/iframe.html?args=inputmode:numeric&id=components-input-text--input-text&viewMode=story`
);

test('input element should have correct html attributes "pattern" and "numeric"', async t => {
  const $axaInputElement = await Selector(() => document.querySelector(TAG), {
    dependencies: { TAG },
  }).find(CLASS);

  await t.expect($axaInputElement.getAttribute('inputmode')).eql('numeric');
});

fixture('Input text - autofocus').page(
  `${host}/iframe.html?args=autofocus:true&id=components-input-text--input-text&viewMode=story`
);

test('should have focus after initial rendering', async t => {
  const hasFocus = ClientFunction(() => {
    const { activeElement } = document;
    const inputElement = document.querySelector('input');

    return activeElement === inputElement;
  });

  await t.expect(await hasFocus()).ok();
});

fixture('Input text - defaultValue for react').page(
  `${host}/iframe.html?args=defaultValue:qwertz&id=examples-input-text-react--input-text&viewMode=story`
);

test('should display correct default value', async t => {
  const getValue = ClientFunction(() => {
    const input = document.querySelector('input');
    return input.value;
  });

  await t.expect(await getValue()).eql('qwertz');
});

fixture('Input text - currency').page(
  `${host}/iframe.html?args=currency:chf&id=examples-input-text-react--input-text&viewMode=story`
);

test('should format value', async t => {
  const $axaInputElement = await Selector(() => document.querySelector(TAG), {
    dependencies: { TAG },
  }).find(CLASS);

  await t.typeText($axaInputElement, '1234', { replace: true });
  await t.pressKey('tab'); // to blur input-element

  await t.expect($axaInputElement.value).eql('CHF 1’234.00');
});

fixture('Input text - currency on controlled component').page(
  `${host}/iframe.html?id=examples-input-text-react--input-text-controlled-uncontrolled&viewMode=story`
);

test('should format value of controlled component', async t => {
  const $axaInputElement = await Selector(() =>
    document.querySelector('#controlled_currency')
  ).find(CLASS);

  await t.typeText($axaInputElement, '1234', { replace: true });
  await t.pressKey('tab'); // to blur input-element

  await t.expect($axaInputElement.value).eql('CHF 1’234.00');
});

fixture('Input text - currency formatting on first render react').page(
  `${host}/iframe.html?args=value:45;currency:chf;defaultValue:&id=examples-input-text-react--input-text&viewMode=story`
);

test('should format value on first render', async t => {
  const $axaInputElement = Selector(() => document.querySelector(TAG), {
    dependencies: { TAG },
  }).find(CLASS);

  await t.expect($axaInputElement.value).eql('CHF 45.00');
});

fixture('Input text - currency validation and property invalid').page(
  `${host}/iframe.html?args=value:2;currency:chf;error:fehler;invalid:true;defaultValue:&id=examples-input-text-react--input-text&viewMode=story`
);

test('should display error when invalid is set', async t => {
  const errorLabel = Selector(() => document.querySelector(TAG), {
    dependencies: { TAG },
  }).find('.a-input-text__error');

  const getBorderColor = ClientFunction(() => {
    const inputText = document.querySelector('axa-input-text');
    const input = inputText.querySelector('input');

    return window.getComputedStyle(input).getPropertyValue('border-color');
  });

  await t.expect(errorLabel.exists).ok();
  await t.expect(errorLabel.innerText).eql('fehler');
  await t.expect(await getBorderColor()).eql('rgb(201, 20, 50)');
});

fixture('Input-Text - React onKeyUp').page(
  `${host}/iframe.html?args=&id=examples-input-text-react--input-text-on-key-up-event&viewMode=story`
);

test('should fire onKeyUp callback on user input', async t => {
  const testoutput = await Selector(() =>
    document.querySelector('#inputtext-react-testoutput')
  ).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  const realInputField = await Selector(() =>
    document.querySelector('axa-input-text').querySelector('input')
  );

  await t.typeText(realInputField, 'x', {
    replace: true,
  });

  await t.expect(await testoutput().innerHTML).eql('x');
});
