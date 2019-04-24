import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import footerSmallCSS from './index.scss';

class AXAFooterSmall extends LitElement {
  static get tagName() {
    return 'axa-footer-small';
  }

  static get styles() {
    return css`
      ${unsafeCSS(footerSmallCSS)}
    `;
  }

  static get properties() {
    return {
      languageItems: { type: Array },
      disclaimerItems: { type: Array },
      copyrightText: { type: String },
      activeLanguage: { type: String },
      dynamic: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.languageItems = [];
    this.disclaimerItems = [];
    this.copyrightText = '';
    this.activeLanguage = '';
    this.dynamic = false;
    this.onLanguageChange = () => {};
    this.onDisclaimerChange = () => {};
  }

  handleLanguageClick = (ev, language) => {
    ev.preventDefault();
    if (this.activeLanguage !== language) {
      this.activeLanguage = language;
      this.onLanguageChange(language);
      this.dispatchEvent(new CustomEvent('axa-language-change', { detail: language, bubbles: true, cancelable: true }));
    }
  };

  handleDisclaimerClick = (ev, disclaimer) => {
    ev.preventDefault();
    this.onDisclaimerChange(disclaimer);
    this.dispatchEvent(new CustomEvent('axa-disclaimer-change', { detail: disclaimer, bubbles: true, cancelable: true }));
  };

  render() {
    return html`
      <article class="m-footer-small">
        <ul class="m-footer-small__list">
          ${repeat(
            this.languageItems,
            languageItem => html`
              <li class="m-footer-small__list-item">
                ${this.dynamic
                  ? html`
                      <axa-link
                        class="m-footer-small__link ${languageItem.text === this.activeLanguage ? 'm-footer-small__link--is-active' : ''}"
                        color="white"
                        @click="${ev => this.handleLanguageClick(ev, languageItem.text)}"
                        >${languageItem.text}</axa-link
                      >
                    `
                  : html`
                      <axa-link
                        class="m-footer-small__link ${languageItem.text === this.activeLanguage ? 'm-footer-small__link--is-active' : ''}"
                        href="${languageItem.link || ''}"
                        color="white"
                        >${languageItem.text}</axa-link
                      >
                    `}
              </li>
            `
          )}
        </ul>

        <div class="m-footer-small__disclaimer">
          <ul class="m-footer-small__list">
            ${repeat(
              this.disclaimerItems,
              disclaimerItem => html`
                <li class="m-footer-small__list-item">
                  ${this.dynamic
                    ? html`
                        <axa-link
                          class="m-footer-small__link"
                          color="white"
                          @click="${ev => this.handleDisclaimerClick(ev, disclaimerItem.text)}"
                          >${disclaimerItem.text}</axa-link
                        >
                      `
                    : html`
                        <axa-link class="m-footer-small__link" href="${disclaimerItem.link}" color="white">${disclaimerItem.text}</axa-link>
                      `}
                </li>
              `
            )}
          </ul>
          <div class="js-footer-small__copyright"><span>${this.copyrightText}<span></div>
        </div>
      </article>
    `;
  }
}

customElements.define(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
