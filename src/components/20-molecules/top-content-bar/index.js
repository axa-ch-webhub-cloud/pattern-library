import { css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import AXAContainer from '@axa-ch/container';
import AXAButton from '@axa-ch/button';
import AXAButtonLink from '@axa-ch/button-link';
import InlineStyles from '../../../utils/inline-styles';
import childStyles from './child.scss';

import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

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
      onClick: { type: Function, attribute: false },
    };
  }

  static get childStyles() {
    return childStyles;
  }

  constructor() {
    super();
    applyDefaults(this);
    /* eslint-disable no-undef */
    defineVersioned(
      [AXAButton, AXAButtonLink, AXAContainer],
      __VERSION_INFO__,
      this
    );
    /* eslint-enable no-undef */
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
    const { variant } = this;

    const btnHtml = this.getButtonHtml();

    const classes = {
      'm-top-content-bar__container--warning': variant === 'warning',
    };

    return versionedHtml(this)`
      <article class="m-top-content-bar">
        <div class="m-top-content-bar__container ${classMap(classes)}">
          <axa-container class="m-top-content-bar__container-component">
            <div class="m-top-content-bar__children">
              <slot></slot>
              ${btnHtml}
            </div>
          </axa-container>
        </div>
      </article>
    `;
  }
}

/* eslint-disable no-undef */
defineVersioned([AXATopContentBar], __VERSION_INFO__);

export default AXATopContentBar;
