import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Table - basic functionality')
  .page(`${host}/iframe.html?id=components-table--table&viewMode=story`)
  .beforeEach(async t => {
    await t.maximizeWindow();
  });

const TAG = 'axa-table';
const TOPMOST_TABLE = 'axa-table > table';

test('should render table', async t => {
  const $el = await Selector(TAG);
  await t.expect($el.exists).ok();
  const $elEl = await $el.find(TOPMOST_TABLE);
  await t.expect($elEl.exists).ok();
});

test('should render default table on mobile', async t => {
  await t.resizeWindow(300, 1000);
  const $el = await Selector('axa-table th');
  await t.expect(await $el.getStyleProperty('display')).eql('none');
});

fixture('Table - maxheight functionality').page(
  `${host}/iframe.html?args=innerscroll:600;maxheight:160&id=components-table--table&viewMode=story`
);

test('should render maxheight table on mobile', async t => {
  await t.resizeWindow(300, 400);
  const $el = await Selector('axa-table');
  const $elBody = await Selector('axa-table tbody');
  const $elChild = await Selector(TOPMOST_TABLE);
  const $elTh = await Selector('axa-table th');
  await t.expect(await $elTh.getStyleProperty('display')).eql('table-cell');
  await t.expect(await $elBody.getStyleProperty('overflow-y')).eql('auto');
  const maxheight = parseInt(await $el.getAttribute('maxheight'), 10);
  await t
    .expect(parseInt(await $elChild.getStyleProperty('height'), 10))
    .within(maxheight - 60, maxheight + 60);

  await t
    .expect(parseInt(await $el.getStyleProperty('height'), 10))
    .within(200, 250);
});

fixture('Table - innerscroll functionality').page(
  `${host}/iframe.html?args=innerscroll:500&id=components-table--table&viewMode=story`
);

test('should render innerscroll table on mobile', async t => {
  await t.resizeWindow(300, 1000);
  const $el = await Selector('axa-table');
  const $elChild = await Selector(TOPMOST_TABLE);
  const $elTh = await Selector('axa-table th');
  await t.expect(await $elTh.getStyleProperty('display')).eql('table-cell');
  await t.expect(await $el.getStyleProperty('overflow-x')).eql('auto');
  const innerscroll = parseInt(await $el.getAttribute('innerscroll'), 10);
  await t
    .expect(parseInt(await $elChild.getStyleProperty('width'), 10))
    .within(innerscroll - 1, innerscroll + 1);

  await t
    .expect(parseInt(await $el.getStyleProperty('width'), 10))
    .within(250, 305);
});
