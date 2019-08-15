import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Image upload - default').page(
  `${host}/iframe.html?id=molecules-image-upload--image-upload-default`
);

const IMAGE_UPLOAD_TAG = 'axa-image-upload';
const IMAGE_UPLOAD_CLASS = '.m-image-upload';

const validFiles = [
  './ui-test-files/test.jpg',
  './ui-test-files/test.png',
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

  await t.setFilesToUpload($inputFileInputElem, validFiles);

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

test('should cobvert .png file to .jpg', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('axa-input-file .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[1]); // files[1] is a .png file

  const $figcaptionElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector(
        '.m-image-upload__img-figure .m-image-upload__img-caption'
      )
  );
  await t
    .expect((await $figcaptionElem.getAttribute('title')) === 'test.jpg')
    .ok();
});

test('should delete image', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('axa-input-file .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[1]);

  const $figureElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('.js-image-upload__img-figure')
  );

  const $figureElemsbBefore = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelectorAll('.js-image-upload__img-figure')
  );

  await t.expect($figureElemsbBefore.count).eql(1);

  await t.click($figureElem);

  const $figureElemsAfter = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelectorAll('.js-image-upload__img-figure')
  );

  await t.expect($figureElemsAfter.count).eql(0);
});

fixture('Image upload - maxSizeOfSingleFileKB prop').page(
  `${host}/iframe.html?id=molecules-image-upload--image-upload-maxsizeofsinglefilekb`
);

test('should exceed maximum size of single file', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('axa-input-file .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[0]);

  const $figureElems = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelectorAll('.js-image-upload__img-figure')
  );

  await t.expect($figureElems.count).eql(1);
  const $fileName = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelectorAll('.m-image-upload__filename')
  );
  await t.expect($fileName.innerText).eql('File size exceeds maximum size');
});

fixture('Image upload - maxNumberOfFiles prop').page(
  `${host}/iframe.html?id=molecules-image-upload--image-upload-maxnumberoffiles`
);
test('should remove addMoreInputFile', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('axa-input-file .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[0]);

  const $addMoreInputFieldElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelectorAll('.js-image-upload__add-more')
  );
  await t.expect($addMoreInputFieldElem.exists).notOk();
});

test('should exceed maximum number of files', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('axa-input-file .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles);

  const $figureElems = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelectorAll('.js-image-upload__img-figure')
  );

  await t.expect($figureElems.count).eql(1);
  const $errorWrapper = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelectorAll('.js-image-upload__error-wrapper')
  );
  await t
    .expect($errorWrapper.innerText)
    .eql('You exceeded the maximum number of files');
});

fixture('Image upload - maxSizeOfAllFilesKB prop').page(
  `${host}/iframe.html?id=molecules-image-upload--image-upload-maxsizeofallfileskb`
);
test('should exceed maximum size of all files', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelector('axa-input-file .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[0]);

  const $errorWrapper = await Selector(() =>
    document
      .querySelector('axa-image-upload')
      .shadowRoot.querySelectorAll('.js-image-upload__error-wrapper')
  );
  await t.expect($errorWrapper.innerText).eql('File sizes exceed maximum size');
});
