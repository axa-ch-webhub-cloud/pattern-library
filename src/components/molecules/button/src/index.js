import { LitElement, html, css, unsafeCSS } from 'lit-element';
import classNames from 'classnames';
import buttonCSS from './index.scss';

export class AXAButton extends LitElement {
  static tagName = 'axa-button';
  static styles = css`${unsafeCSS(buttonCSS)}`;

  static get properties() {
    return {
      // red, white
      color: { type: String },
      // sm, lg
      size: { type: String },
      // button, submit, reset
      type: { type: String },

      ghost: { type: Boolean },
      motion: { type: Boolean },
      disabled: { type: Boolean },

      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.type = 'button';
  }

  render() {
    const buttonClasses = classNames('m-button', {
      [`m-button--${this.color}`]: this.color,
      [`m-button--${this.size}`]: this.size,
      'm-button--ghost': this.ghost,
      'm-button--motion': this.motion,
    });

    return html`
      <button type="${this.type}" class="${buttonClasses}" ?disabled="${this.disabled}" @click="${this.onClick}">
        <div class="m-button__flex-wrapper">
          <slot></slot>
        </div>
      </button>
    `;
  }
}

customElements.define(AXAButton.tagName, AXAButton);
