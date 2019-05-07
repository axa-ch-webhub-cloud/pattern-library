/* base class for non-ShadowDom components */

// IMPORTS
import { LitElement } from 'lit-element';

// MODULE GLOBALS

// map: customElementTagName |-> (ownerDocument |-> referenceCount)
const crossTagReferenceCounts = {};

// BASE CLASS
class NoShadowDOM extends LitElement {
  createRenderRoot() {
    // render template in light DOM. Note that shadow DOM features like
    // encapsulated CSS are unavailable as a result.
    return this;
  }

  /* return inline styles iff first instance in current document/ShadowRoot */
  inlineStyles() {
    // get this node's document or ShadowRoot
    // N.B. needs polyfill for non-Chromium Edge / IE
    // (https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode)
    const root = this.getRootNode();
    // get reference counts for all the documents/ShadowRoots with instances
    // of <tagName>...</tagName>
    const referenceCounts =
      crossTagReferenceCounts[this.tagName] || new WeakMap();
    // we have 1 more reference to a <tagName>...</tagName> in the current
    // document/ShadowRoot (undefined | 0 === 0)
    const referenceCount = (referenceCounts.get(root) | 0) + 1;
    // store the updated reference count
    referenceCounts.set(root, referenceCount);
    crossTagReferenceCounts[this.tagName] = referenceCounts;
    // first time for the current document/ShadowRoot?
    if (referenceCount === 1) {
      // yes, remember our root in the instance, if not available natively
      // (ownerDocument). This is for when we disconnect from the DOM.
      if (this.ownerDocument !== root) this._rootNode = root;
      // create inline style sheet...
      const style = document.createElement('style');
      // ... getting its *string* content from the class property 'styles'
      style.textContent = this.constructor.styles;
      // append it at the right place (outside of this instance's children)
      const parent = root instanceof window.ShadowRoot ? root : document.head;
      parent.appendChild(style);
    }
  }

  /* apply styles */
  connectedCallback() {
    // call lit-element's own implementation first
    super.connectedCallback();
    // apply inline styles - that method deduplicates itself, so is robust
    // against multiple invocations of connectedCallback (allowed by the spec)
    this.inlineStyles();
  }

  /* cleanup */
  disconnectedCallback() {
    super.disconnectedCallback();
    // prepare to remove remembered document
    const referenceCounts = crossTagReferenceCounts[this.tagName];
    if (!referenceCounts) return;
    const root = this._rootNode || this.ownerDocument;
    const referenceCount = (referenceCounts.get(root) | 0) - 1;
    // if last reference is gone,
    if (referenceCount < 1) {
      // ... actually remove it from the map, thus giving an early hint to GC
      referenceCounts.delete(root);
    } else {
      // ... otherwise remember we have one less reference
      referenceCounts.set(root, referenceCount);
    }
  }
}

export default NoShadowDOM;
