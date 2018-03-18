import classnames from 'classnames';
import styles from './index.scss';
import getAttribute from '../../js/get-attribute';
import template from './_template';
import Stroke from './js/stroke';
import HeaderNavigation from './js/header-navigation';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

class AXAHeaderNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-header-main');
  }

  connectedCallback() {
    super.connectedCallback();

    const hyphenate = this.hasAttribute('hyphenate');
    const simpleMenu = getAttribute(this, 'simplemenu');

    const classes = classnames(this.initialClassName, 'm-header-navigation', {
      'm-header-navigation--hyphenate': hyphenate,
    });

    this.className = classes;

    // simple menu nicht mehr brauchen. Stroke checkt if ein submenu da ist. un wenn ja dann mach default action
    this.stroke = new Stroke(this, {
      simpleMenu,
    });
    this.navigation = new HeaderNavigation(this, {
      simpleMenu,
    });
  }

  contextCallback(contextNode) {
    this.stroke.contextNode = contextNode;
  }

  didRenderCallback(initial) {
    if (!initial) {
      this.stroke.init();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.stroke) {
      this.stroke.destroy();
      delete this.stroke;
    }

    if (this.navigation) {
      this.navigation.destroy();
      delete this.navigation;
    }
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-navigation', AXAHeaderNavigation);
});

export default AXAHeaderNavigation;
