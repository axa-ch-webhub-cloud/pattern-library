import { LitElement, html, css, unsafeCSS } from 'lit-element';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

// subcomponents that can only be used with axa-table:
import AXATr from './components/axa-tr';
import AXATd from './components/axa-td';
import AXATh from './components/axa-th';
import AXAThead from './components/axa-thead';

// semantics are done with aria: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role

class AXATable extends LitElement {
  static tagName = 'axa-table';
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <article role="table">
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
