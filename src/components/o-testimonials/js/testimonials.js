import Swipe from "../../../js/swipe";
import on from "../../../js/on";
import getAttribute from "../../../js/get-attribute";
import debounce from "../../../js/debounce";
import ownerWindow from "../../../js/owner-window";
import UiEvents, { AXA_EVENTS, EVENTS } from "../../../js/ui-events";

class Testimonials extends UiEvents {
  static DEFAULTS = {
    controlLeft: ".js-o-testimonials__control-left",
    controlRight: ".js-o-testimonials__control-right",
    slides: ".js-o-testimonial__item",
    slider: ".js-o-testimonials",
    navigator: ".js-o-testimonials__navigator",
    animationLeft: "o-testimonials__item_animation_left",
    animationRight: "o-testimonials__item_animation_right",
    autoRotateDisabled: "auto-rotate-disabled",
    keysEnabled: "keys-enabled",
    autoRotateTime: "auto-rotate-time",
    showAllInline: "show-all-inline"
  };

  constructor(wcNode, options = {}) {
    // eslint-disable-next-line no-param-reassign
    options = {
      ...Testimonials.DEFAULTS,
      ...options
    };

    super(wcNode, options);

    this.slideIndex = 0;
    this.options = options;
    this.wcNode = wcNode;
    this.autoRotateTimer = undefined;

    this.init();
  }

  init() {
    this.keysEnabled = getAttribute(this.wcNode, this.options.keysEnabled);
    this.slides = this.wcNode.querySelectorAll(this.options.slides);
    this.controlLeft = this.wcNode.querySelector(this.options.controlLeft);
    this.controlRight = this.wcNode.querySelector(this.options.controlRight);
    this.slider = this.wcNode.querySelector(this.options.slider);
    this.autoRotateDisabled = getAttribute(
      this.wcNode,
      this.options.autoRotateDisabled
    );
    this.autoRotateTimeInMiliseconds = getAttribute(
      this.wcNode,
      this.options.autoRotateTime
    );
    this.showAllInline = getAttribute(this.wcNode, this.options.showAllInline);
    if (!this.autoRotateTimeInMiliseconds) {
      this.autoRotateTimeInMiliseconds = 5000;
    }
    // if show all inline is enabled no need to init swipe controls and hide/show slides.
    if (!this.showAllInline) {
      // show if more than 1 slide and not inline.
      if (this.slides.length > 1) {
        this.showControls();
      }
      this.calculateContainerMinHeight();
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
    this.slider.querySelector(this.options.navigator).style.minHeight = `${
      this.minHeight
    }px`;
  }

  on() {
    this.off();
    this.controlLeftClicked = on(
      this.controlLeft,
      EVENTS.CLICK,
      this.goToPreviousSlide
    );
    this.controlRightClicked = on(
      this.controlRight,
      EVENTS.CLICK,
      this.goToNextSlide
    );
    if (this.keysEnabled) {
      this.controlKeysClicked = on(
        this.wcNode.ownerDocument,
        EVENTS.KEYUP,
        this.handleKeyup
      );
    }
    this.swipedLeft = on(
      this.wcNode,
      AXA_EVENTS.AXA_SWIPE_LEFT,
      this.goToNextSlide
    );
    this.swipedRight = on(
      this.wcNode,
      AXA_EVENTS.AXA_SWIPE_RIGHT,
      this.goToPreviousSlide
    );
    this._unResize = on(
      ownerWindow(this.wcNode),
      EVENTS.RESIZE,
      debounce(this.setMinimumHeightOnResize, 300)
    );
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
    if (this._unResize) {
      this._unResize();
    }
    if (this.controlKeysClicked) {
      this.controlKeysClicked();
    }
  }

  setMinimumHeightOnResize = () => {
    this.showAllSlides();
    this.calculateContainerMinHeight();
    this.hideAllSlides();
    clearTimeout(this.autoRotateTimer);
    this.showSlide(0);
  };

  initSwipe() {
    const swiper = new Swipe(this.wcNode);
    swiper.run();
  }

  goToPreviousSlide = () => {
    this.autoRotateDisabled = true;
    this.showSlide(-1);
  };

  handleKeyup = ev => {
    const e = ev || window.event;
    if (+e.keyCode === 37) {
      this.goToPreviousSlide();
    } else if (+e.keyCode === 39) {
      this.goToNextSlide();
    }
  };

  goToNextSlide = () => {
    this.autoRotateDisabled = true;
    this.showSlide(+1);
  };

  hideAllSlides() {
    for (let i = 0, { length } = this.slides; i < length; i++) {
      this.slides[i].style.display = "none";
    }
  }

  showAllSlides() {
    for (let i = 0, { length } = this.slides; i < length; i++) {
      this.slides[i].style.display = "block";
    }
  }

  showControls() {
    this.controlRight.style.display = "block";
    this.controlLeft.style.display = "block";
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
    this.slides[this.slideIndex].style.display = "block";
    this.autoRotate();
  }

  autoRotate() {
    // auto rotate until disabled
    if (!this.autoRotateDisabled) {
      this.autoRotateTimer = setTimeout(() => {
        if (!this.autoRotateDisabled) {
          // if disabled meanwhile
          this.showSlide(+1);
        }
      }, this.autoRotateTimeInMiliseconds);
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

    if (this.autoRotateTimer) {
      delete this.autoRotateTimer;
    }
  }
}

export default Testimonials;
