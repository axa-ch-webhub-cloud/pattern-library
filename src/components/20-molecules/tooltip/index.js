import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
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
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.open = false;
    this.onClick = () => {};
  }

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    const { open } = this;

    const contentClasses = {
      'm-tooltip__content': true,
      'm-tooltip__content--hidden': !open
    };

    return html`
      <div class="m-tooltip">
        <button class="m-tooltip__button" @click="${this.handleClick}">
          ${svg([InfoSvg])}
        </button>
        <article class="${classMap(contentClasses)}">
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
