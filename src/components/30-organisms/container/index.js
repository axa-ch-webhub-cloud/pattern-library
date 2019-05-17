import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAContainer extends LitElement {
  static get tagName() {
    return 'axa-container';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  render() {
    return html`
      <article class="o-container">
        <slot></slot>
      </article>
    `;
  }
}

defineOnce(AXAContainer.tagName, AXAContainer);

export default AXAContainer;
