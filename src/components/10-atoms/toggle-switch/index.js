import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { defineVersioned } from '../../../utils/component-versioning';
import fireCustomEvent from '../../../utils/custom-event';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAToggleSwitch extends LitElement {
  static get tagName() {
    return 'axa-toggle-switch';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      active: { type: Boolean, reflect: true },
      disabled: { type: Boolean },
      error: { type: String },
      onChange: { type: Function },
      isReact: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.state = {
      firstUpdate: true,
      isControlled: false,
      active: false,
    };

    applyDefaults(this);
  }

  set active(value) {
    const {
      active,
      isReact,
      state: { firstUpdate },
    } = this;

    if (firstUpdate && isReact) {
      this.state.isControlled = true;
    }

    this.state.active = value;
    this.requestUpdate('active', active);
  }

  get active() {
    return this.state.active;
  }

  render() {
    const { active, disabled, error, handleChange } = this;

    const classes = {
      'a-toggle-switch__error-message': this.error !== '',
    };

    const inputElement = html`
      <input
        class="a-toggle-switch__input"
        type="checkbox"
        ?checked="${active}"
        ?disabled="${disabled}"
        @change=${handleChange}
      />
    `;

    return html`
      <label class="a-toggle-switch">
        ${inputElement}
        <div class="a-toggle-switch__slider"></div>
      </label>
      <span class="${classMap(classes)}">${error}</span>
    `;
  }

  handleChange(event) {
    const { checked } = event.target;
    if (!this.state.isControlled) {
      this.active = checked;
      const { active } = this;
      fireCustomEvent('change', { active }, this);
    }
    this.onChange({ target: { checked: this.active } });
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAToggleSwitch], __VERSION_INFO__);
export default AXAToggleSwitch;
