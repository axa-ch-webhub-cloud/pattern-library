import {
  AXAPopupButton,
  AXAPopupContent,
  AXAPopupMixin,
} from '@axa-ch-webhub-cloud/popup';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import createRefId from '../../../utils/create-ref-id';
import NoShadowDOM from '../../../utils/no-shadow';
import applyDefaults from '../../../utils/apply-defaults';
import styles from './index.scss';

const PATTERN_DEFAULT = '.*';

class AXAInputText extends AXAPopupMixin(NoShadowDOM) {
  static get tagName() {
    return 'axa-input-text';
  }

  static get properties() {
    return {
      refId: { type: String, defaultValue: `input-text-${createRefId()}` },
      name: { type: String },
      label: { type: String },
      required: { type: Boolean },
      placeholder: { type: String },
      value: { type: String, defaultValue: undefined }, // proper default for controlled-mode under React
      defaultValue: { type: String },
      type: { type: String, defaultValue: 'text' },
      error: { type: String },
      info: { type: String },
      invalid: { type: Boolean },
      checkMark: { type: Boolean },
      disabled: { type: Boolean, reflect: true },
      isReact: { type: Boolean },
      autocomplete: { type: Boolean },
      modelCounter: { type: String },
      counter: { type: String },
      counterMax: { type: String },
      maxLength: {
        /**
         * Only create a Number when there is an actual value passed. If an
         * empty "maxvalue" is used, it would otherwise convert to the type
         * Number with the value 0 and the user would not be able write
         * anything.
         */
        converter: value =>
          // eslint-disable-next-line no-restricted-globals
          !isNaN(parseFloat(value)) && isFinite(value)
            ? Number(value)
            : undefined,
      },
      inputmode: { type: String },
      currency: { type: String },
      pattern: {
        // pattern="" or pattern="undefined" can cause problems on validating a form. Because of that set a RegEx that allows everything in that case.
        converter: value => value || PATTERN_DEFAULT,
      },
      autofocus: { type: Boolean },
      readonly: { type: Boolean },
      onChange: { type: Function, attribute: false },
      onFocus: { type: Function, attribute: false },
      onBlur: { type: Function, attribute: false },
      onKeyDown: { type: Function, attribute: false },
      onKeyUp: { type: Function, attribute: false },
      onPaste: { type: Function, attribute: false },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    applyDefaults(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // internal properties
    this.nativeInput = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
    this.isPlaceholderInCounter = false;
    this.invalidFormat = false;

    const enrichedVersionInfo = __VERSION_INFO__; // This object is different at webpack and rollup build!
    const commonPopupVersion =
      enrichedVersionInfo['axa-input-text']['axa-popup'];
    enrichedVersionInfo[AXAPopupButton.tagName] = {
      [AXAPopupButton.tagName]: commonPopupVersion,
    };
    enrichedVersionInfo[AXAPopupContent.tagName] = {
      [AXAPopupContent.tagName]: commonPopupVersion,
    };
    defineVersioned(
      [AXAPopupButton, AXAPopupContent],
      enrichedVersionInfo,
      this
    );
  }

  get charsLeft() {
    const {
      maxLength = 0,
      nativeInput: { value: nativeValue },
    } = this;

    if (nativeValue) {
      return maxLength - nativeValue.length;
    }

    return maxLength;
  }

  get areCharsLeft() {
    return this.charsLeft > 0;
  }

  get showCounter() {
    return (
      this.maxLength > 0 &&
      !(this.invalid || this.invalidFormat) &&
      this.areCharsLeft &&
      this.counter &&
      !this.disabled &&
      !this.readonly
    );
  }

  get showCounterMax() {
    return (
      this.maxLength > 0 &&
      this.counterMax &&
      !this.showError &&
      !this.areCharsLeft &&
      !this.disabled &&
      !this.readonly
    );
  }

  get getCounterText() {
    const userCharsLeft = this.charsLeft - 1;

    if (this.counter && this.isPlaceholderInCounter) {
      return this.counter.replace(/##.*##/, userCharsLeft);
    }

    if (this.counter) {
      return `${userCharsLeft} ${this.counter}`;
    }

    return userCharsLeft;
  }

  set value(val) {
    const { isControlled } = this;
    if (!isControlled && val !== undefined) {
      this.isControlled = true;
    }
    const oldVal = this.modelValue;
    this.modelValue = val;
    this.requestUpdate('value', oldVal);
  }

  get value() {
    // When applyDefaults() is called inside the constructor, nativeInput
    // does not exist yet.
    if (!this.nativeInput) {
      return '';
    }

    const {
      isControlled,
      modelValue,
      nativeInput: { value: nativeValue },
    } = this;

    return isControlled ? modelValue : nativeValue;
  }

  get showError() {
    return (
      this.error &&
      (this.invalid || this.invalidFormat) &&
      !this.disabled &&
      !this._open
    );
  }

  get showCheckMark() {
    return this.checkMark && this.charsLeft !== 0;
  }

  focus(options = {}) {
    this.nativeInput.focus(options);
    this.nativeInput.classList.add('focus');
  }

  blur() {
    this.nativeInput.blur();
    this.nativeInput.classList.remove('focus');
  }

  handleFocus(ev) {
    this.nativeInput.classList.add('focus');
    this.onFocus(ev);
  }

  handleBlur(ev) {
    this.nativeInput.value = this._formatCurrency(this.value);
    this.modelCounter = this.getCounterText; // update the chars left counter after formatting the input

    this.nativeInput.classList.remove('focus');
    this.onBlur(ev);
  }

  handleInput(ev) {
    const { selectionStart = null } = ev.target;

    // sets this.invalidFormat
    this._formatCurrency(ev.target.value);
    this.onChange(ev, this.invalidFormat);
    // are we a 'controlled' input in the React sense?
    if (this.isControlled) {
      // yes, set UI from model state
      this.nativeInput.value = this.modelValue;

      requestAnimationFrame(() => {
        this.nativeInput.setSelectionRange(selectionStart, selectionStart);
      });
    }

    // means that a automatic prefelling function did fill it. Re-evaluate the component
    // if a user types the chars, the charsLeft always decrease incrementally. With
    // autocomplete instead is decreased all at once, therefore truncate it
    if (this.charsLeft < 0 && this.maxLength) {
      const { nativeInput } = this;
      const valueCutToMaxLength = nativeInput.value.substring(
        0,
        this.maxLength - 1
      );

      // set value of native input element
      nativeInput.value = valueCutToMaxLength;
      // set model value
      this.modelValue = valueCutToMaxLength;
      // request update with the new value
      this.requestUpdate('value', valueCutToMaxLength);
    }

    if (this.maxLength) {
      this.modelCounter = this.getCounterText;
    }
  }

  _setNativeInput() {
    this.nativeInput = this.querySelector('input');
  }

  _formatCurrency(value) {
    const { currency, type } = this;

    if (currency && type === 'text') {
      const hasAtLeastOneDigit = /\d/.test(value);

      if (!this.currencyFormatter) {
        // just create a new Intl if it does not exist
        this.currencyFormatter = new Intl.NumberFormat('de-CH', {
          style: 'currency',
          currency,
        });
      }

      if (hasAtLeastOneDigit) {
        const valueDecimalsOnly = value.replace(/[^0-9.]/g, '');

        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(valueDecimalsOnly)) {
          this.invalidFormat = false;
          return this.currencyFormatter.format(valueDecimalsOnly);
        }
      }

      this.invalidFormat = value.length > 0;
    }

    return value;
  }

  firstUpdated() {
    const { defaultValue, isReact } = this;
    this._setNativeInput();

    if (isReact && defaultValue) {
      this.nativeInput.value = this._formatCurrency(defaultValue);
    }

    this.isPlaceholderInCounter = this.counter && /##.*##/.test(this.counter);
    this.modelCounter = this.getCounterText;

    if (this.autofocus) {
      this.focus();
    }
  }

  updated() {
    this._setNativeInput();
  }

  render() {
    const {
      name,
      required,
      value,
      label = '',
      error = '',
      info = '',
      type = '',
      placeholder = '',
      disabled,
      isReact,
      maxLength = '',
      invalid,
      readonly,
      invalidFormat,
      checkMark,
      isControlled,
      refId,
      autocomplete,
      inputmode = '',
      pattern = PATTERN_DEFAULT, // if we do not set a default value here the result on DOM is pattern="undefined", that causes problems on validating a form
      _open,
    } = this;

    let formattedValue = value;
    // Do not format the value if the user is still typing. We will format its input on blur
    if (document.activeElement !== this.nativeInput) {
      formattedValue = this._formatCurrency(value);
    }

    this.isControlled = isControlled && isReact;

    const inputClasses = {
      'a-input-text__input': true,
      'a-input-text__input--readonly': readonly,
      'a-input-text__input--error':
        ((invalid || invalidFormat) && !disabled) || this.showCounterMax,
      'a-input-text__input--check':
        checkMark && !this.showCounterMax && !disabled,
    };

    return html`
      ${
        label &&
        html`
          <label for="${refId}" class="a-input-text__label">
            ${label} ${required ? html` * ` : ''}
          </label>
        `
      }
      <div class="a-input-text__input-wrapper">
        <div class="a-input-text__input-elements">
        ${html`<input
          id="${refId}"
          type="${type}"
          class="${classMap(inputClasses)}"
          autocomplete="${autocomplete ? 'on' : 'off'}"
          name="${name}"
          .value="${formattedValue}"
          placeholder="${placeholder}"
          aria-required="${required}"
          maxlength="${maxLength}"
          pattern="${pattern}"
          inputmode="${inputmode}"
          ?disabled="${disabled}"
          ?readonly="${readonly}"
          @input="${this.handleInput}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          @keydown="${this.onKeyDown}"
          @keyup="${this.onKeyUp}"
          @paste="${this.onPaste}"
        />`}
          ${
            this.showCheckMark
              ? html` <span class="a-input-text__check"></span> `
              : ''
          }
        </div>
        ${
          info &&
          versionedHtml(this)`
            <axa-popup-button
              ?open="${_open}"
              class="a-input-text__info-button"
              @click="${this.handlePopupButtonClick}"
            ></axa-popup-button>
          `
        }
      </div>
        ${
          this.showError
            ? html` <span class="a-input-text__error">${error}</span> `
            : ''
        }
        ${
          this.showCounter
            ? html`
                <div class="a-input-text__counter-info">
                  ${this.modelCounter}
                </div>
              `
            : ''
        }
        ${
          this.showCounterMax
            ? html`
                <div
                  class="a-input-text__counter-info a-input-text__character-overflow-error"
                >
                  ${this.counterMax}
                </div>
              `
            : ''
        }
      </div>
      ${
        info
          ? versionedHtml(this)`
              <axa-popup-content
                ?open="${_open}"
                class="a-input-text__info-content"
              >
                ${unsafeHTML(info)}
              </axa-popup-content>
            `
          : ''
      }
  `;
  }
}

defineVersioned([AXAInputText], __VERSION_INFO__);

export default AXAInputText;
