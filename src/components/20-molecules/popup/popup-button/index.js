import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { InfoSvg, CancelSvg } from '@axa-ch/materials/icons/material-design';
import popupButtonCSS from './index.scss';

import applyDefaults from '../../../../utils/apply-defaults';

class AXAPopupButton extends LitElement {
  static get tagName() {
    return 'axa-popup-button';
  }

  static get styles() {
    return css`
      ${unsafeCSS(popupButtonCSS)}
    `;
  }

  static get properties() {
    return {
      open: { type: Boolean },
      onClick: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const { open } = this;

    return html`
      <button class="a-popup-button" @click="${this.onClick}">
        ${unsafeHTML(open ? CancelSvg : InfoSvg)}
      </button>
    `;
  }
}

export default AXAPopupButton;
