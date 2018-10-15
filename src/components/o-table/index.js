import PropTypes from 'prop-types';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import alignPropType from '../../js/prop-types/align-prop-type';
import sidePropType from '../../js/prop-types/side-prop-type';
import valuePropType from '../../js/prop-types/value-prop-type';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

const cellPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    text: valuePropType,
    value: PropTypes.any,
  }),
]);
const rowPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(cellPropType),
  PropTypes.shape({
    cells: PropTypes.arrayOf(cellPropType),
  }),
]);
const itemsType = PropTypes.oneOfType([
  PropTypes.arrayOf(cellPropType),
  PropTypes.arrayOf(rowPropType),
]);

class AXATable extends BaseComponentGlobal {
  static tagName = 'axa-table'

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    caption: PropTypes.string,
    captionAlign: alignPropType,
    captionSide: sidePropType,
    items: itemsType,
    headings: itemsType,
    footers: itemsType,
  }

  // Only use this if you need to observe attributes other than your prop-types!
  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  // static get observedAttributes() {
  //  return ['classes'];
  // }

  constructor() {
    super({ styles, template });

    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  willRenderCallback() {
    this.className = 'a-table__root';
  }
}

defineOnce(AXATable.tagName, AXATable);

export default AXATable;
