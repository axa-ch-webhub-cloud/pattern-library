import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAHeading extends LitElement {
  static get tagName() {
    return 'axa-heading';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      variant: { type: String },
      rank: { type: Number },
    };
  }

  constructor() {
    super();
    // this functions applies default values per type and verifies if
    // the HTML attribute has been set before defining the custom element
    applyDefaults(this);
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  render() {
    // eslint-disable-next-line prefer-destructuring
    const variant = this.variant;
    const isSize2 = variant.includes('size-2');
    const isSize3 = variant.includes('size-3');
    const isSize4 = variant.includes('size-4');
    const isSize5 = variant.includes('size-5');
    const isSize6 = variant.includes('size-6');

    const classes = classMap({
      'a-heading--size-2': isSize2,
      'a-heading--size-3': isSize3,
      'a-heading--size-4': isSize4,
      'a-heading--size-5': isSize5,
      'a-heading--size-6': isSize6,
    });

    // switch (this.rank) {
    //   case 1:
    //     return html`
    //       <h${this.rank} class="a-heading ${classes}">
    //         <slot></slot>
    //       </h${this.rank}>
    //     `;
    //     break;
    //   case 2:
    //     break;
    //   case 3:
    //     break;
    //   case 4:
    //     break;
    //   case 5:
    //     break;
    //   case 6:
    //   default:
    //     break;
    // }

    return html`
      <h${this.rank} class="a-heading a-heading--h${this.rank}">
        <slot></slot>
      </h${this.rank}>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXAHeading.tagName, AXAHeading);

export default AXAHeading;
