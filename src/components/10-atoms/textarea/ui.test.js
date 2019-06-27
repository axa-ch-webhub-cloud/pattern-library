import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Textarea - basic functionality').page(
  `${host}/iframe.html?id=atoms-textarea--textarea-default`
);

const TAG = 'axa-textarea';
const CLASS = '.a-textarea__textarea';

test('should render textarea', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaTag = await Selector(() => document.querySelector('axa-textarea'));
  const $axaTagElem = await $axaTag.find(CLASS);
  await t.expect($axaTagElem.exists).ok();
});

test('should type something in textarea', async t => {
  const $axaTag = await Selector(() => document.querySelector('axa-textarea'));
  const $axaButtonTagEl = await $axaTag.find(CLASS);
  await t
    .typeText($axaButtonTagEl, 'Pattern Warriors')
    .expect($axaButtonTagEl.value)
    .eql('Pattern Warriors');
});

test('should show error message and have the right color', async t => {
  const setInvalid = ClientFunction(() => {
    document.querySelector('axa-textarea').valid = false;
    document.querySelector('axa-textarea').error = 'error';
  });
  await setInvalid();
  const $messages = await Selector(() =>
    document.querySelector('.a-textarea__messages')
  );
  await t.expect($messages.innerText).contains('error');
  await t
    .expect(await $messages.getStyleProperty('color'))
    .eql('rgb(201, 20, 50)');
});

test('should show counter', async t => {
  const setCounter = ClientFunction(() => {
    const textarea = document.createElement('axa-textarea');
    textarea.className = 'counter';
    textarea.maxLength = 3;
    textarea.counter = 'still ##counter## characters left';
    document.getElementById('root').appendChild(textarea);
  });
  await setCounter();
  const $messages = await Selector(() => document.querySelector('.counter'));
  await t.expect($messages.innerText).contains('still 3 characters left');
});

test('should show counterMax', async t => {
  const setCounterMax = ClientFunction(() => {
    const textarea = document.createElement('axa-textarea');
    textarea.className = 'counter';
    textarea.maxLength = 3;
    textarea.counterMax = 'The maximum character length has been reached';
    document.getElementById('root').appendChild(textarea);
  });
  await setCounterMax();
  const $messages = await Selector(() => document.querySelector('.counter'));
  const $textarea = await Selector(() => document.querySelector('.counter .a-textarea__textarea'));
  await t
    .typeText($textarea, '123')
    .expect($messages.innerText)
    .eql('The maximum character length has been reached');
});
