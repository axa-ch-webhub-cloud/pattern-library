import on from '../../../js/on';
import { EVENTS } from '../../../js/ui-events';
import DeviceStateObserver from '../../../js/device-state';

// @TODO: dependency to a-device-state not explicit
/**
 * @fires FooterLinks#axa-click
 */
export default class FooterLinks {
  static DEFAULTS = {
    link: 'js-dropdown__toggle',
    isOpenClass: 'js-footer--is-open',
  };

  constructor(wcNode, options) {
    this.wcNode = wcNode;
    this.options = {
      ...FooterLinks.DEFAULTS,
      ...options,
    };

    this.handleClick = this.handleClick.bind(this);

    this.on();
  }

  on() {
    this.off();
    this.unClick = on(this.wcNode, EVENTS.CLICK, this.options.link, this.handleClick, { passive: false });
  }

  off() {
    if (this.unClick) {
      this.unClick();
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.toggleListSubelement(event.target);
  }

  toggleListSubelement() {
    this.wcNode.classList.toggle(FooterLinks.DEFAULTS.isOpenClass);
  }

  destroy() {
    this.off();
    delete this.wcNode;
  }
}
