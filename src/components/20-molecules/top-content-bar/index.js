import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/container';
import '@axa-ch/button';

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
      cta: { type: String },
      variant: { type: String },
    };
  }

  render() {
    const { cta, variant } = this;

    const classes = {
      'm-top-content-bar__container--warning': variant === 'warning',
    };

    return html`
      <article class="m-top-content-bar">
        <div class="m-top-content-bar__container ${classMap(classes)}">
          <axa-container>
            <span><slot></slot></span>
            ${cta
              ? html`
                  <axa-button variant="inverted">${cta}</axa-button>
                `
              : ''}
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
