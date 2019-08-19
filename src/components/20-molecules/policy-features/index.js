import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import './policy-features-item/index';

export const STYLE_WHITELIST = [
  'dark-indigo',
  'axa-blue',
  'wild-sand',
  'white',
];

class AXAPolicyFeatures extends LitElement {
  static get tagName() {
    return 'axa-policy-features';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      variant: { type: String },
    };
  }

  constructor() {
    super();
    this.variant = 'dark-indigo';
  }

  render() {
    const { title, variant } = this;

    const classes = {
      'm-policy-features': true,
      'm-policy-features__style-dark-indigo':
        variant === 'dark-indigo' || STYLE_WHITELIST.indexOf(variant) === -1,
      'm-policy-features__style-axa-blue': variant === 'axa-blue',
      'm-policy-features__style-wild-sand': variant === 'wild-sand',
      'm-policy-features__style-white': variant === 'white',
    };

    return html`
      <article class="${classMap(classes)}">
        <h1 class="m-policy-features__title">${title}</h1>
        <div class="m-policy-features__slot"><slot></slot></div>
      </article>
    `;
  }
}

defineOnce(AXAPolicyFeatures.tagName, AXAPolicyFeatures);

export default AXAPolicyFeatures;
