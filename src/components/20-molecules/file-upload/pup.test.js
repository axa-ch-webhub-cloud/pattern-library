/* eslint-disable */

// imports
const puppeteer = require('puppeteer');

// module globals
const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:6006';
const os = process.platform;
const executablePath = {
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
}[os];
let browser;
let page;

// set up
jest.setTimeout(30 * 1000);

const config = {
  headless: false,
  defaultViewport: null, // <= set this to have viewport emulation off
  executablePath,
  devtools: true,
  //slowMo: 1000,
  args: ['--disable-features=site-per-process'],
};

beforeAll(async () => {
  browser = await puppeteer.launch(config);
  page = await browser.newPage();
});

// tests
describe('File Upload', () => {
  // generic helpers

  /* fun runs *in the browser*! It cannot see closure variables from node scopes!
   Therefore provide such variables as args.
   Also, fun needs to return a truthy value to stop polling and avoid timeout.
   Therefore, define it such that it eventually returns true.
   To *debug* fun, sprinkle with debugger statement(s) at the right places and
   set headless: false, devtools: true in puppeteer config.
   */
  const waitForFun = async (fun, ...args) =>
    (await page.waitForFunction(fun, { polling: 'raf' }, ...args)).jsonValue();

  async function dragAndDrop(page, sourceSelector, destinationSelector, drop) {
    const sourceElement = await page.waitForSelector(sourceSelector);
    const destinationElement = await page.waitForSelector(destinationSelector);

    const sourceBox = await sourceElement.boundingBox();
    const destinationBox = await destinationElement.boundingBox();

    await page.evaluate(
      async (ss, ds, sb, db, doDrop) => {
        const waitTime = 2000;
        const sleep = milliseconds => {
          return new Promise(resolve => setTimeout(resolve, milliseconds));
        };
        const source = document.querySelector(ss);
        const destination = document.querySelector(ds);

        const sourceX = sb.x + sb.width / 2;
        const sourceY = sb.y + sb.height / 2;
        const destinationX = db.x + db.width / 2;
        const destinationY = db.y + db.height / 2;

        source.dispatchEvent(
          new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            screenX: sourceX,
            screenY: sourceY,
            clientX: sourceX,
            clientY: sourceY,
          })
        );
        await sleep(waitTime);
        source.dispatchEvent(
          new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            screenX: sourceX,
            screenY: sourceY,
            clientX: sourceX,
            clientY: sourceY,
          })
        );
        await sleep(waitTime);
        const dataTransfer = new DataTransfer();
        dataTransfer.effectAllowed = 'all';
        dataTransfer.dropEffect = 'none';
        dataTransfer.files = [];
        let dragstart = source.dispatchEvent(
          new DragEvent('dragstart', {
            dataTransfer,
            bubbles: true,
            cancelable: true,
            screenX: sourceX,
            screenY: sourceY,
            clientX: sourceX,
            clientY: sourceY,
          })
        );

        await sleep(waitTime);

        await sleep(waitTime);
        destination.dispatchEvent(
          new DragEvent('dragover', {
            bubbles: true,
            cancelable: true,
            screenX: destinationX,
            screenY: destinationY,
            clientX: destinationX,
            clientY: destinationY,
            dataTransfer,
          })
        );

        await sleep(waitTime);
        destination.dispatchEvent(
          new DragEvent('dragenter', {
            bubbles: true,
            cancelable: true,
            screenX: destinationX,
            screenY: destinationY,
            clientX: destinationX,
            clientY: destinationY,
            dataTransfer,
          })
        );

        await sleep(waitTime);

        if (!doDrop) {
          return;
        }

        destination.dispatchEvent(
          new DragEvent('drop', {
            bubbles: true,
            cancelable: true,
            screenX: destinationX,
            screenY: destinationY,
            clientX: destinationX,
            clientY: destinationY,
            dataTransfer,
          })
        );
        await sleep(waitTime);
        source.dispatchEvent(
          new DragEvent('dragend', {
            bubbles: true,
            cancelable: true,
            screenX: destinationX,
            screenY: destinationY,
            clientX: destinationX,
            clientY: destinationY,
          })
        );
      },
      sourceSelector,
      destinationSelector,
      sourceBox,
      destinationBox,
      drop
    );
  }

  test('should exhibit correct drag effects', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-molecules-file-upload-demos--feature-file-upload-in-a-form`
    );

    const innerClassExists = (aClass, aSelector) =>
      waitForFun(
        (theClass, theSelector) => {
          const node = document.querySelector('axa-file-upload');
          const inner =
            node &&
            node.shadowRoot &&
            node.shadowRoot.querySelector(theSelector);
          if (inner) {
            return inner.classList.contains(theClass);
          }
          return false;
        },
        aClass,
        aSelector
      );

    await dragAndDrop(page, 'div[draggable]', 'axa-file-upload');

    expect(
      await innerClassExists(
        'm-file-upload__dropzone_dragover',
        '.js-file-upload__dropzone'
      )
    ).toBe(true);
  });

  afterAll(async () => {
    await browser.close();
  });
});
