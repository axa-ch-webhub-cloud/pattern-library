import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import DropDown from '../m-dropdown/js/drop-down';

class AXAHeaderLanguages extends BaseComponentGlobal {
  static tagName = 'axa-header-languages'

  static get observedAttributes() { return ['items']; }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

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

    this.dropDown.destroy();
    delete this.dropDown;
  }
}

defineOnce(AXAHeaderLanguages.tagName, AXAHeaderLanguages);

export default AXAHeaderLanguages;
