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
    await openToggleSwitch();
    await page.waitForSelector(tag);

    await page.evaluate(evaluateTag => {
      document
        .querySelector(evaluateTag)
        .setAttribute('error', 'Error Message');
    }, tag);

    const axaToggleSwitch = await page.$(tag);
    expect(await axaToggleSwitch.getAttribute('error')).toBe('Error Message');
  });
});

async function openToggleSwitch() {
  await page.goto(
    `${host}/iframe.html?id=examples-toggle-switch-react--controlled-with-dummy-onchange-listener&viewMode=story`
  );
}
