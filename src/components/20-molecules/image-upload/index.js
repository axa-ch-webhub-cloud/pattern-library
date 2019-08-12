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

/* Icon isolated from others, because it's a component specific icon */
import { ImageUploadGroupSvg } from './icons';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import compressImage from './utils/imageCompressor';

const AddIcon = svg([AddSvg]);
const AttachFileIcon = svg([AttachFileSvg]);
const DeleteForeverIcon = svg([DeleteForeverSvg]);
const ClearIcon = svg([ClearSvg]);
const ImageUploadGroupIcon = svg([ImageUploadGroupSvg]);

const ACCEPTED_FILE_TYPES = 'image/jpg, image/jpeg, application/pdf, image/png';

/* Helperfunctions */
export const getBytesFromMegabyte = megabyte => 1024 * 1024 * megabyte;

class AXAImageUpload extends LitElement {
  static get tagName() {
    return 'axa-image-upload';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      inputFileText: { type: String },
      maxSizeOfSingleFileMB: { type: Number },
      maxSizeOfAllFilesMB: { type: Number },
      maxNumberOfFiles: { type: Number },
      showImageOverview: { type: Boolean },
      icon: { type: String },
      deleteStatusText: { type: String },
      addStatusText: { type: String },
      fileTooBigStatusText: { type: String },
      filesTooBigStatusText: { type: String },
      tooManyFilesStatusText: { type: String },
      files: { type: Object },
      faultyFiles: { type: Object },
      orText: { type: String },
      infoText: { type: String },
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.maxSizeOfSingleFileMB = 5;
    this.maxSizeOfAllFilesMB = 1;
    this.maxNumberOfFiles = 10;
    this.showImageOverview = false;
    this.icon = 'cloud-upload';
    this.deleteStatusText = 'Delete';
    this.addStatusText = 'Add more';
    this.fileTooBigStatusText = `File size exceeds ${
      this.maxSizeOfSingleFileMB
    }MB`;
    this.filesTooBigStatusText = `File sizes exceed ${
      this.maxSizeOfAllFilesMB
    }MB`;
    this.tooManyFilesStatusText = `You exceeded the maximum number of files: ${
      this.maxNumberOfFiles
    }`;
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

    this.maxSizeOfSingleFileByte = getBytesFromMegabyte(
      this.maxSizeOfSingleFileMB
    );
    this.maxSizeOfAllFilesByte = getBytesFromMegabyte(this.maxSizeOfAllFilesMB);
  }

  handleAddMoreInputClick() {
    /* trigger inputFile component after clicking the "fake" inputFile (addMoreInput) */
    this.inputFile.querySelector('input').click();
  }

  handleImageUploadButtonChange(e) {
    const { files } = e.target;
    this.addFiles(files);
  }

  handleImageUploadDropZoneDragover(e) {
    /* prevent default browser behavior to execute the link that comes with the event */
    e.preventDefault();
    if (!this.isFileMaxReached) {
      e.dataTransfer.dropEffect = 'copy';
      this.dropZone.classList.add('m-image-upload__dropzone_dragover');
    }
  }

  handleImageUploadDropZoneDragleave() {
    this.dropZone.classList.remove('m-image-upload__dropzone_dragover');
  }

  handleImageUploadDropZoneDrop(e) {
    /* prevent browser to display the file fullscreen */
    e.preventDefault();

    if (this.isFileMaxReached) {
      return;
    }
    const files = [...e.dataTransfer.files].filter(
      file => ACCEPTED_FILE_TYPES.indexOf(file.type) > -1
    );
    console.log('files on drop', files);
    this.dropZone.classList.remove('m-image-upload__dropzone_dragover');
    if (files.length > 0) {
      this.addFiles(files);
    }
  }

  handleImageDeletion(index) {
    let clonedFiles = [];

    this.allDroppedFiles =
      (this.files.length === this.maxNumberOfFiles
        ? this.maxNumberOfFiles
        : this.allDroppedFiles) - 1;

    this.globalErrorMessage = '';

    if (index >= this.files.length) {
      /* wrong file */
      clonedFiles = [...this.faultyFiles];
      clonedFiles.splice(index - this.files.length, 1);
      this.faultyFiles = clonedFiles;
      this.allDroppedFiles += 1;
    } else {
      /* valid file */
      clonedFiles = [...this.files];
      clonedFiles.splice(index, 1);
      this.files = clonedFiles;
      if (this.files.length + 1 === this.maxNumberOfFiles) {
        this.showAddMoreInputFile = true;
      }
    }

    this.handleMaxNumberOfFiles();

    this.sizeOfAllFilesByte -= this.allFiles[index].size;
    this.performUpdate(); // TODO

    if (this.allFiles.length === 0) {
      this.showImageOverview = false;
      this.sizeOfAllFilesByte = 0;
      this.allDroppedFiles = 0;
      this.files = [];
      this.allFiles = [];
      this.faultyFiles = [];
      this.showAddMoreInputFile = false;
    }
  }

  async addFiles(droppedFiles) {
    this.showAddMoreInputFile = true;
    this.globalErrorMessage = '';
    this.allDroppedFiles += droppedFiles.length;
    const filesLeftOver = Math.max(
      this.maxNumberOfFiles - this.files.length,
      0
    );

    /* droppedFiles is not an Array, therefore we can not use slice */
    const slicedFiles = Array.prototype.slice.call(
      droppedFiles,
      0,
      filesLeftOver
    );

    /* alle pdfs compress all images. pngs will become jpes and unrecognised files will be deleted */
    const pdfs = [...slicedFiles].filter(file => file.type.indexOf('pdf') > -1);
    const compressedImages = await compressImage(slicedFiles);

    this.validateFiles(compressedImages, pdfs, slicedFiles);

    this.performUpdate(); // TODO

    if (this.files.length > 0 && droppedFiles.length > 0) {
      this.showImageOverview = true;
    }
    if (this.files.length >= this.maxNumberOfFiles) {
      this.showAddMoreInputFile = false;
    }

    this.handleMaxNumberOfFiles();
  }

  validateFiles(compressedImages, pdfs, slicedFiles) {
    const faultyFiles = [];
    let finalFiles = pdfs;

    for (let i = 0; i < compressedImages.length; i++) {
      if (
        this.sizeOfAllFilesByte + compressedImages[i].size >
        this.maxSizeOfAllFilesByte
      ) {
        this.globalErrorMessage = this.filesTooBigStatusText;
      } else if (slicedFiles[i].size > this.maxSizeOfSingleFileByte) {
        faultyFiles.push(compressedImages[i]);
      } else {
        this.sizeOfAllFilesByte += compressedImages[i].size;
        finalFiles = finalFiles.concat(compressedImages[i]);
      }
    }

    /* concat the latest valid files from a file-upload to the existing ones */
    this.files = this.files.concat(finalFiles);
    /* concat the latest faulty files from a file-upload to the existing ones */
    this.faultyFiles = this.faultyFiles.concat(faultyFiles);
    console.log(this.files, this.faultyFiles);
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
      faultyFiles.length + this.files.length === maxNumberOfFiles
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
        <figure class="m-image-upload__img-figure js-image-upload__img-figure">
          <div
            class="m-image-upload__icon-hover-area"
            @click=${() => this.handleImageDeletion(index)}
          >
            ${
              isFile
                ? html`
                    <span class="m-image-upload__file-element">
                      ${AttachFileIcon}</span
                    >
                  `
                : html`
                    <img
                      class="m-image-upload__img-element"
                      src="${imageUrl}"
                      alt="${file.name}"
                    />
                  `
            }
            <div class="m-image-upload__icon-layer">
              <span class="m-image-upload__icon-error"
                >${isfaultyFile ? ClearIcon : ''}</span
              >
              <span class="m-image-upload__icon-delete"
                >${DeleteForeverIcon}</span
              >
            </div>
          </div>
          <figcaption
            class="m-image-upload__img-caption"
            title="${file.name}"
            data-status="${deleteStatusText}"
          >
            ${
              isfaultyFile
                ? html`
                    <figcaption
                      class="m-image-upload__img-caption m-image-upload__img-caption-error"
                      title="${fileTooBigStatusText}"
                      data-status="${deleteStatusText}"
                    >
                      <span class="m-image-upload__filename"
                        >${fileTooBigStatusText}</span
                      >
                    </figcaption>
                  `
                : html`
                    <figcaption
                      class="m-image-upload__img-caption"
                      title="${file.name}"
                      data-status="${deleteStatusText}"
                    >
                      <span class="m-image-upload__filename">${file.name}</span>
                    </figcaption>
                  `
            }
        </figure>
      `;
    });
  }

  generateAddMoreInputFile() {
    const { addStatusText } = this;
    return html`
      <figure
        class="m-image-upload__img-figure m-image-upload__add-more js-image-upload__add-more"
      >
        <div
          class="m-image-upload__icon-wrapper"
          @click=${this.handleAddMoreInputClick}
        >
          <div class="m-image-upload__icon-layer">
            ${AddIcon}
          </div>
        </div>
        <figcaption
          class="m-image-upload__img-caption"
          title="${addStatusText}"
        >
          ${addStatusText}
        </figcaption>
      </figure>
    `;
  }

  render() {
    const imageOverviewClasses = {
      'm-image-upload__dropzone': true,
      'js-image-upload__dropzone': true,
      'm-image-upload__dropzone-file-overview': this.showImageOverview,
    };
    const errorMessageWrapperClasses = {
      'm-image-upload__error-wrapper': true,
      'js-image-upload__error-wrapper': true,
    };

    /* displaying files with errors (e.g. too big) after valid ones */
    this.allFiles = this.files.concat(this.faultyFiles);
    const fileOverview = this.fileOverviewMapping(this.allFiles);
    this.addMoreInputFile = this.generateAddMoreInputFile();

    return html`
      <article class="m-image-upload">
        <h1><slot></slot></h1>
        <section
          @dragover="${this.handleImageUploadDropZoneDragover}"
          @dragleave="${this.handleImageUploadDropZoneDragleave}"
          @drop="${this.handleImageUploadDropZoneDrop}"
          class="${classMap(imageOverviewClasses)}"
        >
          ${!this.showImageOverview
            ? html`
                <div>
                  ${ImageUploadGroupIcon}
                </div>
                <p class="m-image-upload__information">${this.infoText}</p>
                <p class="m-image-upload__or">${this.orText}</p>
                <axa-input-file
                  class="m-image-upload__input js-image-upload__input"
                  accept="${ACCEPTED_FILE_TYPES}"
                  icon="${this.icon}"
                  multiple
                  @change=${this.handleImageUploadButtonChange}
                  @click=${this.handleImageUploadButtonClick}
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
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__dropzone');
    this.inputFile = this.shadowRoot.querySelector('.js-image-upload__input');
    this.errorWrapper = this.shadowRoot.querySelector(
      '.js-image-upload__error-wrapper'
    );
  }

  querySelector(selector) {
    return this.shadowRoot.querySelector(selector);
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
