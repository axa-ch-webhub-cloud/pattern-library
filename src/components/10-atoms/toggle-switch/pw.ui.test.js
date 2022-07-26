const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-toggle-switch';

describe('toggle-switch', () => {
  it('should fire correct change event in controlled mode', async () => {
    await openToggleSwitch();
    await page.waitForSelector(tag);

    const eventInfo = await page.textContent(
      '.axa-toggle-switch-demo__event-info'
    );
    expect(eventInfo).toBe('-');
    await page.click(tag);
    const eventInfoAfterFirstClick = await page.textContent(
      '.axa-toggle-switch-demo__event-info'
    );
    expect(eventInfoAfterFirstClick).toBe('true');
    await page.click(tag);
    const eventInfoAfterSecondClick = await page.textContent(
      '.axa-toggle-switch-demo__event-info'
    );
    expect(eventInfoAfterSecondClick).toBe('true');
  });

  it('should write error message', async () => {
    await page.goto(
      `${host}/iframe.html?args=error:Error%20Message&id=components-toggle-switch--toggle-switch&viewMode=story`
    );
    await page.waitForSelector(tag);

    expect(
      await page.textContent('.a-toggle-switch__error-message-active')
    ).toBe('Error Message');
  });
});

async function openToggleSwitch() {
  await page.goto(
    `${host}/iframe.html?id=examples-toggle-switch-react--toggle-switch-controlled-with-on-change-listener&viewMode=story`
  );
}
