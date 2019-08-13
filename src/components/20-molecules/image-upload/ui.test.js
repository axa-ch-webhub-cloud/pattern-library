import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Image upload - basic functionality').page(
  `${host}/iframe.html?id=molecules-image-upload--image-upload-default`
);

const IMAGE_UPLOAD_TAG = 'axa-image-upload';
const IMAGE_UPLOAD_CLASS = '.m-image-upload';

const files = [
  './ui-test-files/wolf.jpg',
  './ui-test-files/screenshot.png',
  './ui-test-files/test.pdf',
];

test('should render image-upload', async t => {
  const $axaElem = await Selector(IMAGE_UPLOAD_TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-image-upload').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(IMAGE_UPLOAD_CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should upload file and switch view', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('axa-input-file .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, files);

  const $fileOverviewElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('.m-image-upload__dropzone-file-overview')
  );
  await t.expect($fileOverviewElem.exists).ok();
});

test("shouldn't upload file because its an invalid type", async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('axa-input-file .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, './ui-test-files/test.rtf');

  const $fileOverviewElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('.m-image-upload__dropzone-file-overview')
  );
  await t.expect($fileOverviewElem.exists).notOk();
});
