class TopContentBar extends HTMLElement {
    connectedCallback() {
        //const clone = document.importNode(, true);

        //this.appendChild(clone);

        const type = this.getAttribute('type');

        this.innerHTML = `
            <section class="c-top-content-bar c-top-content-bar--${type}">
                <p class="c-top-content-bar__text">Ein Test text</p>
                <button class="c-top-content-bar__button"></button>
            </section>
        `;
    }
}

window.customElements.define('top-content-bar', TopContentBar);