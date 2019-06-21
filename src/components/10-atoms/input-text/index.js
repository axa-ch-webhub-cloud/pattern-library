import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
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
      type: { type: String },
      error: { type: String },
      valid: { type: Boolean },
      validation: { type: Boolean },
      inputFocus: { type: Boolean },
      wasFocused: { type: Boolean },
      wasBlurred: { type: Boolean },
      required: { type: Boolean },
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
    // text, email, password
    this.type = 'text';
    this.error = '';
    this.validation = false;
    this.required = false;
    this.valid = true;
    this.disabled = false;
    this.isReact = false;
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};

    // internal properties
    this.inputFocus = false;
    this.wasFocused = false;
    this.wasBlurred = false;
    this.nativeInput = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
    this.refId = '';
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

  get isRequiredError() {
    return this.required && !this.value;
  }

  get isInvalid() {
    return !this.valid || this.isRequiredError;
  }

  get showInputError() {
    return this.isInvalid && this.wasBlurred && this.wasFocused;
  }

  get hideCheckIcon() {
    return (
      (!this.wasBlurred && !this.wasFocused) ||
      this.inputFocus ||
      this.isInvalid
    );
  }

  get hideErrorMessage() {
    return !this.error || !this.showInputError;
  }

  handleFocus = ev => {
    this.onFocus(ev);
    this.inputFocus = true;

    if (!this.wasFocused) {
      this.wasFocused = true;
    }
  };

  get showValidation() {
    return this.validation || this.required;
  }

  handleBlur = ev => {
    this.onBlur(ev);
    this.inputFocus = false;

    if (!this.wasBlurred) {
      this.wasBlurred = true;
    }
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
    this.nativeInput = this.querySelector('input');
    this.refId = this.id || `input-text-${createRefId()}`;
  }

  render() {
    const {
      name,
      required,
      value,
      label = '',
      error = '',
      type = '',
      placeholder,
      disabled,
      isReact,

      isControlled,
      refId,
    } = this;

    this.isControlled = isControlled && isReact;

    const inputClasses = {
      'a-input-text__input': true,
      'a-input-text__input--error': this.showInputError,
    };

    const checkClasses = {
      'a-input-text__check': true,
      'a-input-text__check--hidden': this.hideCheckIcon,
    };

    const errorMessageClasses = {
      'a-input-text__error': true,
      'a-input-text__error--hidden': this.hideErrorMessage,
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

          ${html`
            <div class="a-input-text__check-wrapper">
              ${this.showValidation
                ? html`
                    <span class="${classMap(checkClasses)}"></span>
                  `
                : ''}
            </div>
          `}
        </div>
        <span class="${classMap(errorMessageClasses)}">${error}</span>
      </div>
    `;
  }
}

defineOnce(AXAInputText.tagName, AXAInputText);

export default AXAInputText;
