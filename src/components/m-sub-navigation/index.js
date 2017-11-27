import classnames from 'classnames';
import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class SubNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.initialInnerHTML = this.innerHTML;
  }

  _render() {
    super._render();

    const flyout = this.hasAttribute('flyout');
    const classes = classnames('m-sub-navigation', {
      'm-sub-navigation--flyout': flyout,
    });

    this.className = classes;
    // this.innerHTML = `<div class="m-sub-navigation__box">${this.initialInnerHTML}</div>`;
  }
}

window.customElements.define('axa-sub-navigation', SubNavigation);
