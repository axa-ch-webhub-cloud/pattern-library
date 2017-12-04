import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import throttle from '../../../js/throttle';
import { publish } from '../../../js/pubsub';

const reWhiteSpace = /\s/g;
const reUnquote = /^"+|"+$/g;
let isInitialised = false;

function deviceState() {
  let node;
  let window;
  let lastContent;

  const _handleResize = throttle(handleResize, 100);

  on(document, 'DOMContentLoaded', _handleResize);
  on(document, 'load', _handleResize);

  handleResize();

  function handleResize() {
    if (!node) {
      node = document.querySelector('.a-device-state');
    }

    if (!window && node) {
      window = ownerWindow(node);
    }

    if (!node || !window) {
      return;
    }

    if (!isInitialised) {
      isInitialised = true;

      on(ownerWindow(node), 'resize', _handleResize);
      on(ownerWindow(node), 'orientationchange', _handleResize);
    }

    const content = window.getComputedStyle(node, 'after').getPropertyValue('content');

    if (content && content !== lastContent) {
      lastContent = content;

      const state = content.replace(reWhiteSpace, '')
        .replace(reUnquote, '')
        .split(',')
        .map(parsePair);

      publish('/device-state/change', state);
    }
  }
}

function parsePair(pair) {
  const [key, value] = pair.split(':');

  return {
    [key]: +value || value,
  };
}

export default deviceState;
