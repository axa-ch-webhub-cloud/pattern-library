import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Title primary - basic functionality')
  .page(`${host}/iframe.html?id=atoms-title-primary--title-primary`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should render title-primary', async t => {
  const $axaElem = await Selector('axa-title-primary');
  await t.expect($axaElem.exists).ok();
});

test('should have correct font definitions for title size 1', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-title-primary')
      .shadowRoot.querySelector('.a-title-primary')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('24px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('29px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('36px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('42px');

  await t.resizeWindow(1400, 800);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('62px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('72px');
});

fixture('Title primary - basic functionality')
  .page(`${host}/iframe.html?id=atoms-title-primary--title-primary&knob-variant=size-2`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for title size 2', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-title-primary[variant="size-2"]')
      .shadowRoot.querySelector('.a-title-primary')
  );

  // Same Size for small and medium!
  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('24px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('29px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('30px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('34px');

  await t.resizeWindow(1400, 800);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('48px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('54px');
});

fixture('Title primary - basic functionality')
  .page(`${host}/iframe.html?id=atoms-title-primary--title-primary&knob-variant=size-3`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for title size 3', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-title-primary[variant="size-3"]')
      .shadowRoot.querySelector('.a-title-primary')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('20px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('26px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('28px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('32px');

  await t.resizeWindow(1400, 800);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('36px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('42px');
});

fixture('Title primary - basic functionality')
  .page(`${host}/iframe.html?id=atoms-title-primary--title-primary&knob-variant=size-4`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for title size 4', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-title-primary[variant="size-4"]')
      .shadowRoot.querySelector('.a-title-primary')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('20px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('26px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('25px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('29px');

  await t.resizeWindow(1400, 800);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('28px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('32px');
});

fixture('Title primary - basic functionality')
  .page(`${host}/iframe.html?id=atoms-title-primary--title-primary&knob-variant=size-5`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for title size 5', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-title-primary[variant="size-5"]')
      .shadowRoot.querySelector('.a-title-primary')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('18px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('20px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('20px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('26px');

  await t.resizeWindow(1400, 800);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('24px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('29px');
});

fixture('Title primary - basic functionality')
  .page(`${host}/iframe.html?id=atoms-title-primary--title-primary&knob-variant=size-6`)
  .beforeEach(async t => {
    await t.resizeWindow(380, 680);
  });

test('should have correct font definitions for title size 6', async t => {
  const $axaElemShadow = await Selector(() =>
    document
      .querySelector('axa-title-primary[variant="size-6"]')
      .shadowRoot.querySelector('.a-title-primary')
  );

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('16px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('18px');

  await t.resizeWindow(800, 600);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('18px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('20px');

  await t.resizeWindow(1400, 800);

  await t
    .expect(await $axaElemShadow.getStyleProperty('font-size'))
    .eql('20px');

  await t
    .expect(await $axaElemShadow.getStyleProperty('line-height'))
    .eql('26px');
});
