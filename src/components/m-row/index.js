import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';

class AXARow extends BaseComponentGlobal {
  static tagName = 'axa-row'

  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  static get observedAttributes() { return ['classes', 'no-gutters']; }

  constructor() {
    super({ styles });
  }

  // You may want to update stuff before rendering.
  willRenderCallback() {
    const { noGutters } = this;

    this.className = `${this.initialClassname} u-row ${classnames({ 'u-no-gutters': noGutters })}`;
  }
}

defineOnce(AXARow.tagName, AXARow);

export default AXARow;
