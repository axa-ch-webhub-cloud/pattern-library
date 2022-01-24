/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import AXADropdown from '@axa-ch/dropdown';
import AXAInputText from '@axa-ch/input-text';

import styles from './index.scss';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import { countries, dialCodes, flagEmojis } from './country-items';
import fireCustomEvent from '../../../utils/custom-event';

// helper functions

const isValid = (userInputPhoneNumber, countrycode) => {
  // ignore interspersed filler characters (spaces, dots, dashes) that people may use in various countries
  const phoneNumber = userInputPhoneNumber.trim().replace(/[\s.-]/g, '');
  // only accept numbers
  if (!phoneNumber.match(/^\d+$/)) {
    return false;
  }
  // contains zero at the beginning?
  else if (phoneNumber.charAt(0) === '0') {
    return false;
  }
  // longer than 15 character? See: https://en.wikipedia.org/wiki/E.164#Global_services
  return `${countrycode}${phoneNumber}`.length <= 15;
};
// CE class
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
      disabled: { type: Boolean, reflect: true },
      label: { type: String, reflect: true },
      lang: { type: String, reflect: true, defaultValue: 'de' },
      error: {
        type: String,
        defaultValue: 'Falsches Format',
      },
      countrycode: { type: String, reflect: true, defaultValue: '+41' },
      countryflags: { type: Boolean, reflect: true },
      value: { type: String, defaultValue: undefined }, // proper default for controlled-mode under React
      defaultValue: { type: String },
      onChange: { type: Function, attribute: false },
      errorText: { type: String, attribute: false },
      placeholder: {
        type: String,
        attribute: false,
        defaultValue: '79 123 45 67',
      },
      isReact: { type: Boolean },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
    defineVersioned([AXADropdown, AXAInputText], __VERSION_INFO__, this);

    // initialize internal properties
    this.inputText = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
  }

  set value(val) {
    const { isControlled } = this;
    if (!isControlled && val !== undefined) {
      this.isControlled = true;
    }
    // val(ue) has country-code prefix "+ddd...d" followed by pipe symbol or space?
    let value = val;
    if (/^\+\d+[|\s]/.test(val)) {
      // yes, split into parts (assuming phone number has *neither* pipe symbols nor spaces!)
      const [countrycode, phoneNumber] = val.split(/[|\s]/);
      // update country code
      this.countryCodeDropdown.value = countrycode;
      // and make phone number part the val(ue)
      value = phoneNumber;
    }
    const oldVal = this.modelValue;
    this.modelValue = value;
    this.requestUpdate('value', oldVal);
  }

  get value() {
    // when applyDefaults() is called inside the constructor, inputText
    // does not exist yet.
    if (!this.inputText) {
      return '';
    }

    const {
      isControlled,
      modelValue,
      inputText: { value: inputValue },
    } = this;

    return isControlled ? modelValue : inputValue;
  }

  validatePhoneNumber({ target: { type, value } }) {
    // get country code and phone number from UI input elements
    const { countryCodeDropdown, inputText } = this;
    // eslint-disable-next-line no-unused-vars
    const [_, countrycode] = countryCodeDropdown.value.split('+');
    const phoneNumber = type === 'text' ? value : inputText.value;
    // calculate overall wellformedness from inputs
    this.invalid = !isValid(phoneNumber, countrycode);
    return phoneNumber;
  }

  change = event => {
    // event stops here
    event.stopPropagation();
    // validate phone number value (setting this.invalid as side-effect)
    const value = this.validatePhoneNumber(event);
    // we need to call back someone?
    const { onChange } = this;
    if (typeof onChange === 'function') {
      // yes, tell them the changed value
      onChange(value);
    }
    // are we a 'controlled' input in the React sense?
    if (this.isControlled) {
      // yes, set UI from model state
      this.inputText.value = this.modelValue;
    }
    // let the world know our value changed
    fireCustomEvent('axa-change', value, this, { bubbles: false });
  };

  Q(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  firstUpdated() {
    // precompute country items from compressed country data
    const { countrycode, lang, countryflags, defaultValue, isReact } = this;
    const numericCountryCode = parseInt(countrycode.replace(/\D/g, ''), 10);
    const perLanguageOffsets = { de: 0, en: 1, fr: 2, it: 3 };
    const numLanguages = Object.keys(perLanguageOffsets).length;
    const perLanguageOffset = perLanguageOffsets[lang] || perLanguageOffsets.de;
    const sortedCountryItems = dialCodes.map((code, index) => {
      const flagEmoji = flagEmojis[index];
      const flag = countryflags && flagEmoji ? `${flagEmoji} ` : '';
      const value = `${flag}+${code}`;
      // storage layout of countries array is: [germanEntry0, englishEntry0, frenchEntry0, italianEntry0, germanEntry1, ...]
      const languageDependentIndex = numLanguages * index + perLanguageOffset;
      const name = `${flag}${countries[languageDependentIndex]} (+${code})`;
      const selected = code === numericCountryCode;
      return { name, value, selected };
    });
    // cache important DOM nodes
    this.countryCodeDropdown = this.Q('axa-dropdown');
    this.inputText = this.Q('axa-input-text');
    // assign country items to embedded axa-dropdown
    this.countryCodeDropdown.items = sortedCountryItems;
    // prespecified phone number?
    if (defaultValue) {
      // yes, let embedded axa-input-text know
      this.inputText[isReact ? 'defaultValue' : 'value'] = defaultValue;
    }
  }

  render() {
    // extract salient properties
    const {
      label,
      invalid,
      disabled,
      error = '',
      placeholder,
      change,
      isControlled,
      isReact,
      value,
    } = this;
    // determine whether component is controlled in the React sense
    // (cf. https://reactjs.org/docs/forms.html#controlled-components)
    this.isControlled = isControlled && isReact;
    // render proper
    const errorHTML = invalid
      ? html`
          <label class="m-input-phone__error">${error}</label>
        `
      : html``;

    return html`
      <div class="m-input-phone">
        <label class="m-input-phone__label">${label}</label>
        <div class="m-input-phone__container">
          <axa-dropdown
            class="m-input-phone__mobile-area-code-dropdown"
            cropText=""
            showValue=""
            ?disabled="${disabled}"
            @axa-change="${change}"
          ></axa-dropdown>
          <axa-input-text
            class="m-input-phone__mobile-number-input"
            .value="${value}"
            .invalid="${invalid}"
            ?disabled="${disabled}"
            .isReact="${isReact}"
            .onChange="${change}"
            .placeholder="${placeholder}"
          ></axa-input-text>
        </div>
        ${errorHTML}
      </div>
    `;
  }
}

defineVersioned([AXAInputPhone], __VERSION_INFO__);

export default AXAInputPhone;
