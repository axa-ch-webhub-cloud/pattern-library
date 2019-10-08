import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/container';
import footerSmallCSS from './index.scss';
import defineOnce from '../../../utils/define-once';

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

  handleLanguageClick = (ev, languageKey) => {
    ev.preventDefault();
    if (this.activeLanguage !== languageKey) {
      this.activeLanguage = languageKey;
      this.onLanguageChange(languageKey);
      this.dispatchEvent(
        new CustomEvent('axa-language-change', {
          detail: languageKey,
          bubbles: true,
          cancelable: true,
        })
      );
    }
  };

  handleDisclaimerClick = (ev, disclaimerKey) => {
    ev.preventDefault();
    this.onDisclaimerChange(disclaimerKey);
    this.dispatchEvent(
      new CustomEvent('axa-disclaimer-change', {
        detail: disclaimerKey,
        bubbles: true,
        cancelable: true,
      })
    );
  };

  render() {
    return html`
      <article class="m-footer-small">
        <axa-container>
          <div class="m-footer-small__container">
            <ul class="m-footer-small__list">
              ${repeat(
                this.languageItems,
                languageItem => html`
                  <li class="m-footer-small__list-item">
                    ${this.dynamic
                      ? html`
                          <a
                            class="m-footer-small__link--bold ${languageItem.key ===
                            this.activeLanguage
                              ? 'm-footer-small__link--active'
                              : ''}"
                            @click="${ev =>
                              this.handleLanguageClick(ev, languageItem.key)}"
                            >${languageItem.text}</a
                          >
                        `
                      : html`
                          <a
                            class="m-footer-small__link--bold ${languageItem.key ===
                            this.activeLanguage
                              ? 'm-footer-small__link--active'
                              : ''}"
                            href="${languageItem.link || ''}"
                            >${languageItem.text}</a
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
                            <a
                              class="m-footer-small__link"
                              @click="${ev =>
                                this.handleDisclaimerClick(
                                  ev,
                                  disclaimerItem.key
                                )}"
                              >${disclaimerItem.text}</a
                            >
                          `
                        : html`
                            <a
                              class="m-footer-small__link"
                              href="${disclaimerItem.link}"
                              >${disclaimerItem.text}</a
                            >
                          `}
                    </li>
                  `
                )}
              </ul>
              <div class="js-footer-small__copyright">
                <slot
                  name="copyright"
                  class="js-footer-small__copyright"
                ></slot>
              </div>
            </div>
          </div>
        </axa-container>
      </article>
    `;
  }
}

defineOnce(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
