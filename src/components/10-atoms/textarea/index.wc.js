import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import NoShadowDOM from '../../../utils/no-shadow.js';
import { defineVersioned } from '../../../utils/component-versioning.js';
import applyDefaults from '../../../utils/apply-defaults.js';
import createRefId from '../../../utils/create-ref-id.js';
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
      refId: { type: String, defaultValue: `textarea-${createRefId()}` },
      name: { type: String },
      label: { type: String },
      placeholder: { type: String },
      value: { type: String, defaultValue: undefined }, // proper default for controlled-mode under React
      defaultValue: { type: String },
      error: { type: String },
      invalid: { type: Boolean },
      checkMark: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean, reflect: true },
      autocomplete: { type: Boolean },
      readonly: { type: Boolean },

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
      isReact: { type: Boolean },
      modelCounter: { type: String },
      onChange: { type: Function, attribute: false },
      onFocus: { type: Function, attribute: false },
      onBlur: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

  get getCounterText() {
    const { charsLeft } = this;
    const userCharsLeft = charsLeft < 0 ? 0 : charsLeft;

    if (this.counter && this.isPlaceholderInCounter) {
      return this.counter.replace(/##.*##/, userCharsLeft - 1);
    }

    if (this.counter) {
      return `${userCharsLeft - 1} ${this.counter}`;
    }

    return userCharsLeft;
  }

  get areCharsLeft() {
    return this.charsLeft > 0;
  }

  get showCounter() {
    return (
      this.maxLength > 0 &&
      !this.invalid &&
      this.areCharsLeft &&
      !this.disabled &&
      !this.readonly
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
      !this.disabled &&
      !this.readonly
    );
  }

  get showMessages() {
    return this.showError || this.showCounter || this.showCounterMax;
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
    this.nativeInput.classList.remove('focus');
    this.onBlur(ev);
  }

  handleInput(ev) {
    const { selectionStart = null } = ev.target;

    this.onChange(ev);

    // are we a 'controlled' input in the React sense?
    if (this.isControlled) {
      // yes, set UI from model state
      this.nativeInput.value = this.modelValue;

      requestAnimationFrame(() => {
        this.nativeInput.setSelectionRange(selectionStart, selectionStart);
      });
    }

    if (this.maxLength) {
      this.modelCounter = this.getCounterText;
    }
  }

  updated() {
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
      value,
      required,
      label = '',
      error = '',
      modelCounter = '',
      counterMax = '',
      maxLength = '',
      autocomplete,
      placeholder,
      disabled,
      readonly,
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
      'a-textarea__textarea--readonly': readonly,
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
          ${label} ${required ? html` * ` : ''}</label
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
          autocomplete="${autocomplete ? 'on' : 'off'}"
          .value="${value}"
          name="${name}"
          placeholder="${placeholder}"
          ?disabled="${disabled}"
          ?readonly="${readonly}"
          aria-required="${required}"
        ></textarea>

        ${checkMark && !showCounterMax
          ? html` <span class="a-textarea__check"></span> `
          : ''}
      </div>
      <div class="${classMap(textareaMessagesClasses)}">
        ${showCounter ? html` <span>${modelCounter}</span> ` : ''}
        ${showCounterMax ? html` <span>${counterMax}</span> ` : ''}
        ${showError ? html` <span>${error}</span> ` : ''}
      </div>
    `;
  }
}

defineVersioned([AXATextarea], __VERSION_INFO__);

export default AXATextarea;
