// IMPORTS
import { LitElement, css } from 'lit-element';
import withReact from '../../../utils/with-react';
import defineOnce from '../../../utils/define-once';

// GLOBALS
const styled = new WeakMap();

// CE
class MyTable extends LitElement {
  static get tagName() {
    return 'my-table';
  }

  createRenderRoot() {
    /**
     * Render template in light DOM. Note that shadow DOM features like
     * encapsulated CSS are unavailable as a result.
     *
     * This is done here to allow deep styling of table content -
     * ::slotted can only style immediate children!
     */
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    // prepare to avoid duplicate style-sheet insertion by remembering the document in a global map
    this._rootNode = this.getRootNode(); // typically document
    const { _rootNode: root } = this;
    const referenceCount = (styled.get(root) | 0) + 1;
    styled.set(root, referenceCount);
    // first time for this document?
    if (referenceCount === 1) {
      // yes, insert inline style sheet *before* the children it is supposed to style
      this.insertAdjacentHTML(
        'afterbegin',
        `<style>${this.constructor.styles.cssText}</style>`
      );
    }
  }

  disconnectedCallback() {
    // prepare to remove remembered document
    const root = this._rootNode;
    const referenceCount = (styled.get(root) | 0) - 1;
    // if last reference gone, actually remove it, otherwise record 1 less reference
    return referenceCount < 1
      ? styled.delete(root)
      : styled.set(root, referenceCount);
  }
}
MyTable.styles = css`
  my-table {
    display: block;
    color: #333;
    text-align: initial;
  }

  my-table table {
    border-spacing: 5px;
  }

  my-table caption {
    font-weight: bold;
    background: #eee;
    padding: 0.5em;
    margin-top: 0.5em;
  }

  my-table tbody tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  my-table tbody td,
  my-table thead th {
    color: #292db9;
    padding: 0.5em;
  }

  my-table td[data-action] {
    cursor: pointer;
    box-shadow: 0px 0px 1px 1px;
    border-radius: 5px;
  }

  my-table td[data-action]:hover {
    box-shadow: 0px 0px 1px 2px;
  }
`;

// EXPORTS
defineOnce('my-table', MyTable);
export default createElement => withReact(createElement, MyTable);
