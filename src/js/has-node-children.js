const cleanText = txt => txt.trim(' ').replace(/^\s*[\r\n]/gm, '');

/**
 * Check if a node has children.
 *
 * @param {Element} fragment - The HTML element to check for children.
 * @param {boolean} includeNotEmptyText - Whether or not to include empty text.
 * @returns {boolean} - Returns `true` if the node has children, else `false`.
 */
const hasNodeChildren = (fragment, includeNotEmptyText = false) => {
  if (fragment.hasChildNodes()) {
    const nodeTypes = [1];
    if (includeNotEmptyText) {
      nodeTypes.push(3);
    }
    const children = fragment.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (nodeTypes.indexOf(children[i].nodeType) > -1) {
        if ((children[i].textContent && cleanText(children[i].textContent)) || children[i].innerHTML) {
          return true;
        }
      }
    }
  }
  return false;
};

export default hasNodeChildren;
