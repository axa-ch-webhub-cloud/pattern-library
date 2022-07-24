const host = process.env.TEST_HOST_STORYBOOK_URL;
const tag = 'axa-list';

describe('List', () => {
  it('should render component', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-list--list&viewMode=story`
    );
    await page.waitForSelector(tag);
    const visible = await page.isVisible(tag);
    expect(visible).toBeTruthy();
  });

  it('should have correct css properties in default mode', async () => {
    await page.goto(
      `${host}/iframe.html?args=&id=components-list--list&viewMode=story`
    );
    await page.waitForSelector(tag);
    const computedStyle = await page.$eval('axa-list > li', el =>
      window.getComputedStyle(el)
    );
    expect(computedStyle.paddingLeft).toBe('32px');
    expect(computedStyle.backgroundPosition).toBe('0px 10px');
    expect(computedStyle.margin).toBe('0px 0px 12px');

    const listStyleType = await page.$eval(
      'ul.m-list',
      el => window.getComputedStyle(el).listStyleType
    );
    expect(listStyleType).toBe('none');
  });

  it('should have correct css properties in ordered mode', async () => {
    await page.goto(
      `${host}/iframe.html?args=variant:ordered&id=components-list--list&viewMode=story`
    );
    await page.waitForSelector(tag);
    const computedStyle = await page.$eval('axa-list > li', el =>
      window.getComputedStyle(el)
    );
    expect(computedStyle.paddingLeft).toBe('0px');
    expect(computedStyle.backgroundImage).toBe('none');
    expect(computedStyle.margin).toBe('0px 0px 12px');

    const listStyleType = await page.$eval(
      'ol.m-list',
      el => window.getComputedStyle(el).listStyleType
    );
    expect(listStyleType).toBe('none');
  });

  it('should have correct css properties in unstyled mode', async () => {
    await page.goto(
      `${host}/iframe.html?args=variant:unstyled&id=components-list--list&viewMode=story`
    );
    await page.waitForSelector(tag);
    const computedStyle = await page.$eval('axa-list > li', el =>
      window.getComputedStyle(el)
    );
    expect(computedStyle.paddingLeft).toBe('0px');
    expect(computedStyle.backgroundImage).toBe('none');
    expect(computedStyle.margin).toBe('0px 0px 12px');

    const listStyleType = await page.$eval(
      'ul.m-list',
      el => window.getComputedStyle(el).listStyleType
    );
    expect(listStyleType).toBe('none');
  });

  it('should have correct css properties in icon mode', async () => {
    await page.goto(
      `${host}/iframe.html?args=variant:icon&id=components-list--list&viewMode=story`
    );
    await page.waitForSelector(tag);
    const computedStyle = await page.$eval('axa-list > li', el =>
      window.getComputedStyle(el)
    );
    expect(computedStyle.paddingLeft).toBe('32px');
    expect(computedStyle.backgroundImage).toContain(
      'data:image/svg+xml;charset=UTF-8,<svg xmlns'
    );
    expect(computedStyle.backgroundPosition).toBe('0px 0px');
    expect(computedStyle.margin).toBe('0px 0px 12px');

    const listStyleType = await page.$eval(
      'ul.m-list',
      el => window.getComputedStyle(el).listStyleType
    );
    expect(listStyleType).toBe('none');
  });
});
