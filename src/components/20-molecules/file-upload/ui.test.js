import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('File upload').page(
  `${host}/iframe.html?id=components-file-upload--file-upload`
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
  `${host}/iframe.html?id=components-file-upload--file-upload&knob-inputFileText=Upload%20file&knob-maxSizeOfSingleFileKB=1&knob-maxSizeOfAllFilesKB=500&knob-maxNumberOfFiles=10&knob-deleteStatusText=Delete&knob-addStatusText=Add%20more&knob-fileTooBigStatusText=File%20size%20exceeds%20maximum%20size&knob-filesTooBigStatusText=File%20sizes%20exceed%20maximum%20size&knob-tooManyFilesStatusText=You%20exceeded%20the%20maximum%20number%20of%20files&knob-orText=or&knob-infoText=Drag%20and%20drop%20to%20upload%20your%20file&knob-icon=cloud-upload&knob-headerText=The%20following%20files%20are%20being%20transferred:`
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
  `${host}/iframe.html?id=components-file-upload--file-upload&knob-inputFileText=Upload%20file&knob-maxSizeOfSingleFileKB=30000&knob-maxSizeOfAllFilesKB=30000&knob-maxNumberOfFiles=1&knob-deleteStatusText=Delete&knob-addStatusText=Add%20more&knob-fileTooBigStatusText=File%20size%20exceeds%20maximum%20size&knob-filesTooBigStatusText=File%20sizes%20exceed%20maximum%20size&knob-tooManyFilesStatusText=You%20exceeded%20the%20maximum%20number%20of%20files&knob-orText=or&knob-infoText=Drag%20and%20drop%20to%20upload%20your%20file&knob-icon=cloud-upload&knob-headerText=The%20following%20files%20are%20being%20transferred:`
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

test('should exceed maximum number of files', async t => {
  const $inputFileInputElem = await Selector(
    () => document.querySelector(FILE_UPLOAD_TAG).shadowRoot,
    { dependencies: { FILE_UPLOAD_TAG } }
  ).find('.js-file-upload__input .a-input-file__input');

  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles);

  const $figureElems = await Selector(
    () => document.querySelector('axa-file-upload').shadowRoot
  ).find('.js-file-upload__img-figure');

  await $figureElems(); // Travis failed sometimes a line below. (Bug #1335)
  await t.expect(await $figureElems.count).eql(1);

  const $errorWrapper = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__error-wrapper')
  );

  await t
    .expect($errorWrapper.innerText)
    .eql('You exceeded the maximum number of files');
});

fixture('File upload - maxSizeOfAllFilesKB prop').page(
  `${host}/iframe.html?id=components-file-upload--file-upload&knob-inputFileText=Upload%20file&knob-maxSizeOfSingleFileKB=100&knob-maxSizeOfAllFilesKB=1&knob-maxNumberOfFiles=10&knob-deleteStatusText=Delete&knob-addStatusText=Add%20more&knob-fileTooBigStatusText=File%20size%20exceeds%20maximum%20size&knob-filesTooBigStatusText=File%20sizes%20exceed%20maximum%20size&knob-tooManyFilesStatusText=You%20exceeded%20the%20maximum%20number%20of%20files&knob-orText=or&knob-infoText=Drag%20and%20drop%20to%20upload%20your%20file&knob-icon=cloud-upload&knob-headerText=The%20following%20files%20are%20being%20transferred:`
);
test('should exceed maximum size of all files', async t => {
  const $inputFileInputElem = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelector('.js-file-upload__input .a-input-file__input')
  );
  await t.expect($inputFileInputElem.exists).ok();

  await t.setFilesToUpload($inputFileInputElem, validFiles[0]);

  const $errorWrapper = await Selector(() =>
    document
      .querySelector('axa-file-upload')
      .shadowRoot.querySelectorAll('.js-file-upload__error-wrapper')
  );
  await t.expect($errorWrapper.innerText).eql('File sizes exceed maximum size');
});

fixture('File upload - Remove file event').page(
  `${host}/iframe.html?id=examples-file-upload-react--story&viewMode=story`
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
  `${host}/iframe.html?id=components-file-upload--file-upload&knob-Width=455px&knob-inputFileText=Upload%20file&knob-maxSizeOfSingleFileKB=1051&knob-maxSizeOfAllFilesKB=7411&knob-maxNumberOfFiles=10&knob-deleteStatusText=Delete&knob-addStatusText=Add%20more&knob-fileTooBigStatusText=File%20size%20exceeds%20maximum%20size&knob-filesTooBigStatusText=File%20sizes%20exceed%20maximum%20size&knob-tooManyFilesStatusText=You%20exceeded%20the%20maximum%20number%20of%20files&knob-orText=or&knob-infoText=Drag%20and%20drop%20to%20upload%20your%20file&knob-wrongFileTypeText=Your%20file%20does%20not%20correspond%20with%20our%20allowed%20file-types&knob-icon=cloud-upload&knob-headerText=The%20following%20files%20are%20being%20transferred%3A&knob-preventFileCompression=true&viewMode=story`
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
