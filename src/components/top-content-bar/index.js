class TopContentBar extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type');
    const box = document.createElement('div');

    box.className = 'o-top-content-bar__box';

    while(this.childNodes.length) {
      box.appendChild(this.firstChild)
    }

    this.className = `o-top-content-bar o-top-content-bar--${type}`;

    this.appendChild(box);
  }
}

window.customElements.define('axa-top-content-bar', TopContentBar);
