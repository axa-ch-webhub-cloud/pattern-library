import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAText extends LitElement {
  static get tagName() {
    return 'axa-text';
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
    // eslint-disable-next-line prefer-destructuring
    const variant = this.variant;
    const isSize1 = variant.includes('size-1');
    const isSize2 = variant.includes('size-2');
    const isSize3 = variant.includes('size-3');
    const isBold = variant.includes('bold');

    const classes = classMap({
      'a-text--size-1': isSize1,
      'a-text--size-2': isSize2,
      'a-text--size-3': isSize3,
      'a-text--bold': isBold,
    });

    return html`
      <span class="a-text ${classes}">
        <slot></slot>
      </span>
    `;
  }
}

defineOnce(AXAText.tagName, AXAText);

export default AXAText;
