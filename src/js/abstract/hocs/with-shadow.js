const withShadow = Base =>
  class WithShadow extends Base {
    constructor(...args) {
      super(...args);

      const mode = 'open';
      const shadowRoot = this.attachShadow({ mode });

      this._shadowRoot = shadowRoot;

      // proxy _appendStyles of withStyles to append to shadow root
      this._appendStylesProxy = this._appendStyles;
      this._appendStyles = () => {
        this._appendStylesProxy(this._shadowRoot);
      };
    }
  };

export default withShadow;
