const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Icon', () => {
  it('should not render svg icon', async () => {
    await page.goto(
      `${host}/iframe.html?args=noIcon:true&id=components-icon--icon&viewMode=story`
    );
    const axaIconSvg = await page.$('svg');

    expect(axaIconSvg).toBe(null);
  });

  describe('Size checks', () => {
    it('should render svg icon with correct default size', async () => {
      await page.goto(
        `${host}/iframe.html?args=&id=components-icon--icon&viewMode=story`
      );
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(24);
      expect((await axaIconSvg.boundingBox()).height).toBe(24);
    });
    it('should render svg icon with correct small size', async () => {
      await page.goto(
        `${host}/iframe.html?args=size:small&id=components-icon--icon&viewMode=story`
      );
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(20);
      expect((await axaIconSvg.boundingBox()).height).toBe(20);
    });
    it('should render svg icon with correct large size', async () => {
      await page.goto(
        `${host}/iframe.html?args=size:large&id=components-icon--icon&viewMode=story`
      );
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(32);
      expect((await axaIconSvg.boundingBox()).height).toBe(32);
    });
    it('should render svg icon with correct original svg size', async () => {
      await page.goto(
        `${host}/iframe.html?args=size:original&id=components-icon--icon&viewMode=story`
      );
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(24);
      expect((await axaIconSvg.boundingBox()).height).toBe(24);
    });
  });
});
