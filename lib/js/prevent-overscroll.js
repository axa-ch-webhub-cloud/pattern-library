import on from './on';
import debounce from './debounce';

/**
 * Prevents overscroll on mobile devices.
 * Idea copied from following link.
 *
 * @link https://github.com/luster-io/prevent-overscroll
 * @link http://blog.christoffer.online/2015-06-10-six-things-i-learnt-about-ios-rubberband-overflow-scrolling/
 * @license MIT
 * @param {Element} node - Any element which is scrollable.
 * @param {Element} body [document.body] - A prent element which is scrollable.
 * @returns {cleanUp} - Returns a functions which properly removes the event listeners from the targets.
 */
function preventOverscroll(node) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

  var offStart = on(node, 'touchstart', touchstart, { passive: false });
  var offScroll = on(node, 'scroll', scroll);
  var offBody = on(body, 'touchmove', bodymove, { passive: false });
  var debouncedLimit = debounce(limitScroll, 100);
  var offMove = void 0;
  var offEnd = void 0;

  // clicking at hardware accelerated elements seem to prevent settings scrollTop
  // hence we need to make sure boundaries properly set before and after scroll
  limitScroll();

  return cleanUp;

  function touchstart() {
    touchend();
    offMove = on(node, 'touchmove', touchmove);
    offEnd = on(node, 'touchend', touchend);

    limitScroll();
  }

  function scroll() {
    // manually fix horizontal scroll in chrome
    node.scrollLeft = 0;

    debouncedLimit();
  }

  function touchmove(event) {
    // if the content is actually scrollable, i.e. the content is long enough
    // that scrolling can occur
    if (node.offsetHeight < node.scrollHeight) {
      event._isScroller = true;
    }

    // manually fix horizontal scroll in chrome
    node.scrollLeft = 0;
  }

  function touchend() {
    if (offMove) {
      offMove();
      offMove = null;
    }

    if (offEnd) {
      offEnd();
      offEnd = null;
    }

    limitScroll();
  }

  function limitScroll() {
    var scrollTop = node.scrollTop,
        scrollHeight = node.scrollHeight,
        offsetHeight = node.offsetHeight;

    var currentScroll = scrollTop + offsetHeight;

    // If we're at the top or the bottom of the containers
    // scroll, push up or down one pixel.
    //
    // this prevents the scroll from "passing through" to
    // the body.
    if (scrollTop === 0) {
      node.scrollTop = 1;
    } else if (currentScroll === scrollHeight) {
      node.scrollTop = scrollTop - 1;
    }
  }

  function bodymove(event) {
    // In this case, the default behavior is scrolling the body, which
    // would result in an overflow. Since we don't want that, we preventDefault.
    if (!event._isScroller) {
      event.preventDefault();
    }
  }

  function cleanUp() {
    offStart();
    offScroll();
    offBody();

    touchend();
  }
}

export default preventOverscroll;