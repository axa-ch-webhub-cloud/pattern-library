import { LitElement, html, css, unsafeCSS } from 'lit-element';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

// subcomponents that can only be used with axa-table:
import AXATr from './components/axa-tr';
import AXATd from './components/axa-td';
import AXATh from './components/axa-th';
import AXAThead from './components/axa-thead';
import AXATbody from './components/axa-tbody';
import AXATfoot from './components/axa-tfoot';

// semantics are done with aria: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role
export default class AXATable extends LitElement {
  static tagName = 'axa-table';
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <article class="o-table" role="table">
        <slot></slot>
      </article>
    `;
  }
}

defineOnce(AXATable.tagName, AXATable);
defineOnce(AXATr.tagName, AXATr);
defineOnce(AXATd.tagName, AXATd);
defineOnce(AXATh.tagName, AXATh);
defineOnce(AXAThead.tagName, AXAThead);
defineOnce(AXATbody.tagName, AXATbody);
defineOnce(AXATfoot.tagName, AXATfoot);
