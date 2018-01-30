import on from '../../../js/on';
import { publish } from '../../../js/pubsub';

class HeaderMobileLangugaes {
  static DEFAULTS = {
    link: 'js-header-mobile-languages__link',
  }

  constructor(rootNode, options) {
    this.rootNode = rootNode;
    this.options = {
      ...HeaderMobileLangugaes.DEFAULTS,
      ...options,
    };

    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  set contextNode(value) {
    this._contextNode = value;
  }

  init() {
    this.on();
  }

  on() {
    this.off();

    this.unClick = on(this.rootNode, 'click', this.options.link, this.handleClick);
  }

  off() {
    if (this.unClick) {
      this.unClick();
    }
  }

  handleClick() {
    if (this._contextNode) {
      publish('header-mobile/close', null, this._contextNode);
    }
  }

  destroy() {
    this.off();
  }
}

export default HeaderMobileLangugaes;
