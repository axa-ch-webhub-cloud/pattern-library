const memory = {};

export const withGlobalStyles = Base =>
  class extends Base {
    _appendStyles() {
      this.appendGlobalStyles(this._styles, this.nodeName);
    }

    /**
     * @static appendGlobalStyles - This allows you to add styles also without having to
     * append the custom element into the dom
     *
     * @param  {type} styles description
     * @param  {type} nodeName description
     * @return {type}        description
     */
    static appendGlobalStyles(styles, nodeName = this.uuidv4()) {
      if (styles) {
        if (!memory[styles]) {
          const styleNode = document.createElement('style');
          const styleText = document.createTextNode(styles);
          styleNode.appendChild(styleText);
          styleNode.setAttribute('data-c-name', nodeName.toLowerCase());
          document.querySelector('head').appendChild(styleNode);
          memory[styles] = true;
        }
      }
    }
  };
