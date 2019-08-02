import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import 'macro-carousel';
import '@axa-ch/container';
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
      classes: { type: String },
      title: { type: String },
      subtitle: { type: String },
      autoRotateDisabled: { type: Boolean },
      keysEnabled: { type: Boolean },
      autoRotateTime: { type: Number },
      showAllInline: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.onClickLeft = () => {
      if (this.sliderElement && this.sliderElement.previous) {
        this.sliderElement.previous();
      }
    };
    this.onClickRight = () => {
      if (this.sliderElement && this.sliderElement.next) {
        this.sliderElement.next();
      }
    };
    this.sliderElement = null;
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
    this.sliderElement = this.shadowRoot.querySelector('macro-carousel');
  }

  render() {
    const { title, subtitle } = this;

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

          <div class="o-testimonials__navigator">
            <div class="o-testimonials__navigator__flexbox-container">
              <button
                class="o-testimonials__navigator__left"
                type="button"
                @click="${this.onClickLeft}"
              ></button>
            </div>
            <macro-carousel loop="true">
              <slot></slot>
            </macro-carousel>
            <div class="o-testimonials__navigator__flexbox-container">
              <button
                class="o-testimonials__navigator__right"
                type="button"
                @click="${this.onClickRight}"
              ></button>
            </div>
          </div>
        </axa-container>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXATestimonials.tagName, AXATestimonials);

export default AXATestimonials;
