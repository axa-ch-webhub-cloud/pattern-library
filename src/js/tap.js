/* global Node */
/**
 * Inspired by Tocca.js.
 *
 * @link https://github.com/GianlucaGuarini/Tocca.js
 */
import on from './on';
import fire from './fire';

const hasSupport = document.createEvent !== 'function'; // no tap events here
const { prototype } = Node;
const _addEventListener = prototype.addEventListener;
const _removeEventListener = prototype.removeEventListener;
const pointerdown = 'touchstart pointerdown MSPointerDown mousedown';
const pointermove = 'touchmove pointermove MSPointerMove mousemove';
const pointerup = 'touchend pointerup MSPointerUp mouseup';
const regexPointer = /touch|pointer/;
const TAP_THRESHOLD = 150;
const TAP_PRECISION = 60 / 2;
const getPointer = event => event.targetTouches ? event.targetTouches[0] : event;

// eslint-disable-next-line consistent-return
function addEventListenerProxy(eventType, ...args) {
  const target = this;

  if (!hasSupport) {
    eventType = 'click'; // eslint-disable-line no-param-reassign
  }

  if (eventType !== 'tap') {
    return _addEventListener.call(target, eventType, ...args);
  }

  console.log(`>>> proxy ${eventType}`);

  const { ownerDocument: { documentElement } } = target;
  let wasPointer = false;
  let cachedPointerId;
  const isSamePointer = event => !event.pointerId || typeof cachedPointerId === 'undefined' || event.pointerId === cachedPointerId;
  let downTimestamp;
  let cachedX;
  let cachedY;
  let currentX;
  let currentY;

  // cache offDown
  this.__offDown = on(target, pointerdown, downHandler);
  let offMove;
  let offUp;

  function downHandler(event) {
    const { type, timeStamp, pointerId } = event;
    const { pageX, pageY } = getPointer(event);

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
    offMove = on(documentElement, pointermove, moveHandler);
    offUp = on(documentElement, pointerup, upHandler);
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
    const { type, timeStamp } = event;

    // skip mouse events if a touch event was dispatched on start
    // and reset wasPointer
    if (wasPointer && type.indexOf('mouse') !== -1) {
      return;
    }
    wasPointer = false;

    if (!isSamePointer(event)) {
      return;
    }
    cachedPointerId = undefined;

    const timeDiff = (timeStamp || +(new Date())) - downTimestamp;
    const isValidThreshold = timeDiff < TAP_THRESHOLD;
    const isValidPrecision = cachedX >= currentX - TAP_PRECISION &&
      cachedX <= currentX + TAP_PRECISION &&
      cachedY >= currentY - TAP_PRECISION &&
      cachedY <= currentY + TAP_PRECISION;

    offMove();
    offMove = null;
    offUp();
    offUp = null;

    if (isValidThreshold && isValidPrecision) {
      fire(target, eventType, event);
    }
  }
}

// eslint-disable-next-line consistent-return
function removeEventListenerProxy(eventType, ...args) {
  if (!hasSupport) {
    eventType = 'click'; // eslint-disable-line no-param-reassign
  }

  if (eventType !== 'tap') {
    return _removeEventListener.call(this, eventType, ...args);
  }

  if (this.__offDown) {
    this.__offDown();
  }
}

// patch addEventListener
prototype.addEventListener = addEventListenerProxy;
prototype.removeEventListener = removeEventListenerProxy;
