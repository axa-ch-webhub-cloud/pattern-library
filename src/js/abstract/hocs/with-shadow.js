const withShadow = Base =>
  class WithShadow extends Base {
    /**
     * Attach shadow DOM upon connect.
     *
     * @param {String} [mode='open']
     */
    connectedCallback(mode = 'open') {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      const shadowRoot = this.attachShadow({ mode });
      this._appendStyles(shadowRoot);
    }
  };

export default withShadow;
