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
    return {
      invalid: { type: Boolean, reflect: true },
      error: { type: String, reflect: true },
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
    console.log('hello', this.isValid(userInput));
    if (this.isValid(userInput)) {
      this.phoneInputValue = userInput.match(/\d+/g)?.join('') || '';
      this.invalid = false;
    } else {
      this.invalid = true;
      this.error = `Format: +41791001010, Current: ${this.value}`;
      console.log(this.error);
    }
  }

  updated() {
    this.shadowRoot.querySelector(
      '.m-input-phone__mobile-area-code-dropdown'
    ).items = countries;

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
          ></axa-input-text>
        </div>
        <label
          class="m-input-phone__error ${this.invalid
            ? 'm-input-phone__error--show'
            : ''}"
          >${this.error}</label
        >
      </div>
    `;
  }
}

defineVersioned([AXAInputPhone], __VERSION_INFO__);

export default AXAInputPhone;
