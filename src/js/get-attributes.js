import getAttribute from './get-attribute';
import camelize from './camelize';

/**
 * Get all attributes of a node.
 *
 * @param {Element} node - The HTML element to get all attributes of.
 * @returns {?Object} - Returns a hash of all attributes or `null`.
 */
function getAttributes(node) {
  if (!node.hasAttributes) {
    return null;
  }

  const out = {};
  const { attributes } = node;
  const { length } = attributes;

  const { constructor: { propTypes = {} } } = node;

  for (let i = 0; i < length; ++i) {
    const attribute = attributes[i];
    const { name } = attribute;
    const key = camelize(name);

    out[key] = getAttribute(attribute, null, propTypes[key]);
  }

  return out;
}

export default getAttributes;
