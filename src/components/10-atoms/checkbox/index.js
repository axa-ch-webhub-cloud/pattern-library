import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import defineOnce from '../../../utils/define-once';
import NoShadowDOM from '../../../utils/no-shadow';
import styles from './index.scss';

class AXACheckbox extends NoShadowDOM {
  static get tagName() {
    return 'axa-checkbox';
  }

  static get properties() {
    return {
      value: { type: String },
      name: { type: String, reflect: true },
      label: { type: String },
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
      embedded: {
        type: Boolean,
        reflect: true,
      },
      invalid: { type: Boolean },
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
    this.type = 'checkbox';
    this.value = '';
    this.name = '';
    this.label = '';
    this.invalid = false;
    this.disabled = false;
    this.error = '';
    this.isReact = false;
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};
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
      value,
      name,
      label = '',
      checked,
      disabled,
      error = '',
      invalid,
      embedded,
      id,
      isReact,
      state: { isControlled, timer },
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
    return html`
      <label class="a-checkbox__wrapper">
        <input
          @focus="${this.onFocus}"
          @blur="${this.onBlur}"
          id="${id}"
          class="a-checkbox__input"
          type="checkbox"
          name="${name}"
          ?checked="${checked}"
          value="${value}"
          ?disabled="${disabled}"
          ?error="${invalid}"
          @change=${this.handleChange}
        />
        <span class="a-checkbox__icon"></span>
        ${label &&
          html`
            <span class="a-checkbox__content">${unsafeHTML(label)}</span>
          `}
        ${error
          ? html`
              <span class="a-checkbox__error">${unsafeHTML(error)}</span>
            `
          : html``}
      </label>
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
