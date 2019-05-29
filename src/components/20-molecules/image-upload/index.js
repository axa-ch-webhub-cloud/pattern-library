import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/input-file';
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

// TODO -> move all icons to materials
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
      showImageOverview: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.inputFileText = 'Upload file';
    this.onClick = () => {};

    this.showImageOverview = false;
    this.compressedImages = [];
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
                <axa-input-file
                  accept="image/jpg, image/jpeg, application/pdf, image/png"
                  multiple
                  @change=${this.handleImageUploadButtonChange}
                >
                  ${this.inputFileText}
                </axa-input-file>
              `}
        </section>
      </article>
    `;
  }

  handleImageUploadButtonChange(e) {
    e.stopPropagation();
    const { files } = e.target;
    console.log('via button', files);
    this.compressImages(files);
  }

  handleImageUploadDropZoneDragover(e) {
    e.preventDefault();
    console.log(e, 'dragover');
    e.dataTransfer.dropEffect = 'copy';
    // TODO change style
  }

  handleImageUploadDropZoneDragleave(e) {
    console.log(e, 'dragleave');
    // TODO change style
  }

  handleImageUploadDropZoneDrop(e) {
    e.preventDefault();
    const { files } = e.dataTransfer;
    console.log('via drop', files);
    this.compressImages(files);
  }

  handleImageUploadDropZoneClick(e) {
    console.log(e, 'zone click');
  }

  compressImages() {
    if (this.compressedImages) {
      this.showImageOverview = true;
    }
  }
}

defineOnce(AXAImageUpload.tagName, AXAImageUpload);

export default AXAImageUpload;
