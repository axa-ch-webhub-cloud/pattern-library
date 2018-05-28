// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/krambuhl/custom-event-polyfill
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

var CustomEvent = function () {
  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }

    return window.CustomEvent;
  } catch (error) {} // eslint-disable-line

  return CustomEventPolyfill;

  function CustomEventPolyfill(eventName) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$bubbles = _ref.bubbles,
        bubbles = _ref$bubbles === undefined ? false : _ref$bubbles,
        _ref$cancelable = _ref.cancelable,
        cancelable = _ref$cancelable === undefined ? false : _ref$cancelable,
        _ref$detail = _ref.detail,
        detail = _ref$detail === undefined ? undefined : _ref$detail;

    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, bubbles, cancelable, detail);

    var origPreventDefault = event.preventDefault;
    event.preventDefault = preventDefault;

    return event;

    function preventDefault() {
      origPreventDefault.call(event);
      // according to SO fixes IE 11/10/9
      // https://stackoverflow.com/questions/23349191/event-preventdefault-is-not-working-in-ie-11-for-custom-events
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function get() {
            return true;
          }
        });
      } catch (error) {
        this.defaultPrevented = true;
      }
    }
  }

  // eslint-disable-next-line
  CustomEventPolyfill.prototype = window.Event.prototype;
  CustomEventPolyfill.prototype.constructor = CustomEventPolyfill;
}();

export default CustomEvent;