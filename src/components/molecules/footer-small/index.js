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

    return html`
      <article class="footer-small">
        <div class="footer-small__side-aligned">
          <p>
            <a href="https://google.com">DE</a> | <a href="https://google.com">FR</a> | <a href="https://google.com">IT</a> |
            <a href="https://google.com">EN</a>
          </p>
        </div>

        <div class="footer-small__side-aligned">
          <div class="footer-small__disclaimer">
            <p class="footer-small__disclaimer--left">
              <a href="https://google.com">Terms of use</a> | <a href="https://google.com">Data protection</a>
            </p>
            <p class="footer-small__disclaimer--right">&nbsp;© 2019 AXA Insurance Ltd.</p>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
