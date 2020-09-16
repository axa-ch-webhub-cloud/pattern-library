import { css, html, LitElement, unsafeCSS } from 'lit-element';
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
    const { active, disabled, handleChange } = this;

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
    `;
  }

  firstUpdated() {
    this.state.firstUpdate = false;
  }

  handleChange(event) {
    if (!this.state.isControlled) {
      this.active = event.target.checked;
      const { active } = this;
      fireCustomEvent('change', { active }, this);
    }

    this.onChange(event);
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAToggleSwitch], __VERSION_INFO__);
export default AXAToggleSwitch;
