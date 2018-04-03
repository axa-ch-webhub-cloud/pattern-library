import on from 'js/on';
import { add } from 'js/class-list';
import ownerWindow from 'js/owner-window';
import throttle from 'js/throttle';
import { publish, subscribe } from 'js/pubsub';

const deviceStateClass = '.a-device-state';
const regexWhiteSpace = /\s/g;
const regexUnquote = /^['"]+|['"]+$/g;
let isDomReady = false;
let isInitialised = false;
let hasChanged = true;
let node;
let window;
let lastContent;

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
  const content = window.getComputedStyle(node, ':after').getPropertyValue('content')
    || window.getComputedStyle(node, '::after').getPropertyValue('content');

  // somehow still not ready, whats up with u CSSOM?
  if (!content) {
    return false;
  }

  hasChanged = content !== lastContent;

  // now is really ready
  lastContent = content;

  const state = content.replace(regexWhiteSpace, '')
    .replace(regexUnquote, '')
    .split(',')
    .reduce(parsePair, {});

  return state;
}

function observeDeviceState() {
  const _handleResize = throttle(handleResize, 100);

  on(document, 'DOMContentLoaded', ready);
  on(document, 'load', ready);

  subscribe('pubsub/onsubscribe/device-state/change', handleSubscribtion);

  handleResize();

  function ready() {
    isDomReady = true;

    _handleResize();
  }

  function handleResize() {
    const state = getDeviceState();

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
    const state = getDeviceState();

    if (!state) {
      return;
    }

    publish('device-state/change', state);
  }
}

function parsePair(accumulated, pair) {
  const [key, value] = pair.split(':');

  accumulated[key] = +value || value;

  return accumulated;
}

export default observeDeviceState;
