const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-progress-bar';

describe('Progress Bar', () => {
  it('should render small', async () => {
    await openProgressBar();

    const fontSize = await page.$eval(
      'p',
      el => window.getComputedStyle(el).fontSize
    );

    expect(fontSize).toBe('16px');
  });

  it('should write text correctly', async () => {
    await openProgressBar();

    expect(await page.textContent('axa-text')).toBe('hi I am a text');
  });

  it('should calculate the percantage correctly', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-progress-bar--progress-bar&knob-noBorderRadius=true&knob-value=60&knob-max=300&knob-text=&viewMode=story`
    );
    await page.waitForSelector(tag);

    const progressBar = await page.$('.a-progress-bar__progress-bar');
    expect(await progressBar.getAttribute('style')).toBe('width: 20%');
  });

  it('should check if bar has no border radius', async () => {
    await openProgressBar();

    const borderRadius = await page.$eval(
      '.a-progress-bar__border',
      el => window.getComputedStyle(el).borderRadius
    );

    expect(borderRadius).toBe('0px');
  });
});

async function openProgressBar() {
  await page.goto(
    `${host}/iframe.html?id=components-progress-bar--progress-bar&knob-value=32&knob-text=hi%20I%20am%20a%20text&knob-noBorderRadius=true&knob-small=true&viewMode=story`
  );
  await page.waitForSelector(tag);
}
