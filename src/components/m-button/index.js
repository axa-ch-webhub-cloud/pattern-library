import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import Button from './js/button';

class AXAButton extends BaseComponentGlobal {
  static tagName = 'axa-button'

  static get observedAttributes() { return ['arrow', 'classes', 'color', 'ghost', 'motion', 'size', 'tag', 'href', 'icon', 'target']; }

  constructor() {
    super({ styles, template });
  }

  didRenderCallback() {
    if (this.button) {
      this.button.destroy();
    }

    this.button = new Button(this);
  }

  disconnectedCallback() {
    if (this.button) {
      this.button.destroy();
      delete this.button;
    }
  }
}

defineOnce(AXAButton.tagName, AXAButton);

export default AXAButton;
