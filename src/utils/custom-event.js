export default (eventName, detail, target, { bubbles = true, composed = true } = {}) => {
  // note: the spec(https://dom.spec.whatwg.org/#dom-customevent-customevent),
  // allows 'eventName' to be an existing native event name (e.g. 'change'), which
  // is thereby endowed with the ability to carry custom data (in 'detail')
  const event = new CustomEvent(eventName, {
    detail,
    bubbles,
    composed,
  });
  target.dispatchEvent(event);
};
