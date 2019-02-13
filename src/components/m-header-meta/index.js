import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAHeaderMeta extends BaseComponentGlobal {
  static tagName = 'axa-header-meta';

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-meta`;
  }
}

defineOnce(AXAHeaderMeta.tagName, AXAHeaderMeta);

export default AXAHeaderMeta;
