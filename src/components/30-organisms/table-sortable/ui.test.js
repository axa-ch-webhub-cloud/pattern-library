import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Table Sortable - basic functionality')
  .page(
    `${host}/iframe.html?id=organisms-table-sortable--table-sortable-default`
  )
  .beforeEach(async t => {
    await t.maximizeWindow();
  });

test('should render sortable table', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $elShadow = await Selector(
    () => document.querySelector('axa-table-sortable').shadowRoot
  );
  const $elShadowEl = await $elShadow.find('.o-table-sortable');
  await t.expect($elShadowEl.exists).ok();
});

test('should have aria ascending when passing ASC in model', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnZero = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[0];
  });
  await t.expect($columnZero.getAttribute('aria-sort')).eql('ascending');
});

test('should have aria descending when passing DESC in model', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnThree = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[2];
  });
  await t.expect($columnThree.getAttribute('aria-sort')).eql('descending');
});

test('should have aria none when passing nothing in model', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnFour = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[3];
  });
  await t.expect($columnFour.getAttribute('aria-sort')).eql('none');
});

test('should sort strings', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnTwo = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[1];
  });

  const $columnTwoFirstRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[0];
    return firstRow.querySelectorAll('td')[1];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  const $columnTwoLastRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[2];
    return firstRow.querySelectorAll('td')[1];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  await t
    .click($columnTwo)
    .expect($columnTwo.getAttribute('aria-sort'))
    .eql('descending');
  await t
    .expect(await $columnTwoFirstRow.innerHTML)
    .eql('<!----><span>Z Some Text</span><!---->');
  await t
    .expect(await $columnTwoLastRow.innerHTML)
    .eql('<!----><span>G Some Text</span><!---->');
  await t
    .click($columnTwo)
    .expect($columnTwo.getAttribute('aria-sort'))
    .eql('ascending');
  await t
    .expect(await $columnTwoFirstRow.innerHTML)
    .eql('<!----><span>A Some Text</span><!---->');
  await t
    .expect(await $columnTwoLastRow.innerHTML)
    .eql('<!----><span>AA Some Text</span><!---->');
});

test('should sort numbers', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnOne = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[0];
  });

  const $columnOneFirstRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[0];
    return firstRow.querySelectorAll('td')[0];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  const $columnOneLastRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[2];
    return firstRow.querySelectorAll('td')[0];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('descending');
  await t
    .expect(await $columnOneFirstRow.innerHTML)
    .eql('<!----><span>A2 Some Text</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>22 Some Text</span><!---->');
  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('ascending');
  await t
    .expect(await $columnOneFirstRow.innerHTML)
    .eql('<!----><span>1 Some Text</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>11 Some Text</span><!---->');
});

test('should add a fix css class when sorted is clicked', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnOne = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[0];
  });

  const $columnTwo = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[1];
  });

  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('class'))
    .eql('o-table-sortable__th--selected');

  await t.expect($columnTwo.getAttribute('class')).eql('');
});

fixture('Table Sortable - innerscroll functionality').page(
  `${host}/iframe.html?id=organisms-table-sortable--table-sortable-innerscroll`
);

test('should sort also when innerscroll is set ', async t => {
  await t.resizeWindow(300, 1000);
  const $elRoot = await Selector('axa-table-sortable');

  const $el = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('axa-table');
  });

  const $elChild = $el.find('table');

  await t.expect($elRoot.exists).ok();
  const $columnOne = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[0];
  });

  const $columnOneFirstRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[0];
    return firstRow.querySelectorAll('td')[0];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  const $columnOneLastRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[2];
    return firstRow.querySelectorAll('td')[0];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('descending');
  await t
    .expect(await $columnOneFirstRow.innerHTML)
    .eql('<!----><span>A2 Some Text</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>22 Some Text</span><!---->');

  await t.expect(await $el.getStyleProperty('overflow-x')).eql('auto');
  const innerscroll = parseInt(await $el.getAttribute('innerscroll'), 10);
  await t
    .expect(parseInt(await $elChild.getStyleProperty('width'), 10))
    .within(innerscroll - 1, innerscroll + 1);

  await t
    .expect(parseInt(await $el.getStyleProperty('width'), 10))
    .within(250, 305);
});

fixture('Table Sortable - maxheight functionality').page(
  `${host}/iframe.html?id=organisms-table-sortable--table-sortable-maxheight`
);

test('should sort also when maxheight is set ', async t => {
  await t.resizeWindow(300, 400);
  const $elRoot = await Selector('axa-table-sortable');

  const $el = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('axa-table');
  });

  const $elTableBody = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('axa-table tbody');
  });

  const $elChild = $el.find('table');

  await t.expect($elRoot.exists).ok();
  const $columnOne = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[0];
  });

  const $columnOneFirstRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[0];
    return firstRow.querySelectorAll('td')[0];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  const $columnOneLastRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[2];
    return firstRow.querySelectorAll('td')[0];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('descending');
  await t
    .expect(await $columnOneFirstRow.innerHTML)
    .eql('<!----><span>A2 Some Text</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>22 Some Text</span><!---->');

  await t.expect(await $elTableBody.getStyleProperty('overflow-y')).eql('auto');
  const innerscroll = parseInt(await $el.getAttribute('maxheight'), 10);
  await t
    .expect(parseInt(await $elChild.getStyleProperty('height'), 10))
    .within(innerscroll - 60, innerscroll + 60);

  await t
    .expect(parseInt(await $el.getStyleProperty('height'), 10))
    .within(200, 250);
});
