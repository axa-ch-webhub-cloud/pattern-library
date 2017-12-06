import fire from './fire';
import on from './on';
import debounce from './debounce';

const cache = {};

/**
 * Publish a message regarding a given topic.
 *
 * @param {String} topic - A string defining the topic to publish to.
 * @param {*} arg - The data associate with the generated event.
 * @param {Element} [node=document] - The node to publish message to.
 */
export function publish(topic, arg, node = document) {
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
  if (!cache[topic]) {
    cache[topic] = debounce(onsubscribe(topic), 100);
  }

  cache[topic]();

  // Provide handle back for removal of topic
  return on(node, topic, func);
}

function onsubscribe(_topic) {
  return function initialPublish() {
    publish(`onsubscribe/${_topic}`, _topic);

    delete cache[_topic];
  };
}

export default {
  publish,
  subscribe,
};
