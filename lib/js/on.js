import _typeof from 'babel-runtime/helpers/typeof';
import hasPassive from './has-passive';
import { has } from './class-list';
import { freeByValue } from './free';
import whichTransitionEnd from './which-transition-event';

var regexWhitespace = /\s+/;
var eventNameMap = {
  transitionend: whichTransitionEnd()
};

/**
 * Attach an event handler function for one event to the selected element, optionally delegated by given className.
 *
 * @param {Element|Document|Window|XMLHttpRequest} eventTarget - The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest).
 * @param {String} eventName -  A string representing the event type to listen for.
 * @param {String} [className] - A CSS class name upon which the given callback should be executet (without the preceding dot).
 * @param [Function] func - A function which receives a notification when an event of the specified type occurs.
 * @param {Object} options - An options object that specifies characteristics about the event listener.
 * @param {Boolean} [options.capture=false] - A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
 * @param {Boolean} [options.passive=true] - A Boolean indicating that the listener will never call `preventDefault()`. If it does, the user agent should ignore it and generate a console warning.
 * @returns {off} - Returns a function which properly removes the event listener from the target.
 */
function on(eventTarget, eventName, className, func) {
  var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      _ref$capture = _ref.capture,
      capture = _ref$capture === undefined ? false : _ref$capture,
      _ref$passive = _ref.passive,
      passive = _ref$passive === undefined ? true : _ref$passive;

  if (eventNameMap[eventName]) {
    /* eslint-disable */
    eventName = eventNameMap[eventName];
    /* eslint-enable */
  }

  if (!eventTarget || !eventName) {
    return null;
  }

  var typeClassName = typeof className === 'undefined' ? 'undefined' : _typeof(className);
  var isDelegated = className && typeClassName === 'string';

  // reorder args
  if (typeClassName === 'function') {
    /* eslint-disable no-param-reassign */
    if (func) {
      var _func = func;
      capture = _func.capture;
      passive = _func.passive;
    }
    func = className;
    /* eslint-enable no-param-reassign */
  }

  var eventOptions = hasPassive ? { capture: capture, passive: passive } : capture;
  var handler = isDelegated ? delegate : func;
  var eventNames = eventName.split(regexWhitespace);
  var length = eventNames.length;

  // attach event handlers

  for (var i = 0; i < length; ++i) {
    eventTarget.addEventListener(eventNames[i], handler, eventOptions);
  }

  return off;

  /**
   * Removes all associated event listeners of tracked target.
   */
  function off() {
    // remove event handlers
    for (var _i = 0; _i < length; ++_i) {
      eventTarget.removeEventListener(eventNames[_i], handler, eventOptions);
    }

    // automatically free instances holding the off callback.
    freeByValue(this, off);
  }

  // eslint-disable-next-line consistent-return
  function delegate(e) {
    var target = e.target;


    while (!has(target, className) && target !== eventTarget) {
      target = target.parentNode;
    }

    if (target !== eventTarget) {
      return func(e, target);
    }
  }
}

export default on;