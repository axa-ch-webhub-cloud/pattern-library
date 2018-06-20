import CustomEvent from './custom-event';

/**
 * Trigger a custom event on the node element.
 *
 * @param {Element|Document|Window|XMLHttpRequest} eventTarget - The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest).
 * @param {String} eventName -  A string representing the event type to dispatch.
 * @param {*} [eventObject=null] - The data associated with the dispatched event - will be available within `event.detail`.
 * @param {Object} [eventInit={}] - An object specifying if the event is `bubbles`, `cancelable` or `composed`.
 */
function fire(eventTarget, eventName, eventObject = null, eventInit = { bubbles: false, cancelable: true, composed: true }) {
  const event = new CustomEvent(eventName, {
    ...eventInit,
    detail: eventObject,
  });

  // Dispatch the event.
  return eventTarget.dispatchEvent(event);
}

export default fire;
