import { css, html, LitElement, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning.js';
import fireCustomEvent from '../../../utils/custom-event.js';
import applyDefaults from '../../../utils/apply-defaults.js';
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
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean },
      error: { type: String },
      onToggle: { type: Function },
      isReact: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.state = {
      firstUpdate: true,
      isControlled: false,
      checked: false,
    };

    applyDefaults(this);
  }

  handleSpacebar(e) {
    // Key: Space
    if (e.keyCode === 32) {
      this.checked = !this.checked;
    }
  }

  set checked(value) {
    const {
      checked,
      isReact,
      state: { firstUpdate },
    } = this;

    if (firstUpdate && isReact) {
      this.state.isControlled = true;
    }

    this.state.checked = value;
    this.requestUpdate('checked', checked);
  }

  get checked() {
    return this.state.checked;
  }

  render() {
    const { checked, disabled, error, handleChange } = this;

    const classes = {
      'a-toggle-switch__error-message-checked': error !== '',
    };

    const inputElement = html`
      <input
        class="a-toggle-switch__input"
        type="checkbox"
        tabindex="-1"
        ?checked="${checked}"
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
    if (!this.state.isControlled) {
      this.checked = event.target.checked;
      fireCustomEvent(
        'axa-toggle-switch-toggle',
        { checked: this.checked },
        this
      );
    }
    if (typeof this.onToggle === 'function') {
      this.onToggle(this.checked);
    }
  }
}

defineVersioned([AXAToggleSwitch], __VERSION_INFO__);
export default AXAToggleSwitch;
