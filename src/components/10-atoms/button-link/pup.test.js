/* eslint-disable */
const puppeteer = require('puppeteer-core');

// module globals
const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:6006';
let browser;
let page;

// set up
jest.setTimeout(30000);

const config = {
  // headless: false,
  //executablePath:
  //  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
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
      `${host}/iframe.html?id=components-atoms-button-link--button-link`
    );

    const buttonLinkShadowRoot = await page.waitForFunction(() =>
      document
        .querySelector('axa-button-link')
        .shadowRoot.querySelector('.a-button-link')
    );

    expect(buttonLinkShadowRoot).toBeTruthy();
  });

  test('should render button-link', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-atoms-button-link--button-link`
    );

    const buttonLinkBackgroundColor = await page.evaluate(() =>
      getComputedStyle(
        document
          .querySelector('axa-button-link')
          .shadowRoot.querySelector('.a-button-link')
      ).getPropertyValue('background-color')
    );

    expect(buttonLinkBackgroundColor).toBe('rgb(0, 0, 143)');
  });

  afterAll(async () => {
    await browser.close();
  });
});
