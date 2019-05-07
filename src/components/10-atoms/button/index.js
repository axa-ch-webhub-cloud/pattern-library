import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';
import defineOnce from '../../../utils/define-once';
import buttonCSS from './index.scss';

class AXAButton extends LitElement {
  static get tagName() {
    return 'axa-button';
  }

  static get styles() {
    return css`
      ${unsafeCSS(buttonCSS)}
    `;
  }

  static get properties() {
    return {
      // button, submit, reset
      type: { type: String, reflect: true },
      // secondary, red,  inverted, inverted-green, inverted-dark-blue
      variant: { type: String },
      icon: { type: String },
      large: { type: Boolean },
      motionOff: { type: Boolean },
      disabled: { type: Boolean, reflect: true },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.type = 'button';
    this.variant = '';
    this.icon = '';
    this.large = false;
    this.motionOff = false;
    this.disabled = false;
    this.onClick = () => {};
  }

  isTypeSubmitOrReset = () => this.type === 'submit' || this.type === 'reset';

  firstUpdated() {
    // shadow dom submit btn workaround
    if (this.isTypeSubmitOrReset()) {
      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      this.appendChild(fakeButton);
      this.onclick = () => fakeButton.click();
    }
  }

  render() {
    const { type, large, motionOff, disabled, variant = '', icon = '' } = this;
    const classes = {
      'a-button--secondary': variant === 'secondary',
      'a-button--red': variant === 'red',
      'a-button--inverted': variant === 'inverted',
      'a-button--inverted-green': variant === 'inverted-green',
      'a-button--inverted-dark-blue': variant === 'inverted-dark-blue',
      'a-button--large': large,
      'a-button--motion': !motionOff,
    };

    return html`
      <button
        type="${type}"
        class="a-button ${classMap(classes)}"
        ?disabled="${disabled}"
        @click="${this.onClick}"
      >
        <div class="a-button__flex-wrapper">
          <slot></slot> ${
            icon &&
              html`
                <axa-icon class="a-button__icon" icon="${icon}"></axa-icon>
              `
          }
        </div>
      </button>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.isTypeSubmitOrReset()) this.onclick = null;
  }
}

defineOnce(AXAButton.tagName, AXAButton);

export default AXAButton;
