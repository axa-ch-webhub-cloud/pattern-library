/* eslint-disable */

const puppeteer = require('puppeteer');

let browser;
let page;

jest.setTimeout(300000);

const config = {
  headless: false,
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  devtools: true,
};

beforeAll(async () => {
  browser = await puppeteer.launch(config);
  page = await browser.newPage();
});

const chooseMonthByIndex = async monthIndex => {
  await page.click('.js-datepicker__dropdown-month .js-dropdown__toggle');
  await page.click(
    `.js-datepicker__dropdown-month .js-dropdown__content .js-dropdown__button[data-index="${monthIndex}"]`
  );
};

const getSelectedMonth = async () => {
  return await page.evaluate(
    () =>
      document.querySelector(
        '.js-datepicker__dropdown-month .js-dropdown__title'
      ).textContent
  );
};

const clickCalendarDayOfCurrentMonth = async day => {
  await page.evaluate(day => {
    document
      .querySelector(
        `button[class*="m-datepicker__calendar-current-month"][data-day="${day}"]`
      )
      .click();
  }, day);
};

const isDaySelected = async day => {
  return await page.evaluate(day => {
    return Object.values(
      document.querySelector(
        `button[class*="m-datepicker__calendar-current-month"][data-day="${day}"]`
      ).classList
    ).includes('m-datepicker__calendar-selected-day');
  }, day);
};

const assertDayIsSelected = async day => {
  return await page.waitFor(
    `button[data-day="${day}"][class*="m-datepicker__calendar-current-month"][class*="m-datepicker__calendar-selected-day"]`
  );
};

const assertDayIsDeselected = async day => {
  return await page.waitFor(
    `button[data-day="${day}"][class*="m-datepicker__calendar-current-month"]:not([class*="m-datepicker__calendar-selected-day"])`
  );
};

const getSelectedYear = async () =>
  await page.evaluate(
    () =>
      document.querySelector(
        '.js-datepicker__dropdown-year .js-dropdown__title'
      ).textContent
  );

describe('Datepicker', () => {
  test('should select February the 13th and then the 14th ', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker',
      { waitUntil: 'networkidle0' }
    );
    await chooseMonthByIndex(10);
    const monthValue = await getSelectedMonth(10);
    expect(monthValue).toBe('Oktober');

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

  afterAll(async () => {
    await browser.close();
  });
});
