let AXACarousel; // we have to require this module to use resetModules()
const ANIMATION_LEFT_CLASS = 'animation-left'; // should be equal to index.js
const ANIMATION_RIGHT_CLASS = 'animation-right';

describe('AXACarousel', () => {
  beforeEach(() => {
    // eslint-disable-next-line global-require
    AXACarousel = require('./index').default;
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.resetModules();
  });

  describe('public methods', () => {
    test('handleNextButtonClick() should call methods', () => {
      const mockedNextSlide = jest.fn();
      const mockedStopAutoRotate = jest.fn();
      AXACarousel.prototype._nextSlide = mockedNextSlide;
      AXACarousel.prototype._stopAutoRotate = mockedStopAutoRotate;

      AXACarousel.prototype.handleNextButtonClick();

      expect(mockedNextSlide.mock.calls.length).toBe(1);
      expect(mockedStopAutoRotate.mock.calls.length).toBe(1);
    });

    test('handlePreviousButtonClick() should call methods', () => {
      const mockedPreviousSlide = jest.fn();
      const mockedStopAutoRotate = jest.fn();
      AXACarousel.prototype._previousSlide = mockedPreviousSlide;
      AXACarousel.prototype._stopAutoRotate = mockedStopAutoRotate;

      AXACarousel.prototype.handlePreviousButtonClick();

      expect(mockedPreviousSlide.mock.calls.length).toBe(1);
      expect(mockedStopAutoRotate.mock.calls.length).toBe(1);
    });
  });

  describe('allgemeine private methods', () => {
    test('_getSlides() should call querySelector with correct attribute', () => {
      const mockedQuerySelector = jest.fn(() => {
        return {
          assignedNodes: () => {
            return { filter: () => {} };
          },
        };
      });
      const mockedShadowRoot = {
        querySelector: mockedQuerySelector,
      };
      AXACarousel.prototype._getSlides(mockedShadowRoot);

      expect(mockedQuerySelector).toHaveBeenCalledWith('.js-carousel__slot');
    });

    test('_setSlideVisibleWithAnimation() should set _animationWrapperClass', () => {
      const givenAnimationClass = 'myclass';
      AXACarousel.prototype.slides = [{ style: {} }];

      AXACarousel.prototype._setSlideVisibleWithAnimation(
        0,
        givenAnimationClass
      );

      jest.runOnlyPendingTimers();

      expect(AXACarousel.prototype._animationWrapperClass).toBe(
        givenAnimationClass
      );
    });
    test('_setSlideVisibleWithAnimation() should set block style of given slide', () => {
      const activeSlideNumber = 0;
      AXACarousel.prototype.slides = [{ style: {} }];

      AXACarousel.prototype._setSlideVisibleWithAnimation(
        activeSlideNumber,
        ''
      );

      jest.runOnlyPendingTimers();

      expect(
        AXACarousel.prototype.slides[activeSlideNumber].style.display
      ).toBe('block');
    });

    test('_nextSlide() should call method with nextSlideIndex = 1', () => {
      const mockedSetSlideVisibleWithAnimation = jest.fn();
      const visibleSlideIndex = 0;
      const expectedNextSlideIndex = visibleSlideIndex + 1;
      AXACarousel.prototype._setSlideVisibleWithAnimation = mockedSetSlideVisibleWithAnimation;
      AXACarousel.prototype.visibleSlideIndex = visibleSlideIndex;
      AXACarousel.prototype.slides = { length: 2 };

      AXACarousel.prototype._nextSlide();

      // The first arg of the first call to the function
      expect(mockedSetSlideVisibleWithAnimation.mock.calls[0][0]).toBe(
        expectedNextSlideIndex
      );
    });
    test('_nextSlide() should call method with nextSlideIndex = 0', () => {
      const mockedSetSlideVisibleWithAnimation = jest.fn();
      const visibleSlideIndex = 2;
      const expectedNextSlideIndex = 0;
      AXACarousel.prototype._setSlideVisibleWithAnimation = mockedSetSlideVisibleWithAnimation;
      AXACarousel.prototype.visibleSlideIndex = visibleSlideIndex;
      AXACarousel.prototype.slides = { length: 2 };

      AXACarousel.prototype._nextSlide();

      // The first arg of the first call to the function
      expect(mockedSetSlideVisibleWithAnimation.mock.calls[0][0]).toBe(
        expectedNextSlideIndex
      );
    });
    test('_nextSlide() should call method with correct second argument', () => {
      const mockedSetSlideVisibleWithAnimation = jest.fn();
      const visibleSlideIndex = 0;
      AXACarousel.prototype._setSlideVisibleWithAnimation = mockedSetSlideVisibleWithAnimation;
      AXACarousel.prototype.visibleSlideIndex = visibleSlideIndex;
      AXACarousel.prototype.slides = { length: 0 };

      AXACarousel.prototype._nextSlide();

      // The second arg of the first call to the function
      expect(mockedSetSlideVisibleWithAnimation.mock.calls[0][1]).toBe(
        ANIMATION_RIGHT_CLASS
      );
    });

    test('_previousSlide() should call method with nextSlideIndex = thePreviousIndexInArray', () => {
      const mockedSetSlideVisibleWithAnimation = jest.fn();
      const visibleSlideIndex = 2;
      const expectedPreviousSlideIndex = visibleSlideIndex - 1;
      AXACarousel.prototype._setSlideVisibleWithAnimation = mockedSetSlideVisibleWithAnimation;
      AXACarousel.prototype.visibleSlideIndex = visibleSlideIndex;
      AXACarousel.prototype.slides = { length: 2 };

      AXACarousel.prototype._previousSlide();

      // The first arg of the first call to the function
      expect(mockedSetSlideVisibleWithAnimation.mock.calls[0][0]).toBe(
        expectedPreviousSlideIndex
      );
    });
    test('_previousSlide() should call method with nextSlideIndex = theLastIndexInArray', () => {
      const mockedSetSlideVisibleWithAnimation = jest.fn();
      const visibleSlideIndex = 0;
      const expectedPreviousSlideIndex = 2;
      AXACarousel.prototype._setSlideVisibleWithAnimation = mockedSetSlideVisibleWithAnimation;
      AXACarousel.prototype.visibleSlideIndex = visibleSlideIndex;
      AXACarousel.prototype.slides = { length: expectedPreviousSlideIndex + 1 };

      AXACarousel.prototype._previousSlide();

      // The first arg of the first call to the function
      expect(mockedSetSlideVisibleWithAnimation.mock.calls[0][0]).toBe(
        expectedPreviousSlideIndex
      );
    });
    test('_previousSlide() should call method with correct second argument', () => {
      const mockedSetSlideVisibleWithAnimation = jest.fn();
      const visibleSlideIndex = 0;
      AXACarousel.prototype._setSlideVisibleWithAnimation = mockedSetSlideVisibleWithAnimation;
      AXACarousel.prototype.visibleSlideIndex = visibleSlideIndex;
      AXACarousel.prototype.slides = { length: 0 };

      AXACarousel.prototype._previousSlide();

      // The second arg of the first call to the function
      expect(mockedSetSlideVisibleWithAnimation.mock.calls[0][1]).toBe(
        ANIMATION_LEFT_CLASS
      );
    });

    test('_setSlideVisibleAndAllOthersNone() should set correct node to visible', () => {
      const nodeWithExpectedVisibility = {
        style: { display: '' },
        clientHeight: 1,
      };
      const node2 = { style: { display: '' }, clientHeight: 2 };
      const node3 = { style: { display: '' }, clientHeight: 3 };
      AXACarousel.prototype.slides = [nodeWithExpectedVisibility, node2, node3];

      AXACarousel.prototype._setSlideVisibleAndAllOthersNone(
        nodeWithExpectedVisibility
      );

      expect(nodeWithExpectedVisibility.style.display).toBe('block');
      expect(node2.style.display).toBe('none');
      expect(node3.style.display).toBe('none');
    });

    test('_calculateContainerMinHeight() should set biggest height', () => {
      AXACarousel.prototype._setSlideVisibleAndAllOthersNone = () => {};
      AXACarousel.prototype.slides = [
        { style: { display: '' }, clientHeight: 1 },
        { style: { display: '' }, clientHeight: 2 },
      ];
      AXACarousel.prototype._carouselMinHeight = 0;

      AXACarousel.prototype._calculateContainerMinHeight();

      expect(AXACarousel.prototype._carouselMinHeight).toBe(2);
    });
    test('_calculateContainerMinHeight() should not change _carouselMinHeight', () => {
      AXACarousel.prototype._setSlideVisibleAndAllOthersNone = () => {};
      AXACarousel.prototype.slides = [
        { style: { display: '' }, clientHeight: 1 },
        { style: { display: '' }, clientHeight: 2 },
      ];
      AXACarousel.prototype._carouselMinHeight = 999;

      AXACarousel.prototype._calculateContainerMinHeight();

      expect(AXACarousel.prototype._carouselMinHeight).toBe(999);
    });
    test('_calculateContainerMinHeight() should call _setSlideVisibleAndAllOthersNone() twice', () => {
      AXACarousel.prototype._setSlideVisibleAndAllOthersNone = jest.fn();
      AXACarousel.prototype.slides = [
        { style: { display: '' }, clientHeight: 1 },
      ];

      AXACarousel.prototype._calculateContainerMinHeight();

      expect(
        AXACarousel.prototype._setSlideVisibleAndAllOthersNone
      ).toHaveBeenCalledTimes(2);
    });
  });

  describe('auto rotate', () => {
    test('_startAutoRotate() should init a interval', () => {
      AXACarousel.prototype._startAutoRotate();
      expect(setInterval).toHaveBeenCalled();
      expect(AXACarousel.prototype.autoRotateTimerID).toBeGreaterThan(-1);
    });
    test('_startAutoRotate() should call _nextSlide()', () => {
      const mockedNextSlide = jest.fn();
      AXACarousel.prototype._nextSlide = mockedNextSlide;

      AXACarousel.prototype._startAutoRotate();
      jest.runOnlyPendingTimers();

      expect(mockedNextSlide).toHaveBeenCalled();
    });
    test('_startAutoRotate() should not init a interval if autorotatedisabled is set', () => {
      AXACarousel.prototype.autorotatedisabled = true;
      AXACarousel.prototype._startAutoRotate();
      expect(setInterval).not.toHaveBeenCalled();
    });

    test('_stopAutoRotate() should call clearInterval with correct argument', () => {
      AXACarousel.prototype._stopAutoRotate();
      expect(clearInterval).toHaveBeenCalledWith(
        AXACarousel.prototype.autoRotateTimerID
      );
    });
  });

  describe('swipe', () => {
    test('_initSwipe() should instantiate Swipe', () => {
      const mockedAddEventListener = jest.fn();
      const mockedThisElement = { addEventListener: mockedAddEventListener }; // addEventListener is called internally at Swipe class
      AXACarousel.prototype.swiper = null;

      AXACarousel.prototype._initSwipe(mockedThisElement);

      expect(AXACarousel.prototype.swiper).not.toBe(null);
      expect(mockedAddEventListener).toHaveBeenCalled();
    });

    test('_terminateSwipe() should call a method', () => {
      const mockedStop = jest.fn();
      AXACarousel.prototype.swiper = {
        stop: mockedStop,
      };

      AXACarousel.prototype._terminateSwipe();

      expect(mockedStop).toHaveBeenCalled();
    });
  });

  describe('key navigation', () => {
    test('_initKeyNavigation() should add an EventListener', () => {
      const mockedAddEventListener = jest.fn();
      const mockedDocument = { addEventListener: mockedAddEventListener };
      AXACarousel.prototype.keysenabled = true;

      AXACarousel.prototype._initKeyNavigation(mockedDocument);

      expect(mockedAddEventListener).toHaveBeenCalled();
    });
    test('_initKeyNavigation() should not add an EventListener if keysenabled=false', () => {
      const mockedAddEventListener = jest.fn();
      const mockedDocument = { addEventListener: mockedAddEventListener };
      AXACarousel.prototype.keysenabled = false;

      AXACarousel.prototype._initKeyNavigation(mockedDocument);

      expect(mockedAddEventListener).not.toHaveBeenCalled();
    });

    test('_terminateKeyNavigation() should remove EventListener', () => {
      const mockedRemoveEventListener = jest.fn();
      const mockedDocument = { removeEventListener: mockedRemoveEventListener };

      AXACarousel.prototype._terminateKeyNavigation(mockedDocument);

      expect(mockedRemoveEventListener).toHaveBeenCalled();
    });
  });

  describe('lit-element lifecycle', () => {
    test('firstUpdated() should call methods (with correct arguments)', () => {
      AXACarousel.prototype._onResize = 'thisIsACallback';
      AXACarousel.prototype.inlineStyles = jest.fn();
      AXACarousel.prototype._getSlides = jest.fn();
      AXACarousel.prototype._calculateContainerMinHeight = jest.fn();
      AXACarousel.prototype._setSlideVisibleWithAnimation = jest.fn();
      AXACarousel.prototype._initSwipe = jest.fn();
      AXACarousel.prototype._initKeyNavigation = jest.fn();
      AXACarousel.prototype._startAutoRotate = jest.fn();
      global.addEventListener = jest.fn();

      AXACarousel.prototype.firstUpdated();

      expect(AXACarousel.prototype.inlineStyles).toHaveBeenCalledWith(
        'childStyles'
      );
      expect(AXACarousel.prototype._getSlides).toHaveBeenCalled();
      expect(
        AXACarousel.prototype._calculateContainerMinHeight
      ).toHaveBeenCalled();
      expect(
        AXACarousel.prototype._setSlideVisibleWithAnimation
      ).toHaveBeenCalledWith(0);
      expect(AXACarousel.prototype._initSwipe).toHaveBeenCalled();
      expect(AXACarousel.prototype._initKeyNavigation).toHaveBeenCalled();
      expect(AXACarousel.prototype._startAutoRotate).toHaveBeenCalled();
      expect(global.addEventListener).toHaveBeenCalledWith(
        'resize',
        'thisIsACallback'
      );
    });
  });
});
