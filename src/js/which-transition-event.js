/**
 * Find which transition event is supported.
 *
 * @returns {String} - Returns the supported transition event or empty string `''`.
 */
function whichTransitionEvent() 
{ 
  const tmpNode = document.createElement("div");
  const { style } = tmpNode;
  const transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  };
  const transitionsKeys = Object.keys(transitions);
  const { length } = transitionsKeys;
  let transition;

  for (let i = 0; i < length; ++i) {
    transition = transitionsKeys[i];

    if (style[transition] !== undefined) {
      return transitions[transition];
    }
  }

  return "";
}

export default whichTransitionEvent;
