import on from './on';

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
  const offStart = on(node, 'touchstart', touchstart);
  const offBody = on(body, 'touchmove', bodymove);
  let offMove;
  let offEnd;

  return cleanUp;

  function touchstart() {
    touchend();
    offMove = on(node, 'touchmove', touchmove);
    offEnd = on(node, 'touchend', touchend);

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
    offBody();

    touchend();
  }
}

export default preventOverscroll;
