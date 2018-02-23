/**
 * Returns the proper owner window of a node.
 *
 * @param {Node} node - Any DOM node.
 * @returns {Window | *} - Returns the associated owner `window`.
 */
function ownerWindow(node) {
  const { ownerDocument } = node;

  return ownerDocument.defaultView || ownerDocument.parentWindow;
}

export default ownerWindow;
