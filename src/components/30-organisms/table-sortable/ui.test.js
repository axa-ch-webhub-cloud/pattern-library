import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Table Sortable - basic functionality')
  .page(
    `${host}/iframe.html?args=&id=components-table-sortable--table-sortable&viewMode=story`
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

test('should render correct color of table header text', async t => {
  const expectedColor = 'rgb(51, 51, 51)';
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnZero = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('span');
  });
  await t.expect($columnZero.getStyleProperty('color')).eql(expectedColor);
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
    return sRoot.querySelectorAll('th')[5];
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
  await t.expect($columnTwoFirstRow.innerText).eql('Petra');
  await t.expect($columnTwoLastRow.innerText).eql('Chris');
  await t
    .click($columnTwo)
    .expect($columnTwo.getAttribute('aria-sort'))
    .eql('ascending');
  await t.expect($columnTwoFirstRow.innerText).eql('Chris');
  await t.expect($columnTwoLastRow.innerText).eql('Petra');

  await t
    .click($columnTwo)
    .expect($columnTwo.getAttribute('aria-sort'))
    .eql('descending');
  await t.expect($columnTwoFirstRow.innerHTML).contains('<span>Petra</span>');
  await t.expect($columnTwoLastRow.innerHTML).contains('<span>Chris</span>');
  await t
    .click($columnTwo)
    .expect($columnTwo.getAttribute('aria-sort'))
    .eql('ascending');
  await t.expect($columnTwoFirstRow.innerHTML).contains('<span>Chris</span>');
  await t.expect($columnTwoLastRow.innerHTML).contains('<span>Petra</span>');
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
  await t.expect($columnOneFirstRow.innerText).eql('55');
  await t.expect($columnOneLastRow.innerText).eql('18');
  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('ascending');
  await t.expect($columnOneFirstRow.innerText).eql('18');
  await t.expect($columnOneLastRow.innerText).eql('55');

  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('descending');
  await t.expect($columnOneFirstRow.innerHTML).contains('<span>55</span>');
  await t.expect($columnOneLastRow.innerHTML).contains('<span>18</span>');
  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('ascending');
  await t.expect($columnOneFirstRow.innerHTML).contains('<span>18</span>');
  await t.expect($columnOneLastRow.innerHTML).contains('<span>55</span>');
});

test('should sort dates', async t => {
  const $el = await Selector('axa-table-sortable');
  await t.expect($el.exists).ok();
  const $columnOne = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelectorAll('th')[3];
  });

  const $columnFourFirstRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[0];
    return firstRow.querySelectorAll('td')[3];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  const $columnFourLastRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('tbody tr')[5];
    return firstRow.querySelectorAll('td')[3];
  }).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('ascending');
  await t.expect($columnFourFirstRow.innerText).eql('02.05.2013');
  await t.expect($columnFourLastRow.innerText).eql('01.01.2020');
  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('descending');
  await t.expect($columnFourFirstRow.innerText).eql('01.01.2020');
  await t.expect($columnFourLastRow.innerText).eql('02.05.2013');

  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('ascending');
  await t
    .expect($columnFourFirstRow.innerHTML)
    .contains('<span>02.05.2013</span>');
  await t
    .expect($columnFourLastRow.innerHTML)
    .contains('<span>01.01.2020</span>');
  await t
    .click($columnOne)
    .expect($columnOne.getAttribute('aria-sort'))
    .eql('descending');
  await t
    .expect($columnFourFirstRow.innerHTML)
    .contains('<span>01.01.2020</span>');
  await t
    .expect($columnFourLastRow.innerHTML)
    .contains('<span>02.05.2013</span>');
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

  await t.expect($arrowUp.getStyleProperty('display')).notEql('none');
  await t.expect($arrowDown.getStyleProperty('display')).notEql('none');
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

  await t.expect($arrowUp.getStyleProperty('display')).eql('none');
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
  await t.expect($arrowDown.getStyleProperty('display')).eql('none');
});

test('should not render arrows', async t => {
  const $columnFourHeaderRow = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    const firstRow = sRoot.querySelectorAll('thead tr')[0];
    return firstRow.querySelectorAll('th')[5];
  });

  const $arrowWrapper = await $columnFourHeaderRow.find(
    '.o-table-sortable__th__arrow-wrapper'
  );

  await t.expect($arrowWrapper.getStyleProperty('display')).eql('none');
});

fixture('Table Sortable - innerscroll functionality').page(
  `${host}/iframe.html?args=innerscroll:650&id=components-table-sortable--table-sortable&viewMode=story`
);

test('should sort also when innerscroll is set ', async t => {
  await t.resizeWindow(300, 1000);
  const $elRoot = await Selector('axa-table-sortable');

  const $el = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('.js-table');
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
  await t.expect($columnOneFirstRow.innerText).eql('55');
  await t.expect($columnOneLastRow.innerText).eql('18');

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
  `${host}/iframe.html?args=innerscroll:900;maxheight:160&id=components-table-sortable--table-sortable&viewMode=story`
);

test('should sort also when maxheight is set ', async t => {
  await t.resizeWindow(300, 400);
  const $elRoot = await Selector('axa-table-sortable');

  const $el = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('.js-table');
  });

  const $elTableBody = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('.js-table tbody');
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
  await t.expect($columnOneFirstRow.innerText).eql('55');
  await t.expect($columnOneLastRow.innerText).eql('18');

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
  `${host}/iframe.html?id=examples-table-sortable-pure-html--on-row-click&viewMode=story`
);

test('should react to click on row', async t => {
  await t.resizeWindow(800, 600);

  const $elTableTr = await Selector(() => {
    const sRoot = document.querySelector('axa-table-sortable').shadowRoot;
    return sRoot.querySelector('.js-table tbody tr');
  });

  const $elTableRenderArea = await Selector(() => {
    return document.querySelector('#renderArea');
  });

  await t.click($elTableTr);

  const text = await $elTableRenderArea.innerText;

  await t
    .expect(text.replace(/\s+/g, ' '))
    .eql(
      'Pressed on row 0 in tbody. Inner Text is: ["55","Peter","Winterthur","22.04.2019","10.01.2020","A"]'
    );
});
