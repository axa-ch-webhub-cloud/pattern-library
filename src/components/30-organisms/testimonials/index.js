import { html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/container';
import '@axa-ch/carousel';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import InlineStyles from '../../../utils/inline-styles';
import childStyles from './child.scss';

const DEFAULT_AUTOROTATETIME = 5000;

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
      autorotatetime: { type: Number },
      showallinline: { type: Boolean, reflect: true },
      keysenabled: { type: Boolean },
    };
  }

  constructor() {
    super();

    // default values props
    this.title = null;
    this.subtitle = null;
    this.autorotatedisabled = false;
    this.autorotatetime = DEFAULT_AUTOROTATETIME;
    this.showallinline = false;
    this.keysenabled = false;
  }

  firstUpdated() {
    this.inlineStyles('childStyles');
  }

  render() {
    const {
      title,
      subtitle,
      showallinline,
      autorotatetime = DEFAULT_AUTOROTATETIME,
      autorotatedisabled,
      keysenabled,
    } = this;

    return html`
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
            ${showallinline
              ? html`
                  <div class="o-testimonials__content__inline">
                    <slot></slot>
                  </div>
                `
              : html`
                  <div class="o-testimonials__content__carousel">
                    <axa-carousel
                      autorotatetime="${autorotatetime}"
                      ?autorotatedisabled="${autorotatedisabled}"
                      ?keysenabled="${keysenabled}"
                    >
                      <slot></slot>
                    </axa-carousel>
                  </div>
                `}
          </div>
        </axa-container>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXATestimonials.tagName, AXATestimonials);

export default AXATestimonials;
