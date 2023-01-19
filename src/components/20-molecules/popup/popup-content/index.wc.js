import { LitElement, html, css, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import popupContentCSS from './index.scss';

import applyDefaults from '../../../../utils/apply-defaults.js';

class AXAPopupContent extends LitElement {
  static get tagName() {
    return 'axa-popup-content';
  }

  static get styles() {
    return css`
      ${unsafeCSS(popupContentCSS)}
    `;
  }

  static get properties() {
    return {
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const { open } = this;

    const wrapperClasses = {
      'a-popup__wrapper': true,
      'a-popup__wrapper--open': open,
    };

    const contentClasses = {
      'a-popup__content': true,
      'a-popup__content--open': open,
    };

    return html`
      <div class="${classMap(wrapperClasses)}">
        <article class="${classMap(contentClasses)}">
          <slot></slot>
        </article>
      </div>
    `;
  }
}

export default AXAPopupContent;
