import { html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import AXAContainer from '@axa-ch/container';
import AXACarousel from '@axa-ch/carousel';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import styles from './index.scss';
import InlineStyles from '../../../utils/inline-styles';
import { applyDefaults } from '../../../utils/with-react';
import childStyles from './child.scss';

class AXATestimonials extends InlineStyles {
  static get tagName() {
    return 'axa-testimonials';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get childStyles() {
    return childStyles;
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      autorotatedisabled: { type: Boolean },
      autorotatetime: { type: Number, defaultValue: 5000 },
      showallinline: { type: Boolean, reflect: true },
      keysenabled: { type: Boolean },
    };
  }

  constructor() {
    super();

    // default values props
    applyDefaults(this);

    defineVersioned([AXAContainer, AXACarousel], __VERSION_INFO__, this);
  }

  firstUpdated() {
    this.inlineStyles('childStyles');
  }

  /* eslint-disable indent */
  render() {
    const {
      title,
      subtitle,
      showallinline,
      autorotatetime,
      autorotatedisabled,
      keysenabled,
    } = this;

    return versionedHtml(this)`
      <article class="o-testimonials">
        <axa-container>
          ${title &&
            html`
              <h1 class="o-testimonials__title">${title}</h1>
            `}
          ${subtitle &&
            html`
              <p class="o-testimonials__subtitle">${subtitle}</p>
            `}
          <div class="o-testimonials__content">
            ${
              showallinline
                ? html`
                    <div class="o-testimonials__content__inline">
                      <slot></slot>
                    </div>
                  `
                : versionedHtml(this)`
                  <div class="o-testimonials__content__carousel">
                    <axa-carousel
                      class="js-carousel"
                      autorotatetime="${autorotatetime}"
                      ?autorotatedisabled="${autorotatedisabled}"
                      ?keysenabled="${keysenabled}"
                    >
                      <slot></slot>
                    </axa-carousel>
                  </div>
                `
            }
          </div>
        </axa-container>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineVersioned([AXATestimonials], __VERSION_INFO__);

export default AXATestimonials;
