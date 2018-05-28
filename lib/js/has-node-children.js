var cleanText = function cleanText(txt) {
  return txt.trim(' ').replace(/^\s*[\r\n]/gm, '');
};

/**
 * Check if a node has children.
 *
 * @param {Element} fragment - The HTML element to check for children.
 * @param {Boolean} includeNotEmptyText - Whether or not to include empty text.
 * @returns {Boolean} - Returns `true` if the node has children, else `false`.
 */
var hasNodeChildren = function hasNodeChildren(fragment) {
  var includeNotEmptyText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (fragment.hasChildNodes()) {
    var nodeTypes = [1];
    if (includeNotEmptyText) {
      nodeTypes.push(3);
    }
    var children = fragment.childNodes;
    for (var i = 0; i < children.length; i++) {
      if (nodeTypes.indexOf(children[i].nodeType) > -1) {
        if (children[i].textContent && cleanText(children[i].textContent) || children[i].innerHTML) {
          return true;
        }
      }
    }
  }
  return false;
};

export default hasNodeChildren;