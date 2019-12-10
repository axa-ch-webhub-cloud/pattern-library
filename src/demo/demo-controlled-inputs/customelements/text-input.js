// IMPORTS
import { LitElement, html } from 'lit-element';
import withReact from '../../../utils/with-react';
import defineOnce from '../../../utils/define-once';

const validateIfNeeded = self => event => {
  const {
    target: { value },
    target,
  } = event;
  // invoke event callback
  const isValid = self.onChange(event);
  if (self.validate && value && isValid !== undefined) {
    self.valid = isValid;
  }
  // are we a 'controlled' input in the React sense?
  if (self._isControlled) {
    // yes, set UI from model state
    target.value = self._value;
  }
};

// CE
class TextInput extends LitElement {
  static get tagName() {
    return 'text-input';
  }

  static get properties() {
    return {
      value: { type: String },
      name: { type: String },
      validate: { type: Boolean },
      isReact: { type: Number },
      valid: {
        reflect: true,
        converter: {
          toAttribute(value) {
            return value ? '' : null;
          },
        },
      },
    };
  }

  set value(val) {
    // first value coming in indicates controlledness?
    if (!this._isControlled && val !== undefined) {
      // yes, remember in model state
      this._isControlled = 1;
    }
    const oldVal = this._value;
    this._value = val;
    this.requestUpdate('value', oldVal);
  }

  get value() {
    return this._value;
  }

  constructor() {
    super();
    // initialize model state
    this._isControlled = 0;
    this._value = '';
    this.valid = false;
    this.onChange = () => {};
  }

  createRenderRoot() {
    /**
     * Render template in light DOM. Note that shadow DOM features like
     * encapsulated CSS are unavailable as a result.
     *
     * This is done here to allow <check-box> to be used inside <form>s, with working form submit
     */
    return this;
  }

  render() {
    const { value, name, isReact } = this;
    this._isControlled &= isReact;
    // keystroke-by-keystroke 'input' events necessary here to emulate React's synthetic onChange behaviour!
    // Also works for *pasted* input!
    // cf. input-event polyfill for IE: https://github.com/jamesnicholls/input-event-polyfill/blob/master/main.js
    return html`
      <input
        id="input"
        type="text"
        class="text-input-field"
        value=${value}
        name=${name}
        @input=${validateIfNeeded(this)}
      />
      <style>
        .text-input-field {
          outline: none;
          border: 5px solid red;
        }

        text-input[valid] .text-input-field {
          border: 5px solid green;
        }
      </style>
    `;
  }
}

// EXPORTS
defineOnce('text-input', TextInput);
export default createElement => withReact(createElement, TextInput);
