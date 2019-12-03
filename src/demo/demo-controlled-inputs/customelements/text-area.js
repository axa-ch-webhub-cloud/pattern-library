// IMPORTS
import { LitElement, html } from 'lit-element';
import { forwardRef } from 'react';
import withReact from '../../../utils/with-react';
import defineOnce from '../../../utils/define-once';

const handleInput = self => event => {
  // invoke event callback
  self.onChange(event);
  // are we a 'controlled' input in the React sense?
  if (self._isControlled) {
    // yes, set UI from model state
    event.target.value = self._value;
  }
};

// CE
class TextAreaInput extends LitElement {
  static get tagName() {
    return 'text-area';
  }

  static get properties() {
    return {
      name: { type: String },
      value: { type: String },
      isReact: { type: Number },
    };
  }

  set value(val) {
    const { _isControlled, _value } = this;
    // first value coming in indicates controlledness?
    if (!_isControlled && val !== undefined) {
      // yes, remember in model state
      this._isControlled = true;
    }
    const oldVal = _value;
    this._value = val;
    this.requestUpdate('value', oldVal);
  }

  get value() {
    return this._value;
  }

  constructor() {
    super();
    // initialize model state
    this.name = '';
    this._isControlled = 0;
    this.isReact = 0;
    this._value = '';
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
    const { name, value, isReact } = this;
    this._isControlled &= isReact;
    // keystroke-by-keystroke 'input' events necessary here to emulate React's synthetic onChange behaviour!
    // Also works for *pasted* input!
    // cf. input-event polyfill for IE: https://github.com/jamesnicholls/input-event-polyfill/blob/master/main.js
    return html`
      <textarea
        name=${name}
        value=${value}
        @input=${handleInput(this)}
        class="text-area-field"
      ></textarea>
      <style>
        :host {
          contain: strict;
        }

        .text-area-field {
          outline: none;
          background-color: lavenderblush;
          border: 5px dashed blue;
        }
      </style>
    `;
  }
}

// EXPORTS
defineOnce('text-area', TextAreaInput);
export default createElement =>
  forwardRef((props, ref) =>
    withReact(createElement, TextAreaInput, props, ref)
  );
