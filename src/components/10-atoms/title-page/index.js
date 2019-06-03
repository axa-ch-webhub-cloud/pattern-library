import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXATitlePage extends LitElement {
  static get tagName() {
    return 'axa-title-page';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  render() {
    return html`
      <h1 class="a-title-page">
        <slot></slot>
      </h1>
    `;
  }
}

defineOnce(AXATitlePage.tagName, AXATitlePage);

export default AXATitlePage;
