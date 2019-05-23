import { html, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import { ArrowRightSvg } from '@axa-ch/materials';
import NoShadowDOM from '../../../utils/no-shadow';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import createRefId from '../../../utils/create-ref-id';
import styles from './index.scss';

class AXAInputText extends NoShadowDOM {
  static get tagName() {
    return 'axa-input-text';
  }

  static get properties() {
    return {
      // Could be Field class
      id: { type: String },
      name: { type: String },
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      valid: { type: Boolean },

      // Messages
      error: { type: String },
      info: { type: String },

      inputFocus: { type: Boolean },
      required: { type: Boolean },

      disabled: { type: Boolean },

      isReact: { type: Boolean },
      debug: { type: Boolean },
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
    this.info = '';
    this.error = '';
    this.required = false;
    this.valid = true;
    this.disabled = false;
    this.isReact = false;
    this.debug = false;
    this.inputFocus = false;
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};

    // internal properties
    this.nativeInput = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
    this.refId = this.id || `input-text-${createRefId()}`;
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

  get showCheckIcon() {
    return this.valid && !!this.value && !this.inputFocus && !this.disabled;
  }

  get showError() {
    return this.error && !this.valid && !this.disabled;
  }

  handleFocus = ev => {
    this.onFocus(ev);

    this.inputFocus = true;
  };

  handleBlur = ev => {
    this.onBlur(ev);
    this.inputFocus = false;
    if (this.required && !this.value) {
      this.valid = false;
    } else {
      this.valid = true;
    }
    // Validation should be on blur or submit
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
      valid,
      label = '',
      error = '',
      info = '',
      placeholder,
      disabled,
      isReact,

      isControlled,
      refId,
      inputFocus,
    } = this;

    const inputClasses = {
      'a-input-text__input--error': !valid && !inputFocus,
    };

    this.isControlled = isControlled && isReact;

    return html`
      <div class="a-input-text__wrapper">
        ${label &&
          html`
            <label for="${refId}" class="a-input-text__label"
              >${label}
              ${required
                ? html`
                    *
                  `
                : html``}</label
            >
          `}
        <div class="a-input-text__input-wrapper">
          <input
            @input="${this.handleInput}"
            @focus="${this.handleFocus}"
            @blur="${this.handleBlur}"
            id="${refId}"
            class="a-input-text__input ${classMap(inputClasses)}"
            autocomplete="off"
            name="${name}"
            value=${value}
            placeholder="${placeholder}"
            ?disabled="${disabled}"
            aria-required="${required}"
          />

          <span
            class="a-input-text__check  ${!this.showCheckIcon
              ? 'a-input-text__check--hidden'
              : ''}"
          >
            ${svg([ArrowRightSvg])}
          </span>

          ${info &&
            html`
              <span class="a-input-text__info">info component ${info}</span>
            `}
        </div>

        <span
          class="a-input-text__error ${!this.showError
            ? 'a-input-text__error--hidden'
            : ''}"
          >${error}</span
        >
      </div>
    `;
  }
}

defineOnce(AXAInputText.tagName, AXAInputText);

export default AXAInputText;
