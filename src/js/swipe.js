import { EVENTS } from './ui-events';
import on from './on';

class Swipe {
  constructor(element) {
    this.xDown = null;
    this.yDown = null;
    this.element = typeof (element) === 'string' ? document.querySelector(element) : element;
    // 10% of the width is the threshold swipe
    this.DIFF_THRESHOLD = element.offsetWidth / 10;
    this.TIME_THRESHOLD = 200;

    on(this.element, EVENTS.TOUCHSTART, (evt) => {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
      this.timeDown = Date.now();
      this.xDiff = 0;
      this.yDiff = 0;
    });
  }

  onLeft(callback) {
    this.onLeft = callback;

    return this;
  }

  onRight(callback) {
    this.onRight = callback;

    return this;
  }

  onUp(callback) {
    this.onUp = callback;

    return this;
  }

  onDown(callback) {
    this.onDown = callback;

    return this;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;
  }

  handleTouchEnd() {
    const timeDiff = Date.now() - this.timeDown;
    if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
      if (Math.abs(this.xDiff) > this.DIFF_THRESHOLD && timeDiff < this.TIME_THRESHOLD) {
        if (this.xDiff > 0) {
          this.onLeft();
        } else {
          this.onRight();
        }
      } else {
        // threshold limit not passed.
      }
    } else {
      if (Math.abs(this.yDiff) > this.DIFF_THRESHOLD && timeDiff < this.TIME_THRESHOLD) { // eslint-disable-line
        if (this.yDiff > 0) {
          this.onUp();
        } else {
          this.onDown();
        }
      } else {
        // threshold limit not passed.
      }
    }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
    this.timeDown = null;
  }

  run() {
    on(this.element, EVENTS.TOUCHMOVE, (evt) => {
      this.handleTouchMove(evt);
    });
    on(this.element, EVENTS.TOUCHEND, () => {
      this.handleTouchEnd();
    });
  }
}

export default Swipe;
