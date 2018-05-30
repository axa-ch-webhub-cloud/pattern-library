import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import on from '../../../js/on';
import { add } from '../../../js/class-list';
import ownerWindow from '../../../js/owner-window';
import throttle from '../../../js/throttle';
import { publish, subscribe } from '../../../js/pubsub';

var deviceStateClass = '.a-device-state';
var regexWhiteSpace = /\s/g;
var regexUnquote = /^['"]+|['"]+$/g;
var isDomReady = false;
var isInitialised = false;
var hasChanged = true;
var node = void 0;
var window = void 0;
var lastContent = void 0;

export function getDeviceState() {
  if (!node) {
    node = document.querySelector(deviceStateClass);

    if (!node && isDomReady) {
      node = document.body;
      add(node, deviceStateClass);
    }
  }

  if (!window && node) {
    window = ownerWindow(node);
  }

  if (!node || !window) {
    return false;
  }

  // @TODO: this should be battle tested...
  // has to include the colon, either `:after` or `::after`
  // https://www.w3.org/TR/cssom-1/#dom-window-getcomputedstyle
  var content = window.getComputedStyle(node, ':after').getPropertyValue('content') || window.getComputedStyle(node, '::after').getPropertyValue('content');

  // somehow still not ready, whats up with u CSSOM?
  if (!content) {
    return false;
  }

  hasChanged = content !== lastContent;

  // now is really ready
  lastContent = content;

  var state = content.replace(regexWhiteSpace, '').replace(regexUnquote, '').split(',').reduce(parsePair, {});

  return state;
}

function observeDeviceState() {
  var _handleResize = throttle(handleResize, 100);

  on(document, 'DOMContentLoaded', ready);
  on(document, 'load', ready);

  subscribe('pubsub/onsubscribe/device-state/change', handleSubscribtion);

  handleResize();

  function ready() {
    isDomReady = true;

    _handleResize();
  }

  function handleResize() {
    var state = getDeviceState();

    if (!state) {
      return;
    }

    if (!isInitialised) {
      isInitialised = true;

      on(ownerWindow(node), 'resize', _handleResize);
      on(ownerWindow(node), 'orientationchange', _handleResize);
    }

    if (hasChanged) {
      publish('device-state/change', state);
    }
  }

  function handleSubscribtion() {
    var state = getDeviceState();

    if (!state) {
      return;
    }

    publish('device-state/change', state);
  }
}

function parsePair(accumulated, pair) {
  var _pair$split = pair.split(':'),
      _pair$split2 = _slicedToArray(_pair$split, 2),
      key = _pair$split2[0],
      value = _pair$split2[1];

  accumulated[key] = +value || value;

  return accumulated;
}

export default observeDeviceState;