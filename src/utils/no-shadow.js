/* base class for non-ShadowDom components */

import InlineStyles from './inline-styles';

export default class NoShadowDOM extends InlineStyles {
  /* apply styles */
  connectedCallback() {
    super.connectedCallback();
    this.inlineStyles(); // contains built-in deduplication, so is
    // robust against multiple invocations of connectedCallback
    // (allowed by the spec)
  }

  /* render template in light DOM */
  createRenderRoot() {
    return this;
  }
}
