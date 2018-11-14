const memory = {};

const withBaseGlobal = Base =>
  /**
   * Base class {WithBaseGlobal}. This class extends the {BaseComponent} and
   * applies threat the component as a global element. the use is not recommended but
   * in some occasion it can make sense. Typical use case is if a component
   * is used more than once and has lots of css.
   * The style will be included only once in the DOM and is insert in the head of the main document.
   */
  class WithBaseGlobal extends Base {
    _appendStyles = () => {
      WithBaseGlobal.appendGlobalStyles(this._styles, this.nodeName);
    }

    /**
     * @static appendGlobalStyles - This allows you to add styles also without having to
     * append the custom element into the dom
     *
     * @param  {type} styles description
     * @param  {type} [nodeName=UUID] description
     * @return {type}        description
     */
    static appendGlobalStyles(styles, nodeName = Base.uuidv4()) {
      if (styles && !memory[nodeName]) {
        const styleNode = document.createElement('style');
        const styleText = document.createTextNode(styles);

        memory[nodeName] = true;

        styleNode.appendChild(styleText);
        styleNode.setAttribute('data-c-name', nodeName.toLowerCase());

        // append directly to head
        document.head.appendChild(styleNode);
      }
    }
  };

export default withBaseGlobal;
