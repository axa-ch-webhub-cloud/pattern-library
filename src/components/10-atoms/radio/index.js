import { html /* , svg */, svg } from 'lit-element';
// import { CarSvg } from '@axa-ch/materials/images';
import NoShadowDOM from '../../../utils/no-shadow';
import defaultName from '../../../utils/create-ref-id';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

// module globals
const radioButtonGroup = {};
const selectedRadioButton = {};
const maxWidth = {};

// CE
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
      button: { type: Boolean, reflect: true },
      nogap: { type: Boolean, reflect: true },
      icon: { type: String },
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

  // event handlers
  handleChange(event) {
    const {
      state: { isControlled, checked },
      name,
      onChange,
    } = this;
    onChange(event);
    const isChecked = event.target.checked;

    if (!isControlled) {
      if (isChecked && selectedRadioButton[name]) {
        selectedRadioButton[name].checked = false;
      }

      this.checked = true;

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
    this.icon = '';
    this.error = '';
    this.disabled = false;
    this.button = false;
    this.nogap = false;
    this.isReact = false;
    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};
  }

  getDefaultName() {
    this.name = this.name || defaultName();
    return this.name;
  }

  render() {
    const {
      id,
      name = this.getDefaultName(),
      button,
      icon,
      checked,
      value,
      disabled,
      label,
      isReact,
      state: { isControlled },
    } = this;

    // controlledness is a React-only notion
    this.state.isControlled = isControlled && isReact;

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
          @focus="${this.onFocus}"
          @blur="${this.onBlur}"
        />
        ${button
          ? html``
          : html`
              <span class="a-radio__icon"></span>
            `}
        ${icon ? svg(icon) : svg``}
        <div class="a-radio__content">${label}</div>
      </label>
    `;
  }

  firstUpdated() {
    this.input = this.querySelector('input');
    const { name } = this;
    radioButtonGroup[name] = radioButtonGroup[name] || new Set();
    radioButtonGroup[name].add(this.querySelector('.a-radio__content'));
  }

  updated() {
    const {
      name,
      button,
      input,
      state: { isControlled, checked },
    } = this;
    // we are the selected element of a group of controlled inputs?
    if (isControlled && checked && name) {
      // yes, perform forced re-select of radio button
      // to maintain controlledness in the face of native UI-state changes
      input.checked = checked;
    }

    if (this.checked) selectedRadioButton[name] = this;

    if (button) {
      setTimeout(() => {
        const { width: labelTextWidth } = this.querySelector(
          '.a-radio__content'
        ).getBoundingClientRect();
        maxWidth[name] = Math.max(labelTextWidth | 0, maxWidth[name] | 0);
        // equalize width for all <axa-radio button> with same name
        radioButtonGroup[name].forEach(radioButton => {
          radioButton.style.minWidth = `${maxWidth[name]}px`;
        });
      }, /* give DOM some time to paint before measuring width */ 10);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const { name } = this;
    selectedRadioButton[name] = null; // help GC
    maxWidth[name] = null; // help GC
    radioButtonGroup[name].delete(this.querySelector('.a-radio__content'));
    if (radioButtonGroup[name].size === 0) {
      radioButtonGroup[name] = null; // help GC
    }
  }
}

defineOnce(AXARadio.tagName, AXARadio);

export default AXARadio;
