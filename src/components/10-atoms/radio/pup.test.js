/* eslint-disable */

// imports
const puppeteer = require('puppeteer');

// module globals
const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:6006';
const os = process.platform;
const executablePath = {
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
}[os];
let browser;
let page;

// set up
jest.setTimeout(30 * 1000);

const config = {
  // headless: false,
  defaultViewport: null, // <= set this to have viewport emulation off
  executablePath,
  // devtools: true,
  // slowMo: 1000,
  args: ['--disable-features=site-per-process'],
};

beforeAll(async () => {
  browser = await puppeteer.launch(config);
  page = await browser.newPage();
});

// tests
describe('Radio', () => {
  // generic helpers

  /* fun runs *in the browser*! It cannot see closure variables from node scopes!
   Therefore provide such variables as args.
   Also, fun needs to return a truthy value to stop polling and avoid timeout.
   Therefore, define it such that it eventually returns true.
   To *debug* fun, sprinkle with debugger statement(s) at the right places and
   set headless: false, devtools: true in puppeteer config.
   */
  const waitForFun = async (fun, ...args) =>
    (await page.waitForFunction(fun, { polling: 'raf' }, ...args)).jsonValue();

  test('should clean up style nodes properly', async () => {
    await page.goto(`${host}/iframe.html?id=components-atoms-radio--radio`);

    // helper functions
    const styleExists = (componentName, expected = true) =>
      waitForFun(
        (selector, value) => !!document.querySelector(selector) === value,
        `style[data-name="${componentName}"]`,
        expected
      );

    const deleteNodes = componentName =>
      waitForFun(selector => {
        const nodes = [...document.querySelectorAll(selector)];
        if (!nodes.length) {
          return false;
        }
        nodes.forEach(node => node.remove());
        return true;
      }, componentName);

    // tests proper:

    // axa-text style node exists
    expect(await styleExists('axa-text')).toBe(true);
    // axa-radio  style node exists
    expect(await styleExists('axa-radio')).toBe(true);
    // delete axa-text
    expect(await deleteNodes('axa-text')).toBe(true);
    // axa-text style node no longer exists
    expect(await styleExists('axa-text', false)).toBe(true);
    // axa-radio style node still exists
    expect(await styleExists('axa-radio')).toBe(true);
    // delete all axa-radio instances
    expect(await deleteNodes('axa-radio')).toBe(true);
    // now axa-radio style node no longer exists
    expect(await styleExists('axa-radio', false)).toBe(true);
  });

  afterAll(async () => {
    await browser.close();
  });
});
