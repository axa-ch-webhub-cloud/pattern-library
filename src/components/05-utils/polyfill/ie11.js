/* from https://gist.github.com/nekman/297ebda63d6b00380058cbb0114296aa */
/* eslint-disable */
// _mutation
// http://dom.spec.whatwg.org/#mutation-method-macro
function _mutation(nodes) {
  if (!nodes.length) {
    throw new Error('DOM Exception 8');
  } else if (nodes.length === 1) {
    return typeof nodes[0] === 'string'
      ? document.createTextNode(nodes[0])
      : nodes[0];
  } else {
    var fragment = document.createDocumentFragment(),
      length = nodes.length,
      index = -1,
      node;

    while (++index < length) {
      node = nodes[index];

      fragment.appendChild(
        typeof node === 'string' ? document.createTextNode(node) : node
      );
    }

    return fragment;
  }
}

// do we need to polyfill Element.append?
if (typeof window.Element.prototype.append !== 'function') {
  // cf. https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  // Element.prototype.append
  window.Document.prototype.append = window.Element.prototype.append = function append() {
    this.appendChild(_mutation(arguments));
  };
}

// do we need to polyfill Element.getAttributeNames?
if (typeof window.Element.prototype.getAttributeNames !== 'function') {
  // polyfill from https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames
  window.Element.prototype.getAttributeNames = function() {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }
    return result;
  };
}

// do we need to polyfill Element.remove?
if (typeof window.Element.prototype.remove !== 'function') {
  window.Document.prototype.remove = window.Element.prototype.remove = function remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}
/* eslint-enable */
