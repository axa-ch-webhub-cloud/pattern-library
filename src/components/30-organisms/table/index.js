import { LitElement, html, css, unsafeCSS } from 'lit-element';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

// subcomponents that can only be used with axa-table:

// semantics are done with aria: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role
export default class AXATable extends LitElement {
  static tagName = 'axa-table';
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <article class="o-table">
        <slot></slot>
      </article>
    `;
  }
}

defineOnce(AXATable.tagName, AXATable);
