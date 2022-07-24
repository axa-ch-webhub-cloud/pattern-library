import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Text - basic functionality')
  .page(`${host}/iframe.html?args=&id=components-text--text&viewMode=story`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

const TAG = 'axa-text';

test('should render text', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
});

test('should have correct font definitions for text size 1', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text > *')
  );

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('20px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('30px');

  await t.resizeWindow(800, 600);

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('20px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('30px');
});

fixture('Text - Size 2')
  .page(`${host}/iframe.html?args=variant:size-2&id=components-text--text`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 2', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant="size-2"] > *')
  );

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('18px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('27px');

  await t.resizeWindow(800, 600);

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('18px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('27px');
});

fixture('Text - Size 3')
  .page(`${host}/iframe.html?args=variant:size-3&id=components-text--text`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 3', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant="size-3"] > *')
  );

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('16px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('24px');

  await t.resizeWindow(800, 600);

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('16px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('24px');
});

fixture('Text - Size 2 with custom tag')
  .page(
    `${host}/iframe.html?args=variant:size-2;wrapSlotInSpan:true&id=components-text--text&viewMode=story`
  )
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 2 with custom span tag', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant="size-2"] > *')
  );

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('18px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('27px');

  await t.resizeWindow(800, 600);

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('18px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('27px');
});

fixture('Text - Bold')
  .page(
    `${host}/iframe.html?args=variant:bold&id=components-text--text&viewMode=story`
  )
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font weight for text bold', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant="bold"] > *')
  );

  await t
    .expect(await $axaElemChild.getStyleProperty('font-weight'))
    .eql('700');
});

fixture('Text - Semibold').page(
  `${host}/iframe.html?args=variant:semibold&id=components-text--text&viewMode=story`
);

test('should have correct font weight for text semibold', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant="semibold"] > *')
  );

  await t
    .expect(await $axaElemChild.getStyleProperty('font-weight'))
    .eql('600');
});

fixture('Text - Variant')
  .page(`${host}/iframe.html?args=&id=components-text--text&viewMode=story`)
  .beforeEach(async t => {
    await t.resizeWindow(800, 600);
  });

test('should be mutually exclusive', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant] > *')
  );

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('20px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('30px');

  // 'size-1' attributes should be set, but not the 'bold' ones.
  await t
    .expect(await $axaElemChild.getStyleProperty('font-weight'))
    .notEql('700');
});

test('should update pure text dynamically and wrap in <p>', async t => {
  const $axaElem = Selector(() =>
    document.querySelector('axa-text[variant]')
  ).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  const setText = ClientFunction(text => {
    const node = document.querySelector('axa-text');
    node.textContent = text;
    return text;
  });

  const oldText = await $axaElem.textContent;
  const newText = 'Hello, world.';

  await setText(newText);
  await t.expect($axaElem.textContent).contains(newText);
  await t.expect($axaElem.innerHTML).contains('<p>');

  await setText(oldText);
  await t.expect($axaElem.textContent).contains(oldText);
  await t.expect($axaElem.innerHTML).contains('<p>');
});

fixture('Text - React')
  .page(
    `${host}/iframe.html?args=&id=examples-text-react--text-dynamic-children&viewMode=story`
  )
  .beforeEach(async t => {
    await t.resizeWindow(800, 600);
  });

test('should update dynamically for pure and HTML texts', async t => {
  const TESTS = [
    [true, 'This is example pure text no. 1', '.js-pure-text'],
    [false, 'This is example HTML text no. 1', '.js-update'],
    [false, 'This is example HTML text no. 2', '.js-pure-text'],
    [true, 'This is example pure text no. 2'],
  ];

  const $axaElem = Selector(() =>
    document.querySelector('axa-text')
  ).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  let [isPure, expectation, clickSelector] = TESTS[0];

  // existing text is wrapped properly and as expected
  await t.expect($axaElem.innerHTML).contains(isPure ? '<p>' : '<span>');
  await t.expect($axaElem.innerHTML).notContains(isPure ? '<span>' : '<p>');
  await t.expect($axaElem.textContent).eql(expectation);

  // change test parameter
  await t.click(clickSelector);

  await t.wait(50);

  /* eslint-disable prefer-destructuring */
  [isPure, expectation, clickSelector] = TESTS[1];

  await t.expect($axaElem.innerHTML).contains(isPure ? '<p>' : '<span>');
  await t.expect($axaElem.innerHTML).notContains(isPure ? '<span>' : '<p>');
  await t.expect($axaElem.textContent).eql(expectation);

  // change test parameter
  await t.click(clickSelector);

  await t.wait(50);

  [isPure, expectation, clickSelector] = TESTS[2];

  await t.expect($axaElem.innerHTML).contains(isPure ? '<p>' : '<span>');
  await t.expect($axaElem.innerHTML).notContains(isPure ? '<span>' : '<p>');
  await t.expect($axaElem.textContent).eql(expectation);

  // change test parameter
  await t.click(clickSelector);

  await t.wait(50);

  [isPure, expectation, clickSelector] = TESTS[3];

  await t.expect($axaElem.innerHTML).contains(isPure ? '<p>' : '<span>');
  await t.expect($axaElem.innerHTML).notContains(isPure ? '<span>' : '<p>');
  await t.expect($axaElem.textContent).eql(expectation);
});
