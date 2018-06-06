const withStyles = Base =>
  /**
   * Appends an optional custom element's stylesheet to the document.
   */
  class WithStyles extends Base {
    /**
     * connectedCallback - description
     *
     * @return {type}  description
     */
    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      this._appendStyles();
    }

    /**
     * Append styles as inline `<style>` tag.
     *
     * @param {Element} [el=this] - The DOM Element where to append the CSS styles.
     * @private
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
  };

export default withStyles;
