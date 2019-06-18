import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@axa-ch/container';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAHeader extends LitElement {
  static get tagName() {
    return 'axa-header';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  render() {
    return html`
      <header class="o-header">
        <axa-container>
          <slot></slot>
        </axa-container>
      </header>
    `;
  }
}

defineOnce(AXAHeader.tagName, AXAHeader);

export default AXAHeader;
