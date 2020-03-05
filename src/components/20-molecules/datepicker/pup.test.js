/**
 * @name Alibaba product search
 * @desc Searches Alibaba.com for a product and checks if the results show up
 */

/* eslint-disable */

const puppeteer = require('puppeteer');

let browser;
let page;

jest.setTimeout(300000);

const config = {
  headless: false,
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // slowMo: 250,
  devtools: true,
};

beforeAll(async () => {
  browser = await puppeteer.launch(config);
  page = await browser.newPage();
});

const chooseMonth = async () => {
  await page.click('.js-datepicker__dropdown-month .js-dropdown__toggle');
  // October
  await page.click(
    '.js-datepicker__dropdown-month .js-dropdown__content .js-dropdown__button[data-index="10"]'
  );
};

const assertMonth = async () => {
  const monthValue = await page.evaluate(
    () =>
      document.querySelector(
        '.js-datepicker__dropdown-month .js-dropdown__title'
      ).textContent
  );
  expect(monthValue).toBe('Oktober');
};

describe('Datepicker', () => {
  test('should select February the 13th and then the 14th ', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker',
      { waitUntil: 'networkidle0' }
    );
    await chooseMonth();
    await assertMonth();

    await page.evaluate(() => {
      document
        .querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
        )
        .click();
    });
    // await new Promise(resolve => {
    //   setTimeout(async () => {
    //     await page.click(
    //       'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
    //     );
    //     await page.click(
    //       'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
    //     );
    //     await page.click(
    //       'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
    //     );
    //     await page.click(
    //       'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
    //     );
    //     resolve();
    //   }, 5000);
    // });

    // await new Promise(resolve => {
    //   setTimeout(async () => {
    //     await page.evaluate(() => {
    //       // debugger;
    //       const a = [
    //         ...document.querySelector(
    //           'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
    //         ).classList,
    //       ];
    //       console.log('hans', a);
    //       return a;
    //     });
    //     resolve();
    //   }, 5000);
    // });
    console.log('i run after bee');

    const isSelectedDay = await page.evaluate(() => {
      return document.querySelector(
        'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
      ).classList;
    });

    console.log(isSelectedDay);
    console.log(
      'is this the value?',
      Object.values(isSelectedDay).includes(
        'm-datepicker__calendar-selected-day'
      )
    );

    expect(
      Object.values(isSelectedDay).includes(
        'm-datepicker__calendar-selected-day'
      )
    ).toBe(true);

    const isNowDeselectedDay = await page.evaluate(() =>
      Object.values(
        document.querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="22"]'
        ).classList
      ).includes('m-datepicker__calendar-selected-day')
    );
    console.log('desel', isNowDeselectedDay);

    expect(isNowDeselectedDay).toBe(false);

    await page.evaluate(() => {
      document
        .querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="14"]'
        )
        .click();
    });
    const isOldDayStillSelected = await page.evaluate(() =>
      Object.values(
        document.querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="13"]'
        ).classList
      ).includes('m-datepicker__calendar-selected-day')
    );
    expect(isOldDayStillSelected).toBe(false);

    const isNewDaySelected = await page.evaluate(() =>
      Object.values(
        document.querySelector(
          'button[class*="m-datepicker__calendar-current-month"][data-day="14"]'
        ).classList
      ).includes('m-datepicker__calendar-selected-day')
    );
    expect(isNewDaySelected).toBe(true);

    // const yearValue = await page.evaluate(
    //   () =>
    //     document.querySelector(
    //       '.js-datepicker__dropdown-year .js-dropdown__title'
    //     ).textContent
    // );
    // expect(yearValue).toBe('2020');
  });

  test('find some tag inside shadow root of hero banner', async () => {
    await page.goto(
      'https://localhost:6006/iframe.html?id=components-organisms-commercial-hero-banner--commercial-hero-banner',
      { waitUntil: 'networkidle0' }
    );
    const banner = await page.evaluate(() => {
      return document
        .querySelector('axa-commercial-hero-banner')
        .shadowRoot.querySelector('header');
    });
    expect(banner).toBeTruthy();
  });

  test('find textnode inside shadow root of hero banner', async () => {
    await page.goto(
      'https://localhost:6006/iframe.html?id=components-molecules-file-upload--file-upload',
      { waitUntil: 'networkidle0' }
    );
    const banner = await page.evaluate(() => {
      return document
        .querySelector('axa-file-upload')
        .shadowRoot.querySelector('.a-input-file--motion').textContent;
    });
    expect(banner).toContain('Upload file');
  });

  test('find textnode inside shadow root of hero banner', async () => {
    await page.goto(
      'https://localhost:6006/iframe.html?id=components-molecules-file-upload--file-upload',
      { waitUntil: 'networkidle0' }
    );
    const banner = await page.evaluate(() => {
      return document
        .querySelector('axa-file-upload')
        .shadowRoot.querySelector('.a-input-file--motion').textContent;
    });
    expect(banner).toContain('Upload file');
  });

  test('manipulate textnode and icon inside shadow root of hero banner', async () => {
    await page.goto(
      'https://localhost:6006/iframe.html?id=components-molecules-cookie-disclaimer--cookie-disclaimer',
      { waitUntil: 'networkidle0' }
    );

    // Query node text, this acts like a dom snapshot and is not updated
    const buttonText = await page.evaluate(() => {
      return document
        .querySelector('axa-cookie-disclaimer')
        .shadowRoot.querySelector('axa-button').textContent;
    });
    expect(buttonText).toContain('Accept');

    // Update variant with property / setAttribute
    const newlyColoredAcceptButton = await page.evaluate(() => {
      const acceptButton = document
        .querySelector('axa-cookie-disclaimer')
        .shadowRoot.querySelector('axa-button');

      acceptButton.variant = 'red';
      // acceptButton.setAttribute('variant', 'red'); Would also work!

      return document
        .querySelector('axa-cookie-disclaimer')
        .shadowRoot.querySelector('axa-button').variant;
    });
    expect(newlyColoredAcceptButton).toContain('red');

    const updatedButtonText = await page.evaluate(() => {
      const acceptButton = document
        .querySelector('axa-cookie-disclaimer')
        .shadowRoot.querySelector('axa-button');

      acceptButton.innerText = 'Akzeptieren';

      return acceptButton.textContent;
    });
    expect(updatedButtonText).toContain('Akzeptieren');
  });

  test('click directly on the axa-link custom element', async () => {
    await page.goto(
      'https://localhost:6006/iframe.html?id=components-atoms-link-react-demos--feature-link-with-variable-icons',
      { waitUntil: 'networkidle0' }
    );

    const axaLink = await page.evaluate(() => {
      return document.querySelector('axa-link');
    });

    await page.click('axa-link');
  });

  test('accept cookie disclaimer', async () => {
    await page.goto(
      'https://localhost:6006/iframe.html?id=components-molecules-cookie-disclaimer--cookie-disclaimer',
      { waitUntil: 'networkidle0' }
    );

    await page.evaluate(() => {
      const acceptCookiesButton = document
        .querySelector('axa-cookie-disclaimer')
        .shadowRoot.querySelector('axa-button');

      acceptCookiesButton.click();
    });
  });

  afterAll(async () => {
    await browser.close();
  });
});
