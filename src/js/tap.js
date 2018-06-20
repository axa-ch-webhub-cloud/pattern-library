/* global Node */
/**
 * Inspired by Tocca.js.
 *
 * @link https://github.com/GianlucaGuarini/Tocca.js
 */
import on from './on';
import fire from './fire';

const hasSupport = document.createEvent !== 'function'; // no tap events here
const { prototype: { addEventListener, removeEventListener }, prototype } = Node;
const POINTER_DOWN = 'touchstart pointerdown MSPointerDown mousedown';
const POINTER_MOVE = 'touchmove pointermove MSPointerMove mousemove';
const POINTER_UP = 'touchend pointerup MSPointerUp mouseup';
const TAP_THRESHOLD = 150;
const TAP_PRECISION = 60 / 2;
const regexPointer = /touch|pointer/;
const getPointer = event => event.targetTouches ? event.targetTouches[0] : event;

// patch addEventListener
if (!window.__hasTapProxy) {
  window.__hasTapProxy = true;
  prototype.addEventListener = addEventListenerProxy;
  prototype.removeEventListener = removeEventListenerProxy;
}

// eslint-disable-next-line consistent-return
function addEventListenerProxy(eventType, eventListener, options) {
  const eventTarget = this;
  const isTap = eventType === 'tap';

  if (!hasSupport && isTap) {
    eventType = 'click'; // eslint-disable-line no-param-reassign
  }

  addEventListener.call(eventTarget, eventType, eventListener, options);

  if (!hasSupport || !isTap) {
    return;
  }

  const { ownerDocument: { documentElement } } = eventTarget;
  let wasPointer = false;
  let cachedPointerId;
  const isSamePointer = event => !event.pointerId || typeof cachedPointerId === 'undefined' || event.pointerId === cachedPointerId;
  let downTimestamp;
  let cachedX;
  let cachedY;
  let currentX;
  let currentY;
  let offMove;
  let offUp;

  // cache off handlers
  off(eventTarget);
  this.__offClick = on(eventTarget, 'click', clickBuster, { passive: false });
  this.__offDown = on(eventTarget, POINTER_DOWN, downHandler, options);

  function clickBuster(event) {
    event.preventDefault();
  }

  function downHandler(event) {
    const { type, timeStamp, pointerId } = event;
    const { pageX, pageY } = getPointer(event);

    // skip mouse events if a touch event was dispatched on start
    if (wasPointer && type.indexOf('mouse') !== -1) {
      return;
    }
    // start by pointer or mouse?
    wasPointer = regexPointer.test(type);

    // cache pointerId
    cachedPointerId = pointerId;

    // cache down time
    downTimestamp = timeStamp || +(new Date());

    // cache coordinates
    currentX = cachedX = pageX;
    currentY = cachedY = pageY;

    // bind move and up events
    offMove = on(documentElement, POINTER_MOVE, moveHandler, options);
    offUp = on(documentElement, POINTER_UP, upHandler, options);
  }

  function moveHandler(event) {
    const { type } = event;
    const { pageX, pageY } = getPointer(event);

    // skip mouse events if a touch event was dispatched on start
    if (wasPointer && type.indexOf('mouse') !== -1) {
      return;
    }

    if (!isSamePointer(event)) {
      return;
    }

    // cache coordinates
    currentX = pageX;
    currentY = pageY;
  }

  function upHandler(event) {
    const { type, timeStamp, target } = event;

    // skip mouse events if a touch event was dispatched on start
    // and reset wasPointer
    if (wasPointer && type.indexOf('mouse') !== -1) {
      return;
    }

    if (!isSamePointer(event)) {
      return;
    }
    cachedPointerId = undefined;
    wasPointer = false;

    const timeDiff = (timeStamp || +(new Date())) - downTimestamp;
    const isValidThreshold = timeDiff < TAP_THRESHOLD;
    const isValidPrecision = cachedX >= currentX - TAP_PRECISION &&
      cachedX <= currentX + TAP_PRECISION &&
      cachedY >= currentY - TAP_PRECISION &&
      cachedY <= currentY + TAP_PRECISION;

    if (offMove) {
      offMove();
      offMove = null;
    }

    if (offUp) {
      offUp();
      offUp = null;
    }

    if (isValidThreshold && isValidPrecision) {
      fire(target, eventType, event, { bubbles: true, cancelable: true });
    }
  }
}

// eslint-disable-next-line consistent-return
function removeEventListenerProxy(eventType, eventListener, options) {
  const eventTarget = this;
  const isTap = eventType === 'tap';

  if (!hasSupport && isTap) {
    eventType = 'click'; // eslint-disable-line no-param-reassign
  }

  removeEventListener.call(eventTarget, eventType, eventListener, options);

  if (!hasSupport || !isTap) {
    return;
  }

  off(eventTarget);
}

function off(node) {
  if (node.__offDown) {
    node.__offDown();
  }

  if (node.__offClick) {
    node.__offClick();
  }
}
