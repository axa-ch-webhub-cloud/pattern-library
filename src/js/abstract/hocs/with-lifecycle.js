import maybe from '../../maybe';

// eslint-disable-next-line
const lifecycleLogger = maybe((...args) => console.log(...args))()(true);

export const withLifecycle = Base =>
  class extends Base {
    render() {
      const { _hasRendered: initial } = this;

      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`willRenderCallback -> ${this.nodeName}#${this._id} <- initial: ${!initial}`);
      }

      this.willRenderCallback(!initial);

      if (super.render) {
        super.render();
      }

      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`didRenderCallback -> ${this.nodeName}#${this._id} <- initial: ${!initial}`);
      }

      this.didRenderCallback(!initial);
    }

    /**
     * Optionally overwrite this public method, it get's triggered as soon as your component will render.
     * Here you will cleanup your lost DOM references or their associated events or stuff like that.
     *
     * @param [Boolean] initial - Whether or not this was the first render of this component.
     */
    willRenderCallback(initial) {
      if (super.willRenderCallback) {
        super.willRenderCallback(initial);
      }
    }

    /**
     * Optionally overwrite this public method, it get's triggered as soon as your component did render.
     * Here you will reattach your lost DOM references and events or stuff like that.
     *
     * @param [Boolean] initial - Whether or not this was the first render of this component.
     */
    didRenderCallback(initial) {
      if (super.didRenderCallback) {
        super.didRenderCallback(initial);
      }
    }
  };
