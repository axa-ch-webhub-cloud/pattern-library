import PropTypes from '../../js/prop-types';
import classnames from 'classnames';

import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import lazyFunction from '../../js/lazy-function';
import HeaderMobileNavigation from './js/header-mobile-navigation';

// eslint-disable-next-line no-use-before-define
const lazyItemsShape = lazyFunction(() => itemsShape);
const itemsShape = PropTypes.shape({
  name: PropTypes.string,
  url: urlPropType,
  isActive: PropTypes.bool,
  items: lazyItemsShape,
});

class AXAHeaderMobileNavigation extends BaseComponentGlobal {
  static tagName = 'axa-header-mobile-navigation'
  static propTypes = {
    items: PropTypes.arrayOf(itemsShape),
    relative: PropTypes.bool,
  }

  constructor() {
    super({ styles, template });

    this.consumeContext('axa-header');
  }

  contextCallback(contextNode) {
    if (this.interaction) {
      this.interaction.contextNode = contextNode;
    }
  }

  willRenderCallback() {
    const { gpu, relative } = this;

    this.className = classnames(this.initialClassName, 'm-header-mobile-navigation', {
      'm-header-mobile-navigation--gpu': gpu,
      'm-header-mobile-navigation--relative': relative,
    });
  }

  didRenderCallback() {
    const { contextNode } = this;

    if (this.interaction) {
      this.interaction.destroy();
    }

    this.interaction = new HeaderMobileNavigation(this);

    if (contextNode) {
      this.contextCallback(contextNode);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.interaction.destroy();
    delete this.interaction;
  }
}

defineOnce(AXAHeaderMobileNavigation.tagName, AXAHeaderMobileNavigation);

export default AXAHeaderMobileNavigation;
