import lifecycleLogger from '../utils/lifecycle-logger';
import { clearIsSameNode, isSameNodeOnce } from '../utils/is-same-node-once';
import nanomorph from '../utils/component-morph';
import TemplateNoStringReturnException from '../utils/template-no-string-return-exception';

const hasFragmentChildren = !!document.createDocumentFragment().children;

const withRender = Base =>
  /**
   * Adds the ability to render external DOM-based templates,
   * applies changes incrementally by DOM-morphing and provides additional lifecycle hooks.
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
  class WithRender extends Base {
    constructor({ template, ...options } = {}) {
      super(options);

      this._template = template;
      this._hasTemplate = !!template;
      this._hasRendered = false;

      // hook into withUpdate's updated call
      this.updated = this.render;
    }

    /**
     * render - method can be overwritten and is called right after the component is connected.
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

          // IE11 does not support children on fragments
          // ref: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10060579/
          if (!hasFragmentChildren) {
            this.childrenFragment.children = Array.from(this.childrenFragment.childNodes).filter(node => node.nodeType === 1);
          }

          const items = template(this.props, this.childrenFragment, this);
          const renderFragment = document.createDocumentFragment();

          if (Array.isArray(items)) {
            items.forEach((item) => {
              renderFragment.appendChild(item);
            });
          } else if (items) {
            if (typeof items === 'string') {
              throw new TemplateNoStringReturnException(this);
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
          console.error(err);
        }
      }

      this._hasRendered = true;

      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`didRenderCallback -> ${this.nodeName}#${this._id} <- initial: ${initial}`);
      }

      this.didRenderCallback(initial);
    }

    /**
     * Only morph children of current custom element, not any other custom element.
     *
     * @returns {boolean}
     */
    skipChildren() {
      return !this._isMorphing;
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
  };

export default withRender;
