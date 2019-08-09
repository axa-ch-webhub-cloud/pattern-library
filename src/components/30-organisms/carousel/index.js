import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

const ANIMATION_LEFT_CLASS = 'o-carousel_animation_left';
const ANIMATION_RIGHT_CLASS = 'o-carousel_animation_right';

class AXACarousel extends LitElement {
  static get tagName() {
    return 'axa-carousel';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      onClick: { type: Function },
      autoRotateDisabled: { type: Boolean },
      autoRotateTime: { type: Number },
    };
  }

  _getSlides() {
    const slots = this.shadowRoot.querySelectorAll('.o-carousel__slot');

    return slots[0]
      .assignedNodes({ flatten: true })
      .filter(node => node.nodeType === 1); //TODO 1?
  }


  _setSlideVisibleWithAnimation(slideNumber, animationClass) {
    // TODO: nicer
    this.visibleSlide = slideNumber;
    this.slides.forEach(node => {
      node.style = 'display: none;';
    });

    const wrapperElement = this.shadowRoot.getElementById('o-carousel__animation-wrapper');

    wrapperElement.classList.remove(ANIMATION_LEFT_CLASS);
    wrapperElement.classList.remove(ANIMATION_RIGHT_CLASS);

    // TODO: add/remove: browser needs time?!
    setTimeout(() => {
      wrapperElement.classList.add(animationClass);
      this.slides[slideNumber].style = 'display:block';
    }, 100);
  }

  _nextSlide() {
    let nextSlideIndex = this.visibleSlide + 1;

    if (nextSlideIndex > this.slides.length - 1) {
      nextSlideIndex = 0;
    }

    this._setSlideVisibleWithAnimation(nextSlideIndex, ANIMATION_RIGHT_CLASS);
  }

  _previousSlide() {
    let nextSlideIndex = this.visibleSlide - 1;

    if (nextSlideIndex < 0) {
      nextSlideIndex = this.slides.length - 1;
    }

    this._setSlideVisibleWithAnimation(nextSlideIndex, ANIMATION_LEFT_CLASS);
  }

  startAutoRotate() {
    if (!this.autoRotateDisabled) {
      this.autoRotateTimerID = setInterval(() => {
        this._nextSlide();
      }, this.autoRotateTime);
    }
  }

  stopAutoRotate() {
    clearInterval(this.autoRotateTimerID);
  }

  calculateContainerMinHeight() {
    // we need to set slider min height in case there are elements with different heights.
    this.minHeight = 0;
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style = 'display:block'; // because only the first element has initially a height > 0
      if (this.slides[i].clientHeight > this.minHeight) {
        this.minHeight = this.slides[i].clientHeight;
      }
    }

    this.shadowRoot.querySelector('.o-carousel').style.minHeight = `${
      this.minHeight
    }px`;
  }

  constructor() {
    super();
    this.onClick = () => {};
    this.autoRotateDisabled = false;
    this.autoRotateTime = 5000;
    this.autoRotateTimerID = null;
    this.slides = null;
    this.visibleSlide = 0;
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
    this.slides = this._getSlides();
    this.calculateContainerMinHeight();
    this._setSlideVisibleWithAnimation(0);
    this.startAutoRotate();
  }

  render() {
    return html`
      <article class="o-carousel">
        <button
          type="button"
          class="o-carousel__arrow o-carousel__arrow-left"
          @click="${this._previousSlide}"
        ></button>
        <div id="o-carousel__animation-wrapper">
          <slot class="o-carousel__slot"></slot>
        </div>
        <button
          type="button"
          class="o-carousel__arrow o-carousel__arrow-right"
          @click="${this._nextSlide}"
        ></button>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXACarousel.tagName, AXACarousel);

export default AXACarousel;
