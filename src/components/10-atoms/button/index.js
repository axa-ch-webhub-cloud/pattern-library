import '@webcomponents/webcomponentsjs';
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';
import defineOnce from '../../../utils/define-once';
import buttonCSS from './index.scss';

class AXAButton extends LitElement {
  static tagName = 'axa-button';
  static styles = css`
    ${unsafeCSS(buttonCSS)}
  `;

  static properties = {
    // button, submit, reset
    type: { type: String },
    icon: { type: String },
    secondary: { type: Boolean },
    large: { type: Boolean },
    inverted: { type: Boolean },
    red: { type: Boolean },
    motionOff: { type: Boolean },
    disabled: { type: Boolean, reflect: true },
    onClick: { type: Function },
  };

  constructor() {
    super();
    this.type = 'button';
    this.icon = '';
    this.secondary = false;
    this.large = false;
    this.inverted = false;
    this.red = false;
    this.motionOff = false;
    this.disabled = false;
    this.onClick = () => {};
  }

  isTypeSubmitOrReset = () => this.type === 'submit' || this.type === 'reset';

  connectedCallback() {
    super.connectedCallback();

    // shadow dom submit btn workaround
    if (this.isTypeSubmitOrReset()) {
      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      this.appendChild(fakeButton);
      this.onclick = () => fakeButton.click();
    }
  }

  handleButtonClick = ev => {
    if (this.type === 'button') {
      this.onClick(ev);
    }
  };

  render() {
    const { type, large, secondary, inverted, motionOff, red, disabled, icon = '' } = this;
    const classes = {
      'a-button--large': large,
      'a-button--secondary': secondary,
      'a-button--inverted': inverted,
      'a-button--motion': !motionOff,
      'a-button--red': red && !secondary,
    };

    return html`
      <button type="${type}" class="a-button ${classMap(classes)}" ?disabled="${disabled}" @click="${this.handleButtonClick}">
        <div class="a-button__flex-wrapper">
          <slot></slot>
          ${icon &&
            html`
              <axa-icon class="a-button__icon" icon="${icon}"></axa-icon>
            `}
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
