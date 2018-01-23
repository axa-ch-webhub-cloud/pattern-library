import getAttributes from '../../js/get-attributes';
import { publish, subscribe } from '../../js/pubsub';

const memory = {};

const THROWED_ERROR = 'throwed';

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree
 */
export class BaseComponent extends HTMLElement {
  constructor(styles = '', template) {
    super();

    this._makeContextReady = this._makeContextReady.bind(this);
    this._initialise(styles, template);
  }

  /**
   * _initialise - description
   *
   * @param  {type} styles description
   * @param  {type} template description
   * @return {type}        description
   */
  _initialise(styles, template = null) {
    this.initialClassName = this.className;
    this._styles = styles;
    this._template = template;
  }

  /**
   * connectedCallback - description
   *
   * @return {type}  description
   */
  connectedCallback() {
    this._appendStyles();
    this.render();

    if (this.contextCallback) {
      this._makeContextReady();
    }
  }

  /**
   * disconnectedCallback - description
   *
   * @return {type}  description
   */
  disconnectedCallback() {
    if (this.unContextEnabled) {
      this.unContextEnabled();
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

  /**
   * render - method can be overriden and is called right after the component is connected
   * @TODO how to deal with rerenders, e.g. triggered by `attributeChangedCallback` or observed DOM
   *
   * @return {type}  description
   */
  render() { // eslint-disable-line
    if (this._hasRendered) {
      return;
    }

    const { _template: template } = this;

    if (template) {
      try {
        const childrenFragment = document.createDocumentFragment();

        while (this.firstChild) {
          childrenFragment.appendChild(this.firstChild);
        }

        const items = template(getAttributes(this), childrenFragment);

        if (Array.isArray(items)) {
          items.forEach((item) => {
            this.appendChild(item);
          });
        } else if (items) {
          if (typeof items === 'string') {
            const err = new Error(THROWED_ERROR);
            // @TODO: implement log system
            console.error( // eslint-disable-line
              `\n%cWeb Component %c${this.nodeName}%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: ${err.stack}\n`, // eslint-disable-line
              'color: #580000; font-size: 14px; line-height:16px;',
              'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
              'color: #580000; font-size: 14px; line-height:16px;',
            );
            throw err;
          }
          this.appendChild(items);
        }

        this._hasRendered = true;
      } catch (err) {
        if (err.message !== THROWED_ERROR) {
          console.error( // eslint-disable-line
            `\n%cWeb Component %c${this.nodeName}%c has an error while loading its template:\n${err}\n\nStack Trace: ${err.stack}\n`,
            'color: #580000; font-size: 14px; line-height:16px;',
            'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
            'color: #580000; font-size: 14px; line-height:16px;',
          );
        }
      }
    }
  }

  // @TODO: atm no data can be shared by enabling context, though this could be necessary
  /**
   * Provides an opt-in contextual scope for hierarchy-agnostic child components.
   */
  enableContext() {
    const contextName = this.nodeName.toLowerCase();

    this.__isContext = true;
    this.__contextName = contextName;

    // publish context/enabled with contextual node name
    publish('context/enabled', contextName);
  }

  /**
   * Opt-in to select a specific context by component name.
   *
   * @param name
   */
  selectContext(name) {
    this.__selectedContext = name.toLowerCase();
  }

  _makeContextReady({ detail: contextName } = {}) {
    if (this.contextNode) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.contextCallback(this.contextNode, contextName);
      }, 10);
    }

    if (this.unContextEnabled) {
      this.unContextEnabled();
    }

    this.unContextEnabled = subscribe('context/enabled', this._makeContextReady);
  }

  /**
   * Returns contextual scope, if defined by any parent component.
   *
   * @returns {ContextNode|Boolean} - Returns an associated context node if found, else `false`.
   */
  get contextNode() {
    const { __selectedContext } = this;
    let { parentNode } = this;

    while (parentNode && (!parentNode.__isContext || (__selectedContext && __selectedContext !== parentNode.__contextName))) {
      // eslint-disable-next-line prefer-destructuring
      parentNode = parentNode.parentNode;
    }

    return (parentNode && parentNode.__isContext) ? parentNode : false;
  }

  static uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16);
    });
  }
}

/**
 * Base class {BaseComponentShadow}. This class extends the {BaseComponent} and
 * applays a shadow dom to it. Please be aware that only a few browser
 * implements this correctly. With other browser works as well, apart of the global contaimination.
 * So if a inner shadow override a upper shadow and has the same class, the upper will be overridden from the
 * inners class as it has only one DOM.
 *
 * https://caniuse.com/#feat=shadowdom
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
    this.render();
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
    BaseComponentGlobal.appendGlobalStyles(this._styles, this.nodeName);
  }

  /**
   * @static appendGlobalStyles - This allows you to add styles also without having to
   * append the custom element into the dom
   *
   * @param  {type} styles description
   * @param  {type} nodeName description
   * @return {type}        description
   */
  static appendGlobalStyles(styles, nodeName = BaseComponent.uuidv4()) {
    if (styles) {
      if (!memory[styles]) {
        const styleNode = document.createElement('style');
        const styleText = document.createTextNode(styles);
        styleNode.appendChild(styleText);
        styleNode.setAttribute('data-c-name', nodeName.toLowerCase());
        document.querySelector('head').appendChild(styleNode);
        memory[styles] = true;
      }
    }
  }
}
