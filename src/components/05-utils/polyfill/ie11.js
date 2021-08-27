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

// do we need to polyfill?
if (typeof window.Element.prototype.append !== 'function') {
  // cf. https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  // Element.prototype.append
  window.Document.prototype.append = window.Element.prototype.append = function append() {
    this.appendChild(_mutation(arguments));
  };
}
/* eslint-enable */
