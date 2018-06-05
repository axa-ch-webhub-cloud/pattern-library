import nanomorph from './component-morph';
import { isSameNodeOnce, clearIsSameNode } from './is-same-node-once';
import lifecycleLogger from './hocs/lifecycle-logger';

import withContext from './hocs/with-context';
import withMonkeyPatches from './hocs/with-monkey-patches';
import withUpdate from './hocs/with-update';

const THROWED_ERROR = 'throwed';
const ids = {};
const getId = (nodeName) => {
  if (!(nodeName in ids)) {
    ids[nodeName] = 0;
  }

  return ++ids[nodeName]; // eslint-disable-line no-plusplus
};


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
 * export default function(props, childrenFragment) {
 *   return nanohtml`<article>
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
export default withContext(withMonkeyPatches(withUpdate(class BaseComponent extends HTMLElement {
  constructor(styles = '', template) {
    super();

    this._initialise(styles, template);
    this._id = getId(this.nodeName);
  }

  /**
   * _initialise - description
   *
   * @param  {type} styles description
   * @param  {type} template description
   * @return {type}        description
   */
  _initialise(styles, template = null) {
    this._styles = styles;
    this._template = template;
    this._hasTemplate = !!template;
    this._hasRendered = false;
    this._isConnected = false;
  }

  /**
   * connectedCallback - description
   *
   * @return {type}  description
   */
  connectedCallback() {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`\n^^^ connectedCallback -> ${this.nodeName}#${this._id}`);
    }

    if (!this._isConnected) {
      this._isConnected = true;
    }

    this._appendStyles();
  }

  /**
   * disconnectedCallback - description
   *
   * @return {type}  description
   */
  disconnectedCallback() {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`$$$ disconnectedCallback -> ${this.nodeName}#${this._id}\n`);
    }

    this._isConnected = false;
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
    const initial = !this._hasRendered;

    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`willRenderCallback -> ${this.nodeName}#${this._id} <- initial: ${initial}`);
    }

    this.willRenderCallback(initial);

    if (this._hasTemplate) {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`render -> ${this.nodeName}#${this._id} <- initial: ${initial}`);
      }

      const { _template: template } = this;

      try {
        // At initial rendering -> collect the light DOM first
        if (initial) {
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
            // Important: Once the light DOM is live it shouldn't be moved out
            // instead make sure to clone it for incremental updates
            const refClone = ref.cloneNode(true);

            // Another piece of code is managing that part of the DOM tree.
            isSameNodeOnce(ref);
            isSameNodeOnce(refClone);

            // Note: DocumentFragments always get emptied after being appended to another document (they get moved)
            // so we can always reuse this
            this.childrenFragment.appendChild(refClone);
          });
        }

        const items = template(this._props, this.childrenFragment);
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
              `\n%cWeb Component %c${this.nodeName}%c#${this._id} does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: ${err.stack}\n`, // eslint-disable-line
              'color: #580000; font-size: 14px; line-height:16px;',
              'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
              'color: #580000; font-size: 14px; line-height:16px;',
            );
            throw err;
          }
          renderFragment.appendChild(items);
        }

        if (initial) {
          super.appendChild(renderFragment);
        } else {
          const wcClone = this.cloneNode(false);

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(`+++ incremental update -> ${this.nodeName}#${this._id}\n`);
          }

          wcClone._isMorphing = true;
          wcClone.appendChild(renderFragment);

          this._isMorphing = true;
          nanomorph(this, wcClone);
          clearIsSameNode();
          this._isMorphing = false;
        }
      } catch (err) {
        if (err.message !== THROWED_ERROR) {
          console.error( // eslint-disable-line
            `\n%cWeb Component %c${this.nodeName}%c#${this._id} has an error while loading its template:\n${err}\n\nStack Trace: ${err.stack}\n`,
            'color: #580000; font-size: 14px; line-height:16px;',
            'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
            'color: #580000; font-size: 14px; line-height:16px;',
          );
        }
      }
    }

    this._hasRendered = true;

    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`didRenderCallback -> ${this.nodeName}#${this._id} <- initial: ${initial}`);
    }

    this.didRenderCallback(initial);
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

  static uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16);
    });
  }
})));
