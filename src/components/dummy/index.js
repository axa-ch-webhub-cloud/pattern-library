const mainDoc = document.currentScript.ownerDocument;

class CoreDummy extends HTMLElement {
  connectedCallback() {
    const clone = document.importNode(mainDoc.querySelector('#core-dummy').content, true);
    this.appendChild(clone);
  }
}

window.customElements.define('core-dummy', CoreDummy);
