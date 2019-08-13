import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import Swipe from './swipe';
import debounce from '../../../utils/debounce';

const ELEMENT_NODE = 1;
const ANIMATION_LEFT_CLASS = 'animation-left';
const ANIMATION_RIGHT_CLASS = 'animation-right';

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
    return {
      autorotatedisabled: { type: Boolean },
      autorotatetime: { type: Number },
      keysenabled: { type: Boolean },

      // internal props
      animationWrapperClass: { type: String }, // TODO intern möglich?
      carouselMinHeight: { type: Number },
    };
  }

  // public methods

  handleNextButtonClick() {
    this._nextSlide();
    this._stopAutoRotate();
  }

  handlePreviousButtonClick() {
    this._previousSlide();
    this._stopAutoRotate();
  }

  // private methods

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

  _calculateContainerMinHeight() {
    // we need to set carousel min height in case there are elements with different heights.
    this.slides.forEach(node => {
      node.style.display = 'block'; // not all the elements have initially a height > 0
      if (node.clientHeight > this.carouselMinHeight) {
        this.carouselMinHeight = node.clientHeight;
      }
    });
  }

  _onResize = debounce(() => {
    this.carouselMinHeight = 0;
    this._calculateContainerMinHeight();
    this._setSlideVisibleWithAnimation(this.visibleSlide, '');
  }, 200);

  // AutoRotate:

  _startAutoRotate() {
    if (!this.autorotatedisabled) {
      this.autoRotateTimerID = setInterval(() => {
        this._nextSlide();
      }, this.autorotatetime);
    }
  }

  _stopAutoRotate() {
    clearInterval(this.autoRotateTimerID);
  }

  // Swipe for mobile devices:

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

  // Key Navigation:

  _initKeyNavigation() {
    if (this.keysenabled) {
      this.ownerDocument.addEventListener('keyup', this._handleKeyUp);
    }
  }

  _terminateKeyNavigation() {
    this.ownerDocument.removeEventListener('keyup', this._handleKeyUp);
  }

  _handleKeyUp = ev => {
    const e = ev || window.event;

    if (e.keyCode === 37) {
      this.handlePreviousButtonClick();
    } else if (e.keyCode === 39) {
      this.handleNextButtonClick();
    }
  };

  constructor() {
    super();
    this.autorotatedisabled = false;
    this.autorotatetime = 5000;
    this.autoRotateTimerID = null;
    this.keysenabled = false;
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
    this._calculateContainerMinHeight();
    this._setSlideVisibleWithAnimation(0);
    this._initSwipe();
    this._initKeyNavigation();
    this._startAutoRotate();
    window.addEventListener('resize', this._onResize);
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
          class="o-carousel__wrapper ${this.animationWrapperClass}"
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
    this._terminateKeyNavigation();
    window.removeEventListener('resize', this._onResize);
  }
}

defineOnce(AXACarousel.tagName, AXACarousel);

export default AXACarousel;
