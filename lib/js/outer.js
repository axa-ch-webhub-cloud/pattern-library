import on from './on';
import outerIOSShame from './shame/outer-ios-SHAME';

/**
 * With outside events you can bind to an event that will be triggered only when a specific “originating” event occurs outside the element in question.
 *
 * @param {Node} node - The node is an Element in a document that supports events.
 * @param {String} eventName - A string representing the event type to listen for.
 * @param {Function} func - A function which receives a notification when an event of the specified type occurs.
 * @param {Object} options - An options object that specifies characteristics about the event listener.
 * @param {Boolean} [options.capture=true] - A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
 * @param {Boolean} [options.passive=true] - A Boolean indicating that the listener will never call `preventDefault()`. If it does, the user agent should ignore it and generate a console warning.
 * @returns {off} - Returns a functions which properly removes the event listener from the target.
 */
function outer(node, eventName, func) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$capture = _ref.capture,
      capture = _ref$capture === undefined ? true : _ref$capture,
      _ref$passive = _ref.passive,
      passive = _ref$passive === undefined ? true : _ref$passive;

  var root = node.ownerDocument.documentElement;
  var off = on(root, eventName, handler, { capture: capture, passive: passive });

  outerIOSShame(root);

  return off;

  // eslint-disable-next-line consistent-return
  function handler(e) {
    var target = e.target;


    if (!node.contains(target) && node !== target) {
      return func(e);
    }
  }
}

export default outer;