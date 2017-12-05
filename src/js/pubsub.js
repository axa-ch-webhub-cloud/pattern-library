import fire from './fire';
import on from './on';

export function publish(topic, arg, node = document) {
  // Cycle through topics queue, fire!
  fire(node, topic, arg);
}

export function subscribe(topic, func, node = document) {
  // Provide handle back for removal of topic
  return on(node, topic, func);
}

export default {
  publish,
  subscribe,
};
