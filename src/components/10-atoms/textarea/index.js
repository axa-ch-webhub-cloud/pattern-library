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
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      error: { type: String },
      valid: { type: Boolean },
      validation: { type: Boolean },
      wasFocused: { type: Boolean },
      wasBlurred: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean },
      inputFocus: { type: Boolean },

      isReact: { type: Boolean },
      defaultValue: { type: String },

      counter: { type: String },
      modelCounter: { type: String },
      counterError: { type: String },
      maxLength: { type: Number },
    };
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.label = '';
    this.placeholder = '';
    this.error = '';
    this.validation = false;
    this.required = false;
    this.valid = true;
    this.disabled = false;
    this.isReact = false;
    this.defaultValue = '';
    this.counter = '';
    this.modelCounter = '';
    this.nativeDefaultValue = this.textContent;

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
    this.isPlaceholderInCounter = false;
    this.firstUpdate = true;
  }

  set value(val) {
    const { isControlled, firstUpdate } = this;

    if (!isControlled && val !== undefined) {
      this.isControlled = true;
    }

    // The native textarea element have no value attribute but value property.
    // React for example add value attribute to the textarea.
    if (firstUpdate) {
      this.firstUpdate = false;
      this.defaultValue = val;
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

  get replaceCounterPlaceholder() {
    return this.counter.replace(/##.*##/, this.charsLeft);
  }

  get getCounterText() {
    if (this.counter && this.isPlaceholderInCounter) {
      return this.replaceCounterPlaceholder;
    }

    if (this.counter) {
      return `${this.charsLeft} ${this.counter}`;
    }

    return this.charsLeft;
  }

  get areCharsLeft() {
    return this.charsLeft !== 0;
  }

  get isRequiredError() {
    return this.required && !this.value;
  }

  get isInvalid() {
    return !this.valid || this.isRequiredError;
  }

  get touched() {
    return this.wasBlurred && this.wasFocused;
  }

  get isErrorOrCounterError() {
    return (
      (this.isInvalid && !this.inputFocus && this.touched) ||
      (this.maxLength && !this.areCharsLeft && this.touched)
    );
  }

  get showCounter() {
    return this.maxLength && !this.isInvalid && this.areCharsLeft;
  }

  get showError() {
    return this.error && this.isInvalid && this.touched;
  }

  get showCounterError() {
    return (
      this.maxLength &&
      this.counterError &&
      !this.areCharsLeft &&
      !this.isInvalid
    );
  }

  handleFocus = ev => {
    this.onFocus(ev);
    this.inputFocus = true;

    if (!this.wasFocused) {
      this.wasFocused = true;
    }
  };

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

    if (this.maxLength) {
      this.modelCounter = this.getCounterText;
    }
  };

  firstUpdated() {
    const { nativeDefaultValue, defaultValue, isReact, value } = this;

    this.nativeInput = this.querySelector('textarea');
    this.nativeInput.value = value;

    if (nativeDefaultValue && !isReact) {
      this.nativeInput.value = nativeDefaultValue;
    }

    if (isReact) {
      this.nativeInput.value = defaultValue || value;
    }

    this.refId = this.id || `textarea-${createRefId()}`;
    this.isPlaceholderInCounter = this.counter && /##.*##/.test(this.counter);
    this.modelCounter = this.getCounterText;
  }

  render() {
    const {
      name,
      required,
      label = '',
      error = '',
      modelCounter = '',
      counterError = '',
      maxLength = '',
      placeholder,
      disabled,
      isReact,
      isControlled,
      refId,
    } = this;

    this.isControlled = isControlled && isReact;

    const textareaClasses = {
      'a-textarea__textarea': true,
      'a-textarea__textarea--error': this.isErrorOrCounterError,
    };

    const textareaMessagesClasses = {
      'a-textarea__messages': true,
      'a-textarea__messages--error': this.isErrorOrCounterError,
    };

    return html`
      <div class="a-textarea__wrapper">
        ${label &&
          html`
            <label for="${refId}" class="a-textarea__label">
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
          maxlength="${maxLength}"
          class="${classMap(textareaClasses)}"
          value="${this.value}"
          autocomplete="off"
          name="${name}"
          placeholder="${placeholder}"
          ?disabled="${disabled}"
          aria-required="${required}"
        ></textarea>
        <div class="${classMap(textareaMessagesClasses)}">
          ${this.showCounter
            ? html`
                <span>${modelCounter}</span>
              `
            : ''}
          ${this.showCounterError
            ? html`
                <span>${counterError}</span>
              `
            : ''}
          ${this.showError
            ? html`
                <span>${error}</span>
              `
            : ''}
        </div>
      </div>
    `;
  }
}

defineOnce(AXATextarea.tagName, AXATextarea);

export default AXATextarea;
