import toProp from './to-prop';

/**
 * Get an HTML attribute's value by it's name.
 * **Note:** The attribute's value get parsed as JSON if it's valid JSON.
 *
 * @param {Element|Attribute} node - The HTML element to get an attribute from.
 * @param {String} [name] - The attribute's name.
 * @returns {*} - Returns the value of the attribute - in case of valid JSON the result of `JSON.parse` else plain text.
 */
function getAttribute(node, name) {
  if (typeof node.hasAttribute === 'function' && !node.hasAttribute(name)) {
    return false;
  }

  // if it's an attribute node, get it's value directly
  let { value } = node;

  // and resolve it's name
  if (!name) {
    // eslint-disable-next-line
    ({ name } = node);
  } else { // fetch the correct attribute from the Element by it's name
    value = node.getAttribute(name);
  }

  value = toProp(value, name);

  return value;
}

export default getAttribute;
