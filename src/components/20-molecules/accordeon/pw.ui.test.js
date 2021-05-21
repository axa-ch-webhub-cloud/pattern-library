const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-accordeon';

describe('Accordeon', () => {
  it('should check if accordeon is open', async () => {
    await openAccordeon();

    const accordeonContentMaxHeight = await page.$eval(
      '.m-accordeon__content',
      el => window.getComputedStyle(el).maxHeight
    );

    expect(
      await page.$eval('.m-accordeon__content', el =>
        el.classList.contains('m-accordeon__content--open')
      )
    ).toBeTruthy();

    expect(accordeonContentMaxHeight !== 0);
  });

  it('should check if svg is rendered', async () => {
    await openAccordeon();

    expect(await page.$$('svg')).toBeTruthy();
  });

  it('checks if accordeon is small', async () => {
    await openAccordeon();

    const axaText = await page.$(
      '.m-accordeon__title-container-title > axa-text'
    );
    expect(await axaText.getAttribute('variant')).toBe('size-3');
  });

  it('checks if accordeon is disabled', async () => {
    await openAccordeonDisabled();

    const accordeonContainerColor = await page.$eval(
      '.m-accordeon__title-container',
      el => window.getComputedStyle(el).color
    );

    expect(accordeonContainerColor).toBe('rgb(204, 204, 204)');
  });
});

async function openAccordeon() {
  await page.goto(
    `${host}/iframe.html?id=components-accordeon--accordeon&knob-open=true&knob-title=This%20is%20the%20title%20of%20the%20accordeon&knob-icon=%3Csvg%20viewBox=%220%200%2096%2096%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M62%2085c-3-2-6-6-6-14a27.46%2027.46%200%20016.13-17.54S61.66%2069.52%2066%2071c4%201%202-10%202-10s7%203.28%207%2011c-.16%204.72-1%209-5%2013%2011%200%2017-15%2017-28%200%200-4%208-6%206s2-6%202-12a21%2021%200%2000-5.67-13.75C79%2046.45%2069%2053%2069%2053s5-19-7.46-29c2.46%2016-6.2%2016.06-7.78%2025.47%200%200-4.25-3.39-4.84-10.62C39%2050%2052%2072%2048%2070c-2-1-4-3-6-7-.94%2017%2016%2022%2020%2022z%22%20stroke=%22currentColor%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3Cpath%20d=%22M12.64%2040.39V75h32.24%22%20stroke=%22currentColor%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3Cpath%20d=%22M30.82%2075V48.58h13.79M60.2%2036.56L39.55%2020.94a.9.9%200%2000-1.1%200L13.12%2040.1A2.57%202.57%200%20019%2038.05a2.59%202.59%200%20011-2l26.8-20.31a3.63%203.63%200%20014.4%200l20.37%2015.41-1.37%205.41z%22%20stroke=%22currentColor%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3Cpath%20d=%22M39%2039.59c2.01%200%203.64-1.625%203.64-3.63s-1.63-3.63-3.64-3.63a3.635%203.635%200%2000-3.64%203.63c0%202.005%201.63%203.63%203.64%203.63z%22%20stroke=%22currentColor%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3C/svg%3E&knob-small=true&viewMode=story`
  );
  await page.waitForSelector(tag);
}

async function openAccordeonDisabled() {
  await page.goto(
    `${host}/iframe.html?id=components-accordeon--accordeon&knob-disabled=true&knob-title=This%20is%20the%20title%20of%20the%20accordeon&knob-icon=&knob-open=true&viewMode=story`
  );
  await page.waitForSelector(tag);
}
