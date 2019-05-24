import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import {
  DeleteSvg,
  ImageUploadGroupSvg,
  PlusRoundedSvg,
  UploadCloudSvg,
  TickSvg,
} from './icons';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

const OR = 'or';
const INFO = 'Drag and drop to upload your file';

const DeleteIcon = svg([DeleteSvg]);
const ImageUploadGroupIcon = svg([ImageUploadGroupSvg]);
const PlusRoundedIcon = svg([PlusRoundedSvg]);
const UploadCloudIcon = svg([UploadCloudSvg]);
const TickIcon = svg([TickSvg]);

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
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.onClick = () => {};

    this.showImageOverview = false;
  }

  render() {
    const classes = {
      'm-image-upload__dropzone': true,
      'js-image-upload__dropzone': true,
      'm-image-upload__dropzone__overview': this.showImageOverview,
    };
    return html`
      <article class="m-image-upload">
        <h1><slot></slot></h1>
        <section
          @dragover="${this.handleImageUploadDropZoneDragover}"
          @dragleave="${this.handleImageUploadDropZoneDragleave}"
          @drop="${this.handleImageUploadDropZoneDrop}"
          @click="${this.handleImageUploadDropZoneClick}"
          class="${classMap(classes)}"
        >
          ${this.showImageOverview
            ? html`
                <p>TODO</p>
              `
            : html`
                <div class="m-image-upload__icons">
                  ${ImageUploadGroupIcon}
                </div>
                <p class="m-image-upload__information">${INFO}</p>
                <p class="m-image-upload__or">${OR}</p>
                <!-- TODO: replace with AXAInputFile when released------------->
                <label
                  for="file-upload"
                  class="m-button__image-upload-label"
                ></label>
                <input
                  @change="${this.handleImageUploadButtonChange}"
                  type="file"
                  accept="image/jpg, image/jpeg, application/pdf, image/png"
                  capture="camera"
                  multiple="multiple"
                  class="m-button__image-upload-input"
                  id="file-upload"
                />
                <!-- END ------------------------------------------------------>
              `}
        </section>
      </article>
    `;
  }

  handleImageUploadButtonClick(e) {
    e.stopPropagation();
    console.log(e, 'button klick');
  }

  handleImageUploadButtonChange(e) {
    e.stopPropagation();
    console.log(e, 'button change', e.monitor);
    const { files } = e.target;
  }

  handleImageUploadDropZoneDragover(e) {
    e.preventDefault();
    console.log(e, 'dragover');
    e.dataTransfer.dropEffect = 'copy';
  }

  handleImageUploadDropZoneDragleave(e) {
    console.log(e, 'dragleave');
  }

  handleImageUploadDropZoneDrop(e) {
    e.preventDefault();
    const { files } = e.dataTransfer;
    console.log(e, 'drop');
  }

  handleImageUploadDropZoneClick(e) {
    console.log(e, 'zone click');
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
