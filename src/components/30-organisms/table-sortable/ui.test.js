/*
import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;
const colorTransparent = 'rgba(0, 0, 0, 0)';

fixture('Table Sortable - basic functionality')
  .page(`${host}/iframe.html?id=organisms-table-sortable--table-sortable`)
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
    const firstRow = sRoot.querySelectorAll('tbody tr')[5];
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
    .eql('<!----><span>Petra</span><!---->');
  await t
    .expect(await $columnTwoLastRow.innerHTML)
    .eql('<!----><span>Chris</span><!---->');
  await t
    .click($columnTwo)
    .expect($columnTwo.getAttribute('aria-sort'))
    .eql('ascending');
  await t
    .expect(await $columnTwoFirstRow.innerHTML)
    .eql('<!----><span>Chris</span><!---->');
  await t
    .expect(await $columnTwoLastRow.innerHTML)
    .eql('<!----><span>Petra</span><!---->');
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
    const firstRow = sRoot.querySelectorAll('tbody tr')[5];
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
    .eql('<!----><span>55</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>18</span><!---->');
  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('ascending');
  await t
    .expect(await $columnOneFirstRow.innerHTML)
    .eql('<!----><span>18</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>55</span><!---->');
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

test('should render two arrows', async t => {
  const $columnOneHeaderRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('thead tr')[0];
    return firstRow.querySelectorAll('th')[0];
  });

  const $arrowUp = await $columnOneHeaderRow.find(
    '.o-table-sortable__th__arrowup'
  );
  const $arrowDown = await $columnOneHeaderRow.find(
    '.o-table-sortable__th__arrowdown'
  );

  await t
    .expect($arrowUp.getStyleProperty('border-bottom-color'))
    .notEql(colorTransparent);
  await t
    .expect($arrowDown.getStyleProperty('border-top-color'))
    .notEql(colorTransparent);
});

test('should render only arrowdown and with right color', async t => {
  const expectedColor = 'rgb(0, 0, 143)';
  const $columnOneHeaderRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('thead tr')[0];
    return firstRow.querySelectorAll('th')[0];
  });

  const $arrowUp = await $columnOneHeaderRow.find(
    '.o-table-sortable__th__arrowup'
  );
  const $arrowDown = await $columnOneHeaderRow.find(
    '.o-table-sortable__th__arrowdown'
  );

  await t
    .click($columnOneHeaderRow)
    .expect($columnOneHeaderRow.getAttribute('class'))
    .eql('o-table-sortable__th--selected');

  await t
    .expect($arrowUp.getStyleProperty('border-bottom-color'))
    .eql(colorTransparent);
  await t
    .expect($arrowDown.getStyleProperty('border-top-color'))
    .eql(expectedColor);
});

test('should render only arrowup and with right color', async t => {
  const expectedColor = 'rgb(0, 0, 143)';
  const $columnThreeHeaderRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('thead tr')[0];
    return firstRow.querySelectorAll('th')[2];
  });

  const $arrowUp = await $columnThreeHeaderRow.find(
    '.o-table-sortable__th__arrowup'
  );
  const $arrowDown = await $columnThreeHeaderRow.find(
    '.o-table-sortable__th__arrowdown'
  );

  await t
    .click($columnThreeHeaderRow)
    .expect($columnThreeHeaderRow.getAttribute('class'))
    .eql('o-table-sortable__th--selected');

  await t
    .expect($arrowUp.getStyleProperty('border-bottom-color'))
    .eql(expectedColor);
  await t
    .expect($arrowDown.getStyleProperty('border-top-color'))
    .eql(colorTransparent);
});

test('should not render arrows', async t => {
  const $columnFourHeaderRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('thead tr')[0];
    return firstRow.querySelectorAll('th')[3];
  });

  const $arrowWrapper = await $columnFourHeaderRow.find(
    '.o-table-sortable__th__arrow-wrapper'
  );

  await t.expect($arrowWrapper.getStyleProperty('display')).eql('none');
});

fixture('Table Sortable - innerscroll functionality').page(
  `${host}/iframe.html?id=organisms-table-sortable--table-sortable&knob-innerscroll=500`
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
    const firstRow = sRoot.querySelectorAll('tbody tr')[5];
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
    .eql('<!----><span>55</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>18</span><!---->');

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
  `${host}/iframe.html?id=organisms-table-sortable--table-sortable&knob-innerscroll=500&knob-maxheight=160`
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
    const firstRow = sRoot.querySelectorAll('tbody tr')[5];
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
    .eql('<!----><span>55</span><!---->');
  await t
    .expect(await $columnOneLastRow.innerHTML)
    .eql('<!----><span>18</span><!---->');

  await t.expect(await $elTableBody.getStyleProperty('overflow-y')).eql('auto');
  const innerscroll = parseInt(await $el.getAttribute('maxheight'), 10);
  await t
    .expect(parseInt(await $elChild.getStyleProperty('height'), 10))
    .within(innerscroll - 60, innerscroll + 60);

  await t
    .expect(parseInt(await $el.getStyleProperty('height'), 10))
    .within(200, 250);
});

fixture('Table Sortable - on row click').page(
  `${host}/iframe.html?id=organisms-table-sortable-demos--table-sortable-on-row-click`
);

test('should react to click on row', async t => {
  await t.resizeWindow(800, 600);

  const $elTableTr = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('axa-table tbody tr');
  });

  const $elTableRenderArea = await Selector(() => {
    return document.querySelector('#renderArea');
  });

  await t.click($elTableTr);

  const text = await $elTableRenderArea.textContent;

  await t
    .expect(text.replace(/\s+/g, ' '))
    .eql(
      'Pressed on row 0 in tbody. Inner Text is: ["55","Peter","Winterthur","A"]'
    );
});
*/
