class TopContentBar extends HTMLElement {
    connectedCallback() {
        //const clone = document.importNode(, true);

        //this.appendChild(clone);

        const type = this.getAttribute('type');

        this.className = `o-top-content-bar o-top-content-bar--${type}`;

        console.log(this.className)
    }
}

window.customElements.define('top-content-bar', TopContentBar);