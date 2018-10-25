import styles from './index.scss';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';

class AXAHeader extends BaseComponentGlobal {
  static tagName = 'axa-header'

  init() {
    super.init({ styles });

    this.provideContext();
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-header`;
  }
}

defineOnce(AXAHeader.tagName, AXAHeader);

export default AXAHeader;
