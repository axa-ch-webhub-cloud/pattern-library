/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import AXADropdown from '@axa-ch/dropdown';
import AXAInputText from '@axa-ch/input-text';

import styles from './index.scss';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import { countries, nearCountries } from './country-items';

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
      lang: { type: String, reflect: true },
      defaultarea: { type: String, reflect: true, defaultValue: '+41' },
      errorprefix: { type: String, reflect: true },
      value: { type: String, reflect: true },
      onChange: { type: Function, attribute: false },
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
      this.areaCodeDropdown.value?.length +
        phoneNumberTypedByUser?.replaceAll(' ', '').length >=
      15
    ) {
      return false;
    }
    return true;
  }

  onNumberChange(ev, areaCode) {
    let areaCodeValid = true;
    if (areaCode) {
      areaCodeValid = this.sortedCountryItems.includes(
        item => item.value === areaCode
      );
    }
    const userInput = ev.target?.value || '';
    this.value = `${this.areaCodeDropdown.value}${this.phoneInputText.value}`;
    if (this.isValid(userInput) && areaCodeValid) {
      this.invalid = false;
    } else {
      this.invalid = true;
      this._errorText = `${
        this.errorprefix
      }: ${`${this.areaCodeDropdown.value} ${this.phoneInputText.value}`}`;
    }
  }

  /**
   * If the user of this custom elements want's to set a value (pre-filling).
   * This will still be checked for errors by the custom element.
   */
  applyManualValueOverride() {
    if (typeof this.value === 'object') {
      if (this.value.areaCode) {
        this.areaCodeDropdown.value = this.value.areaCode;
      }
      this.phoneInputText.value = this.value.phoneNumber || '';
      // To comply with the 'onNumberChange' method's contract, use a synthetic event.
      const syntheticEventWithInputValue = {
        target: { value: this.phoneInputText.value },
      };
      this.onNumberChange(syntheticEventWithInputValue);
    }
  }

  change(ev) {
    ev.stopPropagation();
    if (this.onChange) {
      this.onChange({
        detail: this.value,
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();
    const adaptedCountryItems = countries.map(cItem => ({
      name: `${cItem[this.lang] || cItem.de} ${cItem.dialCode}`,
      value: cItem.dialCode,
      selected: cItem.dialCode === this.defaultarea,
    }));
    adaptedCountryItems.sort((a, b) =>
      // eslint-disable-next-line no-nested-ternary
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
    const adaptedNearCountryItems = nearCountries.map(cItem => ({
      name: `${cItem[this.lang] || cItem.de} ${cItem.dialCode}`,
      value: cItem.dialCode,
      selected: cItem.dialCode === this.defaultarea,
    }));

    this.sortedCountryItems = adaptedNearCountryItems.concat(
      adaptedCountryItems
    );
  }

  updated() {
    const mobileDropdown = this.shadowRoot.querySelector(
      '.m-input-phone__mobile-area-code-dropdown'
    );
    mobileDropdown.items = this.sortedCountryItems;

    this.areaCodeDropdown = this.shadowRoot.querySelector(
      '.m-input-phone__mobile-area-code-dropdown'
    );

    this.phoneInputText = this.shadowRoot.querySelector(
      '.m-input-phone__mobile-number-input'
    );

    this.applyManualValueOverride();
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
            showValue=""
            @axa-change="${this.change}"
          ></axa-dropdown>
          <axa-input-text
            class="m-input-phone__mobile-number-input"
            @input="${this.onNumberChange}"
            placeholder="79 500 20 20"
            @change="${this.change}"
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
