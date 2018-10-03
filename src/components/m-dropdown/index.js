import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import DropDown from './js/drop-down';

class AXADropdown extends BaseComponentGlobal {
  static tagName = 'axa-dropdown'
  static propTypes = {
    inFlow: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      value: PropTypes.string,
    })),
    native: PropTypes.bool,
    size: PropTypes.oneOf(['sm']),
    title: PropTypes.string,
    value: PropTypes.string,
    iconsPathPrefix: PropTypes.string,
  }

  static get observedAttributes() {
    return ['in-flow', 'items', 'native', 'size', 'title', 'value', 'icons-path-prefix'];
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { inFlow, size, gpu } = this;

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
