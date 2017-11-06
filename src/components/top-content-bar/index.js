class TopContentBar extends HTMLElement {
    connectedCallback() {
        //const clone = document.importNode(, true);

        //this.appendChild(clone);

        const type = this.getAttribute('type');

        this.className = `c-top-content-bar c-top-content-bar--${type}`;

        console.log(this.className)
    }
}

window.customElements.define('top-content-bar', TopContentBar);