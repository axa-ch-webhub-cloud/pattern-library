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

  render() {
    // eslint-disable-next-line prefer-destructuring
    const variant = this.variant;

    const classes = classMap({
      'a-heading--secondary': this.variant === 'secondary',
    });

    switch (this.rank) {
      case 1:
        return html`
          <h1 class="a-heading ${classes}">
            <slot></slot>
          </h1>
        `;
      case 2:
        return html`
          <h2 class="a-heading ${classes}">
            <slot></slot>
          </h2>
        `;
      case 3:
        return html`
          <h3 class="a-heading ${classes}">
            <slot></slot>
          </h3>
        `;
      case 4:
        return html`
          <h4 class="a-heading ${classes}">
            <slot></slot>
          </h4>
        `;
      case 5:
        return html`
          <h5 class="a-heading ${classes}">
            <slot></slot>
          </h5>
        `;
      case 6:
      default:
        return html`
          <h6 class="a-heading ${classes}">
            <slot></slot>
          </h6>
        `;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXAHeading.tagName, AXAHeading);

export default AXAHeading;
