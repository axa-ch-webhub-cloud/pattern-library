import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';
import getAttribute from '../../js/get-attribute';
import stylesStickyContainer from './scss/sticky-container.scss';
import stylesSticky from './scss/sticky.scss';
import templateSticky from './sticky.template';
import Sticky from './js/sticky';
import StickyContainer from './js/sticky-container';

class AXAStickyContainer extends BaseComponentGlobal {
  constructor() {
    super(stylesStickyContainer);

    this.enableContext();
  }

  connectedCallback() {
    super.connectedCallback();

    const debug = getAttribute(this, 'debug');

    this.className = classnames('o-sticky-container js-sticky-container', {
      'o-sticky-container--debug': debug,
    });

    this.stickyContainer = new StickyContainer(this);
  }

  disconnectedCallback() {

  }
}

class AXASticky extends BaseComponentGlobal {
  constructor() {
    super(stylesSticky, templateSticky);

    this.selectContext('axa-sticky-container');
  }

  connectedCallback() {
    super.connectedCallback();

    const debug = getAttribute(this, 'debug');

    this.className = classnames('o-sticky js-sticky', {
      'o-sticky--debug': debug,
    });

    this.sticky = new Sticky(this);
  }

  contextCallback(contextNode) {
    this.sticky.contextNode = contextNode;
  }

  disconnectedCallback() {

  }
}

domready(() => {
  window.customElements.define('axa-sticky-container', AXAStickyContainer);
  window.customElements.define('axa-sticky', AXASticky);
});
