import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import stylesStickyContainer from './scss/sticky-container.scss';
import stylesSticky from './scss/sticky.scss';
import templateSticky from './sticky.template';
import Sticky from './js/sticky';
import StickyContainer from './js/sticky-container';

export class AXAStickyContainer extends BaseComponentGlobal {
  static tagName = 'axa-sticky-container'

  static get observedAttributes() { return ['debug']; }

  constructor() {
    super({ styles: stylesStickyContainer });

    this.provideContext();
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

export class AXASticky extends BaseComponentGlobal {
  static tagName = 'axa-sticky'

  static get observedAttributes() { return ['debug']; }

  constructor() {
    super({ styles: stylesSticky, template: templateSticky });

    this.consumeContext('axa-sticky-container');
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


defineOnce(AXAStickyContainer.tagName, AXAStickyContainer);
defineOnce(AXASticky.tagName, AXASticky);

export default {
  AXASticky,
  AXAStickyContainer,
};
