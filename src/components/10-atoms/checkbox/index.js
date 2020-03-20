import { html, svg } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/text';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { classMap } from 'lit-html/directives/class-map';
import defineOnce from '../../../utils/define-once';
import NoShadowDOM from '../../../utils/no-shadow';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import createRefId from '../../../utils/create-ref-id';

// icon isolated from others, because it's a component specific icon
import CheckmarkHardEdgesSvg from './icon';

const CHECKMARK_ICON = svg([CheckmarkHardEdgesSvg]);
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
      styled: { type: Boolean, reflect: true },
      variant: { type: String, defaultValue: 'square' },
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
      onChange: { type: Function, attribute: false },
      onBlur: { type: Function, attribute: false },
      onFocus: { type: Function, attribute: false },
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

  // throttle re-rendering to once per animation frame
  // (helps e.g. with static websites using this component together with static children
  // (like <axa-checkbox><span>my label</span></axa-checkbox>),
  // where those children (here, <span>) may not be DOM-constructed yet when using lit-element's default microtask timing!)
  performUpdate() {
    new Promise(resolve =>
      window.requestAnimationFrame(() => resolve())
    ).then(() => super.performUpdate());
  }

  render() {
    // extract props and state
    const {
      refId,
      value,
      name,
      label = '',
      variant,
      checked,
      disabled,
      error = '',
      required,
      isReact,
      state: { isControlled, timer },
      _childRoot = this.firstElementChild,
    } = this;

    const classes = classMap({
      'a-checkbox__icon': true,
      'js-checkbox__icon': true,
      'a-checkbox__icon--checkmark': variant.indexOf('checkmark') > -1,
      'a-checkbox__icon--inverted': variant.indexOf('inverted') > -1,
    });

    const checkboxContentClasses = classMap({
      'a-checkbox__content': true,
      'a-checkbox__content--inverted': variant.indexOf('inverted') > -1,
    });

    // now that we have the 'isReact' prop, determine if this
    // component is a 'controlled input' in the *React* sense
    const _isControlled = isControlled && isReact;
    this.state.isControlled = _isControlled;
    if (_isControlled) {
      // cancel any scheduled UI update, since there is a real,
      // changed prop value somewhere (likely 'checked')
      clearTimeout(timer);
    }

    const inputElements = html`
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
      <span class="${classes}">
        ${variant.indexOf('checkmark') > -1
          ? html`
              <span class="a-checkbox__icon-checkmark">${CHECKMARK_ICON}</span>
            `
          : ``}
      </span>
    `;

    const errorElement = error && !disabled
      ? html`
          <span class="a-checkbox__error">${unsafeHTML(error)}</span>
        `
      : html``;

    if (_childRoot) {
      // 1. harvest child content as live DOM (lit-html has documented support for text-content binding type 'DOM node')
      // N.B. Using live DOM node here is crucial for React's DOM updating mechanism, e.g. for a <p>{updatedHere}<p> child root.
      // 2. wrap it in <axa-text>
      // prettier-ignore
      this._labelFromChildren = html`<axa-text variant="size-3" class="a-checkbox__children-inline">${_childRoot}</axa-text>`;
    }

    const { _labelFromChildren } = this;

    return _labelFromChildren || label
      ? html`
          <label for="${refId}" class="a-checkbox__wrapper">
            ${inputElements}
            <span class="${checkboxContentClasses}">
              ${_labelFromChildren || unsafeHTML(label)}
              ${required ? REQUIRED_SYMBOL : ''}
            </span>
            ${errorElement}
          </label>
        `
      : html`
          ${inputElements} ${errorElement}
        `;
  }

  firstUpdated() {
    const { isReact, defaultChecked } = this;
    if (isReact && defaultChecked) {
      this.querySelector('input').checked = true;
      this.state.native = true;
    }
    // first render has overwritten the child root - so prevent future child-root harvesting now
    this._childRoot = null;
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
