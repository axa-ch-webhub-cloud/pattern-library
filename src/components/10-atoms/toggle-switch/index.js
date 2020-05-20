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
      label: { type: String },
      checked: { type: Boolean },
      disabled: { type: Boolean },
      onChange: { type: Function },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const { checked, label, disabled, onChange } = this;

    const inputElement = html`
      <input
        class="a-toggle-switch__input"
        type="checkbox"
        ?checked="${checked}"
        ?disabled="${disabled}"
        @change=${this.onChange}
      />
    `;

    return html`
      <label class="a-toggle-switch">
        ${inputElement}
        <span class="a-toggle-switch__slider"></span>
      </label>
    `;
  }
}

defineOnce(AXAToggleSwitch.tagName, AXAToggleSwitch);
export default AXAToggleSwitch;
