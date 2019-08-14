import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import './policy-features-item/index';

export const STYLE_WHITELIST = [
  'default',
  'dark-indigo',
  'axa-blue',
  'wild-sand',
  'white',
];
export const DEFAULT_AXA_STYLE = 'dark-indigo';

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
      axastyle: { type: String },
    };
  }

  constructor() {
    super();
    this.axastyle = DEFAULT_AXA_STYLE;
  }

  render() {
    const { title, axastyle } = this;

    const classes = {
      'm-policy-features': true,
      'm-policy-features__style-dark-indigo':
        axastyle === 'dark-indigo' ||
        'default' ||
        STYLE_WHITELIST.indexOf(axastyle) === -1,
      'm-policy-features__style-axa-blue': axastyle === 'axa-blue',
      'm-policy-features__style-wild-sand': axastyle === 'wild-sand',
      'm-policy-features__style-white': axastyle === 'white',
    };

    return html`
      <article class="${classMap(classes)}">
        <h1 class="m-policy-features__title">${title}</h1>
        <slot class="m-policy-features__slot"></slot>
      </article>
    `;
  }
}

defineOnce(AXAPolicyFeatures.tagName, AXAPolicyFeatures);

export default AXAPolicyFeatures;
