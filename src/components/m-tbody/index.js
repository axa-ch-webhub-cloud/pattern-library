import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withBase, withAllHocs } from '../../js/abstract/hocs';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import { tableBodyPropTypes } from '../../js/prop-types';

const HTMLTableTBodyElementBase = withAllHocs(withBase(HTMLTableSectionElement));

class AXATbody extends HTMLTableTBodyElementBase {
  static tagName = 'axa-tbody'
  static buildinTagName = 'tbody'

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    items: tableBodyPropTypes,
  }

  init() {
    super.init({ styles, template });
  }

  willRenderCallback() {
    const { classes } = this.props;

    this.className = classnames('m-tbody', classes);
  }
}

defineOnce(AXATbody.tagName, AXATbody, { extends: AXATbody.buildinTagName });

export default AXATbody;
