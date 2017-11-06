import getCurrentScript from '../../functions/get-current-script'

const componentDoc = getCurrentScript(document).ownerDocument;

class CoreDummy extends HTMLElement {
  connectedCallback() {
    const clone = document.importNode(componentDoc.getElementById('core-dummy').content, true);

    this.appendChild(clone);
  }
}

window.customElements.define('core-dummy', CoreDummy);
