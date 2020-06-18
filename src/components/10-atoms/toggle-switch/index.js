import { css, html, LitElement, unsafeCSS } from 'lit-element';
import fireCustomEvent from '../../../utils/custom-event';
import { defineVersioned } from '../../../utils/component-versioning';
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
    };
  }

  constructor() {
    super();
    applyDefaults(this);
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

  handleChange(event) {
    this.active = event.target.checked;
    const { active } = this;
    fireCustomEvent('change', { active }, this);
    this.onChange(event);
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAToggleSwitch], __VERSION_INFO__);
export default AXAToggleSwitch;
