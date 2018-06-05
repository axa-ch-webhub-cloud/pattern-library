import { publish, subscribe } from '../../pubsub';
import lifecycleLogger from './lifecycle-logger';

const withContext = Base =>
  class Context extends Base {
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
    enableContext() {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`enableContext -> ${this.nodeName}#${this._id}`);
      }

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
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`selectContext -> ${this.nodeName}#${this._id} <- context: ${name}`);
      }

      this.__selectedContext = name && name.toLowerCase();
    }

    _makeContextReady = ({ detail: contextName } = {}) => {
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
  };

export default withContext;
