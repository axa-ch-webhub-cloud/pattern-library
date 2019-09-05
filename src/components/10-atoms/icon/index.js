import { LitElement, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import {
  ArrowRightSvg,
  CollapseSvg,
  DocumentSvg,
  DownloadSvg,
  EmailSvg,
  ExpandSvg,
  MobileSvg,
  PhoneSvg,
  PlusSvg,
  SearchSvg,
  UploadSvg,
  CloudUploadSvg,
  LogoAxaSvg,
} from '@axa-ch/materials/icons';
import iconCSS from './index.scss';
import defineOnce from '../../../utils/define-once';

class AXAIcon extends LitElement {
  static get tagName() {
    return 'axa-icon';
  }

  static get styles() {
    return css`
      ${unsafeCSS(iconCSS)}
    `;
  }

  static get iconsMapping() {
    return {
      'arrow-right': ArrowRightSvg,
      collapse: CollapseSvg,
      document: DocumentSvg,
      download: DownloadSvg,
      email: EmailSvg,
      expand: ExpandSvg,
      mobile: MobileSvg,
      phone: PhoneSvg,
      plus: PlusSvg,
      search: SearchSvg,
      upload: UploadSvg,
      'cloud-upload': CloudUploadSvg,
      'logo-axa': LogoAxaSvg,
    };
  }

  static get properties() {
    return {
      icon: { type: String },
      size: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.icon = '';
  }

  firstUpdated() {
    const { icon } = this;

    if (/\.svg/.test(icon)) {
      const req = new XMLHttpRequest();
      req.open('GET', icon);
      req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
          this.size = 'auto';
          this.shadowRoot.innerHTML = req.response;
        }
      };

      req.send();
    }
  }

  render() {
    return svg([AXAIcon.iconsMapping[this.icon] || '']);
  }
}

defineOnce(AXAIcon.tagName, AXAIcon);

export default AXAIcon;
