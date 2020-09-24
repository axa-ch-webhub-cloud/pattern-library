import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;
const TAG = 'axa-input-text';
const CLASS = '.a-input-text__input';

fixture('Input text - basic functionality').page(
  `${host}/iframe.html?id=components--input-text`
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

fixture('Input text - Form').page(
  `${host}/iframe.html?id=examples-input-text-pure-html--in-a-form`
);

test('should render label', async t => {
  const $axaLabel = await Selector('.a-input-text__label');
  await t.expect($axaLabel.exists).ok();
});

test('should submit inputs correctly in form', async t => {
  // default
  const $InputText = await Selector(() => document.getElementById('default'));
  const text = 'Warrior';
  await t.typeText($InputText, text);

  // email
  const $InputEmail = await Selector(() => document.getElementById('email'));
  const email = 'pattern@warrior.ch';
  await t.typeText($InputEmail, email, { paste: true });

  // password
  const $InputPassword = await Selector(() =>
    document.getElementById('password')
  );
  const password = 'geheim';
  await t.wait(50).typeText($InputPassword, password);

  await t.click('#submit');
  await t
    .wait(50)
    .expect((await Selector('#default-id')).innerText)
    .eql(`default: ${text}`);
  await t
    .expect((await Selector('#email-id')).innerText)
    .eql(`email: ${email}`);
  await t
    .expect((await Selector('#password-id')).innerText)
    .eql(`password: ${password}`);
});

fixture('Input text - Max Length').page(
  `${host}/iframe.html?id=components--input-text&knob-label*=&knob-name*=&knob-refid=&knob-placeholder=&knob-value=&knob-error=&knob-info=&knob-type=text&knob-maxlength=5&knob-counterMax=Character%20limit%20reached!&knob-checkmark=true`
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
  await t.expect($counterInfo.textContent).contains('Character limit reached!');
  await t
    .expect($counterInfo.getStyleProperty('color'))
    .eql('rgb(201, 20, 50)');
});

fixture('Input text - no maxlength').page(
  `${host}/iframe.html?id=examples-input-text-pure-html--no-maxlength-set`
);

test('should not show counter text if maxlength not set', async t => {
  const $axaTag = await Selector(() =>
    document.querySelector('axa-input-text')
  );
  const $counterInfo = await $axaTag.find('.a-input-text__counter-info');
  await t.expect($counterInfo.exists).notOk();
});

fixture('Input text - no counter').page(
  `${host}/iframe.html?id=examples-input-text-pure-html--no-counter-set`
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

test('should cut text when autocomplete sets value over maxLength', async t => {
  // in the story, the autocomplete function is only simulated after a timeout, therefore wait here
  await t.wait(2000);
  const inputValue = await ClientFunction(
    () => document.querySelector('#fix-id-86452623').value
  );
  await t.wait(1000);
  // story adds 123456789 but here it should be cut to the limit
  await t.expect(await inputValue()).eql('1234');
});

fixture('Input text - Set attributes "pattern" and "numeric"').page(
  `${host}/iframe.html?id=components--input-text&knob-label*=&knob-name*=&knob-refId=&knob-placeholder=&knob-error=&knob-info=&knob-defaultValue=&knob-type=text&knob-pattern=[0-9]*&knob-inputmode=numeric&knob-refid=&knob-value=&knob-maxlength=50&knob-counter=Still%20##counter##%20characters%20left&knob-counterMax=Over%20character%20limit!`
);
test('input element should have correct html attributes "pattern" and "numeric"', async t => {
  const $axaInputElement = await Selector(() => document.querySelector(TAG), {
    dependencies: { TAG },
  }).find(CLASS);

  await t.expect($axaInputElement.getAttribute('inputmode')).eql('numeric');
  await t.expect($axaInputElement.getAttribute('pattern')).eql('[0-9]*');
});

fixture('Input text - autofocus').page(
  `${host}/iframe.html?id=components--input-text&knob-label*=&knob-name*=&knob-refid=&knob-placeholder=&knob-value=&knob-error=&knob-info=&knob-type=text&knob-maxlength=50&knob-autofocus=true&knob-counter=Still ##counter## characters left&knob-counterMax=Over character limit!&knob-pattern=&knob-inputmode=`
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
  `${host}/iframe.html?id=examples-input-text-react--story&knob-label*=&knob-name*=&knob-refId=&knob-placeholder=&knob-error=&knob-info=&knob-defaultValue=qwertz&knob-type=text&knob-pattern=&knob-inputmode=`
);

test('should display correct default value', async t => {
  const getValue = ClientFunction(() => {
    const input = document.querySelector('input');
    return input.value;
  });

  await t.expect(await getValue()).eql('qwertz');
});

fixture('Input text - currency').page(
  `${host}/iframe.html?id=components--input-text&knob-label*=&knob-name*=&knob-refid=&knob-placeholder=&knob-value=&knob-currency=chf&knob-error=&knob-info=&knob-checkmark=&knob-disabled=&knob-required=&knob-invalid=&knob-type=text&knob-maxlength=50&knob-counter=Still ##counter## characters left&knob-counterMax=Over character limit!&knob-pattern=&knob-inputmode=&knob-autofocus=`
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
  `${host}/iframe.html?id=examples-input-text-react--controlled-uncontrolled`
);

test('should format value of controlled component', async t => {
  const $axaInputElement = await Selector(() =>
    document.querySelector('#controlled_currency')
  ).find(CLASS);

  await t.typeText($axaInputElement, '1234', { replace: true });
  await t.pressKey('tab'); // to blur input-element

  await t.expect($axaInputElement.value).eql('CHF 1’234.00');
});

fixture('Input-Text - React onKeyUp').page(
  `${host}/iframe.html?id=examples-input-text-react--using-onKeyUp-event&viewMode=story`
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
