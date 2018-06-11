import wcdomready from '../../js/wcdomready';
import getAttributes from '../../js/get-attributes';

const axaPLibDefaults = {};

class AXACore extends HTMLElement {
  static tagName = 'axa-core'

  connectedCallback() {
    const attributes = getAttributes(this);
    const axaPLibConfig = {};

    if (attributes) {
      const { iconsPath } = attributes;

      if (iconsPath) {
        const httpObj = new XMLHttpRequest();

        axaPLibConfig.iconsPath = iconsPath;

        httpObj.open('GET', iconsPath, true);
        httpObj.send();
        httpObj.onload = () => {
          const div = document.createElement('div');
          div.innerHTML = httpObj.responseText;
          div.style.display = 'none';
          document.body.insertBefore(div, document.body.childNodes[0]);
        };
      }
    }

    window.__axaPLibConfig = {
      ...axaPLibDefaults,
      ...(window.__axaPLibConfig || {}),
      ...axaPLibConfig,
    };
  }
}

wcdomready(() => {
  window.customElements.define(AXACore.tagName, AXACore);
});

export default AXACore;
