import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';

class AXACol extends BaseComponentGlobal {
  static tagName = 'axa-col'

  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  static get observedAttributes() { return ['classes', 'size', 'order', 'offset']; }

  constructor() {
    super({ styles });

    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  // You may want to update stuff before rendering.
  willRenderCallback() {
    const { classes } = this;
    let { size, order, offset } = this;

    if (!Array.isArray(size)) {
      size = [size];
    }

    if (!Array.isArray(order)) {
      order = [order];
    }

    if (!Array.isArray(offset)) {
      offset = [offset];
    }

    /* eslint-disable no-shadow */
    size = size.map(size => `u-col-${size}`);
    order = order.map(order => `u-order-${order}`);
    offset = offset.map(offset => `u-offset-${offset}`);
    /* eslint-enable no-shadow */

    this.className = classnames('m-col', 'u-col', this.initialClassname, classes, size, order, offset);
  }
}

defineOnce(AXACol.tagName, AXACol);

export default AXACol;
