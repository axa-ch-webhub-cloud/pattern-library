import Swipe from '../../../js/swipe';
import on from '../../../js/on';
import getAttribute from '../../../js/get-attribute';
import UiEvents, { AXA_EVENTS, EVENTS } from '../../../js/ui-events';

class Testimonials extends UiEvents {
  static DEFAULTS = {
    controlLeft: '.js-o-testimonials__control-left',
    controlRight: '.js-o-testimonials__control-right',
    slides: '.js-o-testimonial__item',
    slider: '.js-o-testimonials',
    navigator: '.js-o-testimonials__navigator',
    animationLeft: 'o-testimonials__item_animation_left',
    animationRight: 'o-testimonials__item_animation_right',
    autoRotateDisabled: 'auto-rotate-disabled',
    autoRotateTime: 'auto-rotate-time',
    showAllInline: 'show-all-inline',
  };

  constructor(wcNode, options = {
  }) {
    // eslint-disable-next-line no-param-reassign
    options = {
      ...Testimonials.DEFAULTS,
      ...options,
    };

    super(wcNode, options);

    this.slideIndex = 0;
    this.options = options;
    this.wcNode = wcNode;

    this.init();
  }

  init() {
    this.slides = this.wcNode.querySelectorAll(this.options.slides);
    this.controlLeft = this.wcNode.querySelector(this.options.controlLeft);
    this.controlRight = this.wcNode.querySelector(this.options.controlRight);
    this.slider = this.wcNode.querySelector(this.options.slider);
    this.autoRotateDisabled = getAttribute(this.wcNode, this.options.autoRotateDisabled);
    this.autoRotateTimeInMiliseconds = getAttribute(this.wcNode, this.options.autoRotateTime);
    this.showAllInline = getAttribute(this.wcNode, this.options.showAllInline);
    if (!this.autoRotateTimeInMiliseconds) {
      this.autoRotateTimeInMiliseconds = 5000;
    }
    this.calculateContainerMinHeight();
    // if there is only 1 slide or the option to show all slides is enabled hide the slide controls.
    if (this.slides.length < 2 || this.showAllInline) {
      this.hideControls();
    }
    // if show all inline is enabled no need to init swipe controls and hide/show slides.
    if (!this.showAllInline) {
      this.hideAllSlides();
      this.showSlide(0);
      this.on();
      this.initSwipe();
    }
  }

  calculateContainerMinHeight() {
    // we need to set slider min height in case there are elements with different heights.
    this.minHeight = 0;
    for (let i = 0, { length } = this.slides; i < length; i++) {
      this.minHeight = this.slides[i].clientHeight;
    }
    this.slider.querySelector(this.options.navigator).style.minHeight = `${this.minHeight}px`;
  }

  on() {
    this.off();
    this.controlLeftClicked = on(this.controlLeft, EVENTS.CLICK, this.goToPreviousSlide);
    this.controlRightClicked = on(this.controlRight, EVENTS.CLICK, this.goToNextSlide);
    this.swipedLeft = on(this.wcNode, AXA_EVENTS.AXA_SWIPE_LEFT, this.goToNextSlide);
    this.swipedRight = on(this.wcNode, AXA_EVENTS.AXA_SWIPE_RIGHT, this.goToPreviousSlide);
  }

  off() {
    if (this.controlLeftClicked) {
      this.controlLeftClicked();
    }
    if (this.controlRightClicked) {
      this.controlRightClicked();
    }
    if (this.swipedLeft) {
      this.swipedLeft();
    }
    if (this.swipedRight) {
      this.swipedRight();
    }
  }

  initSwipe() {
    const swiper = new Swipe(this.wcNode);
    swiper.run();
  }

  goToPreviousSlide = () => {
    this.autoRotateDisabled = true;
    this.showSlide(-1);
  };

  goToNextSlide = () => {
    this.autoRotateDisabled = true;
    this.showSlide(+1);
  };

  hideAllSlides() {
    for (let i = 0, { length } = this.slides; i < length; i++) {
      this.slides[i].style.display = 'none';
    }
  }

  hideControls() {
    this.controlRight.style.display = 'none';
    this.controlLeft.style.display = 'none';
  }

  showSlide(positionDifference) {
    this.hideAllSlides();
    if (this.slideIndex + positionDifference < 0) {
      this.slideIndex = this.slides.length - 1;
    } else if (this.slideIndex + positionDifference >= this.slides.length) {
      this.slideIndex = 0;
    } else {
      this.slideIndex = this.slideIndex + positionDifference;
    }
    this.slides[this.slideIndex].classList.remove(this.options.animationLeft);
    this.slides[this.slideIndex].classList.remove(this.options.animationRight);
    if (positionDifference < 0) {
      this.slides[this.slideIndex].classList.add(this.options.animationLeft);
    } else {
      this.slides[this.slideIndex].classList.add(this.options.animationRight);
    }
    this.slides[this.slideIndex].style.display = 'block';
    this.autoRotate();
  }

  autoRotate() {
    // auto rotate until disabled
    if (!this.autoRotateDisabled) {
      setTimeout(
        () => {
          if (!this.autoRotateDisabled) {
            // if disabled meanwhile
            this.showSlide(+1);
          }
        },
        this.autoRotateTimeInMiliseconds,
      );
    }
  }

  destroy() {
    this.off();

    if (this.controlLeft) {
      delete this.controlLeft;
    }

    if (this.controlRight) {
      delete this.controlRight;
    }

    if (this.wcNode) {
      delete this.wcNode;
    }

    if (this.options) {
      delete this.options;
    }

    if (this.slides) {
      delete this.slides;
    }

    if (this.slider) {
      delete this.slider;
    }

    if (this.autoRotateDisabled) {
      delete this.autoRotateDisabled;
    }

    if (this.autoRotateTimeInMiliseconds) {
      delete this.autoRotateTimeInMiliseconds;
    }

    if (this.showAllInline) {
      delete this.showAllInline;
    }
  }
}

export default Testimonials;
