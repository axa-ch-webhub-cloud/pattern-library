import '@webcomponents/webcomponentsjs';
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
      type: { type: String },
      value: { type: String },
      name: { type: String, reflect: true },
      label: { type: String },
      checked: { type: Boolean, reflect: true },
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
      onChange: { type: Function },
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
      timer: null,
      checked: false,
      native: false,
    };
    // initialize properties
    this.type = 'checkbox';
    this.value = '';
    this.name = '';
    this.label = '';
    this.checked = false;
    this.disabled = false;
    this.error = '';
    this.isReact = false;
    this.onChange = () => {};
  }

  // custom setter
  set checked(value) {
    const {
      state: { isControlled, checked },
    } = this;
    // first incoming value indicates controlledness?
    if (!isControlled && value !== undefined) {
      // yes, remember in model state
      this.state.isControlled = true;
    }
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
    const {
      state: { native },
      onChange,
    } = this;
    // *schedule* a UI update from model state in the near future
    // (if no changed prop value is seen, triggering re-rendering,
    // that scheduled update actually happens!)
    this.state.timer = setTimeout(() => this.updated(), 0);
    // toggle *uncontrolled* model state to reflect checkbox behaviour
    this.state.native = !native;
    // invoke event callback
    onChange(event);
  }

  render() {
    // extract props and state
    const {
      type,
      value,
      name,
      label = '',
      checked,
      disabled,
      error = '',
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
          id="${id}"
          class="a-checkbox__input"
          type="${type}"
          name="${name}"
          ?checked="${checked}"
          value="${value}"
          ?disabled="${disabled}"
          ?error="${!!error}"
          @change=${this.handleChange}
        />
        <div class="a-checkbox__icon"></div>
        ${label &&
          html`
            <div class="a-checkbox__content">${unsafeHTML(label)}</div>
          `}
        ${error &&
          html`
            <div class="a-checkbox__error">${unsafeHTML(error)}</div>
          `}
      </label>
    `;
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
