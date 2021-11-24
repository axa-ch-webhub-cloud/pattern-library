/* eslint-disable camelcase, no-continue */
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import { classMap } from 'lit-html/directives/class-map';
import AXAInputFile from '@axa-ch/input-file';
import {
  AddSvg,
  Delete_foreverSvg,
  ClearSvg,
  Attach_fileSvg,
} from '@axa-ch/materials/icons/material-design';

import fireCustomEvent from '../../../utils/custom-event';

// icon isolated from others, because it's a component specific icon
import { FileUploadGroupSvg } from './icons';

import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import compressImages from './utils/imageCompressor';
import createRefId from '../../../utils/create-ref-id';

// constants
const ADD_ICON = svg([AddSvg]);
const ATTACH_FILE_ICON = svg([Attach_fileSvg]);
const DELETE_FOREVER_ICON = svg([Delete_foreverSvg]);
const CLEAR_ICON = svg([ClearSvg]);
const FILE_UPLOAD_GROUP_ICON = svg([FileUploadGroupSvg]);

const IMAGE_FILE_TYPES = 'image/jpg, image/jpeg, image/png';

// helper functions:

// bytes from kBytes
export const getBytesFromKilobyte = kilobyte => 1024 * kilobyte;

// find file in a list of files, returning a match (or its index) if found (undefined otherwise)
const findFileById = (files, file, indexOnly) => {
  for (let i = 0, n = files.length; i < n; i++) {
    if (files[i].id === file.id) {
      return indexOnly ? i : files[i];
    }
  }
  return undefined;
};

// find file by .id in sources and manipulate sources upon file match according to cases requested
const findAndManipulate = (
  sources,
  file,
  { once, record, removeFrom, appendTo }
) => {
  // set up
  let where;
  let foundAt;
  const result = [];
  const deletions = [];
  const appends = [];
  const _remove = removeFrom && new Set(removeFrom);
  const _append = appendTo && new Set(appendTo);
  // for all sources a.k.a. file arrays:
  for (let i = 0, n = sources.length; i < n; i++) {
    // fix a current array where....
    where = sources[i];
    // ... to find the file (by comparing .id values)
    foundAt = findFileById(where, file, true);
    // process case 3. queue file to be appended later
    // N.B. this is the only case that's *independent* of file-found status
    if (_append && _append.has(where)) appends.push(where);
    // file not found?
    if (foundAt === undefined) continue; // no, skip this array
    // yes, file found - process cases:
    // 1. just record the facts
    if (record) result.push({ where, foundAt });
    // 2. queue file to be deleted later
    if (_remove && _remove.has(where)) deletions.push({ where, foundAt });
    // 4. stop at first file occurence found
    if (once) break;
  }
  // execute queued actions for deletion or append cases (because of unique file ids
  // we can assume each source has <= 1 occurrence of file)
  deletions.forEach(({ where: _where, foundAt: _foundAt }) =>
    _where.splice(_foundAt, 1)
  ); // splice performs in-place modification!
  appends.forEach(_where => _where.push(file));
  // return summary of record'ed cases
  return result;
};

class AXAFileUpload extends LitElement {
  static get tagName() {
    return 'axa-file-upload';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      invalid: { type: Boolean, reflect: true, defaultValue: false },
      allowedFileTypes: { type: String, defaultValue: '' },
      inputFileText: { type: String, defaultValue: 'Upload file' },
      maxSizeOfSingleFileKB: { type: Number, defaultValue: 100 },
      maxSizeOfAllFilesKB: { type: Number, defaultValue: 500 },
      maxNumberOfFiles: { type: Number, defaultValue: 10 },
      preventFileCompression: { type: Boolean },
      icon: { type: String, defaultValue: 'cloud-upload' },
      deleteStatusText: { type: String, defaultValue: 'Delete' },
      addStatusText: { type: String, defaultValue: 'Add more' },
      fileTooBigStatusText: {
        type: String,
        defaultValue: 'File size exceeds maximum size',
      },
      filesTooBigStatusText: {
        type: String,
        defaultValue: 'File sizes exceed maximum size',
      },
      tooManyFilesStatusText: {
        type: String,
        defaultValue: 'You exceeded the maximum number of files',
      },
      orText: { type: String, defaultValue: 'or' },
      infoText: {
        type: String,
        defaultValue: 'Drag and drop to upload your file',
      },
      wrongFileTypeStatusText: {
        type: String,
        defaultValue:
          'Your file does not correspond with our allowed file-types',
      },
      onFileDrop: { type: Function, attribute: false },
      onFileRemove: { type: Function, attribute: false },
      onChange: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    // User gets access to the files over these. The output varies if preventFileCompression is set
    this.files = [];
    this.faultyFiles = [];

    // Used for previews */
    this.validCompressedFiles = [];
    this.faultyCompressedFiles = [];

    // Used for calculating the file sizes */
    this.validOriginalFiles = [];
    this.faultyOriginalFiles = [];

    this.sizeOfAllFilesInBytes = 0;
    this.numberOfDroppedFiles = 0;
    this.isFileMaxReached = false;

    this.globalErrorMessage = '';
    this.showAddMoreInputFile = '';

    this.reset = this.reset.bind(this);

    defineVersioned([AXAInputFile], __VERSION_INFO__, this);
  }

  handleAddMoreInputClick() {
    // trigger input-file component after clicking the "fake" inputFile (addMoreInput)
    this.inputFile.querySelector('input').click();
  }

  handleInputFileChange(e) {
    const {
      target: { files },
    } = e;
    this.filterAndAddFiles(files);
  }

  handleDropZoneDragover(e) {
    // prevent default browser behavior of following the link that triggered the event
    e.preventDefault();
    if (
      !this.isFileMaxReached &&
      !this.dropZone.classList.contains('m-file-upload__dropzone_dragover')
    ) {
      e.dataTransfer.dropEffect = 'copy';
      this.dropZone.classList.add('m-file-upload__dropzone_dragover');
    }
  }

  handleDropZoneDragleave() {
    this.dropZone.classList.remove('m-file-upload__dropzone_dragover');
  }

  filterAndAddFiles(files) {
    if (this.allowedFileTypes !== '') {
      // filter out files with wrong MIME type
      const validFileTypesFiles = [...files].filter(
        file => file.type && this.allowedFileTypes.indexOf(file.type) > -1
      );

      // we have at least one wrong-MIME-type file?
      let removeGlobalMessage = true;
      if (validFileTypesFiles.length < files.length) {
        removeGlobalMessage = false;
        this.globalErrorMessage = this.wrongFileTypeStatusText;
        this.requestUpdate();
      }

      // we didn't filter out all the incoming files?
      if (validFileTypesFiles.length > 0) {
        this.addFiles(validFileTypesFiles, removeGlobalMessage);
      }
    } else if (files.length > 0 && this.allowedFileTypes === '') {
      this.addFiles([...files], true);
    } else {
      this.invalid = false;
      this.requestUpdate();
    }
  }

  // <input-file> won't be triggered on drag & drop or deleting files so we create a custom event here
  fireCustomChangeEvent() {
    this.onChange({
      detail: this.files,
    });
    fireCustomEvent('change', this.files, this);
  }

  handleDropZoneDrop(e) {
    // prevent browser from displaying the file fullscreen
    e.preventDefault();

    this.dropZone.classList.remove('m-file-upload__dropzone_dragover');
    const { files } = e.dataTransfer;

    this.filterAndAddFiles(files);

    if (typeof this.onFileDrop === 'function') {
      this.onFileDrop(e);
    }
  }

  handleFileDeletion(index) {
    let deletionstart = 0;
    this.numberOfDroppedFiles = this.files.length + this.faultyFiles.length - 1;

    const allOriginalFiles = this.validOriginalFiles.concat(
      this.faultyOriginalFiles
    );

    if (index >= this.files.length) {
      deletionstart = index - this.validOriginalFiles.length;
      this.faultyOriginalFiles = this.removeValidOrFaultyFileFromArray(
        index,
        this.faultyOriginalFiles,
        deletionstart
      );

      this.faultyCompressedFiles = this.removeValidOrFaultyFileFromArray(
        index,
        this.faultyCompressedFiles,
        deletionstart
      );
    } else {
      deletionstart = index;
      this.validOriginalFiles = this.removeValidOrFaultyFileFromArray(
        index,
        this.validOriginalFiles,
        deletionstart
      );

      this.validCompressedFiles = this.removeValidOrFaultyFileFromArray(
        index,
        this.validCompressedFiles,
        deletionstart
      );

      if (this.validOriginalFiles.length + 1 === this.maxNumberOfFiles) {
        this.showAddMoreInputFile = true;
      }
    }

    if (this.preventFileCompression) {
      this.files = this.validOriginalFiles;
      this.faultyFiles = this.faultyOriginalFiles;
    } else {
      this.files = this.validCompressedFiles;
      this.faultyFiles = this.faultyCompressedFiles;
    }

    this.handleMaxNumberOfFiles();

    this.sizeOfAllFilesInBytes -= allOriginalFiles[index].size;

    // If all files were deleted -> go back to default screen
    if (this.files.length + this.faultyFiles.length === 0) {
      this.showFileOverview = false;
      this.sizeOfAllFilesInBytes = 0;
      this.numberOfDroppedFiles = 0;
      this.showAddMoreInputFile = false;
      this.files = [];
      this.faultyFiles = [];
      this.validOriginalFiles = [];
      this.faultyOriginalFiles = [];
      this.validCompressedFiles = [];
      this.faultyCompressedFiles = [];
    }
    this.validateOverallSize();

    if (typeof this.onFileRemove === 'function') {
      this.onFileRemove();
      this.fireCustomChangeEvent();
    }

    this.requestUpdate();
  }

  reset() {
    // delete all added files (if any)
    while (this.files.length || this.faultyFiles.length) {
      this.handleFileDeletion(0);
    }
  }

  removeValidOrFaultyFileFromArray(index, files, deletionstart) {
    const clonedFile = [...files];
    clonedFile.splice(deletionstart, 1);
    return clonedFile;
  }

  async addFiles(droppedFiles, removeGlobalMessage) {
    // generate id to match original files with compressed one if this.preventFileCompression is set
    const droppedFilesWithID = droppedFiles.map(file => {
      file.id = createRefId();
      return file;
    });

    this.showAddMoreInputFile = true;
    if (removeGlobalMessage) {
      this.globalErrorMessage = '';
    }

    this.numberOfDroppedFiles += droppedFilesWithID.length;

    const notImagesFiles = [...droppedFilesWithID].filter(
      file => IMAGE_FILE_TYPES.indexOf(file.type) === -1
    );

    // compress all images. png's will become jpeg's and unrecognised files will be deleted. (all pdf's were removed)
    const compressedImagesWithID = await compressImages(droppedFilesWithID);

    this.validateFiles(
      compressedImagesWithID,
      notImagesFiles,
      droppedFilesWithID
    );

    if (
      (this.files.length > 0 || this.faultyFiles.length > 0) &&
      droppedFilesWithID.length > 0
    ) {
      this.showFileOverview = true;
    }
    if (this.files.length >= this.maxNumberOfFiles) {
      this.showAddMoreInputFile = false;
    }

    this.handleMaxNumberOfFiles();
    this.requestUpdate();
  }

  validateOverallSize(fileSize = 0) {
    const {
      sizeOfAllFilesInBytes,
      maxSizeOfAllFilesKB,
      filesTooBigStatusText,
    } = this;

    const maxSizeOfAllFilesInBytes = getBytesFromKilobyte(maxSizeOfAllFilesKB);
    if (sizeOfAllFilesInBytes + fileSize > maxSizeOfAllFilesInBytes) {
      this.globalErrorMessage = filesTooBigStatusText;
      this.invalid = true;
    } else {
      this.globalErrorMessage = '';
      this.invalid = false;
    }
  }

  validateFiles(compressedImages, notImagesFiles, droppedFilesWithID) {
    const { maxSizeOfSingleFileKB } = this;
    const maxSizeOfSingleFileInBytes = getBytesFromKilobyte(
      maxSizeOfSingleFileKB
    );

    const faultyCompressedFiles = [];
    const validCompressedFiles = [];
    const faultyOriginalFiles = [];
    const validOriginalFiles = [];

    const newOriginalFiles = droppedFilesWithID;
    const newCompressedFiles = [...notImagesFiles].concat(compressedImages);

    for (let i = 0, n = newOriginalFiles.length; i < n; i++) {
      const file = newOriginalFiles[i];
      const fileSize = file.size;
      if (fileSize > maxSizeOfSingleFileInBytes) {
        faultyOriginalFiles.push(file);

        faultyCompressedFiles.push(findFileById(newCompressedFiles, file));
      } else {
        validOriginalFiles.push(file);

        validCompressedFiles.push(findFileById(newCompressedFiles, file));
      }

      this.sizeOfAllFilesInBytes += fileSize;
      this.validateOverallSize(fileSize);
    }

    this.addFilesToSpecificArray(
      validOriginalFiles,
      validCompressedFiles,
      faultyOriginalFiles,
      faultyCompressedFiles
    );
  }

  addFilesToSpecificArray(
    validOriginalFiles,
    validCompressedFiles,
    faultyOriginalFiles,
    faultyCompressedFiles
  ) {
    const { maxNumberOfFiles } = this;
    const numberOfFilesLeftover = Math.max(
      maxNumberOfFiles - this.validOriginalFiles.length,
      0
    );
    const originalFilesLeftover = validOriginalFiles.slice(
      0,
      numberOfFilesLeftover
    );
    const compressedFilesLeftover = validCompressedFiles.slice(
      0,
      numberOfFilesLeftover
    );

    if (this.preventFileCompression) {
      this.files = this.files.concat(originalFilesLeftover);
      // Concat the latest faulty files from a file-upload to the existing ones
      this.faultyFiles = this.faultyFiles.concat(faultyOriginalFiles);
    } else {
      // Concat the latest valid files from a file-upload to the existing ones
      this.files = this.files.concat(compressedFilesLeftover);
      // Concat the latest faulty files from a file-upload to the existing ones
      this.faultyFiles = this.faultyFiles.concat(faultyCompressedFiles);
    }

    // Used for previews
    this.validCompressedFiles = this.validCompressedFiles.concat(
      compressedFilesLeftover
    );
    // Used for previews
    this.faultyCompressedFiles = this.faultyCompressedFiles.concat(
      faultyCompressedFiles
    );

    this.validOriginalFiles = this.validOriginalFiles.concat(
      originalFilesLeftover
    );

    this.faultyOriginalFiles = this.faultyOriginalFiles.concat(
      faultyOriginalFiles
    );

    this.fireCustomChangeEvent();
  }

  handleMaxNumberOfFiles() {
    const {
      numberOfDroppedFiles,
      faultyFiles,
      maxNumberOfFiles,
      tooManyFilesStatusText,
      files,
    } = this;

    if (
      numberOfDroppedFiles - faultyFiles.length > maxNumberOfFiles &&
      faultyFiles.length + files.length >= maxNumberOfFiles
    ) {
      this.globalErrorMessage = tooManyFilesStatusText;
      this.invalid = true;
    }

    this.isFileMaxReached = files.length === maxNumberOfFiles;
  }

  fileOverviewMapping(allCompressedFiles) {
    const {
      deleteStatusText,
      fileTooBigStatusText,
      faultyCompressedFiles,
      preventFileCompression,
    } = this;
    const urlCreator = window.URL || window.webkitURL;

    const allOriginalFiles = this.validOriginalFiles.concat(
      this.faultyOriginalFiles
    );

    return allCompressedFiles.map((file, index) => {
      let isfaultyFile = false;

      if (!file) {
        return '';
      }

      for (let i = 0; i < faultyCompressedFiles.length; i++) {
        if (faultyCompressedFiles[i].id === file.id) {
          isfaultyFile = file;
          this.invalid = true;
          break;
        }
      }
      const fileName = preventFileCompression
        ? allOriginalFiles[index].name
        : file.name;
      const isNonImageFile = file.type.indexOf('application') > -1;
      const imageUrl = urlCreator.createObjectURL(file);
      return html`
        <figure class="m-file-upload__img-figure js-file-upload__img-figure">
          <div
            class="m-file-upload__icon-hover-area"
            @click=${() => this.handleFileDeletion(index)}
          >
            ${isNonImageFile
              ? html`
                  <span class="m-file-upload__file-element">
                    ${ATTACH_FILE_ICON}</span
                  >
                `
              : html`
                  <img
                    class="m-file-upload__img-element"
                    src="${imageUrl}"
                    alt="${fileName}"
                  />
                `}
            <div class="m-file-upload__icon-layer">
              <span class="m-file-upload__icon-error"
                >${isfaultyFile ? CLEAR_ICON : ''}</span
              >
              <span class="m-file-upload__icon-delete"
                >${DELETE_FOREVER_ICON}</span
              >
            </div>
          </div>
          <figcaption
            class="m-file-upload__img-caption js-file-upload__img-caption"
            data-status="${deleteStatusText}"
          >
            <span
              class="m-file-upload__filename js-file-upload__filename"
              title="${fileName}"
              >${fileName}</span
            >
            ${isfaultyFile
              ? html`
                  <span
                    class="m-file-upload__error js-file-upload__error"
                    title="${isfaultyFile.errorMessage || fileTooBigStatusText}"
                    >${isfaultyFile.errorMessage || fileTooBigStatusText}</span
                  >
                `
              : html``}
          </figcaption>
        </figure>
      `;
    });
  }

  // invalidate an existing file by fiat. Uses file.id to match, and file.errorMessage for UI.
  invalidate(file, clear, globalErrorMessage) {
    // set up
    const {
      faultyOriginalFiles,
      faultyCompressedFiles,
      validOriginalFiles,
      validCompressedFiles,
      files,
      faultyFiles,
    } = this;
    const allFileLists = [
      faultyOriginalFiles,
      faultyCompressedFiles,
      validOriginalFiles,
      validCompressedFiles,
      files,
      faultyFiles,
    ];
    // try to find file via its 'id'
    const result = findAndManipulate(
      [faultyOriginalFiles, validOriginalFiles],
      file,
      { once: true, record: true }
    );
    const isFound = !!result.length;
    // we found it?
    if (isFound) {
      // yes, set up
      const { where } = result[0];
      const faulties = [
        faultyOriginalFiles,
        faultyCompressedFiles,
        faultyFiles,
      ];
      const valids = [validOriginalFiles, validCompressedFiles, files];
      // did we find the file among the faulty ones?
      if (where === faultyOriginalFiles) {
        // yes, so if we are asked to clear a faulty file...
        if (clear) {
          // clear it everywhere
          findAndManipulate(allFileLists, file, {
            removeFrom: faulties,
            appendTo: valids,
          });
          // clear invalidity status
          this.invalid = false;
          this.globalErrorMessage = '';
        }
      } else {
        // we found the file among the valid ones.
        // Hence we are asked to mark the file everywhere as faulty
        findAndManipulate(allFileLists, file, {
          removeFrom: valids,
          appendTo: faulties,
        });
        // set invalidity status
        this.invalid = true;
        this.globalErrorMessage =
          typeof globalErrorMessage === 'string'
            ? globalErrorMessage
            : file.errorMessage;
      }
      // force rerender
      this.requestUpdate();
    }
    return isFound;
  }

  generateAddMoreInputFile() {
    const { addStatusText } = this;
    return html`
      <figure
        class="m-file-upload__img-figure js-file-upload__img-figure m-file-upload__add-more js-file-upload__add-more"
      >
        <div
          class="m-file-upload__icon-wrapper"
          @click=${this.handleAddMoreInputClick}
        >
          <div class="m-file-upload__icon-layer">
            ${ADD_ICON}
          </div>
        </div>
        <figcaption
          class="m-file-upload__img-caption js-file-upload__img-caption"
          title="${addStatusText}"
        >
          ${addStatusText}
        </figcaption>
      </figure>
    `;
  }

  render() {
    const {
      faultyCompressedFiles,
      validCompressedFiles,
      infoText,
      orText,
      icon,
      inputFileText,
      showAddMoreInputFile,
      globalErrorMessage,
    } = this;
    const fileOverviewClasses = {
      'm-file-upload__dropzone': true,
      'js-file-upload__dropzone': true,
      'm-file-upload__dropzone-file-overview': this.showFileOverview,
      'js-file-upload__dropzone-file-overview': this.showFileOverview,
    };

    // displaying files with errors (e.g. too big) after valid ones
    const allCompressedFiles = validCompressedFiles.concat(
      faultyCompressedFiles
    );
    const fileOverview = this.fileOverviewMapping(allCompressedFiles);

    return html`
      <article class="m-file-upload js-file-upload">
        <h1><slot></slot></h1>
        <section
          @dragover="${this.handleDropZoneDragover}"
          @dragleave="${this.handleDropZoneDragleave}"
          @drop="${this.handleDropZoneDrop}"
          class="${classMap(fileOverviewClasses)}"
        >
          ${!this.showFileOverview
            ? versionedHtml(this)`
                <div>
                  ${FILE_UPLOAD_GROUP_ICON}
                </div>
                <p class="m-file-upload__information">${infoText}</p>
                <p class="m-file-upload__or">${orText}</p>
                <axa-input-file
                  class="m-file-upload__input js-file-upload__input"
                  accept="${this.allowedFileTypes}"
                  icon="${icon}"
                  multiple
                  @change=${this.handleInputFileChange}
                  variant="red"
                  text="${inputFileText}"
                ></axa-input-file>
              `
            : html`
                ${fileOverview}
                ${showAddMoreInputFile ? this.generateAddMoreInputFile() : ``}
              `}
        </section>

        <div class="m-file-upload__error-wrapper js-file-upload__error-wrapper">
          ${globalErrorMessage}
        </div>
      </article>
    `;
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-file-upload__dropzone');
    this.inputFile = this.shadowRoot.querySelector('.js-file-upload__input');
    this.errorWrapper = this.shadowRoot.querySelector(
      '.js-file-upload__error-wrapper'
    );
    this.fileUpload = this.shadowRoot.querySelector('.js-file-upload');
    this.addEventListener('reset', this.reset);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('reset', this.reset);
  }

  querySelector(selector) {
    return this.shadowRoot.querySelector(selector);
  }
}

defineVersioned([AXAFileUpload], __VERSION_INFO__);

export default AXAFileUpload;
