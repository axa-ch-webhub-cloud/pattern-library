/**
 * @name Alibaba product search
 * @desc Searches Alibaba.com for a product and checks if the results show up
 */

/* eslint-disable */

const puppeteer = require('puppeteer');

let browser;
let page;

jest.setTimeout(300000);

const config = {
  headless: false,
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // slowMo: 250,
  devtools: true,
};

beforeAll(async () => {
  browser = await puppeteer.launch(config);
  page = await browser.newPage();
});

const chooseMonth = async () => {
  await page.click('.js-datepicker__dropdown-month .js-dropdown__toggle');
  // October
  await page.click(
    '.js-datepicker__dropdown-month .js-dropdown__content .js-dropdown__button[data-index="10"]'
  );
};

const assertMonth = async () => {
  const monthValue = await page.evaluate(
    () =>
      document.querySelector(
        '.js-datepicker__dropdown-month .js-dropdown__title'
      ).textContent
  );
  expect(monthValue).toBe('Oktober');
};

describe('Datepicker', () => {
  test('should select February the 13th and then the 14th ', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker',
      { waitUntil: 'networkidle0' }
    );
    await chooseMonth();
    await assertMonth();

    await page.evaluate(() => {
      document
        .querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
        )
        .click();
    });

    // This timeout is necessary and prone to fail.
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    const isSelectedDay = await page.evaluate(() => {
      return document.querySelector(
        'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
      ).classList;
    });

    expect(
      Object.values(isSelectedDay).includes(
        'm-datepicker__calendar-selected-day'
      )
    ).toBe(true);

    const isNowDeselectedDay = await page.evaluate(() =>
      Object.values(
        document.querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="22"]'
        ).classList
      ).includes('m-datepicker__calendar-selected-day')
    );

    expect(isNowDeselectedDay).toBe(false);

    await page.evaluate(() => {
      document
        .querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="14"]'
        )
        .click();
    });
    const isOldDayStillSelected = await page.evaluate(() =>
      Object.values(
        document.querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
        ).classList
      ).includes('m-datepicker__calendar-selected-day')
    );
    expect(isOldDayStillSelected).toBe(false);

    const isNewDaySelected = await page.evaluate(() =>
      Object.values(
        document.querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="14"]'
        ).classList
      ).includes('m-datepicker__calendar-selected-day')
    );
    expect(isNewDaySelected).toBe(true);

    const yearValue = await page.evaluate(
      () =>
        document.querySelector(
          '.js-datepicker__dropdown-year .js-dropdown__title'
        ).textContent
    );
    expect(yearValue).toBe('2020');
  });

  afterAll(async () => {
    await browser.close();
  });
});
