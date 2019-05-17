import '@webcomponents/webcomponentsjs';
import { html, css, unsafeCSS } from 'lit-element';
import NoShadowDOM from '../../../utils/no-shadow';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAInputText extends NoShadowDOM {
  static get tagName() {
    return 'axa-input-text';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      // Could be Field class
      id: { type: String },
      name: { type: String },
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      valid: { type: Boolean },
      // Error Message
      error: { type: String },
      required: { type: Boolean },
      // Validation

      validate: { type: String },
      disabled: { type: Boolean },
      // Info Message proposal maybe obsolete
      info: { type: String },

      // text, email
      type: { type: String },

      // proposal
      debug: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.id = this.id || `input-text-${Math.random().toString(36).slice(2)}`;
    this.name = '';
    this.type = 'text';
    this.label = '';
    this.placeholder = '';

    // internal properties
    this.state = {
      isControlled: false,
      timer: null,
      checked: false,
      native: false,
    };

  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  render() {
    const { id, label = '' } = this;

    return html`
    <div>
    
      ${label && html`<label for=${id}>${label}</label>`}
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
