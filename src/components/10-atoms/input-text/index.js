/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
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
    };
  }

  static get styles() {
    return styles;
  }

  initProp(name, defaultValue) {
    let value;
    if (!this.isReact) {
      value = this[name] || this.getAttribute(name);
    }
    if ((value !== undefined && value !== null) || defaultValue !== undefined) {
      this[name] = value || defaultValue;
    }
  }

  constructor() {
    super();
    // initProps: capture property or attribute assignment from *before* component construction
    this.initProp('refId', `input-text-${createRefId()}`);
    this.initProp('name', '');
    this.initProp('label', '');
    this.initProp('placeholder', '');
    // only for React(frameworks) users
    this.initProp('defaultValue', '');
    // text, email, password
    this.initProp('type', 'text');
    this.initProp('error', '');
    this.initProp('checkMark', false);
    this.initProp('required', false);
    this.initProp('invalid', false);
    this.initProp('disabled', false);
    this.initProp('modelCounter', '');
    this.initProp('counter', '');
    this.initProp('counterMax', '');

    this.isReact = false;
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};

    // internal properties
    this.nativeInput = { value: '' };
    this.modelValue = '';
    this.isControlled = false;
    this.isPlaceholderInCounter = false;
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

    if (this.maxLength) {
      this.modelCounter = this.getCounterText;
    }
  };

  setCaretPosition(ctrl, pos) {
    console.log('length of the input is now: ', ctrl.value.length);
    console.log('setting the cursor to     : ', pos);
    setTimeout(() => {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
    }, 100);
  }

  evaluateAndSetCaretPosition(ctrl, newValue) {
    console.log('newValue: ', newValue);
    console.log('oldvalue: ', this.oldInputValue);
    if (newValue.length === 0) return;

    // A letter was added or more.
    if (this.oldInputValue.length < newValue.length) {
      const difference = newValue.length - this.oldInputValue.length;
      const newPosition = this.oldSelectorStartPosition + difference;
      this.setCaretPosition(ctrl, newPosition);
    }
    // A letter or more were removed
    else if (this.oldInputValue.length > newValue.length) {
      // this does not work work selecting multiple things and remove
      if (this.oldInputValue.length - 1 === newValue.length) {
        const difference = this.oldInputValue.length - newValue.length;
        const newPosition = this.oldSelectorStartPosition - difference;
        this.setCaretPosition(ctrl, newPosition);
      } else {
        this.setCaretPosition(ctrl, this.oldSelectorStartPosition);
      }
    }
    //Equal length, a letter or word was replaced with same size word
    else {
      console.log('replace');
    }
  }

  firstUpdated() {
    const { defaultValue, isReact, value } = this;

    if (isReact) {
      this.nativeInput.value = defaultValue || value;
    }

    this.isPlaceholderInCounter = this.counter && /##.*##/.test(this.counter);
    this.modelCounter = this.getCounterText;

    const input = this.querySelector('input');

    if (1 === 1) {
      // TODO if safari
      this.oldSelectorStartPosition = 0;
      this.oldInputValue = '';

      input.addEventListener('keydown', e => {
        this.oldSelectorStartPosition = e.target.selectionStart;
        this.oldInputValue = input.value;
      });

      input.addEventListener('input', e => {
        this.evaluateAndSetCaretPosition(input, e.target.value);
      });
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
            ?disabled="${disabled}"
            @input="${this.handleInput}"
            @focus="${this.handleFocus}"
            @blur="${this.handleBlur}"
          />
          ${
            this.showCheckMark
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
