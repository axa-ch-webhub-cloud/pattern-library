import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import NoShadowDOM from '../../../utils/no-shadow';
import defineOnce from '../../../utils/define-once';
import createRefId from '../../../utils/create-ref-id';
import styles from './index.scss';

class AXATextarea extends NoShadowDOM {
  static get tagName() {
    return 'axa-textarea';
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    // Define properties and types
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      error: { type: String },
      valid: { type: Boolean },
      inputFocus: { type: Boolean },
      wasFocused: { type: Boolean },
      wasBlurred: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean },
      isReact: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.label = '';
    this.placeholder = '';
    this.error = '';
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
    this.refId = this.id || `textarea-${createRefId()}`;
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
  }

  render() {
    const {
      name,
      required,
      value,
      label = '',
      error = '',
      placeholder,
      disabled,
      isReact,
      isControlled,
      refId,
    } = this;

    this.isControlled = isControlled && isReact;

    const textareaClasses = {
      'a-textarea__textarea': true,
      'a-textarea__textarea--error': this.showInputError,
    };

    return html`
      <div class="a-textarea__wrapper">
        ${label &&
          html`
            <label for="${refId}" class="a-textarea__label}}">
              ${label}
              ${required
                ? html`
                    *
                  `
                : ''}</label
            >
          `}
        <textarea
          @input="${this.handleInput}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          id="${refId}"
          class=" ${classMap(textareaClasses)}"
          autocomplete="off"
          name="${name}"
          value="${value}"
          placeholder="${placeholder}"
          ?disabled="${disabled}"
          aria-required="${required}"
        />
      </div>
    `;
  }
}

defineOnce(AXATextarea.tagName, AXATextarea);

export default AXATextarea;
