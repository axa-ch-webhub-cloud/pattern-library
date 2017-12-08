import styles from './index.scss';
import getAttribute from '../../js/get-attribute';
import template from './_template';
import Stroke from './js/stroke';
import SubNavigation from './js/sub-navigation';
import Burger from './js/burger';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class MainNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-header');
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

  contextCallback(contextNode) {
    console.log(`contextCallback ${this.nodeName} from ${contextNode.nodeName}`);

    this.burger.contextNode = contextNode;
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

domready(() => {
  window.customElements.define('axa-main-navigation', MainNavigation);
});
