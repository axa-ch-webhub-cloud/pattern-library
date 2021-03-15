/* eslint-disable camelcase */
import { LitElement, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import {
  Expand_lessSvg,
  Insert_drive_fileSvg,
  File_downloadSvg,
  EmailSvg,
  Expand_moreSvg,
  Phone_iphoneSvg,
  Local_phoneSvg,
  AddSvg,
  SearchSvg,
  File_uploadSvg,
  Cloud_uploadSvg,
} from '@axa-ch/materials/icons/material-design';
import { ArrowRightSvg, ArrowLeftSvg } from '@axa-ch/materials/icons';
import { AxaLogoSvg, AxaLogoOpenSvg } from '@axa-ch/materials/images';
import iconCSS from './index.scss';
import { defineVersioned } from '../../../utils/component-versioning';
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
      collapse: Expand_lessSvg,
      document: Insert_drive_fileSvg,
      download: File_downloadSvg,
      email: EmailSvg,
      expand: Expand_moreSvg,
      mobile: Phone_iphoneSvg,
      phone: Local_phoneSvg,
      add: AddSvg,
      search: SearchSvg,
      upload: File_uploadSvg,
      'cloud-upload': Cloud_uploadSvg,
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

/* eslint-disable no-undef */
defineVersioned([AXAIcon], __VERSION_INFO__);

export default AXAIcon;
