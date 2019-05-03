import '@webcomponents/webcomponentsjs';
import { classMap } from 'lit-html/directives/class-map';
import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { DocumentSvg, ImagesSvg, CheckListSvg, PlusRoundedSvg } from './icons/index';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

const OR = 'or';
const INFO = 'Drag and drop to upload your file';
const ICONS = [svg([DocumentSvg]), svg([ImagesSvg]), svg([PlusRoundedSvg]), svg([CheckListSvg])];

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
      title: { type: String },
      fileButtonText: { type: String },
      showImageOverview: { type: Boolean, reflect: true },
      maxFiles: { type: Number }
    };
  }

  constructor() {
    super();
    this.title = "Image Upload";
    this.showImageOverview = false;
    this.fileButtonText = "Datei hochlanden";
    this.maxFiles = 10;
  }

  firstUpdated() {
    this.inputButton = this.shadowRoot.querySelector('.js-image-upload__input');
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__dropzone');
  }

  render() {
    const iconElements = ICONS.map(icon => html`<div class="m-image-upload__icon">${icon}</div>`);

    const classes = {
      'm-image-upload__dropzone': true,
      'js-image-upload__dropzone': true,
      'm-image-upload__dropzone--drop': this.showImageOverview,
    }
    console.log('classes', classes)
    return html`
    <article class="m-image-upload">
      <h1>${this.title}</h1>
        <section @dragover="${this.handleImageUploadDropZoneDragover}"
                 @dragleave="${this.handleImageUploadDropZoneDragleave}"
                 @drop="${this.handleImageUploadDropZoneDrop}"
                 @click ="${this.handleImageUploadDropZoneClick}" class="${classMap(classes)}">
            ${this.showImageOverview
              ? html`<p>TODO</p>`
              : html`<div class="m-image-upload__icons">
                  ${iconElements}
                </div>
                <p class="m-image-upload__information">${INFO}</p>
                <p class="m-image-upload__or">${OR}</p>
                <label for="file-upload" class="m-button__image-upload-label"></label>
                <input @change="${this.handleImageUploadButtonChange}" @click="${this.handleImageUploadButtonClick}"
                type="file"
                accept="image/jpg, image/jpeg, application/pdf, image/png"
                capture="camera"
                multiple="multiple"
                class="m-image-upload__input js-image-upload__input"
                id="file-upload"/>`
            }
        </section>
    </article>`;
  }

  handleImageUploadButtonClick(e) {
    e.stopPropagation();
    console.log(e, 'button klick')
  }

  handleImageUploadButtonChange(e) {
    e.stopPropagation();
    this.showImageOverview = true;
    const { files } = e.target;
  }

  handleImageUploadDropZoneDragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    this.dropZone.classList.add("m-image-upload__dropzone--dragover");
  }

  handleImageUploadDropZoneDragleave(e) {
    this.dropZone.classList.remove("m-image-upload__dropzone--dragover");
  }

  handleImageUploadDropZoneDrop(e) {
    e.preventDefault();
    this.dropZone.classList.remove("m-image-upload__dropzone--dragover");
    this.showImageOverview = true;
    const { files } = e.dataTransfer;
  }

  handleImageUploadDropZoneClick(e) {
    console.log(e, 'zone click')
    this.inputButton.click();
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
