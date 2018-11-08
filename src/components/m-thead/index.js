import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withBase, withAllHocs } from '../../js/abstract/hocs';
import defineOnce from '../../js/define-once';
// import the styles used for this component
// import styles from './index.scss';
// import the template used for this component
import template from './_template';
import { tableHeadPropTypes } from '../../js/prop-types';

const HTMLTableSectionElementBase = withAllHocs(withBase(HTMLTableSectionElement));

class AXATHead extends HTMLTableSectionElementBase {
  static tagName = 'axa-thead'
  static buildinTagName = 'thead'

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    items: tableHeadPropTypes,
  }

  init() {
    super.init({ template });
  }

  willRenderCallback() {
    const { classes } = this.props;

    this.className = classnames('m-thead', classes);
  }
}

defineOnce(AXATHead.tagName, AXATHead, { extends: AXATHead.buildinTagName });

export default AXATHead;
