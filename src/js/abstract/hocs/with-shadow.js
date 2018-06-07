const withShadow = Base =>
  /**
   * Base class {WithShadow}. This class extends the {Base} and
   * applies a shadow dom to it. Please be aware that only a few browser
   * implements this correctly. With other browser works as well, apart of the global contamination.
   * So if a inner shadow override a upper shadow and has the same class, the upper will be overridden from the
   * inners class as it has only one DOM.
   *
   * https://caniuse.com/#feat=shadowdom
   */
  class WithShadow extends Base {
    // @todo: still need to implement incremental rendering for shadow DOM
    constructor({ mode = 'open', ...options } = {}) {
      super(options);

      const shadowRoot = this.attachShadow({ mode });

      this._shadowRoot = shadowRoot;

      // cache class _appendStyles of withStyles to append to shadow root
      this._appendStylesProxy = this._appendStyles;
    }

    // proxy _appendStyles of withStyles to append to shadow root
    _appendStyles = () => {
      this._appendStylesProxy(this._shadowRoot);
    };
  };

export default withShadow;
