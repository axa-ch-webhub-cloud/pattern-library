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
      activeLanguage: { type: String },
    };
  }

  constructor() {
    super();
    this.languageItems = [];
    this.disclaimerItems = [];
    this.copyrightText = '';
    this.activeLanguage = '';
    this.onLanguageChange = () => {};
    this.onDisclaimerChange = () => {};
  }

  handleLanguageClick = (ev, language) => {
    if (this.activeLanguage !== language) {
      this.activeLanguage = language;
      this.onLanguageChange(language);
      this.dispatchEvent(new CustomEvent('axa-language-change', { detail: language, bubbles: true, cancelable: true }));
    }
    if (this.onLanguageChange && this.onLanguageChange.toString() !== (() => {}).toString()) {
      ev.preventDefault();
    }
  };

  handleDisclaimerClick = (ev, disclaimer) => {
    if (this.clickedDisclaimer !== disclaimer) {
      this.clickedDisclaimer = disclaimer;
      this.onDisclaimerChange(disclaimer);
      this.dispatchEvent(new CustomEvent('axa-disclaimer-change', { detail: disclaimer, bubbles: true, cancelable: true }));
    }
    if (this.onDisclaimerChange && this.onDisclaimerChange.toString() !== (() => {}).toString()) {
      ev.preventDefault();
    }
  };

  getLinkOrVoid(link) {
    // eslint-disable-next-line no-script-url
    return link || 'javascript:void(0);';
  }

  render() {
    return html`
      <article class="m-footer-small">
        <ul class="m-footer-small__list">
          ${repeat(
            this.languageItems,
            languageItem => html`
              <li class="m-footer-small__list-item">
                <axa-link
                  class="m-footer-small__link ${languageItem.text === this.activeLanguage ? 'm-footer-small__link--is-active' : ''}"
                  href="${this.getLinkOrVoid(languageItem.link)}"
                  color="white"
                  @click="${ev => this.handleLanguageClick(ev, languageItem.text)}"
                  >${languageItem.text}</axa-link
                >
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
                  <axa-link
                    class="m-footer-small__link"
                    href="${this.getLinkOrVoid(disclaimerItem.link)}"
                    color="white"
                    @click="${ev => this.handleDisclaimerClick(ev, disclaimerItem.text)}"
                    >${disclaimerItem.text}</axa-link
                  >
                </li>
              `
            )}
          </ul>
          <div>${this.copyrightText}</div>
        </div>
      </article>
    `;
  }
}

customElements.define(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
