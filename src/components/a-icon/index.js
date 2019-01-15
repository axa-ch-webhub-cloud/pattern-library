import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAIcon extends BaseComponentGlobal {
  static tagName = 'axa-icon'
  static propTypes = {
    icon: PropTypes.string,
    classes: PropTypes.string,
    pathPrefix: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  init() {
    super.init({ styles, template });
    this.className = `${this.classes} a-icon a-icon--tiny a-icon__root`;
  }

  get classes() {
    return this.getAttribute('classes');
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }

  get icon() {
    return this.getAttribute('icon');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  defineOnce(AXAIcon.tagName, AXAIcon);
});

export default AXAIcon;
