/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import AXADropdown from '@axa-ch/dropdown';
import AXAInputText from '@axa-ch/input-text';

import styles from './index.scss';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import { countryItems } from './country-items';

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
    return {
      invalid: { type: Boolean, reflect: true },
      label: { type: String, reflect: true },
      errorprefix: { type: String, reflect: true },
      _errorText: { type: String, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    defineVersioned([AXADropdown, AXAInputText], __VERSION_INFO__, this);
  }

  /**
   * The phone number typed by the user. Must not contain no area-code information.
   * @param {string} phoneNumberTypedByUser e.g. '795121821'
   */
  isValid(phoneNumberTypedByUser) {
    // Contains letters?
    if (phoneNumberTypedByUser.match(/[a-z][A-Z]*/g)) {
      return false;
    }
    // Contains '+' character?
    else if (phoneNumberTypedByUser.includes('+')) {
      return false;
    }
    // Contains zero at the beginning?
    else if (phoneNumberTypedByUser.substring(0, 1) === '0') {
      return false;
    }
    // Longer than 15 character? See: https://en.wikipedia.org/wiki/E.164
    else if (
      this.areaCodeDropdown.value?.length + phoneNumberTypedByUser.length >=
      15
    ) {
      return false;
    }
    return true;
  }

  onNumberChange(ev) {
    const userInput = ev.target?.value || '';
    this.value = `${this.areaCodeDropdown.value}${this.phoneInputText.value}`;
    if (this.isValid(userInput)) {
      this.phoneInputValue = userInput.match(/\d+/g)?.join('') || '';
      this.invalid = false;
    } else {
      this.invalid = true;
      this._errorText = `${this.errorprefix}: ${this.value}`;
    }
  }

  updated() {
    this.shadowRoot.querySelector(
      '.m-input-phone__mobile-area-code-dropdown'
    ).items = countryItems;

    this.areaCodeDropdown = this.shadowRoot.querySelector(
      '.m-input-phone__mobile-area-code-dropdown'
    );

    this.phoneInputText = this.shadowRoot.querySelector(
      '.m-input-phone__mobile-number-input'
    );
  }

  render() {
    return html`
      <div class="m-input-phone">
        <label class="m-input-phone__label">${this.label}</label>
        <div
          class="m-input-phone__container ${this.invalid
            ? 'm-input-phone--invalid'
            : ''}"
        >
          <axa-dropdown
            class="m-input-phone__mobile-area-code-dropdown"
            cropText=""
          ></axa-dropdown>
          <axa-input-text
            class="m-input-phone__mobile-number-input"
            @input="${this.onNumberChange}"
            placeholder="795002020"
          ></axa-input-text>
        </div>
        <label
          class="m-input-phone__error ${this.invalid
            ? 'm-input-phone__error--show'
            : ''}"
          >${this._errorText}</label
        >
      </div>
    `;
  }
}

defineVersioned([AXAInputPhone], __VERSION_INFO__);

export default AXAInputPhone;
