const thisDoc = (document._currentScript || document.currentScript).ownerDocument; // eslint-disable-line

class CoreDummy extends HTMLElement {
  connectedCallback() {
    const template = thisDoc.querySelector('template').content;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // Adds a template clone into shadow root
    const clone = document.importNode(template, true);
    shadowRoot.appendChild(clone);
  }
}

window.customElements.define('hello-world', CoreDummy);
