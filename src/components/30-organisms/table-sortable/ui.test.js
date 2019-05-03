import { Selector } from 'testcafe';

fixture('Table Sortable - basic functionality').page(
  'http://localhost:9999/iframe.html?id=organisms-table--table-sortable-default'
);

test('should render sortable table', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $elShadow = await Selector(
    () => document.querySelector('axa-table-sortable').shadowRoot
  );
  const $elShadowEl = await $elShadow.find('.o-table-sortable');
  await t.expect($elShadowEl.exists).ok();
});

test('aria ascending should be set when passing ASC in model', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnZero = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[0];
  });
  await t.expect($columnZero.getAttribute('aria-sort')).eql('ascending');
});

test('aria descending should be set when passing DESC in model', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnThree = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[2];
  });
  await t.expect($columnThree.getAttribute('aria-sort')).eql('descending');
});

test('aria none should be set when passing nothing in model', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnFour = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[3];
  });
  await t.expect($columnFour.getAttribute('aria-sort')).eql('none');
});

test('string sorting should work', async t => {
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
    .eql('<!----><span>zHello 2</span><!---->');
  await t
    .expect(await $columnTwoLastRow.innerHTML)
    .eql('<!----><span>aHello 3</span><!---->');
  await t
    .click($columnTwo)
    .expect($columnTwo.getAttribute('aria-sort'))
    .eql('ascending');
  await t
    .expect(await $columnTwoFirstRow.innerHTML)
    .eql('<!----><span>aHello 3</span><!---->');
  await t
    .expect(await $columnTwoLastRow.innerHTML)
    .eql('<!----><span>zHello 2</span><!---->');
});

test('number sorting should work', async t => {
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
    .eql('<!----><span>11 Gaa</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>1 Gaa</span><!---->');
  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('ascending');
  await t
    .expect(await $columnOneFirstRow.innerHTML)
    .eql('<!----><span>1 Gaa</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>11 Gaa</span><!---->');
});

test('when sorted is clicked, a fix css class is set to the sort icon', async t => {
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
  'http://localhost:9999/iframe.html?id=organisms-table--table-sortable-innerscroll'
);

test('sorting works also when innerscroll is set ', async t => {
  await t.resizeWindow(300, 1000);
  const $elRoot = await Selector('axa-table-sortable');

  const $el = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('axa-table');
  });

  const $elChild = $el.find('.o-table');

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
    .eql('<!----><span>11 Gaa</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>1 Gaa</span><!---->');

  await t.expect(await $el.getStyleProperty('overflow-x')).eql('auto');
  const innerscroll = parseInt(await $el.getAttribute('innerscroll'), 10);
  await t
    .expect(parseInt(await $elChild.getStyleProperty('width'), 10))
    .within(innerscroll - 1, innerscroll + 1);

  await t
    .expect(parseInt(await $el.getStyleProperty('width'), 10))
    .within(250, 305);
});
