const withMonkeyPatches = Base =>
  /**
   * Guarantees that updates to the custom element's children do not mess up the **Flattened DOM** and keeps it's **Local DOM** untouched
   *
   * **Note:** this is obsolete if `ShadowDOM` is enabled.
   */
  class WithMonkeyPatches extends Base {
    /**
     * Monkey patch `innerText` API to re-rendering.
     *
     * @param {String} text
     */
    set innerText(text) {
      if (!this._hasTemplate || !this._hasRendered) {
        super.innerText = text;
        return;
      }

      const textNode = document.createTextNode(text);

      textNode.__isPatching = true;
      this._lightDOMRefs = [textNode];

      this.render();
    }

    /**
     * Monkey patch `textContent` API to re-rendering.
     *
     * @param {String} text
     */
    set textContent(text) {
      if (!this._hasTemplate || !this._hasRendered) {
        super.textContent = text;
        return;
      }

      const textNode = document.createTextNode(text);

      textNode.__isPatching = true;
      this._lightDOMRefs = [textNode];

      this.render();
    }

    /**
     * Monkey patch `innerHTML` API to re-rendering.
     *
     * @param {String} html
     */
    set innerHTML(html) {
      if (!this._hasTemplate || !this._hasRendered) {
        super.innerHTML = html;
        return;
      }

      const div = document.createElement('div');

      div.innerHTML = html;

      this._lightDOMRefs = Array.from(div.children).map((node) => {
        node.__isPatching = true;
        return node;
      });

      this.render();
    }

    /**
     * Monkey patch `appendChild` API to re-rendering.
     *
     * @param {Element} node
     */
    appendChild(node) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        super.appendChild(node);
        return;
      }

      node.__isPatching = true;
      this._lightDOMRefs.push(node);

      this.render();
    }

    /**
     * Monkey patch `insertBefore` API to re-rendering.
     *
     * @param {Element} newNode
     * @param {Element} referenceNode
     */
    insertBefore(newNode, referenceNode) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        super.insertBefore(newNode, referenceNode);
        return;
      }

      newNode.__isPatching = true;
      const { _lightDOMRefs } = this;
      const index = _lightDOMRefs.indexOf(referenceNode);

      if (index !== -1) {
        this._lightDOMRefs.splice(index, 0, newNode);
      } else {
        this._lightDOMRefs.push(newNode);
      }

      this.render();
    }

    /**
     * Monkey patch `removeChild` API to re-rendering.
     *
     * @param {Element} node
     */
    removeChild(node) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        super.removeChild(node);
        return;
      }

      node.parentNode.removeChild(node);

      // important: in case childrens are being wrapped
      // the wrapping nodes have to be removed too
      this._lightDOMRefs = this._lightDOMRefs.filter(ref => ref !== node);
      this.render();
    }

    /**
     * Monkey patch `replaceChild` API to re-rendering.
     *
     * @param {Element} newChild
     * @param {Element} oldChild
     */
    replaceChild(newChild, oldChild) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        super.replaceChild(newChild, oldChild);
        return;
      }

      oldChild.parentNode.replaceChild(newChild, oldChild);
    }
  };

export default withMonkeyPatches;
