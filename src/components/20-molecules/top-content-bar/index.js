import '@webcomponents/webcomponentsjs';
import { LitElement, html, css, unsafeCSS } from 'lit-element';

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

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  render() {
    return html`
      <article class="m-top-content-bar">
        <slot></slot>
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