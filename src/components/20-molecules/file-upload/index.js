import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/input-file';
import { classMap } from 'lit-html/directives/class-map';

import {
  AddSvg,
  DeleteForeverSvg,
  ClearSvg,
  AttachFileSvg,
} from '@axa-ch/materials/icons';

// icon isolated from others, because it's a component specific icon
import { FileUploadGroupSvg } from './icons';

import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import compressImage from './utils/imageCompressor';

const ADDICON = svg([AddSvg]);
const ATTACHFILEICON = svg([AttachFileSvg]);
const DELETEFOREVERICON = svg([DeleteForeverSvg]);
const CLEARICON = svg([ClearSvg]);
const FILEUPLOADGROUPICON = svg([FileUploadGroupSvg]);

const ACCEPTED_FILE_TYPES = 'image/jpg, image/jpeg, application/pdf, image/png';

// helperfunction
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
      inputFileText: { type: String },
      maxSizeOfSingleFileKB: { type: Number },
      maxSizeOfAllFilesKB: { type: Number },
      maxNumberOfFiles: { type: Number },
      showFileOverview: { type: Boolean },
      icon: { type: String },
      deleteStatusText: { type: String },
      addStatusText: { type: String },
      fileTooBigStatusText: { type: String },
      filesTooBigStatusText: { type: String },
      tooManyFilesStatusText: { type: String },
      orText: { type: String },
      infoText: { type: String },
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.maxSizeOfSingleFileKB = 100;
    this.maxSizeOfAllFilesKB = 500;
    this.maxNumberOfFiles = 10;
    this.showFileOverview = false;
    this.icon = 'cloud-upload';
    this.deleteStatusText = 'Delete';
    this.addStatusText = 'Add more';
    this.fileTooBigStatusText = `File size exceeds maximum size`;
    this.filesTooBigStatusText = `File sizes exceed maximum size`;
    this.tooManyFilesStatusText = `You exceeded the maximum number of files`;
    this.orText = 'or';
    this.infoText = 'Drag and drop to upload your file';
    this.files = [];
    this.faultyFiles = [];
    this.allFiles = [];

    this.sizeOfAllFilesByte = 0;
    this.allDroppedFiles = 0;
    this.isFileMaxReached = false;

    this.globalErrorMessage = '';
    this.addMoreInputFile = '';
    this.showAddMoreInputFile = '';
  }

  handleAddMoreInputClick() {
    // trigger input-file component after clicking the "fake" inputFile (addMoreInput)
    this.inputFile.querySelector('input').click();
  }

  handleInputFileChange(e) {
    this.addFiles(e.target.files);
  }

  handleDropZoneDragover(e) {
    // prevent default browser behavior to execute the link that comes with the event
    e.preventDefault();
    if (!this.isFileMaxReached) {
      e.dataTransfer.dropEffect = 'copy';
      this.dropZone.classList.add('m-file-upload__dropzone_dragover');
    }
  }

  handleDropZoneDragleave() {
    this.dropZone.classList.remove('m-file-upload__dropzone_dragover');
  }

  handleDropZoneDrop(e) {
    // prevent browser to display the file fullscreen
    e.preventDefault();

    const files = [...e.dataTransfer.files].filter(
      file => ACCEPTED_FILE_TYPES.indexOf(file.type) > -1
    );

    this.dropZone.classList.remove('m-file-upload__dropzone_dragover');
    if (files.length > 0 && !this.isFileMaxReached) {
      this.addFiles(files);
    }
  }

  handleFileDeletion(index) {
    let clonedFiles = [];

    this.allDroppedFiles = this.files.length + this.faultyFiles.length - 1;
    this.globalErrorMessage = '';

    if (index >= this.files.length) {
      // wrong file
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

    this.sizeOfAllFilesByte -= this.allFiles[index].size;

    if (this.files.length + this.faultyFiles.length === 0) {
      this.showFileOverview = false;
      this.sizeOfAllFilesByte = 0;
      this.allDroppedFiles = 0;
      this.files = [];
      this.allFiles = [];
      this.faultyFiles = [];
      this.showAddMoreInputFile = false;
    }
    this.requestUpdate();
  }

  async addFiles(droppedFiles) {
    this.showAddMoreInputFile = true;
    this.globalErrorMessage = '';
    this.allDroppedFiles += droppedFiles.length;

    const pdfs = [...droppedFiles].filter(
      file => file.type.indexOf('pdf') > -1
    );
    // compress all images. pngs will become jpeg's and unrecognised files will be deleted
    const compressedImages = await compressImage(droppedFiles);

    this.validateFiles(compressedImages, pdfs);

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

  validateFiles(compressedImages, pdfs) {
    const maxSizeOfSingleFileByte = getBytesFromKilobyte(
      this.maxSizeOfSingleFileKB
    );
    const maxSizeOfAllFilesByte = getBytesFromKilobyte(
      this.maxSizeOfAllFilesKB
    );

    const faultyFiles = [];
    let finalFiles = pdfs;

    for (let i = 0; i < compressedImages.length; i++) {
      if (
        this.sizeOfAllFilesByte + compressedImages[i].size >
        maxSizeOfAllFilesByte
      ) {
        this.globalErrorMessage = this.filesTooBigStatusText;
      } else if (compressedImages[i].size > maxSizeOfSingleFileByte) {
        faultyFiles.push(compressedImages[i]);
      } else {
        this.sizeOfAllFilesByte += compressedImages[i].size;
        finalFiles = finalFiles.concat(compressedImages[i]);
      }
    }

    const numberOfFilesLeftOver = Math.max(
      this.maxNumberOfFiles - this.files.length,
      0
    );

    // finalFiles is not an Array, therefore we can not use slice
    const filesLeftOver = Array.prototype.slice.call(
      finalFiles,
      0,
      numberOfFilesLeftOver
    );

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
      this.faultyFiles.forEach(faultyFile => {
        if (faultyFile === file) {
          isfaultyFile = true;
        }
      });
      const isFile = file.type.indexOf('application') > -1;
      const imageUrl = urlCreator.createObjectURL(file);
      return html`
        <figure class="m-file-upload__img-figure js-file-upload__img-figure">
          <div
            class="m-file-upload__icon-hover-area"
            @click=${() => this.handleFileDeletion(index)}
          >
            ${isFile
              ? html`
                  <span class="m-file-upload__file-element">
                    ${ATTACHFILEICON}</span
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
                >${isfaultyFile ? CLEARICON : ''}</span
              >
              <span class="m-file-upload__icon-delete"
                >${DELETEFOREVERICON}</span
              >
            </div>
          </div>
          ${isfaultyFile
            ? html`
                <figcaption
                  class="m-file-upload__img-caption js-file-upload__img-caption m-file-upload__img-caption-error"
                  title="${fileTooBigStatusText}"
                  data-status="${deleteStatusText}"
                >
                  <span class="m-file-upload__filename js-file-upload__filename"
                    >${fileTooBigStatusText}</span
                  >
                </figcaption>
              `
            : html`
                <figcaption
                  class="m-file-upload__img-caption js-file-upload__img-caption"
                  title="${file.name}"
                  data-status="${deleteStatusText}"
                >
                  <span class="m-file-upload__filename js-file-upload__filename"
                    >${file.name}</span
                  >
                </figcaption>
              `}
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
            ${ADDICON}
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
    const errorMessageWrapperClasses = {
      'm-file-upload__error-wrapper': true,
      'js-file-upload__error-wrapper': true,
    };

    // displaying files with errors (e.g. too big) after valid ones
    this.allFiles = this.files.concat(this.faultyFiles);
    const fileOverview = this.fileOverviewMapping(this.allFiles);
    this.addMoreInputFile = this.generateAddMoreInputFile();

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
            ? html`
                <div>
                  ${FILEUPLOADGROUPICON}
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
                >
                  ${this.inputFileText}
                </axa-input-file>
              `
            : html`
                ${fileOverview}
                ${this.showAddMoreInputFile ? this.addMoreInputFile : ``}
              `}
        </section>

        <div class="${classMap(errorMessageWrapperClasses)}">
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

defineOnce(AXAFileUpload.tagName, AXAFileUpload);

export default AXAFileUpload;
