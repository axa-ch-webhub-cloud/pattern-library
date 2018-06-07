import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import fire from './fire';
import on from './on';
import debounce from './debounce';
// import maybe, { toEqual } from './maybe';

// @TODO: this local variable isn't shared between redundant module instance
var subscriptions = {};

/* const logMaybe = maybe(console.log)(toEqual);
const logContext = logMaybe('context/available'); */

/**
 * Publish a message regarding a given topic.
 *
 * @param {String} topic - A string defining the topic to publish to.
 * @param {*} arg - The data associate with the generated event.
 * @param {Element} [node=document] - The node to publish message to.
 */
export function publish(topic, arg) {
  var node = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

  if (!subscriptions[topic]) {
    subscriptions[topic] = {
      count: 0,
      queue: []
    };
  }

  var subscription = subscriptions[topic];
  var queue = subscription.queue;

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
export function subscribe(topic, func) {
  var node = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

  // first bind subscription handler
  var off = on(node, topic, func);

  // count number of subscriptions
  if (!subscriptions[topic]) {
    subscriptions[topic] = {
      count: 0
    };
  }

  var subscription = subscriptions[topic];

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

/**
 * Trigger the following subscription related events:
 * - `pubsub/onsubscribe` for any topic
 * - `pubsub/onsubscribe/${topic}` for a specific topic
 *
 * @param {String} _topic - A string defining the topic to subscribe to.
 * @returns {initialPublish} - Returns a function which triggers onsubscribe events.
 */
function onsubscribe(_topic) {
  return function initialPublish() {
    fire(document, 'pubsub/onsubscribe', _topic);
    fire(document, 'pubsub/onsubscribe/' + _topic, _topic);

    if (subscriptions[_topic]) {
      delete subscriptions[_topic].unsubscribe;
    }
  };
}

// flush queued published message w/o subscriptions
on(document, 'pubsub/onsubscribe', flush);

/**
 * Flush publish cache as soon as any given topic has subscribtions.
 *
 * @param {String} topic - A string defining the topic to subscribe to.
 */
function flush(_ref) {
  var topic = _ref.detail;

  if (!subscriptions[topic]) {
    subscriptions[topic] = {
      count: 0
    };
  }

  var subscription = subscriptions[topic];
  var queue = subscription.queue;


  if (Array.isArray(queue)) {
    queue.forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 3),
          _topic = _ref3[0],
          arg = _ref3[1],
          node = _ref3[2];

      fire(node, _topic, arg);
    });

    delete subscription.queue;
  }
}

export default {
  publish: publish,
  subscribe: subscribe
};