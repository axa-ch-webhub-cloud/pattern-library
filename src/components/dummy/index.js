class CoreDummy extends HTMLElement {
  connectedCallback() {
    this.className = 'sss';
    this.innerHTML = '<p>hdhdhd</p>';
    console.log(this.innerHTML);
  }
}

window.customElements.define('hello-world', CoreDummy);
