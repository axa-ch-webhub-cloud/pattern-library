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
function preventOverscroll(node, body = document.body) {
  const offStart = on(node, 'touchstart', touchstart, { passive: false });
  const offScroll = on(node, 'scroll', debounce(limitScroll), 200);
  const offBody = on(body, 'touchmove', bodymove, { passive: false });
  let offMove;
  let offEnd;

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

  function touchmove(event) {
    // if the content is actually scrollable, i.e. the content is long enough
    // that scrolling can occur
    if (node.offsetHeight < node.scrollHeight) {
      event._isScroller = true;
    }
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
    const { scrollTop, scrollHeight, offsetHeight } = node;
    const currentScroll = scrollTop + offsetHeight;

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
