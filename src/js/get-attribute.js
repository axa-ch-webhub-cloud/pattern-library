const reJson = /^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;

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
