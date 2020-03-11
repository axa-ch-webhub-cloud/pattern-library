/* eslint-disable */
const puppeteer = require('puppeteer-core');

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

    let rendered = true;
    try {
      await page.waitForSelector('axa-button-link', { visible: true });
    } catch (e) {
      rendered = false;
    }

    expect(rendered).toBe(true);

    let shadowDomAsExpected = true;
    try {
      await page.waitForFunction(() =>
        document
          .querySelector('axa-button-link')
          .shadowRoot.querySelector('.a-button-link')
      );
    } catch (e) {
      shadowDomAsExpected = false;
    }
    expect(shadowDomAsExpected).toBe(true);
  });

  afterAll(async () => {
    await browser.close();
  });
});
