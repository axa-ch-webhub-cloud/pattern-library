import { freeByValue } from "./free";

/**
 * With outside events you can bind to an event that will be triggered only when a specific “originating” event occurs outside the element in question.
 *
 * @param {Node} node - The node is an Element in a document that supports events.
 * @param {string} eventName - A string representing the event type to listen for.
 * @param {Function} func - A function which receives a notification when an event of the specified type occurs.
 * @param {Boolean} [capture=true] - A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
 * @returns {off} - Returns a functions which properly removes the event listener from the target.
 */
function outer(node, eventName, func, capture = true) {
  const root = node.ownerDocument.documentElement;

  root.addEventListener(eventName, handler, capture);

  return off;

  function off() {
    root.removeEventListener(eventName, handler, capture);

    freeByValue(this, off);
  }

  function handler(e) {
    const { target } = e;

    if (!node.contains(target) && node !== target) {
      func(e);
    }
  }
}

export default outer;
