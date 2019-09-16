import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
/* eslint-disable import/no-extraneous-dependencies */
import { AXAPopupMixin } from '@axa-ch/popup';

import NoShadowDOM from '../../../utils/no-shadow';
import defineOnce from '../../../utils/define-once';
import createRefId from '../../../utils/create-ref-id';
import styles from './index.scss';

class AXAInputText extends AXAPopupMixin(NoShadowDOM) {
  static get tagName() {
    return 'axa-input-text';
  }

  static get properties() {
    return {
      refId: { type: String },
      name: { type: String },
      label: { type: String },
      required: { type: Boolean },
      placeholder: { type: String },
      value: { type: String },
      defaultValue: { type: String },
      type: { type: String },
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
        type: Number,
        converter: {
          toAttribute(value) {
            return value ? Number(value) : '';
          },
        },
      },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.refId = `input-text-${createRefId()}`;
    this.name = '';
    this.label = '';
    this.placeholder = '';
    // only for React(frameworks) users
    this.defaultValue = '';
    // text, email, password
    this.type = 'text';
    this.error = '';
    this.checkMark = false;
    this.required = false;
    this.invalid = false;
    this.disabled = false;
    this.isReact = false;
    this.modelCounter = '';
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};

    this.counter = '';
    this.counterMax = '';

    // internal properties
    this.nativeInput = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
    this.isPlaceholderInCounter = false;
  }

  get charsLeft() {
    const {
      maxLength,
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
      this.maxLength > 0 && !this.invalid && this.areCharsLeft && !this.disabled
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

  get replaceCounterPlaceholder() {
    return this.counter.replace(/##.*##/, this.charsLeft - 1);
  }

  get getCounterText() {
    if (this.counter && this.isPlaceholderInCounter) {
      return this.replaceCounterPlaceholder;
    }

    if (this.counter) {
      return `${this.charsLeft - 1} ${this.counter}`;
    }

    return this.charsLeft - 1;
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

  handleFocus = ev => {
    this.onFocus(ev);
  };

  handleBlur = ev => {
    this.onBlur(ev);
  };

  handleInput = ev => {
    this.onChange(ev);

    // are we a 'controlled' input in the React sense?
    if (this.isControlled) {
      // yes, set UI from model state
      this.nativeInput.value = this.modelValue;
    }

    if (this.maxLength) {
      this.modelCounter = this.getCounterText;
    }
  };

  isNotAtMaxLength() {
    return this.charsLeft !== 0 && this.charsLeft !== '0';
  }

  firstUpdated() {
    const { defaultValue, isReact, value } = this;
    this.nativeInput = this.querySelector('input');

    if (isReact) {
      this.nativeInput.value = value;
    }

    if (isReact && defaultValue) {
      this.nativeInput.value = defaultValue;
    }

    this.isPlaceholderInCounter = this.counter && /##.*##/.test(this.counter);
    this.modelCounter = this.getCounterText;
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
      placeholder,
      disabled,
      isReact,
      maxLength,
      invalid,
      checkMark,
      isControlled,
      refId,
      _open,
    } = this;

    this.isControlled = isControlled && isReact;

    const inputClasses = {
      'a-input-text__input': true,
      'a-input-text__input--error':
        (invalid && !disabled) || this.showCounterMax,
      'a-input-text__input--check': checkMark && !disabled,
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
            ?disabled="${disabled}"
            @input="${this.handleInput}"
            @focus="${this.handleFocus}"
            @blur="${this.handleBlur}"
          />
          ${
            checkMark && this.isNotAtMaxLength()
              ? html`
                  <span class="a-input-text__check"></span>
                `
              : ''
          }
        </div>
        ${info &&
          html`
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
          ? html`
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

defineOnce(AXAInputText.tagName, AXAInputText);

export default AXAInputText;
