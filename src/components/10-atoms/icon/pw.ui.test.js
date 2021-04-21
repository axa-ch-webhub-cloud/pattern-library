const host = process.env.TEST_HOST_STORYBOOK_URL;

describe('Icon', () => {
  it('should not render svg icon', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-icon--icon&knob-Do%20not%20set%20icon%20on%20component=true&knob-Load%20icon%20this%20way:=prop&knob-Value%20for%20%22Named%20property%22=download&knob-Value%20for%20%22URL%22=/svg/logo-axa.svg&knob-Value%20for%20%22SVG%20string%22=%3Csvg%20width=%22100px%22%20height=%22100px%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2096%2096%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M34.11%2074.27v4.6m34.5-48.23A21.21%2021.21%200%200%200%2048%2015.5a21.23%2021.23%200%200%200-20.53%2015.07m.43%2012.23a21.61%2021.61%200%200%200%2040.29-.07m1.19-12.18a4.91%204.91%200%200%200-.77.09%2019.36%2019.36%200%200%201-.42%2012.09%205.23%205.23%200%200%200%201.19.14A5.92%205.92%200%200%200%2075%2036.71a5.92%205.92%200%200%200-5.62-6.16zm-1.19%2012.18a19.36%2019.36%200%200%200%20.42-12.09%22/%3E%3Cpath%20d=%22M27.31%2042.87a4%204%200%200%200%20.59-.07%2019.34%2019.34%200%200%201-.43-12.23h-.16m29.51-8.23c-2.77%200-5-3.45-5-6.47m2.49%2010.58c-4.85%200-8.79-5.29-8.79-10.58M24.33%2076.94l12.84%202.53a61.28%2061.28%200%200%200%2022.35%200l12.84-2.53m-9.78-2.67v4.6%22/%3E%3Cpath%20d=%22M24.33%2076.94c0-13.26%2010.75-20.46%2024-20.46s24%207.2%2024%2020.46M54.57%2057.37a6.23%206.23%200%201%201-12.45%200M27.81%2042.73a5.23%205.23%200%200%201-1.19.14A5.92%205.92%200%200%201%2021%2036.71a5.92%205.92%200%200%201%205.65-6.16%204.91%204.91%200%200%201%20.77.09%22/%3E%3C/g%3E%3C/svg%3E`
    );
    const axaIconSvg = await page.$('svg');

    expect(axaIconSvg).toBe(null);
  });

  describe('Size checks', () => {
    it('should render svg icon with correct default size', async () => {
      await page.goto(`${host}/iframe.html?id=components-icon--icon`);
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(24);
      expect((await axaIconSvg.boundingBox()).height).toBe(24);
    });
    it('should render svg icon with correct small size', async () => {
      await page.goto(
        `${host}/iframe.html?id=components-icon--icon&knob-size=small&knob-Load%20icon%20this%20way%20%28Fill%20values%20below%29%3A=prop&knob-Value%20for%20%22Named%20property%22=download&knob-Value%20for%20%22URL%22=.%2Fsvg%2Flogo-axa.svg&knob-Value%20for%20%22SVG%20string%22=%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M34.11%2074.27v4.6m34.5-48.23A21.21%2021.21%200%200%200%2048%2015.5a21.23%2021.23%200%200%200-20.53%2015.07m.43%2012.23a21.61%2021.61%200%200%200%2040.29-.07m1.19-12.18a4.91%204.91%200%200%200-.77.09%2019.36%2019.36%200%200%201-.42%2012.09%205.23%205.23%200%200%200%201.19.14A5.92%205.92%200%200%200%2075%2036.71a5.92%205.92%200%200%200-5.62-6.16zm-1.19%2012.18a19.36%2019.36%200%200%200%20.42-12.09%22%2F%3E%3Cpath%20d%3D%22M27.31%2042.87a4%204%200%200%200%20.59-.07%2019.34%2019.34%200%200%201-.43-12.23h-.16m29.51-8.23c-2.77%200-5-3.45-5-6.47m2.49%2010.58c-4.85%200-8.79-5.29-8.79-10.58M24.33%2076.94l12.84%202.53a61.28%2061.28%200%200%200%2022.35%200l12.84-2.53m-9.78-2.67v4.6%22%2F%3E%3Cpath%20d%3D%22M24.33%2076.94c0-13.26%2010.75-20.46%2024-20.46s24%207.2%2024%2020.46M54.57%2057.37a6.23%206.23%200%201%201-12.45%200M27.81%2042.73a5.23%205.23%200%200%201-1.19.14A5.92%205.92%200%200%201%2021%2036.71a5.92%205.92%200%200%201%205.65-6.16%204.91%204.91%200%200%201%20.77.09%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E&viewMode=story`
      );
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(20);
      expect((await axaIconSvg.boundingBox()).height).toBe(20);
    });
    it('should render svg icon with correct medium size', async () => {
      await page.goto(
        `${host}/iframe.html?id=components-icon--icon&knob-size=medium&knob-Load%20icon%20this%20way%20%28Fill%20values%20below%29%3A=prop&knob-Value%20for%20%22Named%20property%22=download&knob-Value%20for%20%22URL%22=.%2Fsvg%2Flogo-axa.svg&knob-Value%20for%20%22SVG%20string%22=%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M34.11%2074.27v4.6m34.5-48.23A21.21%2021.21%200%200%200%2048%2015.5a21.23%2021.23%200%200%200-20.53%2015.07m.43%2012.23a21.61%2021.61%200%200%200%2040.29-.07m1.19-12.18a4.91%204.91%200%200%200-.77.09%2019.36%2019.36%200%200%201-.42%2012.09%205.23%205.23%200%200%200%201.19.14A5.92%205.92%200%200%200%2075%2036.71a5.92%205.92%200%200%200-5.62-6.16zm-1.19%2012.18a19.36%2019.36%200%200%200%20.42-12.09%22%2F%3E%3Cpath%20d%3D%22M27.31%2042.87a4%204%200%200%200%20.59-.07%2019.34%2019.34%200%200%201-.43-12.23h-.16m29.51-8.23c-2.77%200-5-3.45-5-6.47m2.49%2010.58c-4.85%200-8.79-5.29-8.79-10.58M24.33%2076.94l12.84%202.53a61.28%2061.28%200%200%200%2022.35%200l12.84-2.53m-9.78-2.67v4.6%22%2F%3E%3Cpath%20d%3D%22M24.33%2076.94c0-13.26%2010.75-20.46%2024-20.46s24%207.2%2024%2020.46M54.57%2057.37a6.23%206.23%200%201%201-12.45%200M27.81%2042.73a5.23%205.23%200%200%201-1.19.14A5.92%205.92%200%200%201%2021%2036.71a5.92%205.92%200%200%201%205.65-6.16%204.91%204.91%200%200%201%20.77.09%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E&viewMode=story`
      );
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(24);
      expect((await axaIconSvg.boundingBox()).height).toBe(24);
    });
    it('should render svg icon with correct large size', async () => {
      await page.goto(
        `${host}/iframe.html?id=components-icon--icon&knob-size=large&knob-Load%20icon%20this%20way%20%28Fill%20values%20below%29%3A=prop&knob-Value%20for%20%22Named%20property%22=download&knob-Value%20for%20%22URL%22=.%2Fsvg%2Flogo-axa.svg&knob-Value%20for%20%22SVG%20string%22=%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M34.11%2074.27v4.6m34.5-48.23A21.21%2021.21%200%200%200%2048%2015.5a21.23%2021.23%200%200%200-20.53%2015.07m.43%2012.23a21.61%2021.61%200%200%200%2040.29-.07m1.19-12.18a4.91%204.91%200%200%200-.77.09%2019.36%2019.36%200%200%201-.42%2012.09%205.23%205.23%200%200%200%201.19.14A5.92%205.92%200%200%200%2075%2036.71a5.92%205.92%200%200%200-5.62-6.16zm-1.19%2012.18a19.36%2019.36%200%200%200%20.42-12.09%22%2F%3E%3Cpath%20d%3D%22M27.31%2042.87a4%204%200%200%200%20.59-.07%2019.34%2019.34%200%200%201-.43-12.23h-.16m29.51-8.23c-2.77%200-5-3.45-5-6.47m2.49%2010.58c-4.85%200-8.79-5.29-8.79-10.58M24.33%2076.94l12.84%202.53a61.28%2061.28%200%200%200%2022.35%200l12.84-2.53m-9.78-2.67v4.6%22%2F%3E%3Cpath%20d%3D%22M24.33%2076.94c0-13.26%2010.75-20.46%2024-20.46s24%207.2%2024%2020.46M54.57%2057.37a6.23%206.23%200%201%201-12.45%200M27.81%2042.73a5.23%205.23%200%200%201-1.19.14A5.92%205.92%200%200%201%2021%2036.71a5.92%205.92%200%200%201%205.65-6.16%204.91%204.91%200%200%201%20.77.09%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E&viewMode=story`
      );
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(32);
      expect((await axaIconSvg.boundingBox()).height).toBe(32);
    });
    it('should render svg icon with correct original svg size', async () => {
      await page.goto(
        `${host}/iframe.html?id=components-icon--icon&knob-size=original&knob-Load%20icon%20this%20way%20%28Fill%20values%20below%29%3A=string&knob-Value%20for%20%22Named%20property%22=download&knob-Value%20for%20%22URL%22=.%2Fsvg%2Flogo-axa.svg&knob-Value%20for%20%22SVG%20string%22=%3Csvg%20width%3D%22100px%22%20height%3D%22100px%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M34.11%2074.27v4.6m34.5-48.23A21.21%2021.21%200%200%200%2048%2015.5a21.23%2021.23%200%200%200-20.53%2015.07m.43%2012.23a21.61%2021.61%200%200%200%2040.29-.07m1.19-12.18a4.91%204.91%200%200%200-.77.09%2019.36%2019.36%200%200%201-.42%2012.09%205.23%205.23%200%200%200%201.19.14A5.92%205.92%200%200%200%2075%2036.71a5.92%205.92%200%200%200-5.62-6.16zm-1.19%2012.18a19.36%2019.36%200%200%200%20.42-12.09%22%2F%3E%3Cpath%20d%3D%22M27.31%2042.87a4%204%200%200%200%20.59-.07%2019.34%2019.34%200%200%201-.43-12.23h-.16m29.51-8.23c-2.77%200-5-3.45-5-6.47m2.49%2010.58c-4.85%200-8.79-5.29-8.79-10.58M24.33%2076.94l12.84%202.53a61.28%2061.28%200%200%200%2022.35%200l12.84-2.53m-9.78-2.67v4.6%22%2F%3E%3Cpath%20d%3D%22M24.33%2076.94c0-13.26%2010.75-20.46%2024-20.46s24%207.2%2024%2020.46M54.57%2057.37a6.23%206.23%200%201%201-12.45%200M27.81%2042.73a5.23%205.23%200%200%201-1.19.14A5.92%205.92%200%200%201%2021%2036.71a5.92%205.92%200%200%201%205.65-6.16%204.91%204.91%200%200%201%20.77.09%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E&viewMode=story`
      );
      const axaIconSvg = await page.$('svg');

      expect((await axaIconSvg.boundingBox()).width).toBe(100);
      expect((await axaIconSvg.boundingBox()).height).toBe(100);
    });
  });
});
