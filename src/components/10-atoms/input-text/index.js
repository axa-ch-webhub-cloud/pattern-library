import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/tooltip';
import NoShadowDOM from '../../../utils/no-shadow';
import defineOnce from '../../../utils/define-once';
import createRefId from '../../../utils/create-ref-id';

import styles from './index.scss';

class AXAInputText extends NoShadowDOM {
  static get tagName() {
    return 'axa-input-text';
  }

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      defaultValue: { type: String },
      type: { type: String },
      error: { type: String },
      info: { type: String },
      invalid: { type: Boolean },
      checkMark: { type: Boolean },
      disabled: { type: Boolean },

      isReact: { type: Boolean },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.label = '';
    this.placeholder = '';
    // only for React(frameworks) users
    this.defaultValue = '';
    // text, email, password
    this.type = 'text';
    this.error = '';
    this.info = '';
    this.checkMark = false;
    this.required = false;
    this.invalid = false;
    this.disabled = false;
    this.isReact = false;
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};

    // internal properties
    this.refId = '';
    this.nativeInput = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
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
    return this.error && this.invalid;
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
  };

  firstUpdated() {
    const { id, defaultValue, isReact } = this;
    this.nativeInput = this.querySelector('input');

    if (isReact && defaultValue) {
      this.nativeInput.value = defaultValue;
    }

    this.refId = id || `input-text-${createRefId()}`;
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
      invalid,
      checkMark,
      isControlled,
      refId,
    } = this;

    this.isControlled = isControlled && isReact;

    const inputClasses = {
      'a-input-text__input': true,
      'a-input-text__input--error': invalid,
    };

    const checkClasses = {
      'a-input-text__check': true,
      'a-input-text__check--hidden': invalid,
    };

    const errorMessageClasses = {
      'a-input-text__error': true,
    };

    return html`
      <div class="a-input-text__wrapper">
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
          <input
            @input="${this.handleInput}"
            @focus="${this.handleFocus}"
            @blur="${this.handleBlur}"
            id="${refId}"
            type="${type}"
            class=" ${classMap(inputClasses)}"
            autocomplete="off"
            name="${name}"
            value="${value}"
            placeholder="${placeholder}"
            ?disabled="${disabled}"
            aria-required="${required}"
          />
          ${info &&
            html`
              <axa-tooltip class="a-input-text__info">${unsafeHTML(info)}</axa-tooltip>
            `}
       
          <div class="a-input-text__check-wrapper">
            ${checkMark
              ? html`
                  <span class="${classMap(checkClasses)}"></span>
                `
              : ''}
          </div>
        </div>
        ${this.showError
          ? html`
              <span class="${classMap(errorMessageClasses)}">${error}</span>
            `
          : ''}
      </div>
    `;
  }
}

defineOnce(AXAInputText.tagName, AXAInputText);

export default AXAInputText;
