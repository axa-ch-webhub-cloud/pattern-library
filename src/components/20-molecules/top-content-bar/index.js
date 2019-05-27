import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/container';
import '@axa-ch/button';
import '@axa-ch/button-link';

import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXATopContentBar extends LitElement {
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
      onClick: { type: Function },
    };
  }

  firstUpdated() {
    const links = Array.prototype.slice.call(this.querySelectorAll('axa-link'));
    links.forEach(link => {
      link.setAttribute('variant', 'hyperlink-white-underline');
    });
  }

  getButtonHtml() {
    const { ctatext, href } = this;

    if (href && ctatext) {
      return html`
        <axa-button-link
          href="${href}"
          @click="${ev => {
            if (typeof this.onClick === 'function') {
              ev.preventDefault();
              this.onClick();
            }
          }}"
          variant="inverted"
        >
          ${ctatext}
        </axa-button-link>
      `;
    } else if (ctatext) {
      return html`
        <axa-button
          @click="${ev => {
            if (typeof this.onClick === 'function') {
              ev.preventDefault();
              this.onClick();
            }
          }}"
          variant="inverted"
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

    return html`
      <article class="m-top-content-bar">
        <div class="m-top-content-bar__container ${classMap(classes)}">
          <axa-container>
            <span><slot></slot></span>
            ${btnHtml}
          </axa-container>
        </div>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXATopContentBar.tagName, AXATopContentBar);

export default AXATopContentBar;
