import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('File upload').page(
  `${host}/iframe.html?id=components-file-upload--file-upload&viewMode=story`
);

const FILE_UPLOAD_TAG = 'axa-file-upload';
const FILE_UPLOAD_CLASS = '.m-file-upload';

const validFiles = [
  './ui-test-files/test.jpg',
  './ui-test-files/test.png',
  './ui-test-files/test.pdf',
  './ui-test-files/testbig.pdf',
];

test('should render file-upload', async t => {
  const $axaElem = await Selector(FILE_UPLOAD_TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-file-upload').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(FILE_UPLOAD_CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should upload file and switch view', async t => {
  const $inputFileInputElem = await Selector(
    () =>
      document
        .querySelector('axa-file-upload')
        .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input') // TODO change to .js-
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles);

  const $fileOverviewElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__dropzone-file-overview')
  );
  await $fileOverviewElem(); // Travis failed sometimes a line below. (Bug #1335)
  await t.expect($fileOverviewElem.exists).ok();
});

test("shouldn't upload file because it's an invalid type", async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, './ui-test-files/test.rtf');

  const $fileOverviewElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__dropzone-file-overview')
  );
  await t.expect($fileOverviewElem.exists).notOk();
});

test('should convert .png file to .jpg', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[1]); // files[1] is a .png file

  const $figcaptionElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__filename')
  );

  await t.expect($figcaptionElem.textContent).eql('test.jpg');
});

test('should delete image', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[1]);

  const $figureElemsBefore = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__img-figure')
  );

  await $figureElemsBefore(); // Travis failed sometimes a line below. (Bug #1335)
  await t.expect(await $figureElemsBefore.count).eql(2); // one file + addMoreInputFile

  const $figureElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__img-figure')
  );

  await t.click($figureElem);

  const $figureElemsAfter = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__img-figure')
  );

  await $figureElemsAfter(); // Travis failed sometimes a line below. (Bug #1335)
  await t.expect(await $figureElemsAfter.count).eql(0); // zero because start view has no figures
});

fixture('File upload - maxSizeOfSingleFileKB prop').page(
  `${host}/iframe.html?args=maxSizeOfSingleFileKB:1&id=components-file-upload--file-upload&viewMode=story`
);

test('should exceed maximum size of single file', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[0]);

  const $figureElems = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__img-figure')
  );

  await $figureElems(); // Travis failed sometimes a line below. (Bug #1335)
  await t.expect(await $figureElems.count).eql(2); // one file + addMoreInputFile

  const $fileName = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__error')
  );
  await t.expect($fileName.innerText).eql('File size exceeds maximum size');
});

test('should exceed maximum size of single PDF file', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[3]);

  const $figureElems = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__img-figure')
  );

  await $figureElems();
  await t.expect(await $figureElems.count).eql(2); // one file + addMoreInputFile

  const $fileName = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__error')
  );
  await t.expect($fileName.innerText).eql('File size exceeds maximum size');
});

fixture('File upload - maxNumberOfFiles prop').page(
  `${host}/iframe.html?args=maxNumberOfFiles:1&id=components-file-upload--file-upload&viewMode=story`
);
test('should remove addMoreInputFile', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[0]);

  const $addMoreInputFieldElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__add-more')
  );
  await t.expect($addMoreInputFieldElem.exists).notOk();
});

fixture('File upload - Remove file event').page(
  `${host}/iframe.html?id=examples-file-upload-react--file-upload&viewMode=story`
);
test('should throw an event if a file was removed from the list', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .js-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles);

  const $fileOverviewElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__dropzone-file-overview')
  );
  await $fileOverviewElem();
  await t.expect($fileOverviewElem.exists).ok();

  const $firstFile = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .querySelector('.m-file-upload__icon-hover-area')
  );
  const $eventElement = await Selector('#m-fileupload-story__events');

  await t.expect($eventElement.textContent).contains('onChange triggered on ');

  await t.click($firstFile);

  await t
    .expect($eventElement.textContent)
    .contains('onFileRemove triggered on');
});

fixture('Access original Files').page(
  `${host}/iframe.html?args=preventFileCompression:true&id=components-file-upload--file-upload&viewMode=story`
);

test(`shouldn't convert .png file to .jpg`, async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[1]); // files[1] is a .png file

  const $figcaptionElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__filename')
  );

  await t.expect($figcaptionElem.textContent).eql('test.png');
});

fixture('File upload - reset').page(
  `${host}/iframe.html?id=examples-file-upload-react--file-upload&viewMode=story`
);

test('should upload and then reset all files', async t => {
  const $inputFileInputElem = await Selector(
    () => document.querySelector(FILE_UPLOAD_TAG).shadowRoot,
    { dependencies: { FILE_UPLOAD_TAG } }
  ).find('.js-file-upload__input .a-input-file__input');

  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles);

  const $figureElems = await Selector(
    () => document.querySelector('axa-file-upload').shadowRoot
  ).find('.js-file-upload__img-figure');

  await $figureElems();
  // expected number of files have been uploaded
  await t.expect(await $figureElems.count).eql(5); // 4 files + addMoreInputFile

  const performReset = ClientFunction(() =>
    document.querySelector('axa-file-upload').reset()
  );
  // reset proper
  await performReset();

  await $figureElems();
  // no-files-have-been-uploaded state restored
  await t.expect(await $figureElems.count).eql(0);
});
