/**
 * Returns the proper owner window of a node.
 *
 * @param {Node} node - Any DOM node.
 * @returns {Window | *} - Returns the associated owner `window`.
 */
function ownerWindow(node) {
  var ownerDocument = node.ownerDocument;


  return ownerDocument.defaultView || ownerDocument.parentWindow;
}

export default ownerWindow;