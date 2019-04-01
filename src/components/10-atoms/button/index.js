import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import buttonCSS from './index.scss';

// import to mock icon
import arrowRight from '../../00-materials/icons/arrow-right';

class AXAButton extends LitElement {
  static tagName = 'axa-button';
  static styles = css`
    ${unsafeCSS(buttonCSS)}
  `;

  static get properties() {
    return {
      // button, submit, reset
      type: { type: String, reflect: true },
      secondary: { type: Boolean },
      large: { type: Boolean },
      inverted: { type: Boolean },
      cta: { type: Boolean },
      motionOff: { type: Boolean },
      disabled: { type: Boolean, reflect: true },

      icon: { type: Boolean },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.type = 'button';
    this.onClick = () => {};
  }

  render() {
    const classes = {
      'a-button--large': this.large,
      'a-button--secondary': this.secondary,
      'a-button--inverted': this.inverted,
      'a-button--motion': !this.motionOff,
      'a-button--cta': this.cta && !this.secondary,
    };

    return html`
      <button type="${this.type}" class="a-button ${classMap(classes)}" ?disabled="${this.disabled}" @click="${this.onClick}">
        <div class="a-button__flex-wrapper">
          <slot></slot>
          ${this.icon && svg`${arrowRight()}`}
        </div>
      </button>
    `;
  }
}

customElements.define(AXAButton.tagName, AXAButton);

export default AXAButton;
