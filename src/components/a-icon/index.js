import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAIcon extends BaseComponentGlobal {
  static tagName = 'axa-icon'

  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() { return ['icon', 'classes', 'path-prefix']; }

  constructor() {
    super({ styles, template });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  defineOnce(AXAIcon.tagName, AXAIcon);
});


export default AXAIcon;
