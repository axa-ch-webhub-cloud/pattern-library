import getAttribute from './get-attribute';

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

    out[name] = getAttribute(attribute);
  }

  return out;
}

export default getAttributes;
