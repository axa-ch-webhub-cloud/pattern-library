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

import { ImageUploadGroupSvg } from './icons';
import { getBytesFromMegabyte } from './utils/fileSize';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import { fileKey } from './utils/fileKey';
import compressImage from './utils/imageCompressor';

const OR = 'or';
const INFO = 'Drag and drop to upload your file';

const AddIcon = svg([AddSvg]);
const AttachFileIcon = svg([AttachFileSvg]);
const DeleteForeverIcon = svg([DeleteForeverSvg]);
const ClearIcon = svg([ClearSvg]);

const ImageUploadGroupIcon = svg([ImageUploadGroupSvg]);

const ACCEPTED_FILE_TYPES = 'image/jpg, image/jpeg, application/pdf, image/png';

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
      fileToBigStatusText: { type: String },
      filesToBigStatusText: { type: String },
      toManyFilesStatusText: { type: String },
      embedded: { type: Boolean },
      // onClick: { type: Function }, // TODO Events
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.maxSizeOfSingleFileMB = 3;
    this.maxSizeOfAllFilesMB = 5;
    this.maxNumberOfFiles = 10;
    this.showImageOverview = false;
    this.icon = 'cloud-upload';
    this.deleteStatusText = 'Delete';
    this.addStatusText = 'Add more';
    this.fileToBigStatusText = `File bigger than ${
      this.maxSizeOfSingleFileMB
    }Mb`;
    this.filesToBigStatusText = `File bigger than ${
      this.maxSizeOfAllFilesMB
    }Mb`;
    this.toManyFilesStatusText = `You exceeded the maximum number of files wich is ${
      this.maxNumberOfFiles
    }`;
    this.embedded = false;
    this.files = [];
    this.wrongFiles = [];
    this.allFiles = [];

    // this.onClick = () => {};

    this.sizeOfAllFilesByte = 0;
    this.allDroppedFiles = 0;
    this.isFileMaxReached = false;

    this.maxSizeOfSingleFileByte = getBytesFromMegabyte(
      this.maxSizeOfSingleFileMB
    );
    this.maxsizeOfAllFilesByte = getBytesFromMegabyte(this.maxSizeOfAllFilesMB);
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__dropzone');
    this.inputFile = this.shadowRoot.querySelector('.js-image-upload__input');
    this.errorWrapper = this.shadowRoot.querySelector(
      '.js-image-upload__error-wrapper'
    );
  }

  updated() {
    const addMoreInputFile = this.shadowRoot.querySelector(
      '.js-image-upload__add-more'
    );
    if (addMoreInputFile) {
      this.addMoreInputFile = addMoreInputFile;
    }
  }

  handleAddMoreInputClick() {
    this.inputFile.querySelector('input').click();
  }

  handleImageUploadButtonClick(e) {
    e.stopPropagation();
  }

  handleImageUploadButtonChange(e) {
    const { files } = e.target;
    this.addFiles(files);
  }

  handleImageUploadDropZoneDragover(e) {
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
    e.preventDefault();
    if (!this.isFileMaxReached) {
      const files = [...e.dataTransfer.files].filter(file => {
        return ACCEPTED_FILE_TYPES.indexOf(file.type);
      });
      console.log('files on drop', files);
      this.dropZone.classList.remove('m-image-upload__dropzone_dragover');
      if (files.length > 0) {
        this.addFiles(files);
      }
    }
  }

  handleImageClick(index) {
    let shallowClone = [];
    if (this.files.length === this.maxNumberOfFiles) {
      this.allDroppedFiles = this.maxNumberOfFiles - 1;
      this.maxNumberOfFilesExceeded();
    } else {
      this.allDroppedFiles -= 1;
      this.maxNumberOfFilesExceeded();
    }
    this.errorWrapper.innerHTML = '';

    if (index >= this.files.length) {
      shallowClone = [...this.wrongFiles];
      shallowClone.splice(index - this.files.length, 1);
      this.wrongFiles = shallowClone;
      this.allDroppedFiles += 1; // TODO not so beautiful
    } else {
      shallowClone = [...this.files];
      shallowClone.splice(index, 1);
      this.files = shallowClone;
      if (this.files.length + 1 === this.maxNumberOfFiles) {
        this.dropZone.appendChild(this.addMoreInputFile);
      }
    }
    this.sizeOfAllFilesByte -= this.allFiles[index].size;
    this.performUpdate();

    if (this.files.length === 0) {
      this.showImageOverview = false;
      this.sizeOfAllFilesByte = 0;
      this.allDroppedFiles = 0;
      this.files = [];
      this.allFiles = [];
      this.wrongFiles = [];
      this.addMoreInputFile.parentNode.removeChild(this.addMoreInputFile);
    }
  }

  async addFiles(droppedFiles) {
    this.allDroppedFiles += droppedFiles.length;
    let filesLeftOver = this.maxNumberOfFiles - this.files.length;
    filesLeftOver = filesLeftOver < 0 ? 0 : filesLeftOver;

    const slicedFiles = Array.prototype.slice.call(
      droppedFiles,
      0,
      filesLeftOver
    );

    // alle pdfs compress all images. pngs will become jpes and unrecognised files will be deleted
    const pdfs = [...slicedFiles].filter(file => ~file.type.indexOf('pdf'));
    const compressedImages = await compressImage(slicedFiles);

    const wrongFiles = [];
    let finalFiles = pdfs;

    for (let i = 0; i < compressedImages.length; i++) {
      const dKey = fileKey(slicedFiles[i], true);
      if (
        !compressedImages.some(
          compressedImage => fileKey(compressedImage, true) === dKey
        )
      ) {
        wrongFiles.push(compressedImages[i]);
      } else if (this.sizeOfAllFilesByte > this.maxsizeOfAllFilesByte) {
        wrongFiles.push(compressedImages[i]);
      } else if (slicedFiles[i].size > this.maxSizeOfSingleFileByte) {
        wrongFiles.push(compressedImages[i]);
      } else {
        this.sizeOfAllFilesByte += compressedImages[i].size;
        finalFiles = finalFiles.concat(compressedImages[i]);
      }
    }

    this.files = this.files.concat(finalFiles);
    this.wrongFiles = this.wrongFiles.concat(wrongFiles);
    console.log('right', this.files, 'wrong', this.wrongFiles);
    this.performUpdate();

    if (this.files && droppedFiles.length > 0) {
      this.showImageOverview = true;
    }
    if (this.files.length === this.maxNumberOfFiles) {
      this.addMoreInputFile.parentNode.removeChild(this.addMoreInputFile);
    }

    this.maxNumberOfFilesExceeded();
  }

  maxNumberOfFilesExceeded() {
    if (this.allDroppedFiles - this.wrongFiles.length > this.maxNumberOfFiles) {
      this.errorWrapper.innerHTML = this.toManyFilesStatusText;
    }
    if (this.files.length === this.maxNumberOfFiles) {
      this.isFileMaxReached = true;
    } else {
      this.isFileMaxReached = false;
    }
  }

  render() {
    const imageOverviewClasses = {
      'm-image-upload__dropzone-file-overview': this.showImageOverview,
    };
    const errorMessageWrapperClasses = {
      'm-image-upload__error-wrapper--reservation': !this.embedded,
      'm-image-upload__error-wrapper--hidden': this.embedded && !this.showError,
    };

    const urlCreator = window.URL || window.webkitURL;
    this.allFiles = this.files.concat(this.wrongFiles);
    const fileOverview = this.allFiles.map((file, index) => {
      let isWrongFile = false;
      if (!file) {
        return '';
      }
      this.wrongFiles.forEach(wrongfile => {
        if (wrongfile === file) {
          isWrongFile = true;
        }
      });
      const isFile = ~file.type.indexOf('application');
      const imageUrl = urlCreator.createObjectURL(file);
      return html`
        <figure class="m-image-upload__img-figure js-image-upload__img-figure">
          <div
            class="m-image-upload__icon-hover-area"
            @click=${() => this.handleImageClick(index)}
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
                >${isWrongFile ? ClearIcon : ''}</span
              >
              <span class="m-image-upload__icon-delete"
                >${DeleteForeverIcon}</span
              >
            </div>
          </div>
          <figcaption
            class="m-image-upload__img-caption"
            title="${file.name}"
            data-status="${this.deleteStatusText}"
          >
            ${
              isWrongFile
                ? html`
                    <figcaption
                      class="m-image-upload__img-caption m-image-upload__img-caption-error"
                      title="${this.fileToBigStatusText}"
                      data-status="${this.deleteStatusText}"
                    >
                      <span class="m-image-upload__filename"
                        >${this.fileToBigStatusText}</span
                      >
                    </figcaption>
                  `
                : html`
                    <figcaption
                      class="m-image-upload__img-caption"
                      title="${file.name}"
                      data-status="${this.deleteStatusText}"
                    >
                      <span class="m-image-upload__filename">${file.name}</span>
                    </figcaption>
                  `
            }
        </figure>
      `;
    });

    const addMoreInputFile = html`
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
          title="${this.addStatusText}"
        >
          ${this.addStatusText}
        </figcaption>
      </figure>
    `;

    return html`
      <article class="m-image-upload">
        <h1><slot></slot></h1>
        <section
          @dragover="${this.handleImageUploadDropZoneDragover}"
          @dragleave="${this.handleImageUploadDropZoneDragleave}"
          @drop="${this.handleImageUploadDropZoneDrop}"
          class="m-image-upload__dropzone js-image-upload__dropzone ${classMap(
            imageOverviewClasses
          )}"
        >
          ${!this.showImageOverview
            ? html`
                <div>
                  ${ImageUploadGroupIcon}
                </div>
                <p class="m-image-upload__information">${INFO}</p>
                <p class="m-image-upload__or">${OR}</p>
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
                ${fileOverview} ${addMoreInputFile}
              `}
        </section>

        <div
          class="m-image-upload__error-wrapper js-image-upload__error-wrapper ${classMap(
            errorMessageWrapperClasses
          )}"
        ></div>
      </article>
    `;
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
