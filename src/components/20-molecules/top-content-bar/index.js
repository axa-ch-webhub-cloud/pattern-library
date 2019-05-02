import '@webcomponents/webcomponentsjs';
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

/* eslint-disable import/no-extraneous-dependencies */
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
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.onClick = () => {};
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        ${AXATopContentBar.styles}
      </style>
      <article class="m-top-content-bar">
        <div class="m-top-content-bar__box">
          ${unsafeHTML(this.innerHTML)}
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
