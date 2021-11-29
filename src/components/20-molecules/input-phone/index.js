import { LitElement, html, css, unsafeCSS } from 'lit-element';
import AXADropdown from '@axa-ch/dropdown';
import AXAInputText from '@axa-ch/input-text';

import styles from './index.scss';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import { countries } from './country-items';

class AXAInputPhone extends LitElement {
  static get tagName() {
    return 'axa-input-phone';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    applyDefaults(this);

    defineVersioned([AXADropdown, AXAInputText], __VERSION_INFO__, this);
  }

  updated() {
    this.shadowRoot.querySelector(
      '.m-input-phone__mobile-area-code-dropdown'
    ).items = countries;
  }

  render() {
    return html`
      <div class="m-input-phone">
        <axa-dropdown
          class="m-input-phone__mobile-area-code-dropdown"
          cropText=""
        ></axa-dropdown>
        <div>
          <axa-input-text
            class="m-input-phone__mobile-number-input"
          ></axa-input-text>
        </div>
      </div>
    `;
  }
}

defineVersioned([AXAInputPhone], __VERSION_INFO__);

export default AXAInputPhone;
