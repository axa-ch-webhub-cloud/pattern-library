import classnames from 'classnames';
import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class SubNavigationMobile extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.initialInnerHTML = this.innerHTML;
  }

  _render() {
    const flyout = this.hasAttribute('flyout');
    const classes = classnames('m-sub-navigation-mobile', {
      'm-sub-navigation-mobile--flyout': flyout,
    });

    this.className = classes;
    // this.innerHTML = `<div class="m-sub-navigation-mobile__box">${this.initialInnerHTML}</div>`;
  }
}

window.customElements.define('axa-sub-navigation-mobile', SubNavigationMobile);
