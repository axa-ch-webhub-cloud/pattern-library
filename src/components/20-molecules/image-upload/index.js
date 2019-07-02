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

const ImageUploadGroupIcon = svg([ImageUploadGroupSvg]);

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
      // finalFiles: { type: Object, reflect: true },
      // wrongFiles: { type: Object, reflect: true },
      errorStatusText: { type: String },
      deleteStatusText: { type: String },
      addStatusText: { type: String },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.maxSizeOfSingleFileMB = 5;
    this.maxSizeOfAllFilesMB = 20;
    this.maxNumberOfFiles = 10;
    this.showImageOverview = false;
    this.icon = 'cloud-upload';
    this.finalFiles = [];
    this.wrongFiles = [];
    this.errorStatusText = 'Error occured';
    this.deleteStatusText = 'Delete';
    this.addStatusText = 'Add more';
    this.onClick = () => {};

    this.maxSizeOfSingleFileB = getBytesFromMegabyte(
      this.maxSizeOfSingleFileMB
    );
    this.maxSizeOfAllFilesB = getBytesFromMegabyte(this.maxSizeOfAllFilesMB);

    this.sizeOfAllFilesB = 0;
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__dropzone');
    this.inputFile = this.shadowRoot.querySelector('.m-image-upload__input');
    this.addImageButton = this.shadowRoot.querySelector(
      '.js-image-upload__icon-hover-area'
    );
  }

  render() {
    console.log('render()', this.finalFiles);
    const classes = {
      'm-image-upload__dropzone-file-overview': this.showImageOverview,
    };

    console.log('qqqqq ccc');

    const urlCreator = window.URL || window.webkitURL;

    console.log('qqqqq', this.finalFiles);

    window.handleImageClick = this.handleImageClick;

    window.ctx = this;

    const imageOverview = this.finalFiles.map((file, i) => {
      const isFile = ~file.type.indexOf('application');
      const imageUrl = urlCreator.createObjectURL(file);

      console.log('dedede');
      // TODO set icons

      return html`
        <figure
          data-index="${i}"
          class="m-image-upload__img-figure js-image-upload__img-figure"
        >
          <div
            class="m-image-upload__icon-hover-area"
            @click=${() => this.handleImageClick(i)}
            @mouseover=${() => this.handleImageMouseover(i)}
            @mouseout=${() => this.handleImageMouseout(i)}
          >
            ${isFile
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
                `}
            <div
              class="m-image-upload__icon-layer js-image-upload__icon-layer"
            ></div>
          </div>
          <figcaption
            class="m-image-upload__img-caption js-image-upload__img-caption"
          >
            ${file.name}
          </figcaption>
        </figure>
      `;
    });

    const addMoreInputFile = html`
      <figure
        class="m-image-upload__img-figure m-image-upload__add-more js-image-upload__img-figure"
      >
        <div
          class="m-image-upload__icon-layer"
          @click=${this.handleAddMoreInputClick}
        >
          ${AddIcon}
        </div>
        <figcaption class="m-image-upload__img-caption">
          ${this.addStatusText}
        </figcaption>
      </figure>
    `;

    console.log(imageOverview);

    /**
    ${!this.showImageOverview
      ? html`
          <div>
            ${ImageUploadGroupIcon}
          </div>
          <p class="m-image-upload__information">${INFO}</p>
          <p class="m-image-upload__or">${OR}</p>
          <axa-input-file
            class="m-image-upload__input"
            accept="image/jpg, image/jpeg, application/pdf, image/png"
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
          ${imageOverview[1]} ${addMoreInputFile}
        `}
    */

    return html`
      <article class="m-image-upload">
        <h1><slot></slot></h1>
        <section
          @dragover="${this.handleImageUploadDropZoneDragover}"
          @dragleave="${this.handleImageUploadDropZoneDragleave}"
          @drop="${this.handleImageUploadDropZoneDrop}"
          class="m-image-upload__dropzone js-image-upload__dropzone ${classMap(
            classes
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
                  class="m-image-upload__input"
                  accept="image/jpg, image/jpeg, application/pdf, image/png"
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
                ${imageOverview} ${addMoreInputFile}
              `}
        </section>
      </article>
    `;
  }

  handleAddMoreInputClick() {
    this.inputFile.querySelector('input').click();
  }

  handleImageUploadButtonClick(e) {
    e.stopPropagation();
  }

  handleImageUploadButtonChange(e) {
    const { files } = e.target;
    console.log('files', files);
    this.addFiles(files);
  }

  handleImageUploadDropZoneDragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';

    this.dropZone.classList.add('m-image-upload__dropzone_dragover');
  }

  handleImageUploadDropZoneDragleave() {
    this.dropZone.classList.remove('m-image-upload__dropzone_dragover');
  }

  handleImageUploadDropZoneDrop(e) {
    e.preventDefault();
    this.dropZone.classList.remove('m-image-upload__dropzone_dragover');
    this.addFiles(e.dataTransfer.files);
  }

  async handleImageClick(i) {
    console.log('click', i);

    const tempFinalFiles = [...this.finalFiles];
    tempFinalFiles.splice(i, 1);
    this.finalFiles = tempFinalFiles;
    // console.log('this.wrongFiles', this.wrongFiles);
    this.performUpdate();
    console.log(await this.updateComplete);
    console.log('herer');

    // if (this.dropZone.children.length === 1) {
    //   this.showImageOverview = false;
    //   this.wrongFiles = [];
    //   this.finalFiles = [];
    // }
  }

  handleImageMouseover = i => {
    this.imgCaptions = this.shadowRoot.querySelectorAll(
      '.js-image-upload__img-caption'
    );
    this.iconLayers = this.shadowRoot.querySelectorAll(
      '.js-image-upload__icon-layer'
    );
    this.imgCaptions[i].innerHTML = this.deleteStatusText;
    this.iconLayers[i].innerHTML = DeleteForeverSvg;
    this.imgCaptions[i].setAttribute('style', 'color:#00008f;');
  };

  handleImageMouseout = i => {
    this.imgCaptions = this.shadowRoot.querySelectorAll(
      '.js-image-upload__img-caption'
    );
    this.iconLayers = this.shadowRoot.querySelectorAll(
      '.js-image-upload__icon-layer'
    );
    this.imgCaptions[i].innerHTML = this.finalFiles[i].name;
    if (false) {
      // TODO iswrong function
      this.iconLayers[i].innerHTML = ClearSvg;
      this.imgCaptions[i].setAttribute('style', 'color:#00008f;');
    } else {
      this.iconLayers[i].innerHTML = '';
      this.imgCaptions[i].removeAttribute('style');
    }
  };

  async addFiles(droppedFiles) {
    let filesLeftOver = this.maxNumberOfFiles - this.finalFiles.length;
    filesLeftOver = filesLeftOver < 0 ? 0 : filesLeftOver;
    const slicedFiles = Array.prototype.slice.call(
      droppedFiles,
      0,
      filesLeftOver
    );

    if (slicedFiles.length < droppedFiles.length) {
      console.log('zu viele files');
    }
    // alle pdfs compress all images. pngs will become jpes and unrecognised files will be deleted
    const pdfs = [...slicedFiles].filter(file => ~file.type.indexOf('pdf'));
    const compressedImages = await compressImage(slicedFiles);
    const finalFiles = pdfs.concat(compressedImages);
    const wrongFiles = [];
    for (let i = 0; i < slicedFiles.length; i++) {
      const dKey = fileKey(slicedFiles[i], true);
      this.sizeOfAllFilesB += slicedFiles[i].size;

      if (!finalFiles.some(finalFile => fileKey(finalFile, true) === dKey)) {
        wrongFiles.push(slicedFiles[i]);
      }
      if (slicedFiles[i].size > this.maxSizeOfSingleFileB) {
        wrongFiles.push(slicedFiles[i]);
        console.log('onetobig', slicedFiles[i], this.maxSizeOfSingleFileB);
      } else if (this.sizeOfAllFilesB > this.maxSizeOfAllFilesB) {
        wrongFiles.push(slicedFiles[i]);
        console.log('alltobig', this.sizeOfAllFilesB, this.maxSizeOfAllFilesB);
      }
    }

    this.finalFiles = this.finalFiles.concat(finalFiles);
    this.wrongFiles = this.wrongFiles.concat(wrongFiles);

    console.log('this.finalFiles', this.finalFiles);
    console.log('this.wrongFiles', this.wrongFiles);

    this.showImageOverview = true;
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
