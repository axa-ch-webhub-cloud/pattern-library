const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;

export default morph;

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph(newNode, oldNode) {
  const { nodeType, nodeName } = newNode;

  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode);
  }

  if ((nodeType === TEXT_NODE || nodeType === COMMENT_NODE) && oldNode.nodeValue !== newNode.nodeValue) {
    oldNode.nodeValue = newNode.nodeValue;
  }

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === 'INPUT') {
    updateInput(newNode, oldNode);
  } else if (nodeName === 'OPTION') {
    updateOption(newNode, oldNode);
  } else if (nodeName === 'TEXTAREA') {
    updateTextarea(newNode, oldNode);
  }
}

function copyAttrs(newNode, oldNode) {
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

function updateOption(newNode, oldNode) {
  updateAttribute(newNode, oldNode, 'selected');
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput(newNode, oldNode) {
  const { value: newValue } = newNode;
  const { value: oldValue } = oldNode;

  updateAttribute(newNode, oldNode, 'checked');
  updateAttribute(newNode, oldNode, 'disabled');

  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue);
    oldNode.value = newValue;
  }

  if (newValue === 'null') {
    oldNode.value = '';
    oldNode.removeAttribute('value');
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value');
  } else if (oldNode.type === 'range') {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue;
  }
}

function updateTextarea(newNode, oldNode) {
  const { value: newValue } = newNode;

  if (newValue !== oldNode.value) {
    oldNode.value = newValue;
  }

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
      return;
    }

    oldNode.firstChild.nodeValue = newValue;
  }
}

function updateAttribute(newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name];

    if (newNode[name]) {
      oldNode.setAttribute(name, '');
    } else {
      oldNode.removeAttribute(name);
    }
  }
}
