const { browserInstance, config } = require('../../../test/playwright-config');

const host = process.env.TEST_HOST_STORYBOOK_URL;

let browser;
let page;

beforeAll(async () => {
  browser = await browserInstance.launch(config);
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

it('should fire correct change event in controlled mode', async () => {
  await page.goto(
    `${host}/iframe.html?id=examples-toggle-switch-react--controlled-with-dummy-onchange-listener&viewMode=story`
  );
  await page.waitForSelector('.a-toggle-switcha');

  const eventInfo = await page.textContent(
    '.axa-toggle-switch-demo__event-info'
  );
  expect(eventInfo).toBe('-');
  await page.click('.a-toggle-switch');
  const eventInfoAfterFirstClick = await page.textContent(
    '.axa-toggle-switch-demo__event-info'
  );
  expect(eventInfoAfterFirstClick).toBe('true');
  await page.click('.a-toggle-switch');
  const eventInfoAfterSecondClick = await page.textContent(
    '.axa-toggle-switch-demo__event-info'
  );
  expect(eventInfoAfterSecondClick).toBe('true');
});
