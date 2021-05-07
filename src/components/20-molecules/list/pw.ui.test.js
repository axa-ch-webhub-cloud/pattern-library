const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-list';

describe('List', () => {
  it('should render', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-list--list&viewMode=story`
    );
    await page.waitForSelector(tag);
    const visible = await page.isVisible(tag);
    expect(visible).toBeTruthy();
  });

  it('should have correct css properties in default mode', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-list--list&viewMode=story`
    );
    await page.waitForSelector(tag);
    const computedStyle = await page.$eval('axa-list > li', el =>
      window.getComputedStyle(el)
    );
    expect(computedStyle.paddingLeft).toBe('36px');
    expect(computedStyle.backgroundPosition).toBe('0px 10px');
    expect(computedStyle.margin).toBe('8px 0px');

    const listStyleType = await page.$eval(
      'ul.m-list',
      el => window.getComputedStyle(el).listStyleType
    );
    expect(listStyleType).toBe('none');
  });

  it('should have correct css properties in ordered mode', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-list--list&knob-variant=ordered&knob-icon=&viewMode=story`
    );
    await page.waitForSelector(tag);
    const computedStyle = await page.$eval('axa-list > li', el =>
      window.getComputedStyle(el)
    );
    expect(computedStyle.paddingLeft).toBe('0px');
    expect(computedStyle.backgroundImage).toBe('none');
    expect(computedStyle.margin).toBe('8px 0px');

    const listStyleType = await page.$eval(
      'ol.m-list',
      el => window.getComputedStyle(el).listStyleType
    );
    expect(listStyleType).toBe('none');
  });

  it('should have correct css properties in unstyled mode', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-list--list&knob-variant=unstyled&knob-icon=&viewMode=story`
    );
    await page.waitForSelector(tag);
    const computedStyle = await page.$eval('axa-list > li', el =>
      window.getComputedStyle(el)
    );
    expect(computedStyle.paddingLeft).toBe('0px');
    expect(computedStyle.backgroundImage).toBe('none');
    expect(computedStyle.margin).toBe('8px 0px');

    const listStyleType = await page.$eval(
      'ul.m-list',
      el => window.getComputedStyle(el).listStyleType
    );
    expect(listStyleType).toBe('none');
  });

  it('should have correct css properties in icon mode', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-list--list&knob-variant=icon&knob-icon=<svg%20xmlns="http://www.w3.org/2000/svg"%20width="24"%20height="24"%20viewBox="0%200%2024%2024"><path%20fill="&viewMode=story#1cc54e"%20d="M9%2016.17L4.83%2012l-1.42%201.41L9%2019%2021%207l-1.41-1.41z"/></svg>&viewMode=story`
    );
    await page.waitForSelector(tag);
    const computedStyle = await page.$eval('axa-list > li', el =>
      window.getComputedStyle(el)
    );
    expect(computedStyle.paddingLeft).toBe('36px');
    expect(computedStyle.backgroundImage).toContain(
      'data:image/svg+xml;charset=UTF-8,<svg xmlns'
    );
    expect(computedStyle.backgroundPosition).toBe('0px 0px');
    expect(computedStyle.margin).toBe('8px 0px');

    const listStyleType = await page.$eval(
      'ul.m-list',
      el => window.getComputedStyle(el).listStyleType
    );
    expect(listStyleType).toBe('none');
  });
});
