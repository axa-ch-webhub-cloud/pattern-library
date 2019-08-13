import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/container';
import '@axa-ch/carousel';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXATestimonials extends LitElement {
  static get tagName() {
    return 'axa-testimonials';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      classes: { type: String }, // TODO: unused in v1?
      title: { type: String },
      subtitle: { type: String },
      autorotatedisabled: { type: Boolean },
      autorotatetime: { type: Number },
      showallinline: { type: Boolean },
      keysenabled: { type: Boolean },
    };
  }

  constructor() {
    super();

    // default values props
    this.classes = '';
    this.title = '';
    this.subtitle = '';
    this.autorotatedisabled = false;
    this.autorotatetime = 5000;
    this.showallinline = false;
    this.keysenabled = true;
  }

  render() {
    const {
      title,
      subtitle,
      showallinline,
      autorotatetime,
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
                  <slot class="o-testimonials__content__inline"></slot>
                `
              : html`
                  <div class="o-testimonials__content__carousel">
                    <axa-carousel
                      autorotatetime="${autorotatetime}"
                      autorotatedisabled="${autorotatedisabled}"
                      keysenabled="${keysenabled}"
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

    this.stopAutoRotate();
  }
}

defineOnce(AXATestimonials.tagName, AXATestimonials);

export default AXATestimonials;
