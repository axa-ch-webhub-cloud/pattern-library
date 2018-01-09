import { BaseComponentGlobal } from '../_abstract/component-types';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import DropDown from '../m-dropdown/js/drop-down';
import wcdomready from '../../js/wcdomready';

class AXAHeaderLanguages extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-languages js-dropdown`;

    this.dropDown = new DropDown(this, {
      containerClass: null,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.dropDown.destroy();
    delete this.dropDown;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-languages', AXAHeaderLanguages);
});

export default AXAHeaderLanguages;
