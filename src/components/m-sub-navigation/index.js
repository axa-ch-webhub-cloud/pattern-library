import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';

class SubNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  render() {
    super.render();

    const flyout = this.hasAttribute('flyout');
    const classes = classnames('m-sub-navigation', {
      'm-sub-navigation--flyout': flyout,
    });

    this.className = classes;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-sub-navigation', SubNavigation);
}, false);
