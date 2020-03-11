/* eslint-disable */

// imports
const puppeteer = require('puppeteer-core'); // let's not download a special Chromium if we use our local Chrome install anyways...

// module globals
let browser;
let page;

// set up
jest.setTimeout(300000);

const config = {
  // headless: false,
  defaultViewport: null, // <= set this to have viewport emulation off
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // devtools: true,
  // slowMo: 1000,
};

beforeAll(async () => {
  browser = await puppeteer.launch(config);
  page = await browser.newPage();
});

// helper functions
const range = (start, end) =>
  new Array(end - start + 1).fill(undefined).map((_, i) => i + start);

const waitForSelector = selector =>
  page.waitForSelector(selector, { visible: true });

const clickOn = async selector => {
  await waitForSelector(selector);
  return page.click(selector);
};

const waitForFun = async (fun, args) =>
  (await page.waitForFunction(fun, { polling: 'raf' }, args)).jsonValue();

const evaluate = (fun, params) => page.evaluate(fun, params);

const gotoURL = url => page.goto(url);

const setViewport = (width, height) => page.setViewport({ width, height });

const selectFrom = async (selector, value) => {
  await waitForSelector(selector);
  return page.select(selector, value);
};

const waitOneAnimationFrame = () => page.waitFor(1000 / 60);

// helper test predicates
const chooseMonthByIndex = async (monthIndex, native) => {
  await clickOn(`.js-datepicker__dropdown-month`);
  if (native) {
    await selectFrom(
      `.js-datepicker__dropdown-month .js-dropdown__select`,
      `${monthIndex - 1}`
    );
  } else {
    await clickOn(
      `.js-datepicker__dropdown-month .js-dropdown__content button[data-index="${monthIndex}"]`
    );
  }
  return waitOneAnimationFrame();
};

const chooseYear = async (year, native) => {
  await clickOn(
    `.js-datepicker__dropdown-year .js-dropdown__${
      native ? 'select' : 'toggle'
    }`
  );
  if (native) {
    await selectFrom(
      `.js-datepicker__dropdown-year .js-dropdown__select`,
      `${year}`
    );
  } else {
    await clickOn(
      `.js-datepicker__dropdown-year .js-dropdown__content button[data-value="${year}"]`
    );
  }
  return waitOneAnimationFrame();
};

const openCalendar = async () => {
  await clickOn('.js-datepicker__input-button');
  return page.waitFor(250); // allow for datepicker-open animation to finish
};

const getSelectedMonth = () =>
  evaluate(
    () =>
      document.querySelector(
        '.js-datepicker__dropdown-month .js-dropdown__title'
      ).textContent
  );

const clickCalendarDayOfCurrentMonth = day =>
  clickOn(
    `button[class*="m-datepicker__calendar-current-month"][data-day="${day}"]`
  );

const clickCalendarDayOutsideMonth = day =>
  clickOn(
    `button[class*="m-datepicker__calendar-not-current-month"][data-day="${day}"]`
  );

const isDaySelected = day =>
  evaluate(
    _day =>
      document
        .querySelector(
          `button[class*="m-datepicker__calendar-current-month"][data-day="${_day}"]`
        )
        .classList.contains('m-datepicker__calendar-selected-day'),
    day
  );

const assertDayIsSelected = day =>
  waitForSelector(
    `button[data-day="${day}"][class*="m-datepicker__calendar-current-month"][class*="m-datepicker__calendar-selected-day"]`
  );

const assertDayIsDeselected = day =>
  waitForSelector(
    `button[data-day="${day}"][class*="m-datepicker__calendar-current-month"]:not([class*="m-datepicker__calendar-selected-day"])`
  );

const getSelectedYear = () =>
  waitForFun(() => {
    const dropdownTitle = document.querySelector(
      '.js-datepicker__dropdown-year .js-dropdown__title'
    );
    return dropdownTitle && dropdownTitle.textContent;
  });

const submitChosenDay = () => clickOn('.js-datepicker__button-ok');

describe('Datepicker', () => {
  test('should select February the 13th and then the 14th ', async () => {
    await gotoURL(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker'
    );

    await chooseYear(2020);
    await chooseMonthByIndex(10);
    const monthValue = await getSelectedMonth(10);
    expect(monthValue).toBe('Oktober');

    await clickCalendarDayOfCurrentMonth(22);
    await clickCalendarDayOfCurrentMonth(13);

    await assertDayIsSelected(13);

    const is13thDaySelected = await isDaySelected(13);
    expect(is13thDaySelected).toBe(true);

    const is22thNowDeselected = await isDaySelected(22);
    expect(is22thNowDeselected).toBe(false);

    await clickCalendarDayOfCurrentMonth(14);
    await assertDayIsDeselected(13);

    const isOldDayStillSelected = await isDaySelected(13);
    expect(isOldDayStillSelected).toBe(false);

    const isNewDaySelected = await isDaySelected(14);
    expect(isNewDaySelected).toBe(true);

    const yearValue = await getSelectedYear();
    expect(yearValue).toBe('2020');
  });

  test('should convert the mixed input values (numbers and ranges) from allowedyears prop correctly', async () => {
    await gotoURL(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker'
    );

    const dropdownItems = await waitForFun(() => {
      const dropdown = document.querySelector('.js-datepicker__dropdown-year');
      return dropdown && dropdown.getAttribute('items');
    });

    const expected = range(1971, 2000)
      .concat([2012, 2014])
      .concat(range(2018, 2022))
      .map(year => ({
        selected: year === 2020,
        name: `${year}`,
        value: `${year}`,
      }));

    expect(dropdownItems).toEqual(JSON.stringify(expected));
  });

  test('should select the 31th of january from within the February view', async () => {
    await gotoURL(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker'
    );

    await chooseYear(2020);
    await chooseMonthByIndex(2);

    await waitForSelector(
      `button[data-day="31"][class*="m-datepicker__calendar-not-current-month"]`
    );

    await clickCalendarDayOutsideMonth(31);

    const year = await getSelectedYear();
    expect(year).toEqual('2020');

    // Wait until dropdown updated to proper month
    await waitForFun(
      () =>
        document.querySelector(
          '.js-datepicker__dropdown-month .js-dropdown__title'
        ).textContent === 'Januar'
    );

    const currentMonth = await getSelectedMonth();
    expect(currentMonth).toEqual('Januar');

    const is31thSelected = await isDaySelected(31);
    expect(is31thSelected).toEqual(true);
  });

  test('should select the first of march from within the February view', async () => {
    await gotoURL(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker'
    );

    await chooseMonthByIndex(2);

    await waitForSelector(
      `button[data-day="1"][class*="m-datepicker__calendar-not-current-month"]`
    );

    await clickCalendarDayOutsideMonth(1);

    const year = await getSelectedYear();
    expect(year).toEqual('2020');

    // Wait until dropdown updated to proper month
    await waitForFun(
      () =>
        document.querySelector(
          '.js-datepicker__dropdown-month .js-dropdown__title'
        ).textContent === 'März'
    );

    const currentMonth = await getSelectedMonth();
    expect(currentMonth).toEqual('März');

    const isFirstSelected = await isDaySelected(1);
    expect(isFirstSelected).toEqual(true);
  });

  test('should have a 29th of February in 2020 - should correctly handle leap year', async () => {
    await gotoURL(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker'
    );

    await chooseYear(2020);
    await chooseMonthByIndex(2);
    await clickCalendarDayOfCurrentMonth(29);

    const selectedYear = await getSelectedYear();
    expect(selectedYear).toEqual('2020');

    const selectedMonth = await getSelectedMonth();
    expect(selectedMonth).toEqual('Februar');

    await waitForFun(() =>
      document
        .querySelector(
          `button[class*="m-datepicker__calendar-current-month"][data-day="29"]`
        )
        .classList.contains('m-datepicker__calendar-selected-day')
    );

    const is29thSelected = await isDaySelected(29);
    expect(is29thSelected).toBe(true);
  });

  test('should handle month change with native dropdown element', async () => {
    await gotoURL(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker'
    );

    await setViewport(200, 200);

    await chooseMonthByIndex(12, 'native');
    await chooseMonthByIndex(2, 'native');

    const selectedMonth = await getSelectedMonth();
    expect(selectedMonth).toEqual('Februar');
  });

  test('should write date into input field for input calendars', async () => {
    await gotoURL(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker&knob-inputfield=true&knob-year=2019'
    );

    await setViewport(800, 600);
    await openCalendar();
    const selectedYear = await getSelectedYear();
    expect(selectedYear).toEqual('2019');

    await chooseMonthByIndex(2);

    await clickCalendarDayOfCurrentMonth(14);
    await submitChosenDay();

    const inputValueExpectation = await waitForFun(
      () =>
        document.querySelector(`axa-datepicker[data-test-id="datepicker"]`)
          .value === '14.2.2019'
    );
    expect(inputValueExpectation).toEqual(true);
  });

  afterAll(async () => {
    await browser.close();
  });
});
