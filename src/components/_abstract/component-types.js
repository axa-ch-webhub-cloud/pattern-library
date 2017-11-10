// guide: https://developers.google.com/web/fundamentals/web-components/customelements
const cScript = (document._currentScript || document.currentScript);
const memory = {};

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree
 */
export class BaseComponent extends HTMLElement {
  constructor(styles = '') {
    super();
    this._styles = styles;
    let thisDoc;
    if (window.HTMLImports) {
      thisDoc = HTMLImports.importForElement(cScript);
    } else {
      thisDoc = cScript.ownerDocument;
    }
    this.template = thisDoc.querySelector('template');
    if (!this.template || (window.HTMLImports && thisDoc !== HTMLImports.importForElement(this.template))) {
      // This element is contained in another import, skip.
      this.template = null;
    }
    if (this.template) {
      this.clone = document.importNode(this.template.content, true);
    }
  }
  /**
   * connectedCallback - description
   *
   * @return {type}  description
   */
  connectedCallback() {
    this._appendStyles();
    if (this.template && this.clone) {
      this.appendChild(this.clone);
    }
  }
  /**
   * _appendStyles - description
   *
   * @return {type}  description
   */
  _appendStyles(el = this) {
    if (this._styles) {
      const styleNode = document.createElement('style');
      const styleText = document.createTextNode(this._styles);
      styleNode.appendChild(styleText);
      if (el.insertAdjacentElement) {
        el.insertAdjacentElement('afterbegin', styleNode);
      } else {
        el.appendChild(styleNode);
      }
    }
  }
}

/**
 * Base class {BaseComponentShadow}. This class extends the {BaseComponent} and
 * applays a shadow dom to it
 */
export class BaseComponentShadow extends BaseComponent {
  /**
   * connectedCallback - description
   *
   * @param  {type} mode = 'open' description
   * @return {type}               description
   */
  connectedCallback(mode = 'open') {
    const shadowRoot = this.attachShadow({ mode });
    this._appendStyles(shadowRoot);
    if (this.template && this.clone) {
      shadowRoot.appendChild(this.clone);
    }
  }
}

/**
 * Base class {BaseComponentGlobal}. This class extends the {BaseComponent} and
 * applays threat the component as a global element. the use is not recomended but
 * in some occasion it can make sense. Typical use case is if a component
 * is used more than once and has lots of css.
 * The style will be included only once in the DOM and is insert in the head of the main document.
 */
export class BaseComponentGlobal extends BaseComponent {
  _appendStyles() {
    if (this._styles) {
      if (!memory[this._styles]) {
        const styleNode = document.createElement('style');
        const styleText = document.createTextNode(this._styles);
        styleNode.appendChild(styleText);
        styleNode.setAttribute('data-c-name', this.nodeName.toLowerCase());
        document.querySelector('head').appendChild(styleNode);
        memory[this._styles] = true;
      }
    }
  }
}
