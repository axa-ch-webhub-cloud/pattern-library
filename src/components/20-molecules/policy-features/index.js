import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

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
      axaStyle: { type: String },
    };
  }

  constructor() {
    super();
    this.axaStyle = DEFAULT_AXA_STYLE;
  }

  getAllowedAxaStyleName(potentialAxaStyle) {
    if (STYLE_WHITELIST.indexOf(potentialAxaStyle) > -1) {
      return potentialAxaStyle;
    }

    return DEFAULT_AXA_STYLE;
  }

  render() {
    const { title, axaStyle } = this;

    return html`
      <article
        class="m-policy-features m-policy-features__style-${this.getAllowedAxaStyleName(
          axaStyle
        )}"
      >
        <h1 class="m-policy-features__title">${title}</h1>
        <slot class="m-policy-features__slot"></slot>
      </article>
    `;
  }
}

defineOnce(AXAPolicyFeatures.tagName, AXAPolicyFeatures);

export default AXAPolicyFeatures;
