/**
 * Get the `y` coordinates within the document.
 *
 * @param {Node} node - Any DOM node.
 * @returns {Number} - Returns the position of the `y` coordinate in pixels.
 */
export default function posY(node) {
  var offsetParent = node;
  var y = 0;

  while (offsetParent) {
    y += offsetParent.offsetTop;
    // eslint-disable-next-line prefer-destructuring
    offsetParent = offsetParent.offsetParent;
  }

  return y;
}