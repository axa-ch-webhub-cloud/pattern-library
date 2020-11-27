const { chromium } = require('playwright-chromium');

const host = process.env.TEST_HOST_STORYBOOK_URL;

let browser;
let page;

const config = {
  // devtools: true
};

beforeAll(async () => {
  browser = await chromium.launch(config);
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
});

it('should render button', async () => {
  await page.goto(
    `${host}/iframe.html?id=examples-button-pure-html--clickable`
  );
  await page.waitForSelector('.a-button__flex-wrapper');
  const axaButtonText = await page.textContent('axa-button');

  expect(axaButtonText).toBe('You clicked me: 0, btw my event name is click');
});
