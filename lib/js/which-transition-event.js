/**
 * Find which transition event is supported.
 *
 * @returns {String} - Returns the supported transition event or empty string `''`.
 */
function whichTransitionEvent() {
  var tmpNode = document.createElement('div');
  var style = tmpNode.style;

  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };
  var transitionsKeys = Object.keys(transitions);
  var length = transitionsKeys.length;

  var transition = void 0;

  for (var i = 0; i < length; ++i) {
    transition = transitionsKeys[i];

    if (style[transition] !== undefined) {
      return transitions[transition];
    }
  }

  return '';
}

export default whichTransitionEvent;