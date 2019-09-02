class Swipe {
  constructor(element, onLeftCallback, onRightCallback) {
    this.xDown = null;
    this.yDown = null;
    this.element = element;
    this.DIFF_THRESHOLD = element.offsetWidth / 10; // 10% of the width is the threshold swipe
    this.TIME_THRESHOLD = 200;

    this.onLeftCallback = onLeftCallback;
    this.onRightCallback = onRightCallback;
  }

  onLeft() {
    this.onLeftCallback();
  }

  onRight() {
    this.onRightCallback();
  }

  onUp() {
    this.onLeftCallback();
  }

  onDown() {
    this.onRightCallback();
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
      if (
        Math.abs(this.xDiff) > this.DIFF_THRESHOLD &&
        timeDiff < this.TIME_THRESHOLD
      ) {
        if (this.xDiff > 0) {
          this.onLeft();
        } else {
          this.onRight();
        }
      } else {
        // threshold limit not passed.
      }
    } else if (
      Math.abs(this.yDiff) > this.DIFF_THRESHOLD &&
      timeDiff < this.TIME_THRESHOLD
    ) {
      // eslint-disable-line
      if (this.yDiff > 0) {
        this.onUp();
      } else {
        this.onDown();
      }
    } else {
      // threshold limit not passed.
    }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
    this.timeDown = null;
  }

  _handleTouchStart = evt => {
    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
    this.timeDown = Date.now();
    this.xDiff = 0;
    this.yDiff = 0;
  };

  _handleTouchMove = evt => {
    this.handleTouchMove(evt);
  };

  _handleTouchEnd = () => {
    this.handleTouchEnd();
  };

  run() {
    this.element.addEventListener('touchstart', this._handleTouchStart);
    this.element.addEventListener('touchmove', this._handleTouchMove);
    this.element.addEventListener('touchend', this._handleTouchEnd);
  }

  stop() {
    this.element.removeEventListener('touchstart', this._handleTouchStart);
    this.element.removeEventListener('touchmove', this._handleTouchMove);
    this.element.removeEventListener('touchend', this._handleTouchEnd);
  }
}

export default Swipe;
