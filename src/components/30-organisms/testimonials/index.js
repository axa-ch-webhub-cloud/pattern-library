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

  handleKeyUp(ev) {
    const e = ev || window.event;
    if (+e.keyCode === 37) {
      this.sliderElement.previous();
    } else if (+e.keyCode === 39) {
      this.sliderElement.next();
    }
  }

  constructor() {
    super();

    // default values props
    this.classes = '';
    this.title = '';
    this.subtitle = '';
    this.autoRotateDisabled = true;
    this.keysEnabled = true;
    this.autoRotateTime = 5000;
    this.showAllInline = false;

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
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  firstUpdated() {
    this.sliderElement = this.shadowRoot.querySelector('macro-carousel');

    if (this.keysEnabled) {
      this.ownerDocument.addEventListener('keyup', this.handleKeyUp);
    }
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
                        class="o-testimonials__content__carousel__left"
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
                        class="o-testimonials__content__carousel__right"
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

    this.ownerDocument.removeEventListener('keyup', this.handleKeyUp);
  }
}

defineOnce(AXATestimonials.tagName, AXATestimonials);

export default AXATestimonials;
