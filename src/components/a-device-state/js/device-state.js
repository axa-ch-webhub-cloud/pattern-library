import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import throttle from '../../../js/throttle';
import { publish } from '../../../js/pubsub';

const reWhiteSpace = /\s/g;
const reUnquote = /^"+|"+$/g;
let isInitialised = false;
let hasChanged = true;
let node;
let window;
let lastContent;

export function getDeviceState() {
  if (!node) {
    node = document.querySelector('.a-device-state');
  }

  if (!window && node) {
    window = ownerWindow(node);
  }

  if (!node || !window) {
    return false;
  }

  const content = window.getComputedStyle(node, 'after').getPropertyValue('content');

  // somehow still not ready, whats up with u CSSOM?
  if (!content) {
    return false;
  }

  hasChanged = content !== lastContent;

  // now is really ready
  lastContent = content;

  const state = content.replace(reWhiteSpace, '')
    .replace(reUnquote, '')
    .split(',')
    .reduce(parsePair, {});

  return state;
}

function observeDeviceState() {
  const _handleResize = throttle(handleResize, 100);

  on(document, 'DOMContentLoaded', _handleResize);
  on(document, 'load', _handleResize);

  handleResize();

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
}

function parsePair(accumulated, pair) {
  const [key, value] = pair.split(':');

  accumulated[key] = +value || value;

  return accumulated;
}

export default observeDeviceState;
