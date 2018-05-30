import toProp from './to-prop';

/**
 * Get an HTML attribute's value by it's name.
 * **Note:** The attribute's value get parsed as JSON if it's valid JSON.
 *
 * @param {Element} node - The HTML element to get an attribute from.
 * @param {String} name - The attribute's name.
 * @returns {*} - Returns the value of the attribute - in case of valid JSON the result of `JSON.parse` else plain text.
 */
function getAttribute(node, name) {
  if (typeof node.hasAttribute === 'function' && !node.hasAttribute(name)) {
    return false;
  }

  var value = node.value;


  if (!name) {
    // eslint-disable-next-line
    name = node.name;
  } else {
    value = node.getAttribute(name);
  }

  value = toProp(value, name);

  return value;
}

export default getAttribute;