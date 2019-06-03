import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXATitlePrimary extends LitElement {
  static get tagName() {
    return 'axa-title-primary';
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
    const isSize4 = variant.includes('size-4');
    const isSize5 = variant.includes('size-5');
    const isSize6 = variant.includes('size-6');

    const classes = classMap({
      'a-title-primary--size-1': isSize1,
      'a-title-primary--size-2': isSize2,
      'a-title-primary--size-3': isSize3,
      'a-title-primary--size-4': isSize4,
      'a-title-primary--size-5': isSize5,
      'a-title-primary--size-6': isSize6,
    });

    return html`
      <article class="a-title-primary ${classes}">
        <slot></slot>
      </article>
    `;
  }
}

defineOnce(AXATitlePrimary.tagName, AXATitlePrimary);

export default AXATitlePrimary;
