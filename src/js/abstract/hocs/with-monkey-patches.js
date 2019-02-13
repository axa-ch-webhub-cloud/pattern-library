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

      const div = document.createElement("div");

      div.innerHTML = html;

      this._lightDOMRefs = Array.from(div.children);

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

      this._lightDOMRefs.push(node);

      this.render();
    }
  };

export default withMonkeyPatches;
