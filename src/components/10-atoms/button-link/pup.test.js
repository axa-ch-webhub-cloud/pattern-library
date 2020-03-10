/* eslint-disable */
const puppeteer = require('puppeteer');

// module globals
let browser;
let page;

// set up
jest.setTimeout(300000);

const config = {
  // headless: false,
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // devtools: true,
  // slowMo: 1000,
};

beforeAll(async () => {
  browser = await puppeteer.launch(config);
  page = await browser.newPage();
});

describe('Button Link - basic functionality', () => {
  test('should render button-link', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-atoms-button-link--button-link'
    );

    let error = false;

    // TODO: select shadowDom selector .a-button-link
    await page.waitForSelector('axa-button-link', { timeout: 500 })
      .catch ((error) => {
        console.log(error)
        error = true;
      });

    expect(error).toBe(false);
  });


  afterAll(async () => {
    await browser.close();
  });
});
