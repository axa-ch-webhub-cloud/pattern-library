import getScrollTop from './get-scroll-top';
import getScrollLeft from './get-scroll-left';
import { getViewportWidth, getViewportHeight } from './viewport';

// Test with a point larger than the viewport. If it returns an element,
// then that means elementFromPoint takes page coordinates.
var elementFromPagePoint = 'pageYOffset' in window && document.elementFromPoint(getScrollLeft() + getViewportHeight(), getScrollTop() + getViewportWidth()) ? document.elementFromPoint.bind(document) : elementFromPoint;

/**
 * Select an element by it's page coordinates.
 *
 * @param {Number} x - The x coordinate within the whole page.
 * @param {Number} y - The y coordinate within the whole page.
 * @returns {Element} - Returns the found element.
 */
function elementFromPoint(x, y) {
  return document.elementFromPoint(x - getScrollLeft(), y - getScrollTop());
}

export default elementFromPagePoint;