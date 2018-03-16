import getAttributes from '../get-attributes';
import { publish, subscribe } from '../pubsub';

const THROWED_ERROR = 'throwed';

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree.
 *
 * **Light DOM**
 * The light DOM are the provided children from the users of your component (light meaning easy to digest).
 *
 * ```html
 * <axa-example>
 *   <div>This is some light DOM for axa-example</div>
 * </axa-example>
 * ```
 *
 * **Local DOM**
 * The local DOM is the DOM tree rendered by the component itself (in our case provided by `template`).
 *
 * ```js
 * function(props, childrenFragment) {
 *   return bel`<article>
 *     ${childrenFragment} <!-- light DOM injection point -->
 *   </article>`;
 * }
 * ```
 *
 * **Flattened DOM**
 * The flattened DOM is the final product where the user's light DOM is injected into the Components local DOM.
 *
 * ```html
 * <axa-example>
 *   <article>
 *     <div>This is some light DOM for axa-example</div> <!-- light DOM injection point -->
 *   </article>
 * </axa-example>
 * ```
 */
export default class BaseComponent extends HTMLElement {
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
    this._hasTemplate = !!template;
    this._hasRendered = false;
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

    this._hasRendered = false;
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
   * render - method can be overwritten and is called right after the component is connected
   * @TODO how to deal with re-renders, e.g. triggered by `attributeChangedCallback` or observed DOM
   *
   * @return {type}  description
   */
  render() { // eslint-disable-line
    if (!this._hasTemplate) {
      return;
    }

    const { _template: template } = this;

    try {
      // At initial rendering -> collect the light DOM first
      if (!this._hasRendered) {
        const childrenFragment = document.createDocumentFragment();
        const lightDOMRefs = [];

        while (this.firstChild) {
          lightDOMRefs.push(this.firstChild);
          childrenFragment.appendChild(this.firstChild);
        }

        this._lightDOMRefs = lightDOMRefs;
        this.childrenFragment = childrenFragment;
      } else { // Reuse the light DOM for subsequent rendering
        this._lightDOMRefs.forEach((ref) => {
          // Note: DocumentFragments always get emptied after being appended to another document (they get moved)
          // so we can always reuse this
          this.childrenFragment.appendChild(ref);
        });
      }

      const items = template(getAttributes(this), this.childrenFragment);
      const renderFragment = document.createDocumentFragment();

      if (Array.isArray(items)) {
        items.forEach((item) => {
          renderFragment.appendChild(item);
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
        renderFragment.appendChild(items);
      }

      const { _hasRendered: initial } = this;

      this.willRenderCallback(!initial);

      // rebuild the whole DOM subtree
      // @todo: this will break/disconnect previous DOM references, associated events and stuff like that
      // @todo: may bneed to be improved by DOM diffing, JSX, whatever
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
      super.appendChild(renderFragment);

      this._hasRendered = true;

      this.didRenderCallback(!initial);
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

  /**
   * Optionally overwrite this public method, it get's triggered as soon as your component will render.
   * Here you will cleanup your lost DOM references or their associated events or stuff like that.
   *
   * @param [Boolean] initial - Whether or not this was the first render of this component.
   */
  willRenderCallback(initial) {} // eslint-disable-line

  /**
   * Optionally overwrite this public method, it get's triggered as soon as your component did render.
   * Here you will reattach your lost DOM references and events or stuff like that.
   *
   * @param [Boolean] initial - Whether or not this was the first render of this component.
   */
  didRenderCallback(initial) {} // eslint-disable-line

  /**
   * Monkey patch `innerText` API to re-rendering.
   *
   * @param {String} text
   */
  set innerText(text) {
    if (!this._hasTemplate || !this._hasRendered) {
      super.innerText = text;
      return;
    }

    const textNode = document.createTextNode(text);

    this._lightDOMRefs = [textNode];

    this.render();
  }

  /**
   * Monkey patch `textContent` API to re-rendering.
   *
   * @param {String} text
   */
  set textContent(text) {
    if (!this._hasTemplate || !this._hasRendered) {
      super.textContent = text;
      return;
    }

    const textNode = document.createTextNode(text);

    this._lightDOMRefs = [textNode];

    this.render();
  }

  /**
   * Monkey patch `innerHTML` API to re-rendering.
   *
   * @param {String} html
   */
  set innerHTML(html) {
    if (!this._hasTemplate || !this._hasRendered) {
      super.innerHTML = html;
      return;
    }

    const div = document.createElement('div');

    div.innerHTML = html;

    this._lightDOMRefs = Array.from(div.children);

    this.render();
  }

  /**
   * Monkey patch `appendChild` API to re-rendering.
   *
   * @param {Element} node
   */
  appendChild(node) {
    if (!this._hasTemplate || !this._hasRendered) {
      super.appendChild(node);
      return;
    }

    this._lightDOMRefs.push(node);

    this.render();
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
    this.__selectedContext = name && name.toLowerCase();
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
