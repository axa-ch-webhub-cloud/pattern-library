import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXATitleSection extends LitElement {
  static get tagName() {
    return 'axa-title-section';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      variant: { type: String },
    };
  }

  constructor() {
    super();
    this.variant = '';
  }

  render() {
    const classes = classMap({
      'a-title-section--white': this.variant === 'white',
    });

    return html`
      <h2 class="a-title-section ${classes}">
        <slot></slot>
      </h2>
    `;
  }
}

defineOnce(AXATitleSection.tagName, AXATitleSection);

export default AXATitleSection;
