import PropTypes from 'prop-types';

import { withAllHocs, withBase } from '../../js/abstract/hocs';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

const TableCellBase = withAllHocs(withBase(HTMLTableCellElement));

class AXATd extends TableCellBase {
  static tagName = 'axa-td'
  static buildinTagName = 'td'

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
  }

  init() {
    super.init({ styles });

    this.logLifecycle = true;
  }

  willRenderCallback() {
    this.className = 'a-td';
  }

  didRenderCallback() {
    this.innerHTML = 'Rendered Built in Table Cell';
  }
}

defineOnce(AXATd.tagName, AXATd, { extends: AXATd.buildinTagName });

export default AXATd;
