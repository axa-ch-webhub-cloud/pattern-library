// IMPORTS
import { LitElement, html } from 'lit-element';
import withReact from '../../../../utils/with-react';
import defineOnce from '../../../../utils/define-once';

// HELPER FUNCTIONS
const optionGenerator = self => (description, index) => {
  const { name = description, value = description } =
    typeof description === 'string' ? {} : description;
  const { item2index } = self;
  if (typeof item2index[value] !== 'string') item2index[value] = index;
  return html`
    <option value=${value}>${name}</option>
  `;
};

const handleChange = self => event => {
  // initialize
  const { _isControlled, onChange } = self;
  // invoke event callback
  onChange(event);
  // are we a 'controlled' input in the React sense?
  if (_isControlled) {
    // yes, *schedule* a UI update from model state in the near future
    // (if no changed value is seen, the scheduled update actually happens)
    self._timer = setTimeout(() => self.updated(), 0);
  }
};

// CE
class DropDown extends LitElement {
  static get tagName() {
    return 'drop-down';
  }

  static get properties() {
    return {
      value: {
        type: String,
      },
      name: { type: String },
      isReact: { type: Number },
      items: {
        reflect: true,
        converter: {
          toAttribute(value) {
            return JSON.stringify(value);
          },
        },
      },
    };
  }

  set value(val) {
    const { _isControlled, _value } = this;
    // first value coming in indicates controlledness?
    if (!_isControlled && val !== undefined) {
      // yes, remember in model state
      this._isControlled = 1;
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
    this._timer = null;
    this._isControlled = 0;
    this.isReact = 0;
    this.value = '';
    this.items = [];
    this.item2index = {};
    this.selectedIndex = 0;
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
    const {
      items,
      value,
      name,
      item2index,
      _timer,
      _isControlled,
      isReact,
    } = this;
    this._isControlled &= isReact;
    // cancel any scheduled UI update, since there is a real, changed incoming value
    if (_isControlled) {
      clearTimeout(_timer);
    }
    const options = items.map(optionGenerator(this));
    // update model state from incoming value
    this.selectedIndex = item2index[value] || 0;
    return html`
      <select
        type="text"
        class="select-css"
        value=${value}
        name=${name}
        @change=${handleChange(this)}
      >
        ${options}
      </select>
      <style>
        drop-down {
          display: inline-block;
        }

        .select-css {
          display: block;
          font-size: 16px;
          font-family: sans-serif;
          font-weight: 700;
          color: #444;
          line-height: 1.3;
          padding: 0.6em 1.4em 0.5em 0.8em;

          box-sizing: border-box;
          margin: 0;
          border: 1px solid #aaa;
          box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
          border-radius: 0.5em;
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          background-color: #fff;
          background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
            linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
          background-repeat: no-repeat, repeat;
          background-position: right 0.5em top 50%, 0 0;
          background-size: 0.65em auto, 100%;
        }
        .select-css::-ms-expand {
          display: none;
        }
        .select-css:hover {
          border-color: #888;
        }
        .select-css:focus {
          border-color: #aaa;
          box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
          box-shadow: 0 0 0 3px -moz-mac-focusring;
          color: #222;
          outline: none;
        }
        .select-css option {
          font-weight: normal;
        }
      </style>
    `;
  }

  updated() {
    const { _isControlled, selectedIndex } = this;
    if (_isControlled) {
      // immediately update UI from model state
      this.querySelector('select').selectedIndex = selectedIndex;
    }
  }
}

// EXPORTS
defineOnce('drop-down', DropDown);
export default createElement => withReact(createElement, DropDown);
