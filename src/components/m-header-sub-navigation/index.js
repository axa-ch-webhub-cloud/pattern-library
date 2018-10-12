import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';

class AXAHeaderSubNavigation extends BaseComponentGlobal {
  static tagName = 'axa-header-sub-navigation'
  static propTypes = {
    flyout: PropTypes.bool,
    indexTitle: PropTypes.string,
    indexUrl: urlPropType,
    items: PropTypes.arrayOf(PropTypes.shape({
      isWide: PropTypes.bool,
      columns: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.shape({
          url: urlPropType,
          name: PropTypes.string,
          isActive: PropTypes.bool,
          preventDefault: PropTypes.bool,
        })),
      })),
    })),
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { flyout } = this;

    this.className = classnames(this.initialClassName, 'm-header-sub-navigation js-header-sub-navigation', {
      'm-header-sub-navigation--flyout': flyout,
    });
  }
}

defineOnce(AXAHeaderSubNavigation.tagName, AXAHeaderSubNavigation);

export default AXAHeaderSubNavigation;
