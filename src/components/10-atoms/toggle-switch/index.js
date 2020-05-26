import { css, html, LitElement, unsafeCSS } from 'lit-element';
import defineOnce from '../../../utils/define-once';
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
        <span class="a-toggle-switch__slider"></span>
      </label>
    `;
  }

  handleChange(event) {
    this.active = event.target.checked;

    // this.dispatchEvent(event);
    this.onChange(event);
  }
}

defineOnce(AXAToggleSwitch.tagName, AXAToggleSwitch);
export default AXAToggleSwitch;
