import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import styles from './index.scss';

class AXAPopupContent extends LitElement {
  static get tagName() {
    return 'axa-popup-content';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.open = false;
  }

  render() {
    const { open } = this;

    const wrapperClasses = {
      'a-popup__wrapper': true,
      'a-popup__wrapper--open': open
    };

    const contentClasses = {
      'a-popup__content': true,
      'a-popup__content--open': open
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
