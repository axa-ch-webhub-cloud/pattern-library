/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { AXAPopupMixin, AXAPopupButton, AXAPopupContent } from '@axa-ch/popup';

import NoShadowDOM from '../../../utils/no-shadow';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import createRefId from '../../../utils/create-ref-id';
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
      pattern: {
        // pattern="" or pattern="undefined" can cause problems on validating a form. Because of that set a RegEx that allows everything in that case.
        converter: value => value || PATTERN_DEFAULT,
      },
      onChange: { type: Function, attribute: false },
      onFocus: { type: Function, attribute: false },
      onBlur: { type: Function, attribute: false },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    applyDefaults(this);

    // internal properties
    this.nativeInput = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
    this.isPlaceholderInCounter = false;

    /* eslint-disable no-undef */
    const enrichedVersionInfo = __VERSION_INFO__;
    const commonPopupVersion = enrichedVersionInfo['axa-popup']['axa-popup'];
    enrichedVersionInfo[AXAPopupButton.tagName] = {
      [AXAPopupButton.tagName]: commonPopupVersion,
    };
    enrichedVersionInfo[AXAPopupContent.tagName] = {
      [AXAPopupContent.tagName]: commonPopupVersion,
    };
    defineVersioned([AXAPopupButton, AXAPopupContent], enrichedVersionInfo);
    /* eslint-enable no-undef */
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
      !this.invalid &&
      this.areCharsLeft &&
      this.counter &&
      !this.disabled
    );
  }

  get showCounterMax() {
    return (
      this.maxLength > 0 &&
      this.counterMax &&
      !this.showError &&
      !this.areCharsLeft &&
      !this.disabled
    );
  }

  get showMessages() {
    return this.showError || this.showCounter || this.showCounterMax;
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
    return this.error && this.invalid && !this.disabled && !this._open;
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

  handleFocus = ev => {
    this.nativeInput.classList.add('focus');
    this.onFocus(ev);
  };

  handleBlur = ev => {
    this.nativeInput.classList.remove('focus');
    this.onBlur(ev);
  };

  handleInput = ev => {
    this.onChange(ev);
    // are we a 'controlled' input in the React sense?
    if (this.isControlled) {
      // yes, set UI from model state
      this.nativeInput.value = this.modelValue;
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
  };

  _isSafari() {
    return (
      navigator &&
      navigator.vendor &&
      navigator.vendor.includes &&
      navigator.vendor.includes('Apple Computer')
    );
  }

  _isFirefox() {
    return (
      navigator &&
      navigator.userAgent &&
      navigator.userAgent.includes('Firefox')
    );
  }

  firstUpdated() {
    const { defaultValue, isReact, value } = this;

    if (isReact) {
      this.nativeInput.value = defaultValue || value;
    }

    this.isPlaceholderInCounter = this.counter && /##.*##/.test(this.counter);
    this.modelCounter = this.getCounterText;

    // Firefox ignores the html autofocus attribute.
    if (this._isFirefox() && !document.hasFocus() && this.autofocus) {
      this.querySelector('input').focus();
    }
  }

  updated() {
    this.nativeInput = this.querySelector('input');
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
      checkMark,
      isControlled,
      refId,
      inputmode = '',
      pattern = PATTERN_DEFAULT, // if we do not set a default value here the result on DOM is pattern="undefined", that causes problems on validating a form
      _open,
    } = this;

    this.isControlled = isControlled && isReact;

    const inputClasses = {
      'a-input-text__input': true,
      'a-input-text__input--error':
        (invalid && !disabled) || this.showCounterMax,
      'a-input-text__input--check':
        checkMark && !this.showCounterMax && !disabled,
    };

    return html`
      ${label &&
        html`
          <label for="${refId}" class="a-input-text__label">
            ${label}
            ${required
              ? html`
                  *
                `
              : ''}
          </label>
        `}
      <div class="a-input-text__input-wrapper">
        <div class="a-input-text__input-elements">
        ${
          // On Safari, the caret (cursor) jumps to the end of the value, which
          // is fixed with this approach.
          // Downside: After a user manipulated the value manually, it cannot
          // be updated anymore by javascript (safari only).
          this._isSafari()
            ? html`
                <input
                  id="${refId}"
                  type="${type}"
                  class="${classMap(inputClasses)}"
                  autocomplete="off"
                  name="${name}"
                  value="${value}"
                  placeholder="${placeholder}"
                  aria-required="${required}"
                  maxlength="${maxLength}"
                  pattern="${pattern}"
                  inputmode="${inputmode}"
                  ?disabled="${disabled}"
                  @input="${this.handleInput}"
                  @focus="${this.handleFocus}"
                  @blur="${this.handleBlur}"
                  autofocus
                />
              `
            : html`
                <input
                  id="${refId}"
                  type="${type}"
                  class="${classMap(inputClasses)}"
                  autocomplete="off"
                  name="${name}"
                  .value="${value}"
                  placeholder="${placeholder}"
                  aria-required="${required}"
                  maxlength="${maxLength}"
                  pattern="${pattern}"
                  inputmode="${inputmode}"
                  ?disabled="${disabled}"
                  @input="${this.handleInput}"
                  @focus="${this.handleFocus}"
                  @blur="${this.handleBlur}"
                  autofocus
                />
              `
        }
          ${
            this.showCheckMark
              ? html`
                  <span class="a-input-text__check"></span>
                `
              : ''
          }
        </div>
        ${info &&
          versionedHtml(this)`
            <axa-popup-button
              ?open="${_open}"
              class="a-input-text__info-button"
              @click="${this.handlePopupButtonClick}"
            ></axa-popup-button>
          `}
      </div>
        ${
          this.showError
            ? html`
                <span class="a-input-text__error">${error}</span>
              `
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

/* eslint-disable no-undef */
defineVersioned([AXAInputText], __VERSION_INFO__);

export default AXAInputText;
