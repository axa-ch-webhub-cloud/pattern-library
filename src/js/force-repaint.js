/**
 * Force Browser to repaint node.
 *
 * @link https://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes/3485654#3485654
 * @param {Element} node - The DOM node to force repaint.
 */
function forceRepaint(node) {
  node.style.display = 'none';
  // eslint-disable-next-line no-unused-expressions
  node.offsetHeight; // no need to store this anywhere, the reference is enough
  node.style.display = '';
}

export default forceRepaint;
