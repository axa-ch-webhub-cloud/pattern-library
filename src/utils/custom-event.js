export default (
  eventName,
  detail,
  target,
  { bubbles = true, composed = true }
) => {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles,
    composed,
  });
  target.dispatchEvent(event);
};
