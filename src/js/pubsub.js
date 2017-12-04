const topics = {};

export function publish(topic, ...args) {
  console.log('publish', topic, topics[topic]);
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
    topics[topic] = [];
  }

  // Add the listener to queue
  const index = topics[topic].push(func) - 1;

  console.log('subscribe', topic, topics[topic]);

  // Provide handle back for removal of topic
  return unsubscribe;

  function unsubscribe() {
    console.log('unsubscribe', topic);
    delete topics[topic][index];

    console.log(topics);
  }
}

export default {
  publish,
  subscribe,
};
