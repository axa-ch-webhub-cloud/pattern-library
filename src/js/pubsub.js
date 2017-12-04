const topics = {};

export function publish(topic, ...args) {
  // If the topic doesn't exist, or there's no listeners in queue, just leave
  if (!(topic in topics)) {
    return;
  }

  // Cycle through topics queue, fire!
  topics[topic].forEach(fireFunc);

  function fireFunc(func) {
    func(...args);
  }
}

export function subscribe(topic, func) {
  // Create the topic's object if not yet created
  if (!(topic in topics)) {
    topic[topic] = [];
  }

  // Add the listener to queue
  const index = topic[topic].push(func);

  // Provide handle back for removal of topic
  return unsubscribe;

  function unsubscribe() {
    delete topics[topic][index];
  }
}

export default {
  publish,
  subscribe,
};
