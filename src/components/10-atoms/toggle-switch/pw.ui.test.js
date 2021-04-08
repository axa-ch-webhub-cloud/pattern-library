const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('toggle-switch', () => {
  it('should fire correct change event in controlled mode', async () => {
    await page.goto(
      `${host}/iframe.html?id=examples-toggle-switch-react--controlled-with-dummy-onchange-listener&viewMode=story`
    );
    await page.waitForSelector('.a-toggle-switch');

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
});
