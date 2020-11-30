/* eslint-disable camelcase */
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import { classMap } from 'lit-html/directives/class-map';

import {
  AddSvg,
  Delete_foreverSvg,
  ClearSvg,
  Attach_fileSvg,
} from '@axa-ch/materials/icons';
import AXAInputFile from '@axa-ch/input-file';

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

const ADD_ICON = svg([AddSvg]);
const ATTACH_FILE_ICON = svg([Attach_fileSvg]);
const DELETE_FOREVER_ICON = svg([Delete_foreverSvg]);
const CLEAR_ICON = svg([ClearSvg]);
const FILE_UPLOAD_GROUP_ICON = svg([FileUploadGroupSvg]);

const ACCEPTED_FILE_TYPES = 'image/jpg, image/jpeg, application/pdf, image/png';
const NOT_IMAGE_FILE_TYPES = ACCEPTED_FILE_TYPES.split(', ').filter(
  type => type.indexOf('image') === -1
);

export const getBytesFromKilobyte = kilobyte => 1024 * kilobyte;

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
      inputFileText: { type: String, defaultValue: 'Upload file' },
      maxSizeOfSingleFileKB: { type: Number, defaultValue: 100 },
      maxSizeOfAllFilesKB: { type: Number, defaultValue: 500 },
      maxNumberOfFiles: { type: Number, defaultValue: 10 },
      accessOriginalFiles: { type: Boolean },
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
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    // User gets access to the files over these. The output varies if accessOriginalFiles is set
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

    // eslint-disable-next-line no-undef
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
    // filter out files with wrong MIME type
    const validFileTypesFiles = [...files].filter(
      file => file.type && ACCEPTED_FILE_TYPES.indexOf(file.type) > -1
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
    let clonedOriginalFiles = [];
    let clonedCompressedFiles = [];

    this.numberOfDroppedFiles = this.files.length + this.faultyFiles.length - 1;

    const allOriginalFiles = this.validOriginalFiles.concat(
      this.faultyOriginalFiles
    );

    if (index >= this.files.length) {
      // remove a faulty file from file arrays
      clonedOriginalFiles = [...this.faultyOriginalFiles];
      clonedOriginalFiles.splice(index - this.validOriginalFiles.length, 1);
      this.faultyOriginalFiles = clonedOriginalFiles;

      clonedCompressedFiles = [...this.faultyCompressedFiles];
      clonedCompressedFiles.splice(index - this.validCompressedFiles.length, 1);
      this.faultyCompressedFiles = clonedCompressedFiles;
    } else {
      // remove a valid file from file arrays
      clonedOriginalFiles = [...this.validOriginalFiles];
      clonedOriginalFiles.splice(index, 1);
      this.validOriginalFiles = clonedOriginalFiles;

      clonedCompressedFiles = [...this.validCompressedFiles];
      clonedCompressedFiles.splice(index, 1);
      this.validCompressedFiles = clonedCompressedFiles;

      if (this.validOriginalFiles.length + 1 === this.maxNumberOfFiles) {
        this.showAddMoreInputFile = true;
      }
    }

    if (this.accessOriginalFiles) {
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
    }

    this.requestUpdate();
  }

  async addFiles(droppedFiles, removeGlobalMessage) {
    // generate id to match orignal files with compressed one if this.accessOriginalFiles is set
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
      file => NOT_IMAGE_FILE_TYPES.indexOf(file.type) > -1
    );

    // compress all images. pngs will become jpeg's and unrecognised files will be deleted. (all pfd's were removed)
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
    this.globalErrorMessage =
      sizeOfAllFilesInBytes + fileSize > maxSizeOfAllFilesInBytes
        ? filesTooBigStatusText
        : '';
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
        // add original file to array
        faultyOriginalFiles.push(file);

        // find the compromised file with same id and add it to array
        for (let j = 0; newCompressedFiles.length > j; j++) {
          if (newCompressedFiles[j].id === file.id) {
            faultyCompressedFiles.push(newCompressedFiles[j]);
          }
        }
      } else {
        // add original file to array
        validOriginalFiles.push(file);

        // find the compromised file with same id and add it to array
        for (let j = 0; newCompressedFiles.length > j; j++) {
          if (newCompressedFiles[j].id === file.id) {
            validCompressedFiles.push(newCompressedFiles[j]);
          }
        }
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

    if (this.accessOriginalFiles) {
      this.files = this.files.concat(originalFilesLeftover);
      // Concat the latest faulty files from a file-upload to the existing ones
      this.faultyFiles = this.faultyFiles.concat(faultyOriginalFiles);
    } else {
      // Concat the latest valid files from a file-upload to the existing ones
      this.files = this.files.concat(compressedFilesLeftover);
      // Concat the latest faulty files from a file-upload to the existing ones
      this.faultyFiles = this.faultyFiles.concat(faultyCompressedFiles);
    }
    // Used for previws
    this.validCompressedFiles = this.validCompressedFiles.concat(
      compressedFilesLeftover
    );
    // Used for previws
    this.faultyCompressedFiles = this.faultyCompressedFiles.concat(
      faultyCompressedFiles
    );

    this.validOriginalFiles = this.validOriginalFiles.concat(
      originalFilesLeftover
    );

    this.faultyOriginalFiles = this.faultyOriginalFiles.concat(
      faultyOriginalFiles
    );
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
    }

    this.isFileMaxReached = files.length === maxNumberOfFiles;
  }

  fileOverviewMapping(allCompressedFiles) {
    const {
      deleteStatusText,
      fileTooBigStatusText,
      faultyCompressedFiles,
      accessOriginalFiles,
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
        if (faultyCompressedFiles[i] === file) {
          isfaultyFile = true;
          break;
        }
      }
      const fileName = accessOriginalFiles
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
            title="${fileName}"
            data-status="${deleteStatusText}"
          >
            <span class="m-file-upload__filename js-file-upload__filename"
              >${fileName}</span
            >
            ${isfaultyFile
              ? html`
                  <span class="m-file-upload__error js-file-upload__error"
                    >${fileTooBigStatusText}</span
                  >
                `
              : html``}
          </figcaption>
        </figure>
      `;
    });
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
      <article class="m-file-upload">
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
                  accept="${ACCEPTED_FILE_TYPES}"
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
  }

  querySelector(selector) {
    return this.shadowRoot.querySelector(selector);
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAFileUpload], __VERSION_INFO__);

export default AXAFileUpload;
