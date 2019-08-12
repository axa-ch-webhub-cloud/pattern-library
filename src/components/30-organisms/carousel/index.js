import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import Swipe from './swipe';

const ELEMENT_NODE = 1;
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

      // internal props
      animationWrapperClass: { type: String }, //TODO intern möglich?
      mainElementMinHeight: { type: Number },
    };
  }

  handleNextButtonClick() {
    this._nextSlide();
    this._stopAutoRotate();
  }

  handlePreviousButtonClick() {
    this._previousSlide();
    this._stopAutoRotate();
  }

  _getSlides() {
    const slots = this.shadowRoot.querySelector('.o-carousel__slot');

    return slots
      .assignedNodes({ flatten: true })
      .filter(node => node.nodeType === ELEMENT_NODE);
  }

  _setSlideVisibleWithAnimation(slideNumber, animationClass) {
    this.visibleSlide = slideNumber;
    this.slides.forEach(node => {
      node.style.display = 'none';
    });

    this.animationWrapperClass = ''; // remove all animation classes

    // TODO: add/remove: browser needs time?! evaluate!
    setTimeout(() => {
      this.animationWrapperClass = animationClass;
      this.slides[slideNumber].style.display = 'block';
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

  _startAutoRotate() {
    if (!this.autoRotateDisabled) {
      this.autoRotateTimerID = setInterval(() => {
        this._nextSlide();
      }, this.autoRotateTime);
    }
  }

  _stopAutoRotate() {
    clearInterval(this.autoRotateTimerID);
  }

  _calculateContainerMinHeight() {
    // we need to set carousel min height in case there are elements with different heights.
    this.slides.forEach(node => {
      node.style.display = 'block'; // not all the elements have initially a height > 0
      if (node.clientHeight > this.carouselMinHeight) {
        this.carouselMinHeight = node.clientHeight;
      }
    });
  }

  _onSwipeLeft = () => {
    this.handleNextButtonClick();
  };

  _onSwipeRight = () => {
    this.handlePreviousButtonClick();
  };

  _initSwipe() {
    this.swiper = new Swipe(this, this._onSwipeLeft, this._onSwipeRight);
    this.swiper.run();
  }

  _terminateSwipe() {
    if (this.swiper && this.swiper.stop) {
      this.swiper.stop();
    }
  }

  constructor() {
    super();
    this.onClick = () => {};
    this.autoRotateDisabled = false;
    this.autoRotateTime = 5000;
    this.autoRotateTimerID = null;
    this.slides = null;
    this.visibleSlide = 0;
    this.animationWrapperClass = '';
    this.carouselMinHeight = 0;
    this.swiper = null;
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
    this.slides = this._getSlides();
    this._calculateContainerMinHeight(); // TODO: handle resize
    this._setSlideVisibleWithAnimation(0);
    this._initSwipe();
    this._startAutoRotate();
  }

  render() {
    return html`
      <article
        id="o-carousel-main"
        class="o-carousel"
        style="min-height: ${this.carouselMinHeight}px;"
      >
        <button
          type="button"
          class="o-carousel__arrow o-carousel__arrow-left"
          @click="${this.handlePreviousButtonClick}"
        ></button>
        <div
          class="${this.animationWrapperClass}"
          id="o-carousel__animation-wrapper"
        >
          <slot class="o-carousel__slot"></slot>
        </div>
        <button
          type="button"
          class="o-carousel__arrow o-carousel__arrow-right"
          @click="${this.handleNextButtonClick}"
        ></button>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._stopAutoRotate();
    this._terminateSwipe();
  }
}

defineOnce(AXACarousel.tagName, AXACarousel);

export default AXACarousel;
