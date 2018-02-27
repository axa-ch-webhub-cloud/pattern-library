import on from './on';

/**
 * Disables overscroll completely.
 *
 * @param {Element} node - Any element which is scrollable.
 * @returns {off} - Returns a function which properly removes the event listener from the target.
 */
function disableOverscroll(node) {
  return on(node, 'scroll touchstart touchmove', handleEvent);
}

function handleEvent(event) {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

export default disableOverscroll;
