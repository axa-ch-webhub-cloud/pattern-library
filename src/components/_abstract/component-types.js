const thisDoc = (document._currentScript || document.currentScript).ownerDocument; // eslint-disable-line

// guide: https://developers.google.com/web/fundamentals/web-components/customelements
export class BaseComponent extends HTMLElement {
  connectedCallback() {
    const template = thisDoc.querySelector('template').content;
    // Adds a template clone into shadow root
    const clone = document.importNode(template, true);
    this.appendChild(clone);
  }
}

export class BaseComponentShadow extends BaseComponent {
  connectedCallback() {
    const template = thisDoc.querySelector('template').content;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // Adds a template clone into shadow root
    const clone = document.importNode(template, true);
    shadowRoot.appendChild(clone);
  }
}
