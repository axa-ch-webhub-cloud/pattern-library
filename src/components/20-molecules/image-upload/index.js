import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/input-file';
import { classMap } from 'lit-html/directives/class-map';
import { ImageUploadGroupSvg, DeleteSvg } from './icons';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import { fileKey } from './utils/fileKey';
import compressImage from './utils/imageCompressor';

const OR = 'or';
const INFO = 'Drag and drop to upload your file';

// TODO -> move all icons to materials
const ImageUploadGroupIcon = svg([ImageUploadGroupSvg]);
const DeleteIcon = svg([DeleteSvg]);

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
    this.icon = 'upload'; // TODO change to upload-cloud
    this.finalFiles = [];
    this.wrongFiles = [];
    this.allFiles = [];
    this.errorStatusText = 'Error occured';
    this.deleteStatusText = 'Delete';
    this.onClick = () => {};

    this.allImagesInput = [];
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__dropzone');
    this.addImageButton = this.shadowRoot.querySelector(
      '.js-image-upload__icon-hover-area'
    );
  }

  render() {
    const classes = {
      'm-image-upload__dropzone-file-overview': this.showImageOverview,
    };
    const urlCreator = window.URL || window.webkitURL;
    return html`
      <article class="m-image-upload">
        <h1><slot></slot></h1>
        <section
          @dragover="${this.handleImageUploadDropZoneDragover}"
          @dragleave="${this.handleImageUploadDropZoneDragleave}"
          @drop="${this.handleImageUploadDropZoneDrop}"
          @click="${this.handleImageUploadDropZoneClick}"
          class="m-image-upload__dropzone js-image-upload__dropzone ${classMap(
            classes
          )}"
        >
          ${!this.showImageOverview
            ? html`
                <div class="m-image-upload__icons">
                  ${ImageUploadGroupIcon}
                </div>
                <p class="m-image-upload__information">${INFO}</p>
                <p class="m-image-upload__or">${OR}</p>
                <axa-input-file
                  accept="image/jpg, image/jpeg, application/pdf, image/png"
                  icon="${this.icon}"
                  multiple
                  @change=${this.handleImageUploadButtonChange}
                  variant="red"
                >
                  ${this.inputFileText}
                </axa-input-file>
              `
            : this.finalFiles.map(file => {
                const imageUrl = urlCreator.createObjectURL(file);
                return html`
                <figure class="m-image-upload__img-figure js-image-upload__img-figure">
                  <div class="m-image-upload__icon-hover-area"
                  @click=${this.handleImageClick}>
                    <img
                      class="m-image-upload__img-element"
                      src="${imageUrl}"
                      alt="${file.name}">
                    </img>
                    <div class="m-image-upload__icon-layer">${DeleteIcon}</div>
                    <figcaption class="m-image-upload__img-caption">${
                      file.name
                    }</figcaption>
                  </div>
                </figure>
              `;
              })}
        </section>
      </article>
    `;
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
    const { files } = e.dataTransfer;
    this.addFiles(files);
  }

  handleImageClick() {
    this.shadowRoot.querySelector('.js-image-upload__img-figure').remove();
  }

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

    this.finalFiles = finalFiles;
    this.wrongFiles = wrongFiles;
    this.showImageOverview = true;
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
