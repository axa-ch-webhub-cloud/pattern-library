import toProp from './to-prop';
import camelize from './camelize';

/**
 * Get an HTML attribute's value by it's name.
 * **Note:** The attribute's value get parsed as JSON if it's valid JSON.
 *
 * @param {Element|Attribute} node - The HTML element to get an attribute from.
 * @param {String} [name] - The attribute's name.
 * @param {String} [type] - The attribute's type.
 * @returns {*} - Returns the value of the attribute - in case of valid JSON the result of `JSON.parse` else plain text.
 */
function getAttribute(node, name, type) {
  let derivedType = type;
  const isElementNode = node.nodeType === 1;

  if (isElementNode && !node.hasAttribute(name)) {
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

  if (!type && isElementNode) {
    const { constructor: { propTypes = {} } } = node;
    derivedType = propTypes[camelize(name)];
  }

  value = toProp(value, name, derivedType);

  return value;
}

export default getAttribute;
