class TopContentBar extends HTMLElement {
    connectedCallback() {
        const clone = document.importNode(, true);

        this.appendChild(clone);
    }
}

window.customElements.define('top-content-bar', TopContentBar);