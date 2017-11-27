const reJson = /^\s*[[{](?:.|[\r\n])*[\]}]\s*$/;

function getAttributes(node) {
  if (!node.hasAttributes) {
    return null;
  }

  const out = {};
  const { attributes } = node;
  const { length } = attributes;

  for (let i = 0; i < length; ++i) {
    const attribute = attributes[i];
    const { name } = attribute;
    let { value } = attribute;

    if (reJson.test(value)) {
      try {
        value = JSON.parse(value);
      } catch (error) {
        console.error(`Attributes ${node.nodeName} has an error:\n${error}\n`, value); // eslint-disable-line
      }
    }

    out[name] = value;
  }

  return out;
}

export default getAttributes;
