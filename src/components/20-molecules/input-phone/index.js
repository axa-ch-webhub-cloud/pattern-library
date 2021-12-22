/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import AXADropdown from '@axa-ch/dropdown';
import AXAInputText from '@axa-ch/input-text';

import styles from './index.scss';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import { countries, nearCountries } from './country-items';
import fireCustomEvent from '../../../utils/custom-event';

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
      errorprefix: { type: String, reflect: true },
      areavalue: { type: String, reflect: true, defaultValue: '+41' },
      phonevalue: { type: String, reflect: true },
      value: { type: String, reflect: true },
      onChange: { type: Function, attribute: false },
      _errorText: { type: String, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    defineVersioned([AXADropdown, AXAInputText], __VERSION_INFO__, this);
    this.change = this.change.bind(this);
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

  setAndValidatePhoneNumber() {
    this.value = `${this.areaCodeDropdown.value}${this.phoneInputText.value}`;
    if (this.isValid(this.phoneInputText.value)) {
      this.invalid = false;
    } else {
      this.invalid = true;
      this._errorText = `${
        this.errorprefix
      }: ${`${this.areaCodeDropdown.value} ${this.phoneInputText.value}`}`;
    }
  }

  /**
   * If the number should be prefilled, we override it here.
   * This will still be checked for errors by the custom element.
   */
  applyManualValueOverride() {
    if (this.areavalue) {
      this.areaCodeDropdown.value = this.areavalue;
    }
    if (this.phonevalue) {
      this.phoneInputText.value = this.phonevalue;
      // To comply with the 'onNumberChange' method's contract, use a synthetic event.
      const syntheticEventWithInputValue = {
        target: { value: this.phoneInputText.value },
      };
      this.setAndValidatePhoneNumber(syntheticEventWithInputValue);
    }
  }

  change(ev) {
    ev.stopPropagation();
    this.setAndValidatePhoneNumber(ev);
    if (this.onChange) {
      this.onChange(this.value);
    }
    fireCustomEvent('axa-change', this.value, this, { bubbles: false });
  }

  countryMapper(countryArray) {
    return countryArray.map(cItem => ({
      name: `${cItem[this.lang] || cItem.de} ${cItem.dialCode}`,
      value: cItem.dialCode,
      selected: cItem.dialCode === this.areavalue,
    }));
  }

  connectedCallback() {
    super.connectedCallback();
    const adaptedCountryItems = this.countryMapper(countries);
    adaptedCountryItems.sort((a, b) =>
      // eslint-disable-next-line no-nested-ternary
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
    const adaptedNearCountryItems = this.countryMapper(nearCountries);

    this.sortedCountryItems = adaptedNearCountryItems.concat(
      adaptedCountryItems
    );
  }

  firstUpdated() {
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
    this.phoneInputText.removeEventListener('change', this.change);
    this.phoneInputText.addEventListener('change', this.change);

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
            @input="${this.change}"
            placeholder="79 500 20 20"
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
