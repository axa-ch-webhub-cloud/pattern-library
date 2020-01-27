// IMPORTS
import { LitElement, html } from 'lit-element';
import withReact from '../../../../utils/with-react';
import defineOnce from '../../../../utils/define-once';
import styles from './radio-button.css';

// MODULE GLOBALS
const group = {};

// HELPER FUNCTIONS

const handleChange = self => event => {
  // initialize
  const { _isControlled, name, onChange, _checked } = self;
  // invoke event callback
  onChange(event);
  // are we a 'controlled' input in the React sense?
  if (_isControlled) {
    // yes, set UI from model state
    event.target.checked = _checked;
    // get selected radio button - usually not ourselves
    const groupSelectedRadioButton = group[name];
    // we are already registered in radio-button group?
    if (name && groupSelectedRadioButton) {
      // yes, re-select the selected radio button natively, thereby preserving radio behaviour
      groupSelectedRadioButton.querySelector('input').checked = true;
    }
  }
};

// CE CLASS
class LabelledRadioButton extends LitElement {
  static get tagName() {
    return 'radio-button';
  }

  static get properties() {
    return {
      label: { type: String },
      disabled: { type: Boolean },
      isReact: { type: Number },
      checked: {
        reflect: true,
        converter: {
          toAttribute(value) {
            return value ? '' : null;
          },
        },
      },
      value: {
        reflect: true,
        converter: {
          toAttribute(value) {
            return String(value);
          },
        },
      },
      name: {
        reflect: true,
        converter: {
          toAttribute(value) {
            return String(value);
          },
        },
      },
    };
  }

  constructor() {
    super();
    // initialize model state
    this._isControlled = 0;
    this.isReact = 0;
  }

  set checked(val) {
    const { _isControlled, _checked } = this;
    // first incoming value indicates controlledness?
    if (!_isControlled && val !== undefined) {
      // yes, remember in model state
      this._isControlled = 1;
    }
    const oldVal = _checked;
    this._checked = val;
    this.requestUpdate('checked', oldVal);
  }

  get checked() {
    return this._checked;
  }

  createRenderRoot() {
    /**
     * Render template in light DOM. Note that shadow DOM features like
     * encapsulated CSS are unavailable as a result.
     *
     * This is done here for 2 reasons:
     * - to ensure radio-button group behaviour works (it does *not* with shadow DOM)
     * - to allow <radio-button> to be used inside <form>s, with working form submit
     */
    return this;
  }

  render() {
    const {
      value,
      label,
      name,
      checked,
      disabled,
      _isControlled,
      isReact,
    } = this;
    this._isControlled &= isReact;
    // we are the selected element of a group of controlled inputs?
    if (_isControlled && checked && name) {
      // yes, cache ourselves under group name
      group[name] = this;
    }
    // render proper
    return html`
      <label class="radio-button">
        <input
          id="input"
          type="radio"
          class="radio-button-input"
          value=${value}
          name=${name}
          ?checked=${checked}
          ?disabled=${disabled}
          @change=${handleChange(this)}
        />
        ${label || value}
      </label>
    `;
  }

  updated() {
    const { name, _checked, _isControlled } = this;
    // we are the selected element of a group of controlled inputs?
    if (_isControlled && _checked && name) {
      // yes, re-select the selected radio button natively
      this.querySelector('input').checked = _checked;
    }
  }
}

// EXPORTS
defineOnce('radio-button', LabelledRadioButton, styles);
export default createElement => withReact(createElement, LabelledRadioButton);
