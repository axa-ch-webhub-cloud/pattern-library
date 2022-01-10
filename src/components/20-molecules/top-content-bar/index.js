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

/**
 *  We need InlineStyles to give children some margins.
 */
class AXATopContentBar extends InlineStyles {
  static get tagName() {
    return 'axa-top-content-bar';
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
      stickymobile: { type: Boolean },
      overlaydesktop: { type: Boolean },
      closable: { type: Boolean },
      initiallyclosed: { type: Boolean },
      closed: { type: Boolean },
      onClick: { type: Function, attribute: false },
    };
  }

  static get childStyles() {
    return childStyles;
  }

  constructor() {
    super();
    applyDefaults(this);

    defineVersioned(
      [AXAButton, AXAButtonLink, AXAContainer, AXAIcon],
      __VERSION_INFO__,
      this
    );
  }

  onClose() {
    this.closed = true;
    // The sessionStorage item 'top-content-bar-closed' needs to be set to make
    // sure the bar will not be opened during the current browser session.
    // sessionStorage can be used only in the core module, so the event will be
    // fired here and handled in core module by adding the 'top-content-bar-closed'
    // item to sessionStorage.
    fireCustomEvent('axa-top-content-bar-close', null, this);
  }

  firstUpdated() {
    this.inlineStyles('childStyles');
    const links = [...this.querySelectorAll('axa-link')];
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
    const {
      variant,
      icon,
      stickymobile,
      overlaydesktop,
      closable,
      closed,
    } = this;

    if (!closed) {
      this.initiallyclosed = false;
    }

    if (closed || this.initiallyclosed) return html``;

    const btnHtml = this.getButtonHtml();

    const variantClasses = {
      'm-top-content-bar__container--warning': variant === 'warning',
      'm-top-content-bar__container--success': variant === 'success',
      'm-top-content-bar__container--attention': variant === 'attention',
    };

    const rootClasses = {
      'm-top-content-bar__overlay-desktop': overlaydesktop,
      'm-top-content-bar__bottom-mobile': stickymobile,
    };

    const iconClasses = {
      'hide-icon': !icon,
    };

    const closeClasses = {
      'hide-close': !closable,
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
                  <axa-icon size="large" icon="${icon}"></axa-icon>
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
              closable
                ? html``
                : html`
                    <div class="m-top-content-bar-empty"></div>
                  `
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
