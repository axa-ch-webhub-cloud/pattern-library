import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/input-file';
import { classMap } from 'lit-html/directives/class-map';

import {
  AddSvg,
  CheckCircleSvg,
  DeleteForeverSvg,
  ClearSvg,
  AttachFileSvg,
} from '@axa-ch/materials/icons';

import { ImageUploadGroupSvg } from './icons';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import { fileKey } from './utils/fileKey';
import compressImage from './utils/imageCompressor';

const OR = 'or';
const INFO = 'Drag and drop to upload your file';

const AddIcon = svg([AddSvg]);
const AttachFileIcon = svg([AttachFileSvg]);
const ClearIcon = svg([ClearSvg]);
const CheckCircleIcon = svg([CheckCircleSvg]);

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
      finalFiles: { type: Object },
      wrongFiles: { type: Object },
      errorStatusText: { type: String },
      deleteStatusText: { type: String },
      addStatusText: { type: String },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.maxSizeOfSingleFileMB = 10;
    this.maxSizeOfAllFilesMB = 20;
    this.maxNumberOfFiles = 10;
    this.showImageOverview = false;
    this.icon = 'cloud-upload'; // TODO change to upload-cloud
    this.finalFiles = [];
    this.wrongFiles = [];
    this.errorStatusText = 'Error occured';
    this.deleteStatusText = 'Delete';
    this.addStatusText = 'Add more';
    this.onClick = () => {};

    this.allImagesInput = [];
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__dropzone');
    this.inputFile = this.shadowRoot.querySelector('.m-image-upload__input');
    this.addImageButton = this.shadowRoot.querySelector(
      '.js-image-upload__icon-hover-area'
    );
  }

  render() {
    const classes = {
      'm-image-upload__dropzone-file-overview': this.showImageOverview,
    };

    const urlCreator = window.URL || window.webkitURL;
    const imageOverview = this.finalFiles.map((file, i) => {
      const isFile = ~file.type.indexOf('application');
      const imageUrl = urlCreator.createObjectURL(file);
      return html`
        <figure class="m-image-upload__img-figure js-image-upload__img-figure">
          <div
            class="m-image-upload__icon-hover-area"
            @click=${e => this.handleImageClick(i, e)}
            @mouseover=${e => this.handleImageMouseover(i, e)}
            @mouseout=${e => this.handleImageMouseout(i, e)}
          >
            ${isFile
              ? html`
                  <span className="m-image-upload__file-element">
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

  handleImageClick(i, e) {
    console.log('e', e, e.target.parentNode.nodeName);

    this.shadowRoot
      .querySelectorAll('.js-image-upload__img-figure')
      [i].remove();
    // TODO remove from array
    if (this.dropZone.children.length === 1) {
      this.showImageOverview = false;
      this.wrongFiles = [];
      this.finalFile = [];
    }
  }

  handleImageMouseover = i => {
    console.log('i,this', i, this);

    this.imgCaptions = this.shadowRoot.querySelectorAll(
      '.js-image-upload__img-caption'
    );
    this.iconLayers = this.shadowRoot.querySelectorAll(
      '.js-image-upload__icon-layer'
    );

    if (this.wrongFiles.length > 0) {
      this.wrongFiles.forEach(file => {
        if (this.finalFiles[i] === file) {
          this.imgCaptions[i].innerHTML = this.errorStatusText;
          this.iconLayers[i].innerHTML = DeleteSvg; // TODO error image
          this.imgCaptions[i].setAttribute('style', 'color:red;'); // todo axa color
        } else {
          this.imgCaptions[i].innerHTML = this.deleteStatusText;
          this.iconLayers[i].innerHTML = DeleteSvg;
          this.imgCaptions[i].setAttribute('style', 'color:blue;');
        }
      });
    } else {
      this.imgCaptions[i].innerHTML = this.deleteStatusText;
      this.iconLayers[i].innerHTML = DeleteSvg;
      this.imgCaptions[i].setAttribute('style', 'color:blue;');
    }
  };

  handleImageMouseout = i => {
    this.imgCaptions[i].innerHTML = this.finalFiles[i].name;
    this.imgCaptions[i].removeAttribute('style');
  };

  async addFiles(droppedFiles) {
    // alle pdfs compress all images. pngs will become jpes and unrecognised files will be deleted
    const pdfs = [...droppedFiles].filter(file => ~file.type.indexOf('pdf'));
    const compressedImages = await compressImage(droppedFiles);
    const finalFiles = pdfs.concat(compressedImages);
    const wrongFiles = [];
    for (let i = 0; i < droppedFiles.length; i++) {
      const dKey = fileKey(droppedFiles[i], true);
      if (!finalFiles.some(finalFile => fileKey(finalFile, true) === dKey)) {
        wrongFiles.push(droppedFiles[i]);
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
