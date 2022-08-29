import { css, html, LitElement, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning';
import fireCustomEvent from '../../../utils/custom-event';
import applyDefaults from '../../../utils/apply-defaults';
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

  handleSpacebar(e) {
    // Key: Space
    if (e.keyCode === 32) {
      this.active = !this.active;
    }
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
      'a-toggle-switch__error-message-active': error !== '',
    };

    const inputElement = html`
      <input
        class="a-toggle-switch__input"
        type="checkbox"
        tabindex="-1"
        ?checked="${active}"
        ?disabled="${disabled}"
        @change=${handleChange}
      />
    `;

    return html`
      <label
        class="a-toggle-switch"
        tabindex="0"
        @keydown="${this.handleSpacebar}"
      >
        ${inputElement}
        <div class="a-toggle-switch__slider"></div>
      </label>
      <span class="a-toggle-switch__error-message ${classMap(classes)}"
        >${error}</span
      >
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

defineVersioned([AXAToggleSwitch], __VERSION_INFO__);
export default AXAToggleSwitch;
