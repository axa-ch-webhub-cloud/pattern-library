import { html, svg } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/text';
import { TickSvg } from '@axa-ch/materials/images';

import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { classMap } from 'lit-html/directives/class-map';
import defineOnce from '../../../utils/define-once';
import NoShadowDOM from '../../../utils/no-shadow';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import createRefId from '../../../utils/create-ref-id';

// // icon isolated from others, because it's a component specific icon
// import { FileUploadGroupSvg } from './icons';

const TICK_ICON = svg([TickSvg]);
const REQUIRED_SYMBOL = '*';

class AXACheckbox extends NoShadowDOM {
  static get tagName() {
    return 'axa-checkbox';
  }

  static get properties() {
    return {
      refId: { type: String, defaultValue: `checkbox-${createRefId()}` },
      value: { type: String },
      name: { type: String, reflect: true },
      label: { type: String },
      variant: { type: String, defaultValue: 'square' },
      type: { type: String, defaultValue: 'checkbox' },
      required: { type: Boolean },
      checked: {
        type: Boolean,
        reflect: true,
        defaultValue: undefined, // proper default for controlled-mode under React
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

    // initialize labelTextElement when children are avaiabled and wrap them
    this.hasChildren = false;
    this.iteration = 1;
    if (this.innerHTML) {
      this.wrapChildren();
    }
  }

  wrapChildren() {
    const childWrapper = document.createElement('axa-text');
    childWrapper.variant = 'size-3';
    childWrapper.className = 'a-checkbox__children-inline';
    childWrapper.innerHTML = this.innerHTML;

    this.labelTextElement = childWrapper;

    this.hasChildren = true;
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
    this.state.timer = setTimeout(() => this.updated('via-handleChange'), 0);
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
      type,
      variant,
      checked,
      disabled,
      error = '',
      required,
      isReact,
      state: { isControlled, timer },
      hasChildren,
      labelTextElement,
    } = this;

    const classes = {
      'a-checkbox__icon': true,
      'js-checkbox__icon': true,
      'a-checkbox__icon--tick': variant === 'tick',
    };

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
        type="${type}"
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

    return hasChildren || label
      ? html`
          <label for="${refId}" class="a-checkbox__wrapper">
            ${inputElement}
            <span class="${classMap(classes)}"
              >${variant === 'tick'
                ? html`
                    <span class="a-checkbox__icon-tick">${TICK_ICON}</span>
                  `
                : ``}
            </span>
            <span class="a-checkbox__content">
              ${labelTextElement || unsafeHTML(label)}
              ${required ? REQUIRED_SYMBOL : ''}
            </span>
            ${errorElement}
          </label>
        `
      : html`
          ${inputElement}
          <span class="a-checkbox__icon js-checkbox__icon"></span>
          </span>
          ${errorElement}
      `;
  }

  firstUpdated() {
    const { isReact, defaultChecked } = this;
    if (isReact && defaultChecked) {
      this.querySelector('input').checked = true;
      this.state.native = true;
    }
  }

  // workaround because react has no innerHTML in constructor
  shouldUpdate() {
    const {
      isReact,
      hasChildren,
      label,
      labelTextElement,
      innerHTML,
      iteration,
    } = this;

    // if react & innerHTML is set or if is react and has a label and innerHTML
    if (
      isReact &&
      innerHTML !== '' &&
      !hasChildren &&
      !labelTextElement &&
      (!label || (label && iteration === 1))
    ) {
      this.wrapChildren();
    }

    this.iteration += 1;

    return true;
  }

  // this lifecycle method will regularly be called after render() -
  // but also *indirectly* via the handleChange event handler!
  updated(why) {
    if (why === 'via-handleChange') {
      this.state.firstUpdate = false;
    }
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
