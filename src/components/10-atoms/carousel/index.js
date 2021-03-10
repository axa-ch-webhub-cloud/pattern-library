import { html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import { defineVersioned } from '../../../utils/component-versioning';
import styles from './index.scss';
import Swipe from './swipe';
import debounce, { sleep } from '../../../utils/debounce';
import InlineStyles from '../../../utils/inline-styles';
import { applyDefaults } from '../../../utils/with-react';
import childStyles from './child.scss';

const ELEMENT_NODE = 1;
const ANIMATION_LEFT_CLASS = 'animation-left';
const ANIMATION_RIGHT_CLASS = 'animation-right';
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;

class AXACarousel extends InlineStyles {
  static get tagName() {
    return 'axa-carousel';
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
      autorotatedisabled: { type: Boolean },
      autorotatetime: { type: Number, defaultValue: 5000 },
      keysenabled: { type: Boolean },
      visible: { type: Number, reflect: true },
      _animationWrapperClass: { type: String },
      _carouselMinHeight: { type: Number, defaultValue: 0 },
    };
  }

  constructor() {
    super();
    // Props
    applyDefaults(this);
    // Internal
    this.autoRotateTimerID = null;
    this.slides = null;
    this.visible = 0;
    this.swiper = null;
    this.removeEventListenerAnimationEnd = () => {};
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

  _getSlides(usedThis = this) {
    const slotsSelectedByShadowRootFiltered = usedThis.shadowRoot
      .querySelector('.js-carousel__wrapper > slot')
      .assignedNodes({ flatten: true })
      .filter(node => node.nodeType === ELEMENT_NODE);

    const slotsSelectedWithoutShadowRoot = usedThis.querySelector('slot');

    let slotsSelectedWithoutShadowRootFiltered = [];
    let slots = [];

    if (slotsSelectedWithoutShadowRoot) {
      slotsSelectedWithoutShadowRootFiltered = slotsSelectedWithoutShadowRoot
        .assignedNodes({ flatten: true })
        .filter(node => node.nodeType === ELEMENT_NODE);
    }

    // IE: slotsSelectedByShadowRootFiltered is []
    // IE and Chrome: Carousel standalone: slotsSelectedWithoutShadowRoot is null
    if (slotsSelectedByShadowRootFiltered.length > 0) {
      slots = slotsSelectedByShadowRootFiltered;
    } else {
      slots = slotsSelectedWithoutShadowRootFiltered;
    }

    return slots;
  }

  _addEventListenerAnimationEnd(usedShadowRoot = this.shadowRoot) {
    // usedShadowRoot as a property to encapsulate for unit tests
    const eventName = 'animationend';
    const onAnimationEnd = () => {
      this._animationWrapperClass = '';
    };
    const elementWithAnimationEvent = usedShadowRoot.querySelector(
      '.js-carousel__wrapper'
    );
    elementWithAnimationEvent.addEventListener(eventName, onAnimationEnd);

    return () => {
      elementWithAnimationEvent.removeEventListener(eventName, onAnimationEnd);
    };
  }

  _setSlideVisibleWithAnimation(slideIndex, animationClass) {
    this.visible = slideIndex;
    this._animationWrapperClass = animationClass;
  }

  _nextSlide(increment = 1) {
    let numSlides = this.slides.length;
    // wrap around after last slide...
    let nextSlideIndex = (this.visible + increment) % numSlides;
    this._setSlideVisibleWithAnimation(
      nextSlideIndex < 0 ? numSlides - 1 : nextSlideIndex, // ... and before first slide
      increment > 0 ? ANIMATION_RIGHT_CLASS : ANIMATION_LEFT_CLASS
    );
  }

  _previousSlide() {
    this._nextSlide(-1);
  }

  // Resize:

  _calculateContainerMinHeight() {
    (async () => {
      const savedVisible = this.visible;
      // we need to set carousel min height in case there are elements with different heights.
      for (let nodes = this.slides, i = 0, n = nodes.length, node; i < n; i++) {
        this.visible = i;
        node = nodes[i];
        await sleep(0); // force event-loop
        this._carouselMinHeight = Math.max(
          node.clientHeight, // forces repaint
          this._carouselMinHeight
        );
      }
      this.visible = savedVisible;
    })();
  }

  _onResize = debounce(() => {
    this._carouselMinHeight = 0;
    this._calculateContainerMinHeight();
  }, 200);

  // AutoRotate:

  _startAutoRotate() {
    // should we *not* autorotate?
    const { autorotatedisabled, autorotatetime } = this;
    if (
      autorotatedisabled ||
      !autorotatetime ||
      // eslint-disable-next-line no-restricted-globals
      isNaN(autorotatetime)
    ) {
      // no, we should not - early exit
      return;
    }
    // advance to next slide every <autorotatetime> milliseconds
    this.autoRotateTimerID = setInterval(
      () => this._nextSlide(),
      autorotatetime
    );
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

  _initSwipe(usedElement = this) {
    // usedElement as a property to encapsulate for unit tests
    this.swiper = new Swipe(
      usedElement,
      usedElement._onSwipeLeft,
      usedElement._onSwipeRight
    );
    this.swiper.run();
  }

  _terminateSwipe() {
    if (this.swiper && this.swiper.stop) {
      this.swiper.stop();
    }
  }

  // Key Navigation:

  _initKeyNavigation(usedDocument = this.ownerDocument) {
    // usedDocument as a property to encapsulate for unit tests
    if (this.keysenabled) {
      usedDocument.addEventListener('keyup', this._handleKeyUp);
    }
  }

  _terminateKeyNavigation(usedDocument = this.ownerDocument) {
    // usedDocument as a property to encapsulate for unit tests
    usedDocument.removeEventListener('keyup', this._handleKeyUp);
  }

  _handleKeyUp = ev => {
    const e = ev || window.event;

    if (e.keyCode === ARROW_LEFT) {
      this.handlePreviousButtonClick();
    } else if (e.keyCode === ARROW_RIGHT) {
      this.handleNextButtonClick();
    }
  };

  firstUpdated() {
    this.inlineStyles('childStyles');
    this.slides = this._getSlides();
    this._setSlideVisibleWithAnimation(0);
    this._calculateContainerMinHeight();
    this._initSwipe();
    this._initKeyNavigation();
    this._startAutoRotate();
    this.removeEventListenerAnimationEnd = this._addEventListenerAnimationEnd();
    window.addEventListener('resize', this._onResize);
  }

  render() {
    return html`
      <article
        class="a-carousel"
        style="min-height: ${this._carouselMinHeight}px;"
      >
        <button
          type="button"
          class="a-carousel__arrow a-carousel__arrow-left"
          @click="${this.handlePreviousButtonClick}"
        ></button>
        <div
          class="a-carousel__wrapper js-carousel__wrapper ${this
            ._animationWrapperClass}"
        >
          <slot></slot>
        </div>
        <button
          type="button"
          class="a-carousel__arrow a-carousel__arrow-right"
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
    this.removeEventListenerAnimationEnd();
  }
}

/* eslint-disable no-undef */
defineVersioned([AXACarousel], __VERSION_INFO__);

export default AXACarousel;
