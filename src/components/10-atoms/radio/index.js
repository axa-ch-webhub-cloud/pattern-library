import { html, svg } from 'lit-element';
import NoShadowDOM from '../../../utils/no-shadow';
import defineOnce from '../../../utils/define-once';
import fireCustomEvent from '../../../utils/custom-event';
import createRefId from '../../../utils/create-ref-id';
import { applyDefaults } from '../../../utils/with-react';

import styles from './index.scss';

// module globals
const radioButtonGroup = {};
const selectedRadioButton = {};
const maxWidth = {};

const WIDTH_SLACK = 5; // px

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
      refId: { type: String, defaultValue: `axa-radio-${createRefId()}` },
      value: { type: String, defaultValue: undefined }, // proper default for controlled-mode under React
      name: { type: String, reflect: true },
      label: { type: String },
      checked: {
        type: Boolean,
        reflect: true,
      },
      disabled: { type: Boolean, reflect: true },
      button: { type: Boolean, reflect: true },
      noGap: { type: Boolean, reflect: true },
      noAutoWidth: { type: Boolean, reflect: true },
      icon: {
        type: String,
        reflect: true,
        converter: {
          toAttribute(value) {
            return value ? '' : null;
          },
        },
      },
      focus: {
        type: Boolean,
        reflect: true,
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
      value,
      name,
      onChange,
    } = this;
    onChange(event);

    const isChecked = event.target.checked;

    // uncontrolled mode:
    if (!isControlled) {
      // deselect last selected radiobutton...
      if (isChecked && selectedRadioButton[name]) {
        selectedRadioButton[name].checked = false; // causes re-render
      }
      // ... and select ourselves
      this.checked = true; // causes re-render

      // prevent bubbling
      event.stopPropagation();
      // fire a custom 'change' event on the component itself
      fireCustomEvent('change', { checked: isChecked, value, name }, this);
      return;
    }
    // controlled mode:
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
    applyDefaults(this);

    this.onFocus = () => {};
    this.onBlur = () => {};
    this.onChange = () => {};
  }

  getDefaultName() {
    this.name = this.name || createRefId();
    return this.name;
  }

  render() {
    const {
      refId,
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

    const input = html`
      <input
        id="${refId}"
        class="a-radio__input"
        type="radio"
        name="${name}"
        ?checked="${checked}"
        value="${value}"
        ?disabled="${disabled}"
        @change="${this.handleChange}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
      />
    `;

    return html`
      ${label
        ? html`
            <label for="${refId}" class="a-radio__wrapper js-radio__wrapper">
              ${input}
              ${button
                ? html``
                : html`
                    <span class="a-radio__icon"></span>
                  `}
              ${icon ? svg([icon]) : html``}
              <div class="a-radio__content">${label}</div>
            </label>
          `
        : html`
            ${input}
            ${button
              ? html``
              : html`
                  <span class="a-radio__icon"></span>
                `}
            ${icon ? svg([icon]) : html``}
          `}
    `;
  }

  firstUpdated() {
    this.input = this.querySelector('input');
    this.wrapper = this.querySelector('.js-radio__wrapper');
    const { name, button, noAutoWidth } = this;
    const ourButton = this.querySelector('.a-radio__content');
    radioButtonGroup[name] = radioButtonGroup[name] || new Set();
    radioButtonGroup[name].add(ourButton);

    if (button) {
      // give DOM some time to paint before measuring width
      window.requestAnimationFrame(() => {
        const { width: labelTextWidth } = this.querySelector(
          '.a-radio__content'
        ).getBoundingClientRect();
        maxWidth[name] = Math.max(labelTextWidth | 0, maxWidth[name] | 0);
        // equalize width for all <axa-radio button> with same name:
        const width = noAutoWidth ? labelTextWidth : maxWidth[name];
        radioButtonGroup[name].forEach(radioButton => {
          // special case 'noAutoWidth' only impose minWidth on ourselves
          // (suppresses length changes .a.k.a 'pumping effect' between
          // selected/unselected state due to font-weight changes)
          if (noAutoWidth && radioButton !== ourButton) return;
          radioButton.style.minWidth = `${width + WIDTH_SLACK}px`;
        });
      });
    }
  }

  updated() {
    const {
      name,
      input,
      state: { isControlled, checked },
    } = this;

    // we are the selected element of a group of controlled inputs?
    if (isControlled && checked && name) {
      // yes, perform forced re-select of radio button
      // to maintain controlledness in the face of native UI-state changes
      input.checked = checked;
    }

    // register ourselves as currently selected in same-named group of all
    // radio buttons
    if (this.checked) selectedRadioButton[name] = this;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const { name } = this;
    delete selectedRadioButton[name]; // help GC
    delete maxWidth[name]; // help GC
    radioButtonGroup[name].delete(this.querySelector('.a-radio__content'));
    if (radioButtonGroup[name].size === 0) {
      delete radioButtonGroup[name]; // help GC
    }
  }

  handleFocus(e) {
    this.focus = true;
    this.onFocus(e);
  }

  handleBlur(e) {
    this.focus = false;
    this.onBlur(e);
  }
}

defineOnce(AXARadio.tagName, AXARadio);

export default AXARadio;
