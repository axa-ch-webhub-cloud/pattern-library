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

  handleClick = ev => {
    // this.open = !this.open;
    console.log(this.getBoundingClientRect())
    console.log(ev);
  };

  firstUpdated() {
    if (this.parentNode) {
      console.log(this.parentNode);
    }
  }

  render() {
    const { open } = this;

    const contentClasses = {
      'a-tooltip__content': true,
      'a-tooltip__content--hidden': !open
    };

    return html`
      <div class="a-tooltip">
        <button class="a-tooltip__button" @click="${this.handleClick}">
          ${svg([InfoSvg])}
        </button>
        <article class="${classMap(contentClasses)}">
          <slot></slot>
        </article>
      </div>
    `;
  }
}

defineOnce(AXATooltip.tagName, AXATooltip);

export default AXATooltip;
