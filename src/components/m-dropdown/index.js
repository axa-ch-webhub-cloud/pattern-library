import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import valuePropType from '../../js/prop-types/value-prop-type';
import DropDown from './js/drop-down';


class AXADropdown extends BaseComponentGlobal {
  static tagName = 'axa-dropdown'
  static propTypes = {
    inFlow: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: urlPropType,
      value: valuePropType,
    })),
    native: PropTypes.bool,
    size: PropTypes.oneOf(['sm']),
    title: PropTypes.string,
    value: valuePropType,
  }

  init() {
    super.init({ styles, template });
  }

  willRenderCallback() {
    const { props: { inFlow, size, gpu } } = this;

    this.className = classnames(this.initialClassName, 'm-dropdown js-dropdown', {
      'm-dropdown--in-flow': inFlow,
      'm-dropdown--gpu': gpu,
      [`m-dropdown--${size}`]: size,
    });
  }

  didRenderCallback() {
    if (this.dropDown) {
      this.dropDown.destroy();
    }

    this.dropDown = new DropDown(this, {
      containerClass: null,
    });
  }

  disconnectedCallback() {
    if (this.dropDown) {
      this.dropDown.destroy();
      delete this.dropDown;
    }
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);

export default AXADropdown;
