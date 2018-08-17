import Swipe from '../../../js/swipe';
import on from '../../../js/on';
import UiEvents, { EVENTS } from '../../../js/ui-events';

class Testimonials extends UiEvents {
  static DEFAULTS = {
    controlLeft: '.js-o-testimonials__control-left',
    controlRight: '.js-o-testimonials__control-right',
    slides: '.js-o-testimonial__item',
    slider: '.js-o-testimonials',
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
    this.autoRotateEnabled = true;
    this.autoRotateTimeInMiliseconds = 5000;
    this.options = options;
    this.wcNode = wcNode;

    this.init();
  }

  init() {
    this.slides = this.wcNode.querySelectorAll(this.options.slides);
    this.controlLeft = this.wcNode.querySelector(this.options.controlLeft);
    this.controlRight = this.wcNode.querySelector(this.options.controlRight);
    this.slider = this.wcNode.querySelector(this.options.slider);
    this.autoRotateTimeInMiliseconds = this.slider.getAttribute('data-auto-rotate-time');
    this.autoRotateEnabled = this.slider.getAttribute('data-auto-rotate-enabled');
    this.hideAllSlides();
    if (this.slides.length < 2) {
      this.hideControls();
    }
    this.showSlide(0);
    this.on();
    this.initSwipe();
  }

  on() {
    this.off();
    this.controlLeftClicked = on(this.controlLeft, EVENTS.CLICK, this.handleControlLeftClicked);
    this.controlRightClicked = on(this.controlRight, EVENTS.CLICK, this.handleControlRightClicked);
  }

  off() {
    if (this.controlLeftClicked) {
      this.controlLeftClicked();
    }
    if (this.controlRightClicked) {
      this.controlRightClicked();
    }
  }

  initSwipe() {
    const swiper = new Swipe(this.slider);
    swiper.onLeft(() => {
      this.autoRotateEnabled = false;
      this.showSlide(+1);
    });
    swiper.onRight(() => {
      this.autoRotateEnabled = false;
      this.showSlide(-1);
    });
    swiper.run();
  }

  handleControlLeftClicked = () => {
    this.autoRotateEnabled = false;
    this.showSlide(-1);
  };

  handleControlRightClicked = () => {
    this.autoRotateEnabled = false;
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
    this.slides[this.slideIndex].classList.remove('o-testimonials__item_animation_left');
    this.slides[this.slideIndex].classList.remove('o-testimonials__item_animation_right');
    if (positionDifference < 0) {
      this.slides[this.slideIndex].classList.add('o-testimonials__item_animation_left');
    } else {
      this.slides[this.slideIndex].classList.add('o-testimonials__item_animation_right');
    }
    this.slides[this.slideIndex].style.display = 'block';
    this.autoRotate();
  }

  autoRotate() {
    // auto rotate until disabled
    if (this.autoRotateEnabled === true || this.autoRotateEnabled === 'true') {
      setTimeout(
        () => {
          if (this.autoRotateEnabled === true || this.autoRotateEnabled === 'true') {
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

    delete this.handleClick;
  }
}

export default Testimonials;
