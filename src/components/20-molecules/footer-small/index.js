import { html, css, unsafeCSS } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import AXAContainer from '@axa-ch-webhub-cloud/container';
import footerSmallCSS from './index.scss';
import childStyles from './child.scss';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
import InlineStyles from '../../../utils/inline-styles';
import fireCustomEvent from '../../../utils/custom-event';

const ACTIVE_LINK_CLASS = 'm-footer-small__link--active';

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
      dynamic: { type: Boolean },
      onLanguageClick: { type: Function, attribute: false },
      onDisclaimerClick: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
    this.handleLanguageClick = this.handleLanguageClick.bind(this);
    this.handleDisclaimerClick = this.handleDisclaimerClick.bind(this);

    defineVersioned([AXAContainer], __VERSION_INFO__, this);
  }

  // Parent class InlineStyles needs a static method to retrieve styles.
  // The name of such a method is passed when calling: this.inlineStyles('resetHeadingCss');
  static get resetHeadingCss() {
    return childStyles;
  }

  handleLanguageClick(ev, languageIndex) {
    if (this.dynamic) {
      ev.preventDefault();
      [...this.querySelectorAll('[slot="language-item"]')].forEach(
        (link, i) => {
          if (i === languageIndex) {
            link.classList.add(ACTIVE_LINK_CLASS);
          } else {
            link.classList.remove(ACTIVE_LINK_CLASS);
          }
        }
      );
      this.onLanguageClick(languageIndex);
      fireCustomEvent('axa-language-click', languageIndex, this);
      this.requestUpdate();
    }
  }

  handleDisclaimerClick(ev, disclaimerIndex) {
    if (this.dynamic) {
      ev.preventDefault();
      this.onDisclaimerClick(disclaimerIndex);
      fireCustomEvent('axa-disclaimer-click', disclaimerIndex, this);
    }
  }

  firstUpdated() {
    // call parent class method that adds inline styles
    this.inlineStyles('resetHeadingCss');
    // install observer to watch for changes in the component's children,
    // rerendering if any such change occurs
    this._observer = new MutationObserver(() => this.requestUpdate());
    this._observer.observe(this, {
      attributes: true,
      childList: true,
      subTree: true,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // remove installed observer
    this._observer.disconnect();
  }

  /* eslint-disable indent */
  render() {
    return versionedHtml(this)`
      <article class="m-footer-small">
        <axa-container>
          <div class="m-footer-small__container">
            <ul class="m-footer-small__list">
              ${repeat(
                this.querySelectorAll('[slot="language-item"]'),
                (languageItem, index) => {
                  // copy the active class from the light-DOM child
                  const isActive =
                    languageItem.classList.contains(ACTIVE_LINK_CLASS);
                  const classes = {
                    'm-footer-small__link--bold': true,
                    [`js-footer-small__link-${index}`]: true,
                    [ACTIVE_LINK_CLASS]: isActive,
                  };
                  return html`
                    <li class="m-footer-small__list-item">
                      <a
                        href="${languageItem.href}"
                        class="${classMap(classes)}"
                        @click=${ev => this.handleLanguageClick(ev, index)}
                        >${languageItem.textContent}</a
                      >
                    </li>
                  `;
                }
              )}
            </ul>

            <div class="m-footer-small__disclaimer">
              <ul class="m-footer-small__list">
                ${repeat(
                  this.querySelectorAll('[slot="disclaimer-item"]'),
                  (disclaimerItem, index) => html`
                    <li class="m-footer-small__list-item">
                      <a
                        href="${disclaimerItem.href}"
                        @click=${ev => this.handleDisclaimerClick(ev, index)}
                        >${disclaimerItem.textContent}</a
                      >
                    </li>
                  `
                )}
              </ul>
              <div class="js-footer-small__copyright">
                <slot name="copyright"></slot>
              </div>
            </div>
          </div>
        </axa-container>
      </article>
    `;
  }
}

defineVersioned([AXAFooterSmall], __VERSION_INFO__);

export default AXAFooterSmall;
