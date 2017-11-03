class CoreImports extends HTMLElement {
  connectedCallback() {
    var doc = document.querySelector('link[rel="import"]').import
    var text = doc.querySelector('core-imports');
  var clone = document.importNode(text.content, true);
  document.querySelector('#container').appendChild(clone);
  }
}

customElements.define('core-imports', CoreImports);
