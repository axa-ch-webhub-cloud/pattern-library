const withShadow = Base =>
  class WithShadow extends Base {
    constructor(...args) {
      super(...args);

      const mode = 'open';
      const shadowRoot = this.attachShadow({ mode });

      this._shadowRoot = shadowRoot;
    }
    /**
     * Attach shadow DOM upon connect.
     *
     * @param {String} [mode='open']
     */
    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      this._appendStyles(this._shadowRoot);
    }
  };

export default withShadow;
