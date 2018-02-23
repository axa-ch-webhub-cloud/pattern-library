const reJson = /^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;

/**
 * Get an HTML attribute's value by it's name.
 * **Note:** The attribute's value get parsed as JSON if it's valid JSON.
 *
 * @param {Element} node - The HTML element to get an attribute from.
 * @param {String} name - The attribute's name.
 * @returns {*} - Returns the value of the attribute.
 */
function getAttribute(node, name) {
  if (typeof node.hasAttribute === 'function' && !node.hasAttribute(name)) {
    return false;
  }

  let { value } = node;

  if (!name) {
    // eslint-disable-next-line
    name = node.name;
  } else {
    value = node.getAttribute(name);
  }

  if (!value || name === value) {
    value = true;
  } else if (reJson.test(value)) {
    try {
      value = JSON.parse(value);
    } catch (error) {
      // eslint-disable-next-line
      console.error(`Attribute ${node} has an error:\n${error}\n`, value);
    }
  }

  return value;
}

export default getAttribute;
