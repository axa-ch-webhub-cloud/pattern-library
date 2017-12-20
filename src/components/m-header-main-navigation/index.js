import styles from './index.scss';
import getAttribute from '../../js/get-attribute';
import template from './_template';
import Stroke from './js/stroke';
import HeaderSubNavigation from './js/header-sub-navigation';
import { BaseComponentGlobal } from '../_abstract/component-types';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMainNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-header');
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-main-navigation`;

    const simpleMenu = getAttribute(this, 'simplemenu');

    this.stroke = new Stroke(this, {
      simpleMenu,
    });
    this.subNavigation = new HeaderSubNavigation(this, {
      simpleMenu,
    });
  }

  disconnectedCallback() {
    this.stroke.destroy();
    delete this.stroke;

    this.subNavigation.destroy();
    delete this.subNavigation;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-main-navigation', AXAHeaderMainNavigation);
});
