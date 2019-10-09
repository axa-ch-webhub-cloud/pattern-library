import { html, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/container';
import footerSmallCSS from './index.scss';
import childStyles from './child.scss';
import defineOnce from '../../../utils/define-once';
import InlineStyles from '../../../utils/inline-styles';

class AXAFooterSmall extends InlineStyles {
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
      activeLanguage: { type: String },
      dynamic: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.languageItems = [];
    this.disclaimerItems = [];
    this.activeLanguage = '';
    this.dynamic = false;
    this.onLanguageChange = () => {};
    this.onDisclaimerChange = () => {};
  }

  // Parent class InlineStyles needs a static method to retrive styles
  // name of such method is passed when calling: this.inlineStyles('resetHeadingCss');
  static get resetHeadingCss() {
    return childStyles;
  }

  handleLanguageClick = (ev, languageIndex) => {
    if (this.dynamic) {
      ev.preventDefault();
      this.onLanguageChange(languageIndex);
      if (this.activeLanguage !== languageIndex) {
        this.shadowRoot
          .querySelectorAll(
            '.m-footer-small__container > .m-footer-small__list a'
          )
          .forEach((languageItem, index) => {
            if (languageIndex === index) {
              languageItem.classList.add('m-footer-small__link--active');
            } else {
              languageItem.classList.remove('m-footer-small__link--active');
            }
          });

        this.dispatchEvent(
          new CustomEvent('axa-language-change', {
            detail: languageIndex,
            bubbles: true,
            cancelable: true,
          })
        );
      }
    }
  };

  handleDisclaimerClick = (ev, disclaimerKey) => {
    if (this.dynamic) {
      // console.log('dynamic link', ev.target);
      // ev.preventDefault();
      // if (this.activeLanguage !== languageIndex) {
      //   this.shadowRoot
      //     .querySelectorAll(
      //       '.m-footer-small__container > .m-footer-small__list a'
      //     )
      //     .forEach((languageItem, index) => {
      //       if (languageIndex === index) {
      //         languageItem.classList.add('m-footer-small__link--active');
      //       } else {
      //         languageItem.classList.remove('m-footer-small__link--active');
      //       }
      //     });
      this.onDisclaimerChange(disclaimerKey);
      this.dispatchEvent(
        new CustomEvent('axa-disclaimer-change', {
          detail: disclaimerKey,
          bubbles: true,
          cancelable: true,
        })
      );
    }
  };

  firstUpdated() {
    // call parent class method that add inline styles
    this.inlineStyles('resetHeadingCss');
  }

  render() {
    return html`
      <article class="m-footer-small">
        <axa-container>
          <div class="m-footer-small__container">
            <ul class="m-footer-small__list">
              ${repeat(
                this.querySelectorAll('[slot="language-item"]'),
                (languageItem, index) => html`
                  <li class="m-footer-small__list-item">
                    <a
                      href="${languageItem.href}"
                      @click=${ev => this.handleLanguageClick(ev, index)}
                      >${languageItem.textContent}</a
                    >
                  </li>
                `
              )}
            </ul>

            <div class="m-footer-small__disclaimer">
              <ul class="m-footer-small__list">
                ${repeat(
                  this.querySelectorAll('[slot="disclaimer-item"]'),
                  disclaimerItem => html`
                    <li class="m-footer-small__list-item">
                      ${disclaimerItem}
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
