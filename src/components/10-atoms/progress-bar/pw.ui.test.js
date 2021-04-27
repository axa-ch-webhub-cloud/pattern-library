const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-progress-bar';

describe('Progress Bar', () => {
  it('should render small', async () => {
    await openProgressBar();

    const textFontSize = await page.evaluate(() => {
      return getComputedStyle(document.querySelector('p')).fontSize;
    });

    expect(textFontSize).toBe('16px');
  });

  it('should write text correctly', async () => {
    await openProgressBar();

    expect(
      await page.textContent(
        'article > div.a-progress-bar--label > axa-text > p'
      )
    ).toBe('hi I am a text');
  });
});

async function openProgressBar() {
  await page.goto(
    `${host}/iframe.html?id=components--progress-bar&knob-value=14&knob-text=hi%20I%20am%20a%20text&knob-fullWidth=true&knob-small=true&viewMode=story`
  );
  await page.waitForSelector(tag);
}
