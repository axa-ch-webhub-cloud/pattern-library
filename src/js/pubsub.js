import fire from './fire';
import on from './on';
import debounce from './debounce';

// @TODO: this local variable isn't shared between redundant module instance
const subscriptions = (function (window) {
  window.__subscribtions__ = window.__subscribtions__ || {};

  return window.__subscribtions__;
}(window));

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

  // flush queued published message w/o subscriptions
  const { queue } = subscription;

  if (Array.isArray(queue)) {
    flush(topic);
  } else {
    delete subscription.queue;
  }

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

function flush(_topic) {
  const subscription = subscriptions[_topic];
  const { queue } = subscription;

  if (Array.isArray(queue)) {
    queue.forEach(([topic, arg, node]) => {
      publish(topic, arg, node);
    });

    delete subscription.queue;
  }
}

function onsubscribe(_topic) {
  return function initialPublish() {
    publish(`onsubscribe/${_topic}`, _topic);

    delete subscriptions[_topic].unsubscribe;
  };
}

export default {
  publish,
  subscribe,
};
