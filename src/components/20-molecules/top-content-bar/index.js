import { css, html, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import AXAContainer from '@axa-ch/container';
import AXAButton from '@axa-ch/button';
import AXAButtonLink from '@axa-ch/button-link';
import AXAIcon from '@axa-ch/icon';
import InlineStyles from '../../../utils/inline-styles';
import childStyles from './child.scss';

import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import fireCustomEvent from '../../../utils/custom-event';

const elTagName = 'axa-top-content-bar';
const elRootSelector = '.m-top-content-bar';
const hideClass = 'hide';
let elementHidden = true;
/**
 *  We need InlineStyles to give children some margins.
 */
class AXATopContentBar extends InlineStyles {
  static get tagName() {
    return elTagName;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      ctatext: { type: String },
      href: { type: String },
      variant: { type: String },
      icon: { type: String },
      stickymobile: { type: String },
      overlaydesktop: { type: String },
      closeable: { type: String },
      onClick: { type: Function, attribute: false },
    };
  }

  static get childStyles() {
    return childStyles;
  }

  constructor() {
    super();
    applyDefaults(this);

    window.addEventListener('axa-top-bar-open', () => {
      const contBarEl = this.shadowRoot.querySelector(elRootSelector);
      if (contBarEl) {
        contBarEl.classList.remove(hideClass);
      } else {
        elementHidden = false;
      }
    });

    defineVersioned(
      [AXAButton, AXAButtonLink, AXAContainer, AXAIcon],
      __VERSION_INFO__,
      this
    );
  }

  onClose() {
    const contBarEl = this.shadowRoot.querySelector(elRootSelector);
    contBarEl.classList.add(hideClass);
    fireCustomEvent('axa-top-bar-close', null, window);
  }

  firstUpdated() {
    this.inlineStyles('childStyles');
    const links = Array.prototype.slice.call(this.querySelectorAll('axa-link'));
    links.forEach(link => {
      link.setAttribute('variant', 'hyperlink-white-underline');
    });
  }

  /* eslint-disable indent */
  getButtonHtml() {
    const { ctatext, href } = this;

    if (href && ctatext) {
      return versionedHtml(this)`
        <axa-button-link
          class="m-top-content-bar__button-link js-button-link"
          href="${href}"
          @click="${ev => {
            if (typeof this.onClick === 'function') {
              ev.preventDefault();
              this.onClick();
            }
          }}"
          variant="inverted"
          size="small"
        >
          ${ctatext}
        </axa-button-link>
      `;
    } else if (ctatext) {
      return versionedHtml(this)`
        <axa-button
          class="m-top-content-bar__button js-button"
          @click="${ev => {
            if (typeof this.onClick === 'function') {
              ev.preventDefault();
              this.onClick();
            }
          }}"
          variant="inverted"
          size="small"
        >
          ${ctatext}
        </axa-button>
      `;
    }
    return '';
  }

  render() {
    const { variant, icon, stickymobile, overlaydesktop, closeable } = this;

    const btnHtml = this.getButtonHtml();

    const variantClasses = {
      'm-top-content-bar__container--warning': variant === 'warning',
      'm-top-content-bar__container--success': variant === 'success',
      'm-top-content-bar__container--attention': variant === 'attention',
    };

    const rootClasses = {
      'm-top-content-bar__overlay-desktop': overlaydesktop === 'true',
      'm-top-content-bar__bottom-mobile': stickymobile === 'true',
      hide: elementHidden,
    };

    const iconClasses = {
      'hide-icon': !icon,
    };

    const closeClasses = {
      'hide-close': closeable !== 'true',
    };

    const buttonClasses = {
      'hide-button': !btnHtml,
    };

    return versionedHtml(this)`
      <article class="m-top-content-bar ${classMap(rootClasses)}">
        <div class="m-top-content-bar__container ${classMap(variantClasses)}">
          <div class="m-top-content-bar__container-flex">
            <div class="m-top-content-bar-empty"></div>
        
            <div class="m-top-content-bar__container-component">
            
              <div class="m-top-content-bar__children">
                <div class="m-top-content-bar__icon ${classMap(iconClasses)}">
                  <axa-icon icon="${icon}"></axa-icon>
                </div>
                
                <div class="m-top-content-bar__content-text">
                  <slot></slot>
                </div>
                <div class="m-top-content-bar__content-button ${classMap(
                  buttonClasses
                )}">
                  ${btnHtml}
                </div>
              </div>

            </div>
        
            <div class="m-top-content-bar__close-button ${classMap(
              closeClasses
            )}" @click="${this.onClose}">
              <axa-icon icon="close"></axa-icon>
            </div>
            ${
              closeable !== 'true'
                ? html`
                    <div class="m-top-content-bar-empty"></div>
                  `
                : null
            }
          </div>

          <div class="m-top-content-bar__content-button-mobile">
            ${btnHtml}
          </div>
        </div>
      </article>
    `;
  }
}

defineVersioned([AXATopContentBar], __VERSION_INFO__);

export default AXATopContentBar;
