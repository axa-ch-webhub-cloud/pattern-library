import { Selector, ClientFunction } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Text - basic functionality')
  .page(`${host}/iframe.html?id=components-atoms-text--text`)
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

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('18px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('27px');

  await t.resizeWindow(800, 600);

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('20px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('30px');
});

fixture('Text - Size 2')
  .page(
    `${host}/iframe.html?id=components-atoms-text--text&knob-variant=size-2`
  )
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 2', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant="size-2"] > *')
  );

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('16px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('24px');

  await t.resizeWindow(800, 600);

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('18px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('27px');
});

fixture('Text - Size 3')
  .page(
    `${host}/iframe.html?id=components-atoms-text--text&knob-variant=size-3`
  )
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 3', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant="size-3"] > *')
  );

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('14px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('17px');

  await t.resizeWindow(800, 600);

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('16px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('24px');
});

fixture('Text - Size 2 with custom tag')
  .page(
    `${host}/iframe.html?id=components-atoms-text--text&knob-variant=size-2&knob-add%20<p>%20Tag=true`
  )
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 2 with custom span tag', async t => {
  const $axaElemChild = await Selector(() =>
    document.querySelector('axa-text[variant="size-2"] > *')
  );

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('16px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('24px');

  await t.resizeWindow(800, 600);

  await t.expect(await $axaElemChild.getStyleProperty('font-size')).eql('18px');

  await t
    .expect(await $axaElemChild.getStyleProperty('line-height'))
    .eql('27px');
});

fixture('Text - Bold')
  .page(`${host}/iframe.html?id=components-atoms-text--text&knob-variant=bold`)
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

fixture('Text - Variant')
  .page(
    `${host}/iframe.html?id=components-atoms-text--text&knob-variant=size-1%20bold`
  )
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
  const $axaElem = await Selector(() =>
    document.querySelector('axa-text[variant]')
  ).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  const setText = ClientFunction(text => {
    const node = document.querySelector('axa-text');
    node.textContent = text;
    return text;
  });

  const oldText = $axaElem.textContent;
  const newText = 'Hello, world.';

  await setText(newText);
  await t.expect(await $axaElem.innerText).contains(newText);
  await t.expect(await $axaElem.innerHTML).contains('<p>');

  await setText(oldText);
  await t.expect(await $axaElem.innerText).contains(oldText);
  await t.expect(await $axaElem.innerHTML).contains('<p>');
});
