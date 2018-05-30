import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';
import stylesStickyContainer from './scss/sticky-container.scss';
import stylesSticky from './scss/sticky.scss';
import templateSticky from './sticky.template';
import Sticky from './js/sticky';
import StickyContainer from './js/sticky-container';

class AXAStickyContainer extends BaseComponentGlobal {
  static tagName = 'axa-sticky-container'

  static get observedAttributes() { return ['debug']; }

  constructor() {
    super(stylesStickyContainer);

    this.enableContext();
  }

  connectedCallback() {
    super.connectedCallback();

    const { debug } = this;

    this.className = classnames(this.initialClassName, 'o-sticky-container js-sticky-container', {
      'o-sticky-container--debug': debug,
    });

    this.stickyContainer = new StickyContainer(this);
  }

  disconnectedCallback() {
    if (this.stickyContainer) {
      this.stickyContainer.destroy();
      delete this.stickyContainer;
    }
  }
}

class AXASticky extends BaseComponentGlobal {
  static tagName = 'axa-sticky'

  static get observedAttributes() { return ['debug']; }

  constructor() {
    super(stylesSticky, templateSticky);

    this.selectContext('axa-sticky-container');
  }

  willRenderCallback() {
    const { debug } = this;

    this.className = classnames(this.initialClassName, 'o-sticky js-sticky', {
      'o-sticky--debug': debug,
    });
  }

  didRenderCallback() {
    if (this.sticky) {
      this.sticky.destroy();
    }

    this.sticky = new Sticky(this);

    const { contextNode } = this;

    if (contextNode) {
      this.contextCallback(contextNode);
    }
  }

  contextCallback(contextNode) {
    if (this.sticky) {
      this.sticky.contextNode = contextNode;
    }
  }

  disconnectedCallback() {
    if (this.sticky) {
      this.sticky.destroy();
      delete this.sticky;
    }
  }
}

wcdomready(() => {
  window.customElements.define(AXAStickyContainer.tagName, AXAStickyContainer);
  window.customElements.define(AXASticky.tagName, AXASticky);
});

export default {
  AXASticky,
  AXAStickyContainer,
};
