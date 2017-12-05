import CustomEvent from './custom-event';

function fire(node, eventName, eventObject) {
  const event = new CustomEvent(eventName, {
    detail: eventObject,
  });

  // Dispatch the event.
  node.dispatchEvent(event);
}

export default fire;
