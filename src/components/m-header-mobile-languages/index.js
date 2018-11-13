import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import { EVENTS } from '../../js/ui-events';
import on from '../../js/on';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import valuePropType from '../../js/prop-types/value-prop-type';

class AXAHeaderMobileLanguages extends BaseComponentGlobal {
  static tagName = 'axa-header-mobile-languages'
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      url: urlPropType,
      code: PropTypes.string,
      isActive: PropTypes.bool,
    })),
    value: valuePropType,
  }

  unClickEnd

  constructor() {
    super({ styles, template });
  }

  handleClick = (e) => {
    if (e.target && e.target.dataset && e.target.dataset.language) {
      e.stopPropagation();
      this.setAttribute('value', e.target.dataset.language);
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-languages`;

    this.unClickEnd = on(
      this, EVENTS.CLICK, 'm-header-mobile-languages__link',
      this.handleClick, {
        capture: true, passive: false,
      },
    );
  }

  disconnectedCallback() {
    this.unClickEnd && this.unClickEnd();
  }

}

defineOnce(AXAHeaderMobileLanguages.tagName, AXAHeaderMobileLanguages);

export default AXAHeaderMobileLanguages;
