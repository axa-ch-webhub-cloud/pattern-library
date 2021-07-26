import { LitElement, html, css, unsafeCSS } from 'lit';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import AXAPolicyFeaturesItem from './policy-features-item/index';

export const STYLE_WHITELIST = ['axa-blue', 'wild-sand', 'white'];

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
    applyDefaults(this);

    defineVersioned([AXAPolicyFeaturesItem], __VERSION_INFO__, this);
  }

  render() {
    const { title, variant } = this;

    const classes = {
      'm-policy-features': true,
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

defineVersioned([AXAPolicyFeatures], __VERSION_INFO__);

export default AXAPolicyFeatures;
