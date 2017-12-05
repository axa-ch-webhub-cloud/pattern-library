import styles from './index.scss';
import getAttribute from '../../js/get-attribute';
import template from './_template';
import Stroke from './js/stroke';
import SubNavigation from './js/sub-navigation';
import Burger from './js/burger';
import { BaseComponentGlobal } from '../_abstract/component-types';

class MainNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = 'm-main-navigation';

    const simpleMenu = getAttribute(this, 'simplemenu');

    this.stroke = new Stroke(this, {
      simpleMenu,
    });
    this.subNavigation = new SubNavigation(this, {
      simpleMenu,
    });
    this.burger = new Burger(this);
  }

  disconnectedCallback() {
    this.stroke.destroy();
    delete this.stroke;

    this.subNavigation.destroy();
    delete this.subNavigation;

    this.burger.destroy();
    delete this.burger;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-main-navigation', MainNavigation);
}, false);
