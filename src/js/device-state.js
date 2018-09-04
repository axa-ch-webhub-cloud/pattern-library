import on from './on';
import { add } from './class-list';
import ownerWindow from './owner-window';
import throttle from './throttle';

const deviceStateClass = '.js-device-state';
const regexWhiteSpace = /\s/g;
const regexUnquote = /^['"]+|['"]+$/g;

export default class DeviceStateObserver {
  constructor() {
    this.window = null;
    this.lastContent = '';
    this.hasStateChanged = false;
  }

  init() {
    if (!this.node) {
      this.node = document.body;
      add(this.node, deviceStateClass);
    }

    const _handleResize = throttle(this.handleResize, 100);
    this.offResize = on(ownerWindow(this.node), 'resize', _handleResize);
    this.offOrientationchange = on(ownerWindow(this.node), 'orientationchange', _handleResize);
  }

  listen(callbackOnChange) {
    this.node = document.querySelector(deviceStateClass);
    this.callbackOnChange = callbackOnChange;
    this.init();

    return () => {
      this.offResize();
      this.offOrientationchange();
    };
  }

  triggerOnce() {
    this.handleResize();
  }

  handleResize = () => {
    if (typeof this.callbackOnChange === 'function') {
      this.callbackOnChange(this.getDeviceState(), this.hasStateChanged);
    }
  }

  parsePair = (accumulated, pair) => {
    const [key, value] = pair.split(':');

    accumulated[key] = +value || value;

    return accumulated;
  }

  getDeviceState() {
    if (!this.window && this.node) {
      this.window = ownerWindow(this.node);
    }

    if (!this.node || !this.window) {
      return false;
    }

    // @TODO: this should be battle tested...
    // has to include the colon, either `:after` or `::after`
    // https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle
    const content = this.window.getComputedStyle(this.node, ':after').getPropertyValue('content')
      || this.window.getComputedStyle(this.node, '::after').getPropertyValue('content');

    // somehow still not ready, whats up with u CSSOM?
    if (!content) {
      return false;
    }

    this.hasStateChanged = content !== this.lastContent;

    // now is really ready
    this.lastContent = content;

    const state = content.replace(regexWhiteSpace, '')
      .replace(regexUnquote, '')
      .split(',')
      .reduce(this.parsePair, {});

    return state;
  }
}
