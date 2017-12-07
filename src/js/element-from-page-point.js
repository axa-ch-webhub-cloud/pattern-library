import getScrollTop from './get-scroll-top';
import getScrollLeft from './get-scroll-left';

// Test with a point larger than the viewport. If it returns an element,
// then that means elementFromPoint takes page coordinates.
const elementFromPagePoint = ('pageYOffset' in window
  && document.elementFromPoint(getScrollLeft() + window.innerHeight, getScrollTop() + window.innerHeight)) ?
  document.elementFromPoint.bind(document) :
  elementFromPoint;

function elementFromPoint(x, y) {
  return document.elementFromPoint(x - getScrollLeft(), y - getScrollTop());
}

export default elementFromPagePoint;
