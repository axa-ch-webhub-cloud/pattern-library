import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import { InfoSvg } from '@axa-ch/materials/icons';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXATooltip extends LitElement {
  static get tagName() {
    return 'axa-tooltip';
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

  handleClick = () => {
    console.log('Aoo');
  };

  render() {
    return html`
      <div class="m-tooltip">
        <button class="m-tooltip__button" @click="${this.handleClick}">
          ${svg([InfoSvg])}
        </button>
        <article class="m-tooltip__content">
          <slot></slot>
        </article>
      </div>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXATooltip.tagName, AXATooltip);

export default AXATooltip;
