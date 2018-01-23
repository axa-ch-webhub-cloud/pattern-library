import fire from './fire';
import on from './on';
import debounce from './debounce';
// import maybe, { toEqual } from './maybe';

// @TODO: this local variable isn't shared between redundant module instance
const subscriptions = {};

/* const logMaybe = maybe(console.log)(toEqual);
const logContext = logMaybe('context/enabled'); */

/**
 * Publish a message regarding a given topic.
 *
 * @param {String} topic - A string defining the topic to publish to.
 * @param {*} arg - The data associate with the generated event.
 * @param {Element} [node=document] - The node to publish message to.
 */
export function publish(topic, arg, node = document) {
  if (!subscriptions[topic]) {
    subscriptions[topic] = {
      count: 0,
      queue: [],
    };
  }

  const subscription = subscriptions[topic];
  const { queue } = subscription;

  // if no subscription enqueue and return early
  if (Array.isArray(queue)) {
    queue.push([topic, arg, node]);
    return;
  }

  // @TODO: atm this does not define cancelable nor bubbles
  // Cycle through topics queue, fire!
  fire(node, topic, arg);
}

/**
 * Subscribe to message reagarding a given topic.
 *
 * @param {String} topic - A string defining the topic to subscribe to.
 * @param {Function} func - A callback function to be executed on every published message.
 * @param {Element} [node=document] - The node to publish message to.
 * @returns {Function} - Returns a function to unsubscribe.
 */
export function subscribe(topic, func, node = document) {
  // first bind subscription handler
  const off = on(node, topic, func);

  if (!subscriptions[topic]) {
    subscriptions[topic] = {
      count: 0,
    };
  }

  const subscription = subscriptions[topic];

  // eslint-disable-next-line no-plusplus
  subscription.count++;

  // trigger onsubscribe handlers
  if (!subscription.onsubscribe) {
    subscription.onsubscribe = debounce(onsubscribe(topic), 100);
  }

  subscription.onsubscribe();

  // Provide handle back for removal of topic
  return unsubscribe;

  function unsubscribe() {
    // eslint-disable-next-line no-plusplus
    subscription.count--;

    off.call(this);

    if (subscription.count <= 0) {
      delete subscriptions[topic];
    }
  }
}

function onsubscribe(_topic) {
  return function initialPublish() {
    fire(document, 'pubsub/onsubscribe', _topic);
    fire(document, `pubsub/onsubscribe/${_topic}`, _topic);

    if (subscriptions[_topic]) {
      delete subscriptions[_topic].unsubscribe;
    }
  };
}

// flush queued published message w/o subscriptions
on(document, 'pubsub/onsubscribe', flush);

function flush({ detail: topic }) {
  if (!subscriptions[topic]) {
    subscriptions[topic] = {
      count: 0,
    };
  }

  const subscription = subscriptions[topic];
  const { queue } = subscription;

  if (Array.isArray(queue)) {
    queue.forEach(([_topic, arg, node]) => {
      fire(node, _topic, arg);
    });

    delete subscription.queue;
  }
}

export default {
  publish,
  subscribe,
};
