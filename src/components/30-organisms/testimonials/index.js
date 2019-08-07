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
      classes: { type: String }, // TODO: unused in v1?
      title: { type: String },
      subtitle: { type: String },
      autoRotateDisabled: { type: Boolean },
      autoRotateTime: { type: Number },
      showAllInline: { type: Boolean },
    };
  }

  startAutoRotate() {
    if (!this.autoRotateDisabled) {
      this.autoRotateTimerID = setInterval(() => {
        this.sliderElement.next();
      }, this.autoRotateTime);
    }
  }

  stopAutoRotate() {
    clearInterval(this.autoRotateTimerID);
  }

  constructor() {
    super();

    // default values props
    this.classes = '';
    this.title = '';
    this.subtitle = '';
    this.autoRotateDisabled = false;
    this.autoRotateTime = 5000;
    this.showAllInline = false;

    // TODO: move to module variables?
    this.onClickLeft = () => {
      if (this.sliderElement && this.sliderElement.previous) {
        this.sliderElement.previous();
        this.stopAutoRotate();
      }
    };
    this.onClickRight = () => {
      if (this.sliderElement && this.sliderElement.next) {
        this.sliderElement.next();
        this.stopAutoRotate();
      }
    };
    this.sliderElement = null;
    this.autoRotateTimerID = null;
  }

  firstUpdated() {
    this.sliderElement = this.shadowRoot.querySelector('macro-carousel');

    this.startAutoRotate();
  }

  render() {
    const { title, subtitle, showAllInline } = this;

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
            ${showAllInline
              ? html`
                  <slot class="o-testimonials__content__inline"></slot>
                `
              : html`
                  <div class="o-testimonials__content__carousel">
                    <div
                      class="o-testimonials__content__carousel__flexbox-container"
                    >
                      <button
                        class="o-testimonials__arrow o-testimonials__content__carousel__arrow-left"
                        type="button"
                        @click="${this.onClickLeft}"
                      ></button>
                    </div>
                    <macro-carousel loop="true">
                      <slot></slot>
                    </macro-carousel>
                    <div
                      class="o-testimonials__content__carousel__flexbox-container"
                    >
                      <button
                        class="o-testimonials__arrow o-testimonials__content__carousel__arrow-right"
                        type="button"
                        @click="${this.onClickRight}"
                      ></button>
                    </div>
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
