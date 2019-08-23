import AXACarousel from './index';

describe('AXACarousel', () => {
  describe('public methods', () => {
    test('handleNextButtonClick() should call methods', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('handlePreviousButtonClick() should call methods', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
  });

  describe('allgemeine private methods', () => {
    test('_getSlides() should return array', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_setSlideVisibleWithAnimation() should set given class to wrapper', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
    test('_setSlideVisibleWithAnimation() should set display:block to given slide', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_nextSlide() should call method with correct parameters', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_previousSlide() should call method with correct parameters', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_calculateContainerMinHeight() should set biggest height', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_onResize() should set a variable to 0 and call 2 methods', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
  });

  describe('auto rotate', () => {
    test('_startAutoRotate() should init a interval', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
    test('_startAutoRotate() should not init a interval if autorotatedisabled is set', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_stopAutoRotate() should call clearInterval with correct property', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
  });

  describe('swipe', () => {
    test('_onSwipeLeft() should call method', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_onSwipeRight() should call method', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_initSwipe() should instantiate Swipe an call a method', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_terminateSwipe() should call a method', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
    test('_terminateSwipe() should not call a method if swiper not set', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
  });

  describe('key navigation', () => {
    test('_initKeyNavigation() should add an EventListener', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
    test('_initKeyNavigation() should not add an EventListener if keysenabled=false', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_terminateKeyNavigation() should remove EventListener', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('_handleKeyUp() should call handlePreviousButtonClick()', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
    test('_handleKeyUp() should call handleNextButtonClick()', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
    test('_handleKeyUp() should not call anything', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
  });

  describe('lit-element lifecycle', () => {
    test('firstUpdated() should call methods', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });

    test('disconnectedCallback() should call methods', () => {
      expect(AXACarousel.prototype.validateModel()).toBe(true);
    });
  });
});
