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
    // Define properties and types
    return {
      title: { type: String },
      fileButtonText: {type: String},
    };
  }

  constructor() {
    super();
    this.showImageOverview = false;
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-image-upload__input');
  }

  render() {
    const iconElements = ICONS.map(icon => html`<div class="m-image-upload__icon">${icon}</div>`);

    const classes = {
      'm-image-upload__dropzone': true,
      'js-image-upload__dropzone': true,
      'm-image-upload__dropzone__overview': this.showImageOverview,
    }

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
                <input @change="${this.handleImageUploadButtonChange}" type="file"
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
    console.log(e, 'button change', e.monitor)
    const { files } = e.target;
  }
  handleImageUploadDropZoneDragover(e) {
    e.preventDefault();
    console.log(e, 'dragover')
    e.dataTransfer.dropEffect = 'copy';
  }

  handleImageUploadDropZoneDragleave(e) {
    console.log(e, 'dragleave')
  }

  handleImageUploadDropZoneDrop(e) {
    e.preventDefault();
    const { files } = e.dataTransfer;
    console.log(e, 'drop')
  }

  handleImageUploadDropZoneClick(e) {
    console.log(e, 'zone click')
    this.dropZone.click();
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
