/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import AXADropdown from '@axa-ch/dropdown';
import AXAInputText from '@axa-ch/input-text';

import styles from './index.scss';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import { countries, dialCodes, flagEmojis } from './country-items';
import fireCustomEvent from '../../../utils/custom-event';
import findIndex from '../../../utils/find-index';

// helper functions

// ignore interspersed filler characters (spaces, dots, dashes) that people may use in various countries
const cleaned = string => string.trim().replace(/[\s.-]/g, '');

// parse e.g. '+1 888-944-9400' => ['1','888-944-9400'], but equally '  +41 79 123 45 67' => ['41','79 123 45 67']
// as well as '79 123 45 67' => ['', '79 123 45 67']
const parseCompositeValue = string =>
  /^\s*\+\d+\s/.test(string)
    ? string.match(/^\s*\+(\d+)\D+(.*)$/).slice(1)
    : ['', string];

const isValid = (userInputPhoneNumber, countrycode) => {
  // handle pasted-in fully country-coded numbers, too
  const [_countrycode, _phoneNumber] = parseCompositeValue(
    userInputPhoneNumber
  );
  // derive canonical phone number
  const phoneNumber = cleaned(_phoneNumber);
  // only accept numbers
  if (!phoneNumber.match(/^\d+$/)) {
    return false;
  }
  // contains zero at the beginning?
  else if (phoneNumber.charAt(0) === '0') {
    return false;
  }
  // longer than 15 character? See: https://en.wikipedia.org/wiki/E.164#Global_services
  return `${_countrycode || countrycode}${phoneNumber}`.length <= 15;
};

// map country code such as (+)41 to country-flag-prefixed code
/* eslint-disable indent */
const code2flaggedCode = (countryCodeNumeric, index, withFlags = true) => {
  const _index =
    typeof index === 'number'
      ? /* index already given */ index
      : /* need to find index, given code */ findIndex(
          dialCodes,
          element => element === countryCodeNumeric
        );
  const flagEmoji = flagEmojis[_index];
  const flag = withFlags && flagEmoji ? `${flagEmoji}\xa0` : ''; // hex. a0 = non-breaking space character
  return { flag, value: `${flag}+${countryCodeNumeric}` };
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
    this.modelCountryCode = '';
    this.isControlled = false;
  }

  set value(val) {
    const { isControlled, countryflags } = this;
    // detect controlled-ness
    if (!isControlled && val !== undefined) {
      this.isControlled = true;
    }
    // val(ue) has country-code prefix "+ddd...d" followed by space?
    let value = val;
    const [countrycode, phoneNumber] = parseCompositeValue(val);
    if (countrycode) {
      // yes, update country code in model
      // N.B. we represent it as flag-prefixed because dropdown values are as well,
      // and value-controlled dropdowns need an exact match to switch selection programmatically
      this.modelCountryCode = code2flaggedCode(
        parseInt(countrycode, 10),
        null,
        countryflags
      ).value;
      // and make phone number part the val(ue)
      value = phoneNumber;
    }
    // update phone number in model and trigger re-render
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

  validatePhoneNumber({
    target: { type, value: newInputTextValueFromOnChange } = {},
    detail,
  }) {
    // get country code and phone number from UI input elements resp. event:

    // prepare
    const eventOriginatedFromInputText = type === 'text';
    const eventOriginatedFromDropdown =
      !eventOriginatedFromInputText && detail !== undefined;
    const { countryCodeDropdown, inputText } = this;
    // for obtaining the phone number proper, there are 2 cases:
    // if we got here via axa-input-text's onChange firing, use the event value; otherwise query the input element
    const [_countrycode, phoneNumber] = parseCompositeValue(
      eventOriginatedFromInputText
        ? newInputTextValueFromOnChange
        : inputText.value
    );
    // for obtaining the country code, there are 3 cases:
    // either it comes from a dropdown event, or it was parsed from a pasted-in composite number, or we use the
    // current dropdown value
    const [, countrycode] = (
      (eventOriginatedFromDropdown && detail) ||
      (_countrycode && `+${_countrycode}`) ||
      countryCodeDropdown.value
    ).split('+'); // split: ensure we only get the digits
    // calculate overall wellformedness from inputs
    this.invalid = !isValid(phoneNumber, countrycode);
    return {
      value: cleaned(phoneNumber),
      countrycode: parseInt(countrycode, 10),
    };
  }

  change = event => {
    // event stops here
    // eslint-disable-next-line no-undef
    if (event instanceof Event) {
      event.stopPropagation();
    }
    // validate phone number value (setting this.invalid as side-effect)
    const { value, countrycode } = this.validatePhoneNumber(event);
    // form a space-separated, easily split-table <countrycode, phonenumber> pair
    const compositeValue = `+${countrycode} ${value}`;
    // we need to call someone back?
    const { onChange } = this;
    if (typeof onChange === 'function') {
      // yes, tell them the changed value
      onChange(compositeValue);
    }
    // are we a 'controlled' input in the React sense?
    if (this.isControlled) {
      // yes, set UI from model state
      this.inputText.value = this.modelValue;
      this.countryCodeDropdown.value = this.modelCountryCode;
    }
    // let the world know our value changed
    fireCustomEvent('axa-change', compositeValue, this, { bubbles: false });
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
    const perLanguageOffset = perLanguageOffsets[lang] || perLanguageOffsets.de; // de = default language
    const sortedCountryItems = dialCodes.map((code, index) => {
      const { flag, value } = code2flaggedCode(code, index, countryflags);
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

  updated() {
    // re-cache important DOM nodes after each re-render
    this.countryCodeDropdown = this.Q('axa-dropdown');
    this.inputText = this.Q('axa-input-text');
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
            class="m-input-phone__mobile-country-code-dropdown"
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
