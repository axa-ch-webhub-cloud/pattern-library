import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withBaseGlobalAndAllHocs } from '../../js/abstract/hocs';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import { tableHeadPropTypes } from '../../js/prop-types';

const HTMLTableSectionElementBase = withBaseGlobalAndAllHocs(HTMLTableSectionElement);

class AXATHead extends HTMLTableSectionElementBase {
  static tagName = 'axa-thead'
  static builtInTagName = 'thead'

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    items: tableHeadPropTypes,
  }

  init() {
    super.init({ template, styles });
  }

  willRenderCallback() {
    const { classes } = this.props;

    this.className = classnames('m-thead', classes);
  }
}

defineOnce(AXATHead.tagName, AXATHead, { extends: AXATHead.builtInTagName });

export default AXATHead;
