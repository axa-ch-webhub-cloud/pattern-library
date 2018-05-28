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

  var out = {};
  var attributes = node.attributes;
  var length = attributes.length;


  for (var i = 0; i < length; ++i) {
    var attribute = attributes[i];
    var name = attribute.name;


    out[camelize(name)] = getAttribute(attribute);
  }

  return out;
}

export default getAttributes;