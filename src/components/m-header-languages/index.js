import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import valuePropType from "../../js/prop-types/value-prop-type";
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import DropDown from '../m-dropdown/js/drop-down';

class AXAHeaderLanguages extends BaseComponentGlobal {
  static tagName = 'axa-header-languages'
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      url: urlPropType,
      name: PropTypes.string,
      isActive: PropTypes.bool,
    })),
    value: valuePropType,
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    this.className = `${this.initialClassName} m-header-languages js-dropdown`;
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
    super.disconnectedCallback();
    if (this.dropDown) {
      this.dropDown.destroy();
      delete this.dropDown;
    }
  }
}

defineOnce(AXAHeaderLanguages.tagName, AXAHeaderLanguages);

export default AXAHeaderLanguages;
