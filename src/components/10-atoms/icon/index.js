import { LitElement, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import {
  ArrowLeftSvg,
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
} from '@axa-ch/materials/icons';
import { AxaLogoSvg, AxaLogoOpenSvg } from '@axa-ch/materials/images';
import iconCSS from './index.scss';
import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';
import { xhrCall } from '../../../utils/requests';

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
      'arrow-left': ArrowLeftSvg,
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
      'axa-logo': AxaLogoSvg,
      'axa-logo-open': AxaLogoOpenSvg,
    };
  }

  static get properties() {
    return {
      icon: { type: String },
      size: { type: String, reflect: true },
      _loadedSvg: { type: String },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  updated() {
    const { icon } = this;

    if (/\.svg/.test(icon)) {
      xhrCall(icon).then(result => {
        this.size = 'auto';
        this._loadedSvg = result;
      });
    } else if (/<svg/.test(icon)) {
      this.size = 'auto';
      this._loadedSvg = icon;
    } else {
      this._loadedSvg = AXAIcon.iconsMapping[icon] || '';
    }
  }

  render() {
    return this._loadedSvg && svg([this._loadedSvg]);
  }
}

defineOnce(AXAIcon.tagName, AXAIcon);

export default AXAIcon;
