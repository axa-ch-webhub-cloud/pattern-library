/* base class for non-ShadowDom components */

// IMPORTS
import { LitElement } from 'lit-element';

// GLOBALS
const crossTagReferenceCounts = {}; // map: CustomElementTagName |-> (ownerDocument |-> referenceCount)

// BASE CLASS
class NoShadowDOM extends LitElement {
  createRenderRoot() {
    /**
     * Render template in light DOM. Note that shadow DOM features like
     * encapsulated CSS are unavailable as a result.
     */
    return this;
  }

  /* return inline style sheet iff first instance in current document or ShadowRoot */
  inlineStyles(maxCount = 2) {
    // get this node's document or ShadowRoot
    // N.B. needs polyfill for non-Chromium Edge / IE (https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode)
    const root = this.getRootNode();
    // get reference counts for all the documents/ShadowRoots with instances of <tagName>...</tagName>
    const referenceCounts = crossTagReferenceCounts[this.tagName] || new Map();
    // we have 1 more reference to a <tagName>...</tagName> in the current document/ShadowRoot (undefined | 0 === 0)
    const referenceCount = (referenceCounts.get(root) | 0) + 1;
    // store the updated reference count
    referenceCounts.set(root, referenceCount);
    crossTagReferenceCounts[this.tagName] = referenceCounts;
    // first time for the current document/ShadowRoot?
    if (referenceCount > 0 && referenceCount < maxCount) {
      // yes, remember our root in the instance, if not available natively (ownerDocument)
      // (for when we disconnect from the DOM)
      if (this.ownerDocument !== root) this._rootNode = root;
      // insert inline style sheet *before* the children it is supposed to style (to minimize FOUC)
      // N.B. https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/
      this.insertAdjacentHTML(
        'afterbegin',
        `<style>${this.constructor.styles}</style>`
      );
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // prepare to remove remembered document
    const referenceCounts = crossTagReferenceCounts[this.tagName];
    if (!referenceCounts) return;
    const root = this._rootNode || this.ownerDocument;
    const referenceCount = (referenceCounts.get(root) | 0) - 1;
    // if last reference is gone,
    if (referenceCount < 1) {
      // ... actually remove it from the Map
      referenceCounts.delete(root);
    } else {
      // ... otherwise remember we have one less reference
      referenceCounts.set(root, referenceCount);
    }
  }
}

export default NoShadowDOM;
