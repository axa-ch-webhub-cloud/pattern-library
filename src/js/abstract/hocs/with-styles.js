const withStyles = Base =>
  class extends Base {
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

    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }
      this._appendStyles();
    }
  };

export default withStyles
