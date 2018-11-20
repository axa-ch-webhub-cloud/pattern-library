import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import { withBase, withBaseGlobal, withAllHocs } from '../../js/abstract/hocs';
import defineOnce from '../../js/define-once';
import alignPropType from '../../js/prop-types/align-prop-type';
import sidePropType from '../../js/prop-types/side-prop-type';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

const HTMLTableElementBase = withAllHocs(withBaseGlobal(withBase(HTMLTableElement)));

class AXATable extends HTMLTableElementBase {
  static tagName = 'axa-table'
  static builtInTagName = 'table'

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    action: PropTypes.bool,
    all: PropTypes.bool,
    dense: PropTypes.bool,
    classes: PropTypes.string,
    cap: PropTypes.string,
    capAlign: alignPropType,
    capSide: sidePropType,
    items: PropTypes.string,
    headings: PropTypes.string,
    footers: PropTypes.string,
  }

  // Only use this if you need to observe attributes other than your prop-types!
  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  // static get observedAttributes() {
  //  return ['classes'];
  // }

  init() {
    super.init({ styles, template });

    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  willRenderCallback() {
    const { classes, action, all, dense } = this.props;

    this.className = classnames('o-table', classes, {
      'o-table--action': action,
      'o-table--all': all,
      'o-table--dense': dense,
    });
  }
}

defineOnce(AXATable.tagName, AXATable, { extends: AXATable.builtInTagName });

export default AXATable;
