import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import Stroke from './js/stroke';
import HeaderNavigation from './js/header-navigation';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/url-prop-type';

class AXAHeaderNavigation extends BaseComponentGlobal {
  static tagName = 'axa-header-navigation'
  static propTypes = {
    hyphenate: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      url: urlPropType,
      name: PropTypes.string,
      items: PropTypes.array,
      classes: PropTypes.string,
      isActive: PropTypes.bool,
    })),
    simplemenu: PropTypes.bool,
    historyApi: PropTypes.bool,
  }

  constructor() {
    super({ styles, template });

    this.consumeContext('axa-header-main');
  }

  contextCallback(contextNode) {
    if (this.stroke) {
      this.stroke.contextNode = contextNode;
    }
  }

  willRenderCallback() {
    const { hyphenate } = this;

    this.className = classnames(this.initialClassName, 'm-header-navigation', {
      'm-header-navigation--hyphenate': hyphenate,
    });
  }

  didRenderCallback() {
    const { contextNode, simpleMenu } = this;

    if (this.stroke) {
      this.stroke.destroy();
    }

    if (this.navigation) {
      this.navigation.destroy();
    }

    // simple menu nicht mehr brauchen. Stroke checkt if ein submenu da ist. un wenn ja dann mach default action
    this.stroke = new Stroke(this, {
      simpleMenu,
    });

    if (contextNode) {
      this.contextCallback(contextNode);
    }

    this.navigation = new HeaderNavigation(this, {
      simpleMenu,
    });
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

defineOnce(AXAHeaderNavigation.tagName, AXAHeaderNavigation);

export default AXAHeaderNavigation;
