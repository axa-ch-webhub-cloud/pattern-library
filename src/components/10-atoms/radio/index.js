import { html } from 'lit-element';
import NoShadowDOM from '../../../utils/no-shadow';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

const selectedRadioButton = {};

class AXARadio extends NoShadowDOM {
  static get tagName() {
    return 'axa-radio';
  }

  static get styles() {
    return styles;
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
    const {
      state: { isControlled, checked },
      name,
      onChange,
    } = this;
    onChange(event);
    if (!isControlled) {
      this.state.native = event.target.checked;
      return;
    }
    // set UI from model state
    this.input.checked = checked;
    // get selected radio button - usually not ourselves
    const groupSelectedRadioButton = selectedRadioButton[name];
    // we are already registered in radio-button group?
    if (name && groupSelectedRadioButton) {
      // yes, re-select the selected radio button natively, thereby preserving radio behaviour
      groupSelectedRadioButton.querySelector('input').checked = true;
    }
  }

  constructor() {
    super();
    // initialize model state
    this.state = {
      isControlled: false,
      firstUpdate: true,
      checked: false,
      native: false,
    };
    // initialize properties
    this.type = 'radio';
    this.value = '';
    this.name = '';
    this.label = '';
    this.disabled = false;
    this.error = '';
    this.isReact = false;
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};
  }

  render() {
    const {
      id,
      name,
      checked,
      value,
      disabled,
      label,
      isReact,
      state: { isControlled, checked: stateChecked },
    } = this;

    // controlledness is a React-only notion
    const _isControlled = isControlled && isReact;
    this.state.isControlled = _isControlled;

    // we are the selected element of a group of controlled inputs?
    if (_isControlled && stateChecked && name) {
      // yes, cache ourselves under group name
      selectedRadioButton[name] = this;
    }

    return html`
      <label class="a-radio__wrapper">
        <input
          id="${id}"
          class="a-radio__input"
          type="radio"
          name="${name}"
          ?checked="${checked}"
          value="${value}"
          ?disabled="${disabled}"
          @change="${this.handleChange}"
        />
        <span class="a-radio__icon"></span>
        <div class="a-radio__content">${label}</div>
      </label>
    `;
  }

  firstUpdated() {
    this.input = this.querySelector('input');
    this.addEventListener('focus', this.onFocus, false);
    this.addEventListener('blur', this.onBlur, false);
  }

  updated() {
    const {
      name,
      input,
      state: { isControlled, checked },
    } = this;
    // we are the selected element of a group of controlled inputs?
    if (isControlled && checked && name) {
      // yes, re-select the selected radio button natively
      input.checked = checked;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const { name } = this;
    if (name) {
      selectedRadioButton[name] = null; // help GC
    }

    this.removeEventListener('focus', this.onFocus, false);
    this.removeEventListener('blur', this.onBlur, false);
  }
}

defineOnce(AXARadio.tagName, AXARadio);

export default AXARadio;
