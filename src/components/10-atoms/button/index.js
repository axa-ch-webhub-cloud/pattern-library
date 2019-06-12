import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
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
    const { style } = this;
    // shadow dom submit btn workaround
    if (this.isTypeSubmitOrReset()) {
      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      this.appendChild(fakeButton);
      this.onclick = () => fakeButton.click();
    }

    style.appearance = 'none';
    style.mozAppearance = 'none';
    style.webkitAppearance = 'none';
    style.msAppearance = 'none';
    style.oAppearance = 'none';
  }

  render() {
    const { type, large, motionOff, disabled, variant = '', icon = '' } = this;
    const classes = {
      'a-button': true,
      'a-button--secondary': variant === 'secondary',
      'a-button--red': variant === 'red',
      'a-button--inverted': variant === 'inverted',
      'a-button--large': large,
      'a-button--motion': !motionOff,
    };

    return html`
      <button
        type="${type}"
        class="${classMap(classes)}"
        ?disabled="${disabled}"
        @click="${this.onClick}"
      >
        <span class="a-button__flex-wrapper">
          <slot></slot> ${icon &&
            html`
              <axa-icon class="a-button__icon" icon="${icon}"></axa-icon>
            `}
        </span>
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
