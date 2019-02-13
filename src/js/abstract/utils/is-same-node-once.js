const TEXT_NODE = 3;
let sameNodeCache = [];

/**
 * Make sure that another piece of code is/can managing that part of the DOM tree.
 *
 * @link https://github.com/choojs/nanomorph#caching-dom-elements
 * @param node
 */
export function isSameNodeOnce(node) {
  return;
  // @todo: react text-node updates break if we do this!
  /* eslint-disable */
  if (node.nodeType === TEXT_NODE) {
    return;
  }
  /* eslint-enable */

  /* eslint-disable no-unreachable */
  node.isSameNode = isSameNodeStopMorph;

  sameNodeCache.push(node);

  function isSameNodeStopMorph() {
    return true;
  }
}

/**
 * Make sure to clear overwritten `isSameNode` API after DOM diffing.
 */
export function clearIsSameNode() {
  let node;

  // eslint-disable-next-line no-cond-assign
  while ((node = sameNodeCache.pop())) {
    delete node.isSameNode;
  }

  sameNodeCache = [];
}
