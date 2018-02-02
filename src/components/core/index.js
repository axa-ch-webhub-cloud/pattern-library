import wcdomready from '../../js/wcdomready';

class AXACore extends HTMLElement {
  connectedCallback() {
    const iconPath = this.getAttribute('icons-path');
    if (iconPath) {
      const httpObj = new XMLHttpRequest();
      httpObj.open('GET', iconPath, true);
      httpObj.send();
      httpObj.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = httpObj.responseText;
        div.style.display = 'none';
        document.body.insertBefore(div, document.body.childNodes[0]);
      };
    }
  }
}

wcdomready(() => {
  window.customElements.define('axa-core', AXACore);
});

export default AXACore;
