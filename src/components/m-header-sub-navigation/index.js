import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import wcdomready from '../../js/wcdomready';

class AXASubNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  render() {
    super.render();

    const flyout = this.hasAttribute('flyout');
    const classes = classnames(this.initialClassName, 'm-header-sub-navigation js-header-sub-navigation', {
      'm-header-sub-navigation--flyout': flyout,
    });

    this.className = classes;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-sub-navigation', AXASubNavigation);
});

export default AXASubNavigation;
