import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class AXASubNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  render() {
    super.render();

    const flyout = this.hasAttribute('flyout');
    const classes = classnames(this.initialClassName, 'm-sub-navigation', {
      'm-sub-navigation--flyout': flyout,
    });

    this.className = classes;
  }
}

domready(() => {
  window.customElements.define('axa-sub-navigation', AXASubNavigation);
});
