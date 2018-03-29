import on from '../../../js/on';
import fire from '../../../js/fire';
import { subscribe } from '../../../js/pubsub';
import DropDown from '../../m-dropdown/js/drop-down';

const hasDropdownBreakpoints = 'xs';

// @TODO: dependency to a-device-state not explicit
export default class FooterLinks {
  static DEFAULTS = {
    link: 'js-footer-links__link',
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

    this.unsubscribe = subscribe('device-state/change', (event) => {
      const { detail: { breakpoint } } = event;
      const hasDropdown = hasDropdownBreakpoints.indexOf(breakpoint) > -1;

      if (hasDropdown && !this.dropDown) {
        this.dropDown = new DropDown(this.wcNode);
      } else if (!hasDropdown && this.dropDown) {
        this.dropDown.destroy();
        delete this.dropDown;
      }
    });

    this.unClick = on(this.wcNode, 'click', this.options.link, this.handleClick, { passive: false });
  }

  off() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    if (this.unClick) {
      this.unClick();
    }
  }

  handleClick(event, delegateTarget) {
    const cancelled = fire(this.wcNode, 'axaclick', {}, { bubbles: true, cancelable: true });

    if (!cancelled) {
      event.preventDefault();
    }
  }

  destroy() {
    this.off();

    if (this.dropDown) {
      this.dropDown.destroy();
      delete this.dropDown;
    }

    delete this.wcNode;
  }
}
