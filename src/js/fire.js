import CustomEvent from './custom-event';

function fire(node, eventName, eventObject, eventInit = {}) {
  const event = new CustomEvent(eventName, {
    ...eventInit,
    detail: eventObject,
  });

  // Dispatch the event.
  node.dispatchEvent(event);
}

export default fire;
