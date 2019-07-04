import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Text - basic functionality')
  .page(`${host}/iframe.html?id=atoms-text--text-default`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

const TAG = 'axa-text';
const CLASS = '.a-text';

test('should render text', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-text')
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should have correct font definitions for text size 1', async t => {
  const $axaElemShadow = await Selector(() =>
    document.querySelector('axa-text').querySelector('.a-text')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('18px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('27px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('20px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('30px');
});

fixture('Text - Size 2')
  .page(`${host}/iframe.html?id=atoms-text--text-size-2`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 2', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-text[variant="size-2"]')
      .querySelector('.a-text')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('16px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('24px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('18px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('27px');
});

fixture('Text - Size 3')
  .page(`${host}/iframe.html?id=atoms-text--text-size-3`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 3', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-text[variant="size-3"]')
      .querySelector('.a-text')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('14px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('17px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('16px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('24px');
});

fixture('Text - Size 2 with custom tag')
  .page(`${host}/iframe.html?id=atoms-text--text-size-2-with-custom-span-tag`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for text size 2 with custom span tag', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-text[variant="size-2"]')
      .querySelector('.a-text')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('16px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('24px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('18px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('27px');
});


fixture('Text - Bold')
  .page(`${host}/iframe.html?id=atoms-text--text-bold`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font weight for text bold', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-text[variant="bold"]')
      .querySelector('.a-text')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-weight'))
    .eql('700');
});
