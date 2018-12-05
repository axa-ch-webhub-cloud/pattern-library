import { publish, subscribe } from '../../pubsub';
import lifecycleLogger from '../utils/lifecycle-logger';

const withContext = Base =>
  /**
   * Adds the ability to provide and consume contextual data.
   */
  class WithContext extends Base {
    init(options) {
      super.init(options);

      /**
       * Poll `contextNode` until it is available.
       *
       * @param contextName - Lowercase `nodeName` of the contextual node.
       * @private
       */
      // important: because of constructor caveats we have to override this lazily upon init
      this._makeContextReady = ({ detail: contextName } = {}) => {
        if (this.contextNode) {
          clearTimeout(this.timeoutId);
          this.timeoutId = setTimeout(() => {
            if (ENV !== PROD) {
              lifecycleLogger(this.logLifecycle)(`contextCallback -> ${this.nodeName}#${this._id} <- context: ${contextName}`);
            }

            this.contextCallback(this.contextNode, contextName);
          }, 10);
        }

        if (this.unContextEnabled) {
          this.unContextEnabled();
        }

        this.unContextEnabled = subscribe('context/available', this._makeContextReady);
      };
    }
    /**
     * connectedCallback - description
     *
     * @return {type}  description
     */
    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

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
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }

      if (this.unContextEnabled) {
        this.unContextEnabled();
      }
    }

    // @TODO: atm no data can be shared by enabling context, though this could be necessary
    /**
     * Provides an opt-in contextual scope for hierarchy-agnostic child components.
     */
    provideContext() {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`provideContext -> ${this.nodeName}#${this._id}`);
      }

      const contextName = this.nodeName.toLowerCase();

      this.__isContext = true;
      this.__contextName = contextName;

      // publish context/enabled with contextual node name
      publish('context/available', contextName);
    }

    /**
     * Opt-in to select a specific context by component name.
     *
     * @param {String} name - `nodeName` of the desired contextual node.
     */
    consumeContext(name) {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`consumeContext -> ${this.nodeName}#${this._id} <- context: ${name}`);
      }

      this.__consumedContext = name && name.toLowerCase();
    }

    /**
     * Returns contextual scope, if defined by any parent component.
     *
     * @returns {ContextNode|Boolean} - Returns an associated context node if found, else `false`.
     */
    get contextNode() {
      const { __consumedContext } = this;
      let { parentNode } = this;

      while (parentNode && (!parentNode.__isContext || (__consumedContext && __consumedContext !== parentNode.__contextName))) {
        // eslint-disable-next-line prefer-destructuring
        parentNode = parentNode.parentNode;
      }

      return (parentNode && parentNode.__isContext) ? parentNode : false;
    }
  };

export default withContext;
