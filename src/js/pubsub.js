import fire from './fire';
import on from './on';
import debounce from './debounce';

const cache = {};

export function publish(topic, arg, node = document) {
  // Cycle through topics queue, fire!
  fire(node, topic, arg);
}

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
