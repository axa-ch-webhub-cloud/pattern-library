import CustomEvent from './custom-event';

/**
 * Trigger a custom event on the node element.
 *
 * @param {Element|Document|Window|XMLHttpRequest} eventTarget - The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest).
 * @param {String} eventName -  A string representing the event type to dispatch.
 * @param {*} eventObject - The data associated with the dispatched event - will be available within `event.detail`.
 * @param {Object} [eventInit={}] - An object specifying if the event is `cancelable` or `bubbles`.
 */
function fire(eventTarget, eventName, eventObject, eventInit = {}) {
  const event = new CustomEvent(eventName, {
    ...eventInit,
    detail: eventObject,
  });

  // Dispatch the event.
  eventTarget.dispatchEvent(event);
}

export default fire;
