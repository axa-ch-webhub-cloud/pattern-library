import classnames from 'classnames';

import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXASubNavigation extends BaseComponentGlobal {
  static get observedAttributes() { return ['flyout', 'index-title', 'index-url', 'items']; }

  constructor() {
    super(styles, template);
  }

  willRenderCallback() {
    const { flyout } = this;

    this.className = classnames(this.initialClassName, 'm-header-sub-navigation js-header-sub-navigation', {
      'm-header-sub-navigation--flyout': flyout,
    });
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-sub-navigation', AXASubNavigation);
});

export default AXASubNavigation;
