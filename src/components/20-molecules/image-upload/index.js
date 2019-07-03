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
      maxSizeOfSingleFileMegaByte: { type: Number },
      maxSizeOfAllFilesMegaByte: { type: Number },
      maxNumberOfFiles: { type: Number },
      showImageOverview: { type: Boolean },
      icon: { type: String },
      errorStatusText: { type: String },
      deleteStatusText: { type: String },
      addStatusText: { type: String },
      // onClick: { type: Function }, // TODO Events
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.maxSizeOfSingleFileMegaByte = 5;
    this.maxSizeOfAllFilesMegaByte = 20;
    this.maxNumberOfFiles = 10;
    this.showImageOverview = false;
    this.icon = 'cloud-upload';
    this.finalFiles = [];
    this.wrongFiles = [];
    this.errorStatusText = 'Error occured';
    this.deleteStatusText = 'Delete';
    this.addStatusText = 'Add more';
    // this.onClick = () => {};

    this.maxSizeOfSingleFileByte = getBytesFromMegabyte(
      this.maxSizeOfSingleFileMegaByte
    );
    this.maxsizeOfAllFilesByte = getBytesFromMegabyte(
      this.maxSizeOfAllFilesMegaByte
    );

    this.sizeOfAllFilesByte = 0;
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__dropzone');
    this.inputFile = this.shadowRoot.querySelector('.m-image-upload__input');
  }

  render() {
    console.log('render()', this.finalFiles);
    const classes = {
      'm-image-upload__dropzone-file-overview': this.showImageOverview,
    };
    const urlCreator = window.URL || window.webkitURL;

    // TODO set icons

    const fileOverview = this.finalFiles.map((file, index) => {
      if (!file) {
        return '';
      }
      const isFile = ~file.type.indexOf('application');
      const imageUrl = urlCreator.createObjectURL(file);
      return html`
        <figure class="m-image-upload__img-figure js-image-upload__img-figure">
          <div
            class="m-image-upload__icon-hover-area"
            @click=${() => this.handleImageClick(index)}
            @mouseover=${() => this.handleImageMouseover(index)}
            @mouseout=${() => this.handleImageMouseout(index)}
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
                ${fileOverview} ${addMoreInputFile}
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

  handleImageClick(index) {
    this.sizeOfAllFilesByte -= this.finalFiles[index].size;
    const shallowClone = [...this.finalFiles];
    shallowClone.splice(index, 1);
    this.finalFiles = shallowClone;
    this.performUpdate();

    if (this.dropZone.children.length === 1) {
      this.showImageOverview = false;
      this.sizeOfAllFilesByte = 0;
      this.wrongFiles = [];
      this.finalFiles = [];
    }
  }

  handleImageMouseover = index => {
    // this.imgCaptions = this.shadowRoot.querySelectorAll(
    //   '.js-image-upload__img-caption'
    // );
    // this.iconLayers = this.shadowRoot.querySelectorAll(
    //   '.js-image-upload__icon-layer'
    // );
    // this.imgCaptions[index].innerHTML = this.deleteStatusText;
    // this.iconLayers[index].innerHTML = DeleteForeverSvg;
    // this.imgCaptions[index].setAttribute('style', 'color:#00008f;');
  };

  handleImageMouseout = index => {
    // this.imgCaptions = this.shadowRoot.querySelectorAll(
    //   '.js-image-upload__img-caption'
    // );
    // this.iconLayers = this.shadowRoot.querySelectorAll(
    //   '.js-image-upload__icon-layer'
    // );
    // this.imgCaptions[index].innerHTML = this.finalFiles[index].name;
    // if (false) {
    //   // TODO iswrong function
    //   this.iconLayers[index].innerHTML = ClearSvg;
    //   this.imgCaptions[index].setAttribute('style', 'color:#00008f;');
    // } else {
    //   this.iconLayers[index].innerHTML = '';
    //   this.imgCaptions[index].removeAttribute('style');
    // }
  };

  async addFiles(droppedFiles) {
    console.log('droppedFiles', droppedFiles);
    let filesLeftOver = this.maxNumberOfFiles - this.finalFiles.length;
    filesLeftOver = filesLeftOver < 0 ? 0 : filesLeftOver;

    const slicedFiles = droppedFiles; // TODO
    // const slicedFiles = Array.prototype.slice.call(
    //   droppedFiles,
    //   0,
    //   filesLeftOver
    // );

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

      if (!finalFiles.some(finalFile => fileKey(finalFile, true) === dKey)) {
        wrongFiles.push(slicedFiles[i]);
      } else if (this.sizeOfAllFilesByte > this.maxsizeOfAllFilesByte) {
        wrongFiles.push(slicedFiles[i]);
      } else if (slicedFiles[i].size > this.maxSizeOfSingleFileByte) {
        wrongFiles.push(slicedFiles[i]);
      }

      this.sizeOfAllFilesByte += finalFiles[i].size;
    }

    this.finalFiles = this.finalFiles.concat(finalFiles);
    this.wrongFiles = this.wrongFiles.concat(wrongFiles);
    // this.finalFiles = [...droppedFiles];
    this.performUpdate(); // is it needed?

    if (this.finalFiles && droppedFiles.length > 0) {
      this.showImageOverview = true;
    } else {
      this.finalFiles = [];
      this.wrongFiles = [];
    }
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
