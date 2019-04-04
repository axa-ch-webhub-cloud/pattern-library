import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
// TODO if @axa-ch/icon released
// import '@axa-ch/icon';
import '../icon'

import buttonCSS from './index.scss';

class AXAButton extends LitElement {
  static tagName = 'axa-button';
  static styles = css`${unsafeCSS(buttonCSS)}`;

  static get properties() {
    return {
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
  }

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

  render() {
    const classes = {
      'a-button--large': this.large,
      'a-button--secondary': this.secondary,
      'a-button--inverted': this.inverted,
      'a-button--motion': !this.motionOff,
      'a-button--red': this.red && !this.secondary,
    };

    return html`
      <button type="${this.type}" class="a-button ${classMap(classes)}" ?disabled="${this.disabled}" @click="${this.onClick}">
        <div class="a-button__flex-wrapper">
          <slot></slot>
          ${this.icon && html`<axa-icon icon="${this.icon}">`}
        </div>
      </button>
    `;
  }
}

customElements.define(AXAButton.tagName, AXAButton);

export default AXAButton;
