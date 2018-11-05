import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withAllHocs, withBase } from '../../js/abstract/hocs';
import defineOnce from '../../js/define-once';
import alignPropType from '../../js/prop-types/align-prop-type';
import floatPropType from '../../js/prop-types/float-prop-type';
import statePropType from '../../js/prop-types/state-prop-type';
// import the styles used for this component
import styles from './index.scss';

const TableCellBase = withAllHocs(withBase(HTMLTableCellElement));

class AXATd extends TableCellBase {
  static tagName = 'axa-td'
  static buildinTagName = 'td'

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    action: PropTypes.bool,
    align: alignPropType,
    bold: PropTypes.bool,
    dense: PropTypes.bool,
    float: floatPropType,
    state: statePropType,
    strong: PropTypes.bool,
  }

  init() {
    super.init({ styles });
  }

  willRenderCallback() {
    const { classes, action, align, bold, dense, float, state, strong } = this._props;

    this.className = classnames('a-td', classes, {
      'a-td--action': action,
      'a-td--strong': strong,
      'a-td--bold': bold,
      'a-td--dense': dense,
      [`u-align-${align}`]: align,
      [`a-td--${float}`]: float,
      [`a-td--state-${state}`]: state,
    });
  }
}

defineOnce(AXATd.tagName, AXATd, { extends: AXATd.buildinTagName });

export default AXATd;
