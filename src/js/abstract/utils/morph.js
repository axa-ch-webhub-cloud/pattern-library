const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;

export default morph;

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph(newNode, oldNode) {
  const { nodeType } = newNode;

  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode);
  }

  if ((nodeType === TEXT_NODE || nodeType === COMMENT_NODE) && oldNode.nodeValue !== newNode.nodeValue) {
    oldNode.nodeValue = newNode.nodeValue;
  }
}

function copyAttrs(newNode, oldNode) {
  // IMPORTANT: cloned custom elements aren't connected
  // so only morph observed attributes
  const skipChildren = oldNode.skipChildren && oldNode.skipChildren();
  const {
    constructor: { observedAttributes },
  } = oldNode;
  const hasObservedAttributes = observedAttributes && Array.isArray(observedAttributes) && observedAttributes.length;
  // @todo: we may need to deal with attribute namespaces too in the future
  const shouldSkipAttr = attrName => skipChildren && hasObservedAttributes && observedAttributes.indexOf(attrName) === -1;
  const { attributes: oldAttrs } = oldNode;
  const { attributes: newAttrs } = newNode;
  let attrNamespaceURI = null;
  let attrValue = null;
  let fromValue = null;
  let attrName = null;
  let attr = null;

  for (let i = newAttrs.length - 1; i >= 0; --i) {
    attr = newAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;

    if (shouldSkipAttr(attrName)) {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (attrNamespaceURI) {
      const attrLocalName = attr.localName;

      // Important: getAttributeNS expects the localName of a namespaced attribute
      // ref: https://dom.spec.whatwg.org/#dom-element-getattributens
      // ref: https://www.w3.org/TR/DOM-Level-2-Core/glossary.html#dt-localname
      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrLocalName || attrName);
      if (fromValue !== attrValue) {
        // but setAttributeNS requires the fully qualified name
        // ref: https://dom.spec.whatwg.org/#dom-element-setattributens
        // ref: https://www.w3.org/TR/DOM-Level-2-Core/glossary.html#dt-qualifiedname
        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else if (!oldNode.hasAttribute(attrName)) {
      oldNode.setAttribute(attrName, attrValue);
    } else {
      fromValue = oldNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        // apparently values are always cast to strings, ah well
        if (attrValue === 'null' || attrValue === 'undefined') {
          oldNode.removeAttribute(attrName);
        } else {
          oldNode.setAttribute(attrName, attrValue);
        }
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  for (let j = oldAttrs.length - 1; j >= 0; --j) {
    attr = oldAttrs[j];

    if (attr.specified !== false) {
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;

      if (shouldSkipAttr(attrName)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          oldNode.removeAttributeNS(attrNamespaceURI, attrName);
        }
      } else if (!newNode.hasAttributeNS(null, attrName)) {
        oldNode.removeAttribute(attrName);
      }
    }
  }
}
