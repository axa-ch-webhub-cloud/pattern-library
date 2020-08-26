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
import compressImage from './utils/imageCompressor';

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
      showFileOverview: { type: Boolean },
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
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    this.files = [];
    this.faultyFiles = [];
    this.allFiles = [];

    this.sizeOfAllFilesInBytes = 0;
    this.allDroppedFiles = 0;
    this.isFileMaxReached = false;

    this.globalErrorMessage = '';
    this.showAddMoreInputFile = '';

    /* eslint-disable no-undef */
    defineVersioned([AXAInputFile], __VERSION_INFO__, this);
    /* eslint-enable no-undef */
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
  }

  handleFileDeletion(index) {
    let clonedFiles = [];

    this.allDroppedFiles = this.files.length + this.faultyFiles.length - 1;

    if (index >= this.files.length) {
      // faulty file
      clonedFiles = [...this.faultyFiles];
      clonedFiles.splice(index - this.files.length, 1);
      this.faultyFiles = clonedFiles;
    } else {
      // valid file
      clonedFiles = [...this.files];
      clonedFiles.splice(index, 1);
      this.files = clonedFiles;
      if (this.files.length + 1 === this.maxNumberOfFiles) {
        this.showAddMoreInputFile = true;
      }
    }

    this.handleMaxNumberOfFiles();

    this.sizeOfAllFilesInBytes -= this.allFiles[index].size;

    if (this.files.length + this.faultyFiles.length === 0) {
      this.showFileOverview = false;
      this.sizeOfAllFilesInBytes = 0;
      this.allDroppedFiles = 0;
      this.files = [];
      this.allFiles = [];
      this.faultyFiles = [];
      this.showAddMoreInputFile = false;
    }
    this.validateOverallSize();
    this.requestUpdate();
  }

  async addFiles(droppedFiles, removeGlobalMessage) {
    this.showAddMoreInputFile = true;

    if (removeGlobalMessage) {
      this.globalErrorMessage = '';
    }

    this.allDroppedFiles += droppedFiles.length;

    const notImagesFiles = [...droppedFiles].filter(
      file => NOT_IMAGE_FILE_TYPES.indexOf(file.type) > -1
    );

    // compress all images. pngs will become jpeg's and unrecognised files will be deleted
    const compressedImages = await compressImage(droppedFiles);

    this.validateFiles(compressedImages, notImagesFiles);

    if (
      (this.files.length > 0 || this.faultyFiles.length > 0) &&
      droppedFiles.length > 0
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

  validateFiles(compressedImages, notImagesFiles) {
    const { maxSizeOfSingleFileKB, maxNumberOfFiles } = this;
    const maxSizeOfSingleFileInBytes = getBytesFromKilobyte(
      maxSizeOfSingleFileKB
    );

    const faultyFiles = [];
    const finalFiles = [];
    const files = [...notImagesFiles].concat(compressedImages);

    for (let i = 0, n = files.length; i < n; i++) {
      const file = files[i];
      const fileSize = file.size;
      if (fileSize > maxSizeOfSingleFileInBytes) {
        faultyFiles.push(file);
      } else {
        finalFiles.push(file);
      }
      this.sizeOfAllFilesInBytes += fileSize;
      this.validateOverallSize(fileSize);
    }

    const numberOfFilesLeftOver = Math.max(
      maxNumberOfFiles - this.files.length,
      0
    );

    const filesLeftOver = finalFiles.slice(0, numberOfFilesLeftOver);

    // concat the latest valid files from a file-upload to the existing ones
    this.files = this.files.concat(filesLeftOver);

    // concat the latest faulty files from a file-upload to the existing ones
    this.faultyFiles = this.faultyFiles.concat(faultyFiles);
  }

  handleMaxNumberOfFiles() {
    const {
      allDroppedFiles,
      faultyFiles,
      maxNumberOfFiles,
      tooManyFilesStatusText,
    } = this;

    if (
      allDroppedFiles - faultyFiles.length > maxNumberOfFiles &&
      faultyFiles.length + this.files.length >= maxNumberOfFiles
    ) {
      this.globalErrorMessage = tooManyFilesStatusText;
    }

    this.isFileMaxReached = this.files.length === maxNumberOfFiles;
  }

  fileOverviewMapping() {
    const { deleteStatusText, fileTooBigStatusText } = this;
    const urlCreator = window.URL || window.webkitURL;

    return this.allFiles.map((file, index) => {
      let isfaultyFile = false;

      if (!file) {
        return '';
      }

      for (let i = 0; i < this.faultyFiles.length; i++) {
        if (this.faultyFiles[i] === file) {
          isfaultyFile = true;
          break;
        }
      }

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
                    alt="${file.name}"
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
            title="${file.name}"
            data-status="${deleteStatusText}"
          >
            <span class="m-file-upload__filename js-file-upload__filename"
              >${file.name}</span
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
    const fileOverviewClasses = {
      'm-file-upload__dropzone': true,
      'js-file-upload__dropzone': true,
      'm-file-upload__dropzone-file-overview': this.showFileOverview,
      'js-file-upload__dropzone-file-overview': this.showFileOverview,
    };

    // displaying files with errors (e.g. too big) after valid ones
    this.allFiles = this.files.concat(this.faultyFiles);
    const fileOverview = this.fileOverviewMapping(this.allFiles);

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
                <p class="m-file-upload__information">${this.infoText}</p>
                <p class="m-file-upload__or">${this.orText}</p>
                <axa-input-file
                  class="m-file-upload__input js-file-upload__input"
                  accept="${ACCEPTED_FILE_TYPES}"
                  icon="${this.icon}"
                  multiple
                  @change=${this.handleInputFileChange}
                  variant="red"
                  text="${this.inputFileText}"
                ></axa-input-file>
              `
            : html`
                ${fileOverview}
                ${this.showAddMoreInputFile
                  ? this.generateAddMoreInputFile()
                  : ``}
              `}
        </section>

        <div class="m-file-upload__error-wrapper js-file-upload__error-wrapper">
          ${this.globalErrorMessage}
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
