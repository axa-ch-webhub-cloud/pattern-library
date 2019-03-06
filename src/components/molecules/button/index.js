import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import buttonCSS from './index.scss';

const icon = () => html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="m-button__icon"
    width="12"
    height="7"
    viewBox="0 0 12 7"
  >
    <g fill-rule="evenodd" stroke-linecap="round" stroke-width="2">
      <path d="M.5 3.5H11M9 7l2.798-3.5L9 0" />
    </g>
  </svg>
`;

class AXAButton extends LitElement {
  static tagName = 'axa-button';
  static styles = css`
    ${unsafeCSS(buttonCSS)}
  `;

  static get properties() {
    return {
      // button, submit, reset
      type: { type: String },
      icon: { type: String },

      secondary: { type: Boolean },
      large: { type: Boolean },
      inverted: { type: Boolean },
      cta: { type: Boolean },
      motion: { type: Boolean },
      disabled: { type: Boolean },

      onClick: { type: String },
    };
  }

  constructor() {
    super();
    this.type = 'button';
  }

  handleButtonClick = () => {
    if (typeof this.onClick === 'function') {
      this.onClick();
    }
  };

  render() {
    const classes = {
      'm-button--large': this.large,
      'm-button--secondary': this.secondary,
      'm-button--inverted': this.inverted,
      'm-button--motion': this.motion,
      'm-button--cta': this.cta && !this.secondary,
    };

    return html`
      <button
        type="${this.type}"
        class="m-button ${classMap(classes)}"
        ?disabled="${this.disabled}"
        @click="${this.handleButtonClick}"
      >
        <div class="m-button__flex-wrapper">
          <slot></slot>
          ${this.icon && icon()}
        </div>
      </button>
    `;
  }
}

customElements.define(AXAButton.tagName, AXAButton);

export default AXAButton;
