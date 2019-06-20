import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

const _global = window || global;

class AXACookieDisclaimer extends LitElement {
  static get tagName() {
    return 'axa-cookie-disclaimer';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      onClick: { type: Function },
      buttonname: { type: String },
      title: { type: String },
      variant: { type: String },
    };
  }

  constructor() {
    super();
    this.onClick = () => {};
  }

  firstUpdated() {
    if (this.hasAccepted()) {
      this.selfDestruction();
    } else {
      const resetStyle = document.createElement('style');
      resetStyle.textContent = `
        axa-cookie-disclaimer p {
          margin: 0;
          padding: 0;
        }
      `;
      this.appendChild(resetStyle);
    }
  }

  handleButtonClick() {
    const { localStorage } = _global;
    if (localStorage) {
      this.selfDestruction();
      localStorage.setItem(
        'axa-ch-cookie-disclaimer-accepted',
        new Date().getTime()
      );
    }
  }

  selfDestruction() {
    this.parentNode.removeChild(this);
  }

  hasAccepted() {
    const { localStorage } = _global;
    return !!localStorage.getItem('axa-ch-cookie-disclaimer-accepted');
  }

  render() {
    const { buttonname, title, variant } = this;
    const fixed = variant === 'fixed';
    return html`
      <article
        class="m-cookie-disclaimer${fixed ? ' m-cookie-disclaimer--fixed' : ''}"
      >
        <axa-container>
          <div class="m-cookie-disclaimer__container">
            <div class="m-cookie-disclaimer__container--lx">
              <h1 class="m-cookie-disclaimer__title">${title}</h1>
              <slot></slot>
            </div>
            <div class="m-cookie-disclaimer__container--rx">
              <axa-button
                @click="${ev => {
                  this.onClick(ev);
                  this.handleButtonClick();
                }}"
                variant="inverted"
              >
                ${buttonname}
              </axa-button>
            </div>
          </div>
        </axa-container>
      </article>
    `;
  }
}

defineOnce(AXACookieDisclaimer.tagName, AXACookieDisclaimer);

export default AXACookieDisclaimer;
