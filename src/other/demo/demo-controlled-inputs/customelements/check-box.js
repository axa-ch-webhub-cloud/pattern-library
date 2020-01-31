// IMPORTS
import { LitElement, html } from 'lit-element';
import withReact from '../../../../utils/with-react';
import defineOnce from '../../../../utils/define-once';
import styles from './check-box.css';

// HELPER FUNCTIONS

const handleChange = self => event => {
  // initialize
  const { _isControlled, onChange } = self;
  // are we a 'controlled' input in the React sense?
  if (_isControlled) {
    // yes, *schedule* a UI update from model state in the near future
    // (if no changed value is seen, the scheduled update actually happens)
    self._timer = setTimeout(() => self.updated(), 0);
  }
  // invoke event callback
  onChange(event);
};

// CE CLASS
class LabelledCheckbox extends LitElement {
  static get tagName() {
    return 'check-box';
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
            return value ? String(value) : null;
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
    this._timer = null;
    this.isReact = 0;
  }

  // custom setter
  set checked(value) {
    const { _isControlled, _checked } = this;
    // first incoming value indicates controlledness?
    if (!_isControlled && value !== undefined) {
      // yes, remember in model state
      this._isControlled = 1;
    }
    const oldValue = _checked;
    // remember value in model state
    this._checked = value;
    // request re-render
    this.requestUpdate('checked', oldValue);
  }

  // custom getter
  get checked() {
    return this._checked;
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
      value,
      name,
      label,
      checked,
      disabled,
      _timer,
      _isControlled,
      isReact,
    } = this;
    this._isControlled &= isReact;
    if (_isControlled) {
      // cancel any scheduled UI update, since there is a real, changed incoming 'checked' value
      clearTimeout(_timer);
    }
    // render proper
    return html`
      <div class="check-box">
        <label class="check-box-label">
          <input
            type="checkbox"
            class="check-box-input"
            ?value=${value}
            name=${name}
            ?checked=${checked}
            ?disabled=${disabled}
            @change=${handleChange(this)}
          />
          ${label || value}
        </label>
      </div>
    `;
  }

  // this lifecycle method will normally be called after render() - but also indirectly via the handleChange event handler
  updated() {
    // are we a 'controlled' input in the React sense?
    const { _isControlled, _checked } = this;
    if (_isControlled) {
      // yes, immediately coerce UI to conform with model state, no matter its native UI state
      this.querySelector('input').checked = _checked;
    }
  }
}

// EXPORTS
defineOnce('check-box', LabelledCheckbox, styles);
export default createElement => withReact(createElement, LabelledCheckbox);
