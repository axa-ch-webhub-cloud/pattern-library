const { chromium } = require('playwright-chromium');
// const expect = require('expect');

let browser;
let page;

beforeAll(async () => {
  browser = await chromium.launch();
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

it('init', async () => {
  expect(true).toBe(true);
});
