/* global Event, CustomEvent */

function fire(node, eventName, eventObject) {
  // @TODO: maybe polyfill is needed for Event or CustomEvent, like document.createEvent...
  const event = !eventObject ?
    new Event(eventName)
    :
    new CustomEvent(eventName, {
      bubble: true,
      detail: eventObject,
    });

  // Dispatch the event.
  node.dispatchEvent(event);
}

export default fire;
