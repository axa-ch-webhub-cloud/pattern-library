/* base class for non-ShadowDom components */

// IMPORTS
import { LitElement } from 'lit-element';

// MODULE GLOBALS

// map: customElementTagName |-> (ownerDocument |-> referenceCount)
const crossTagReferenceCounts = {};

// BASE CLASS
class NoShadowDOM extends LitElement {
  /* render template in light DOM */
  createRenderRoot() {
    return this;
  }

  /* append inline styles iff first instance in current document/ShadowRoot */
  inlineStyles() {
    // get this node's document or ShadowRoot, to be used as map key to attach
    // reference-count metadata to
    // N.B. getRootNode needs polyfill for non-Chromium Edge / IE
    // (https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode)
    const root = this.getRootNode();
    // retrieve all reference counts by tag name, initializing as needed
    // with WeakMap(). WeakMap (supported by IE11) acts as defense-in-depth
    // against memory leaks if disconnectedCallback is never called
    // (allowed by the spec).
    const referenceCounts =
      crossTagReferenceCounts[this.tagName] || new WeakMap();
    // one more reference, caused by this instance (undefined | 0 === 0)
    const referenceCount = (referenceCounts.get(root) | 0) + 1;
    // persist reference-count metadata
    referenceCounts.set(root, referenceCount);
    crossTagReferenceCounts[this.tagName] = referenceCounts;
    // no style sheet attached sofar?
    if (referenceCount === 1) {
      // remember our root in the instance, if not available natively
      // (ownerDocument), for DOM-removal-time cleanup.
      if (this.ownerDocument !== root) {
        this._rootNode = root;
      }
      // provision inline style sheet with *string* content
      // from the class property 'styles'
      const style = document.createElement('style');
      style.textContent = this.constructor.styles;
      // append it at the right place, *outside* of this instance's children
      // eslint-disable-next-line no-undef
      const parent = root instanceof ShadowRoot ? root : document.head;
      parent.appendChild(style);
    }
  }

  /* apply styles */
  connectedCallback() {
    super.connectedCallback();
    this.inlineStyles(); // contains built-in deduplication, so is
    // robust against multiple invocations of connectedCallback
    // (allowed by the spec)
  }

  /* DOM-removal cleanup in module globals */
  disconnectedCallback() {
    super.disconnectedCallback();
    // if applicable, prepare reference-count metadata
    const referenceCounts = crossTagReferenceCounts[this.tagName];
    if (!referenceCounts) {
      return;
    }
    const root = this._rootNode || this.ownerDocument;
    const referenceCount = (referenceCounts.get(root) | 0) - 1;
    // remove or update reference-count metadata
    if (referenceCount < 1) {
      referenceCounts.delete(root); // give an early hint to GC
    } else {
      referenceCounts.set(root, referenceCount);
    }
  }
}

export default NoShadowDOM;
