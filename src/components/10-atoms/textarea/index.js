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
      refId: { type: String },
      name: { type: String },
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      defaultValue: { type: String },
      error: { type: String },
      invalid: { type: Boolean },
      checkMark: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean, reflect: true },

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
      isReact: { type: Boolean },
      modelCounter: { type: String },
    };
  }

  constructor() {
    super();
    this.refId = `textarea-${createRefId()}`;
    this.name = '';
    this.label = '';
    this.placeholder = '';
    // only for React(frameworks) users
    this.defaultValue = '';
    this.error = '';
    this.validation = false;
    this.required = false;
    this.invalid = false;
    this.disabled = false;
    this.counter = '';
    this.counterMax = '';

    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};

    // internal properties
    this.isReact = false;
    this.modelCounter = '';
    this.nativeInput = { value: '' };
    this.nativeDefaultValue = this.textContent || this.innerText;
    this.modelValue = '';
    this.isControlled = false;
    this.isPlaceholderInCounter = false;
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

  get charsLeft() {
    const {
      maxLength,
      nativeInput: { value: nativeValue },
    } = this;

    if (nativeValue) {
      return maxLength - nativeValue.length - 1;
    }

    return maxLength - 1;
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
    return this.charsLeft >= 0;
  }

  get showCounter() {
    return (
      this.maxLength > 0 && !this.invalid && this.areCharsLeft && !this.disabled
    );
  }

  get showError() {
    return this.error && this.invalid && !this.disabled;
  }

  get showCounterMax() {
    return (
      this.maxLength > 0 &&
      this.counterMax &&
      !this.areCharsLeft &&
      !this.disabled
    );
  }

  get showMessages() {
    return this.showError || this.showCounter || this.showCounterMax;
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

  firstUpdated() {
    const { nativeDefaultValue, defaultValue, isReact, value } = this;

    this.nativeInput = this.querySelector('textarea');

    if (nativeDefaultValue && !isReact) {
      this.nativeInput.value = nativeDefaultValue;
    }

    if (isReact) {
      this.nativeInput.value = defaultValue || value;
    }

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
      counterMax = '',
      maxLength = '',
      placeholder,
      disabled,
      isReact,
      isControlled,
      refId,
      invalid,
      checkMark,
      showError,
      showCounter,
      showCounterMax,
    } = this;

    this.isControlled = isControlled && isReact;

    const textareaClasses = {
      'a-textarea__textarea': true,
      'a-textarea__textarea--error': (invalid || showCounterMax) && !disabled,
      'a-textarea__textarea--check': checkMark && !disabled && !showCounterMax,
    };

    const textareaMessagesClasses = {
      'a-textarea__messages': true,
      'a-textarea__messages--error': (invalid || showCounterMax) && !disabled,
      'a-textarea__messages--hidden': !this.showMessages,
    };

    return html`
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
      <div class="a-textarea__textarea-wrapper">
        <textarea
          @input="${this.handleInput}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          id="${refId}"
          maxlength="${maxLength}"
          class="${classMap(textareaClasses)}"
          autocomplete="off"
          name="${name}"
          placeholder="${placeholder}"
          ?disabled="${disabled}"
          aria-required="${required}"
        ></textarea>

        ${checkMark && !showCounterMax
          ? html`
              <span class="a-textarea__check"></span>
            `
          : ''}
      </div>
      <div class="${classMap(textareaMessagesClasses)}">
        ${showCounter
          ? html`
              <span>${modelCounter}</span>
            `
          : ''}
        ${showCounterMax
          ? html`
              <span>${counterMax}</span>
            `
          : ''}
        ${showError
          ? html`
              <span>${error}</span>
            `
          : ''}
      </div>
    `;
  }
}

defineOnce(AXATextarea.tagName, AXATextarea);

export default AXATextarea;
