import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import defineOnce from '../../../utils/define-once';
import NoShadowDOM from '../../../utils/no-shadow';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import createRefId from '../../../utils/create-ref-id';

const REQUIRED_SYMBOL = '*';

class AXACheckbox extends NoShadowDOM {
  static get tagName() {
    return 'axa-checkbox';
  }

  static get properties() {
    return {
      refId: { type: String, defaultValue: `checkbox-${createRefId()}` },
      value: { type: String, defaultValue: undefined }, // proper default for controlled-mode under React
      name: { type: String, reflect: true },
      label: { type: String },
      type: { type: String, defaultValue: 'checkbox' },
      required: { type: Boolean },
      checked: {
        type: Boolean,
        reflect: true,
      },
      defaultChecked: {
        type: Boolean,
      },
      disabled: { type: Boolean, reflect: true },
      error: {
        type: String,
        reflect: true,
        converter: {
          toAttribute(value) {
            return value ? String(value) : null;
          },
        },
      },
      isReact: { type: Boolean },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    // initialize model state
    this.state = {
      isControlled: false,
      firstUpdate: true,
      timer: null,
      checked: false,
      native: false,
    };

    // initialize properties
    applyDefaults(this);
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};

    this.domChildren = this.innerHTML;
    console.log('children', this.domChildren);
  }

  // custom setter
  set checked(value) {
    const {
      state: { isControlled, checked, firstUpdate },
    } = this;
    // first incoming value indicates controlledness?
    if (!isControlled && value !== undefined && firstUpdate) {
      // yes, remember in model state
      this.state.isControlled = true;
    }
    this.state.firstUpdate = false;
    const oldValue = checked;
    // remember value in model state
    this.state.checked = value;
    this.state.native = value;
    // request re-render (custom setters need to do this themselves!)
    this.requestUpdate('checked', oldValue);
  }

  // custom getter
  get checked() {
    const {
      state: { isControlled, checked, native },
    } = this;
    return isControlled ? checked : native;
  }

  handleChange(event) {
    // initialize
    const { onChange } = this;
    // *schedule* a UI update from model state in the near future
    // (if no changed prop value is seen, triggering re-rendering,
    // that scheduled update actually happens!)
    this.state.timer = setTimeout(() => this.updated(), 0);
    // set *uncontrolled* model state from native checkbox behaviour
    this.state.native = event.target.checked;
    // invoke event callback
    onChange(event);
  }

  render() {
    // extract props and state
    const {
      refId,
      value,
      name,
      label = '',
      checked,
      disabled,
      error = '',
      required,
      isReact,
      state: { isControlled, timer },
      domChildren,
    } = this;
    // now that we have the 'isReact' prop, determine if this
    // component is a 'controlled input' in the *React* sense
    const _isControlled = isControlled && isReact;
    this.state.isControlled = _isControlled;
    if (_isControlled) {
      // cancel any scheduled UI update, since there is a real,
      // changed prop value somewhere (likely 'checked')
      clearTimeout(timer);
    }

    const inputElement = html`
      <input
        id="${refId}"
        class="a-checkbox__input"
        type="checkbox"
        name="${name}"
        value="${value}"
        aria-required="${required}"
        ?checked="${checked}"
        ?disabled="${disabled}"
        ?error="${!!error}"
        @focus="${this.onFocus}"
        @blur="${this.onBlur}"
        @change=${this.handleChange}
      />
    `;

    const errorElement = error
      ? html`
          <span class="a-checkbox__error">${unsafeHTML(error)}</span>
        `
      : html``;

    return html`
      ${domChildren
        ? html`
            <label for="${refId}" class="a-checkbox__wrapper">
              ${inputElement}
              <span class="a-checkbox__icon js-checkbox__icon"></span>
              <span class="a-checkbox__content">
                ${unsafeHTML(domChildren)} ${required ? REQUIRED_SYMBOL : ''}
              </span>
              ${errorElement}
            </label>
          `
        : html`
            <label for="${refId}" class="a-checkbox__wrapper">
              ${inputElement}
              <span class="a-checkbox__icon js-checkbox__icon"></span>
              <span class="a-checkbox__content">
                ${unsafeHTML(label)} ${required ? REQUIRED_SYMBOL : ''}
              </span>
              ${errorElement}
            </label>
          `}
    `;
  }

  firstUpdated() {
    const { isReact, defaultChecked } = this;
    if (isReact && defaultChecked) {
      this.querySelector('input').checked = true;
      this.state.native = true;
    }
  }

  // this lifecycle method will regularly be called after render() -
  // but also *indirectly* via the handleChange event handler!
  updated() {
    const {
      state: { isControlled, checked, native },
    } = this;
    // coerce UI to conform with model state,
    // no matter its native UI state
    if (isControlled) {
      this.querySelector('input').checked = checked;
      return;
    }
    // correct reflection to attribute
    if (native) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }
}

defineOnce(AXACheckbox.tagName, AXACheckbox);

export default AXACheckbox;
