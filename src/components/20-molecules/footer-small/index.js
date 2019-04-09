import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import footerSmallCSS from './index.scss';

class AXAFooterSmall extends LitElement {
  static tagName = 'axa-footer-small';
  static styles = css`
    ${unsafeCSS(footerSmallCSS)}
  `;

  static get properties() {
    return {
      languageItems: { type: Array },
      disclaimerItems: { type: Array },
      copyrightText: { type: String },
    };
  }

  constructor() {
    super();
    this.languageItems = [];
    this.disclaimerItems = [];
    this.copyrightText = '';
  }

  renderFooterList = items => html`
    <ul class="m-footer-small__list">
      ${repeat(
        items,
        item => html`
          <li class="m-footer-small__list-item">
            <axa-link class="m-footer-small__link" href="${item.link}" color="white">${item.text}</axa-link>
          </li>
        `
      )}
    </ul>
  `;

  render() {
    return html`
      <article class="m-footer-small">
        ${this.renderFooterList(this.languageItems)}

        <div class="m-footer-small__disclaimer">
          ${this.renderFooterList(this.disclaimerItems)}
          <div class="js-footer-small__copyright">${this.copyrightText}</div>
        </div>
      </article>
    `;
  }
}

customElements.define(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
