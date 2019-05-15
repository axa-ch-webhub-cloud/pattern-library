import '@webcomponents/webcomponentsjs';
import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAInputText extends LitElement {
  static get tagName() {
    return 'axa-input-text';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      id: { type: String },
      type: { type: String },
      name: { type: String },
      onClick: { type: Function },
      placeholder: { type: String },
      value: { type: String },
      valid: { type: Boolean },
      disabled: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.onClick = () => {};
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  render() {
    return html`
    <div>
      <input
        class="a-input-text"
        autocomplete="off"
        type="${this.type}"
        name="${this.name}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
      />
      </div>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXAInputText.tagName, AXAInputText);

export default AXAInputText;
