import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Textarea - basic functionality').page(
  `${host}/iframe.html?id=components-textarea--story`
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
  const setupTextarea = ClientFunction(() => {
    const textarea = document.createElement('axa-textarea');
    textarea.className = 'my-textarea';
    document.getElementById('root').appendChild(textarea);
  });
  await setupTextarea();
  const [textarea, nativeTextarea] = [
    await Selector('.my-textarea'),
    await Selector(`.my-textarea ${CLASS}`),
  ];
  await t.expect(textarea.exists).ok();
  await t.expect(nativeTextarea.exists).ok();
  await t.typeText(nativeTextarea, 'Pattern Warriors');
  await t.expect(textarea.value).eql('Pattern Warriors');
});

test('should show error message and have the right color', async t => {
  const setInvalid = ClientFunction(() => {
    document.querySelector('axa-textarea').invalid = true;
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
  await t.expect($messages.innerText).contains('still 2 characters left');
});

test('should show counterMax', async t => {
  const setCounterMax = ClientFunction(() => {
    const textarea = document.createElement('axa-textarea');
    textarea.className = 'counter';
    textarea.maxLength = 3;
    textarea.counter = 'still ##counter## characters left';
    textarea.counterMax = 'The maximum character length has been reached';
    textarea.checkMark = true;
    document.getElementById('root').appendChild(textarea);
  });

  await setCounterMax();

  const $messages = await Selector(() => document.querySelector('.counter'));
  const $textarea = await Selector(() =>
    document.querySelector('.counter .a-textarea__textarea')
  );
  const $checkmark = await Selector(() =>
    document.querySelector('.counter .a-textarea__check')
  );
  const $counterMaxMessage = await Selector(() =>
    document.querySelector('.counter .a-textarea__messages--error')
  );

  await t.typeText($textarea, '12');

  await t.expect($messages.innerText).contains('still 0 characters left');
  // message is displayed after typing enough characters to hit the limit
  await t
    .typeText($textarea, '3')
    .expect($messages.innerText)
    .contains('The maximum character length has been reached');
  // both the textarea UI...
  await t.expect($textarea.hasClass('a-textarea__textarea--error')).ok();
  // ... and the counterMax message UI are in visual error state
  await t.expect($counterMaxMessage.exists).ok();
  // the checkmark is missing
  await t.expect($checkmark.exists).notOk();
});
