const reWhiteSpace = /\s+/;
/**
 * It's common to work with lists of elements on the DOM.
 * Adding, removing or reordering elements in a list can be rather expensive.
 * To optimize this you can add an `id` attribute to a DOM node.
 *
 * @link https://github.com/choojs/nanomorph#reordering-lists
 * @param {Node} node - The custom element's root node.
 * @param {string|number} id - Any unique ID which serves the needs for an HTML id attribute.
 * @param {string|number} index - The current `index` of your mapped array item.
 * @paaram {string|number} [tag] - Use this to further tag id - needed if multiple lists/mappings happen within one template.
 *
 * @returns {string|number} - Returns a unique `id`.
 */
function getNodeId(node, id, index, tag) {
  const { nodeName, _id, constructor: { tagName, builtInTagName } } = node;

  // auto generate a unique id by
  return `${builtInTagName || tagName || nodeName}-${_id}-${id}-${index}-${tag}`.replace(reWhiteSpace, '');
}

export default getNodeId;
