import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';

class AXALink extends BaseComponentGlobal {
  static tagName = 'axa-link'

  static get observedAttributes() { return ['color', 'size', 'motion', 'arrow', 'href', 'listed', 'icon', 'deco', 'icons-path-prefix', 'target']; }

  constructor() {
    super({ styles, template });
  }
}

defineOnce(AXALink.tagName, AXALink);

export default AXALink;
