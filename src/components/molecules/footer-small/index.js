import { LitElement, html, css, unsafeCSS } from 'lit-element';
import footerSmallCSS from './index.scss';

class AXAFooterSmall extends LitElement {
  static tagName = 'axa-footer-small';
  static styles = css`
    ${unsafeCSS(footerSmallCSS)}
  `;

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  handleButtonClick = () => {
    // if (typeof this.onClick === 'function') {
    //   this.onClick();
    // }
  };

  render() {
    const classes = {
      // 'a-button--large': this.large,
      // 'a-button--secondary': this.secondary,
      // 'a-button--inverted': this.inverted,
      // 'a-button--motion': this.motion,
      // 'a-button--cta': this.cta && !this.secondary,
    };

    // return html`
    //   <button type="${this.type}" class="a-button ${classMap(classes)}" ?disabled="${this.disabled}" @click="${this.handleButtonClick}">
    //     <div class="a-button__flex-wrapper">
    //       <slot></slot>
    //       ${this.icon && svg`${arrowRight()}`}
    //     </div>
    //   </button>
    // `;

    return html`
      <article>
        <div class="footer-small__side-aligned">
          <p>DE | FR | IT | EN</p>
        </div>

        <div class="footer-small__side-aligned">
          <div class="container2">
            <div class="block1">
              <p>Terms of use | Data protection</p>
            </div>
            <div class="block2">
              <p>&nbsp;© 2019 AXA Insurance Ltd.</p>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
