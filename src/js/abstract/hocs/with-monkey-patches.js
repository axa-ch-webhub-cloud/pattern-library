import isDocumentFragment from '../../is-document-fragment';

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
     *
     * @returns {DocumentFragment|Element|null} appendedChild
     */
    appendChild(node) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        return super.appendChild(node);
      }

      const { _lightDOMRefs } = this;

      if (isDocumentFragment(node)) {
        Array.from(node.childNodes).forEach((childNode) => {
          childNode.__isPatching = true;
          _lightDOMRefs.push(childNode);
        });
      } else {
        node.__isPatching = true;
        _lightDOMRefs.push(node);
      }

      this.render();

      return node;
    }

    /**
     * Monkey patch `append` API to re-rendering.
     *
     * @param {Element} nodes
     */
    append(...nodes) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        super.append(...nodes);
        return;
      }

      nodes.forEach((node) => {
        if (typeof node === 'string') {
          // eslint-disable-next-line no-param-reassign
          node = document.createTextNode(node);
        }

        node.__isPatching = true;
        this._lightDOMRefs.push(node);
      });

      this.render();
    }

    /**
     * Monkey patch `insertBefore` API to re-rendering.
     *
     * @param {Element} newNode
     * @param {Element} referenceNode
     *
     * @returns {DocumentFragment|Element|null} insertedNode
     */
    insertBefore(newNode, referenceNode) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        return super.insertBefore(newNode, referenceNode);
      }

      const { _lightDOMRefs } = this;
      let index = _lightDOMRefs.indexOf(referenceNode);

      // if not found -> push to the end of the array
      if (index !== -1) {
        index = _lightDOMRefs.length;
      }

      if (isDocumentFragment(newNode)) {
        Array.from(newNode.childNodes).forEach((childNode, childIndex) => {
          childNode.__isPatching = true;
          _lightDOMRefs.splice(index + childIndex, 0, childNode);
        });
      } else {
        newNode.__isPatching = true;
        _lightDOMRefs.splice(index, 0, newNode);
      }

      this.render();

      return newNode;
    }

    /**
     * Monkey patch `removeChild` API to re-rendering.
     *
     * @param {Element} node
     *
     * @returns {Element} removedNode
     */
    removeChild(node) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        return super.removeChild(node);
      }

      const removedNode = node.parentNode.removeChild(node);

      // important: in case childrens are being wrapped
      // the wrapping nodes have to be removed too
      this._lightDOMRefs = this._lightDOMRefs.filter(ref => ref !== node);
      this.render();

      return removedNode;
    }

    /**
     * Monkey patch `replaceChild` API to re-rendering.
     *
     * @param {Element} newChild
     * @param {Element} oldChild
     *
     * @returns {Element} replacedNode
     */
    replaceChild(newChild, oldChild) {
      if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
        return super.replaceChild(newChild, oldChild);
      }

      return oldChild.parentNode.replaceChild(newChild, oldChild);
    }
  };

export default withMonkeyPatches;
