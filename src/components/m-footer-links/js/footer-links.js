import on from '../../../js/on';
import fire from '../../../js/fire';
import getAttribute from '../../../js/get-attribute';
import { AXA_EVENTS, EVENTS } from '../../../js/ui-events';
import DeviceStateObserver from '../../../js/device-state';
import DropDown from '../../m-dropdown/js/drop-down';

const hasDropdownBreakpoints = 'xs';

// @TODO: dependency to a-device-state not explicit
/**
 * @fires FooterLinks#axa-click
 */
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

    this.deviceStateObserver = new DeviceStateObserver();

    this.handleClick = this.handleClick.bind(this);

    this.on();
  }

  on() {
    this.off();

    const { wcNode } = this;

    this.unsubscribe = this.deviceStateObserver.listen((state, hasStateChanged) => {
      if (!hasStateChanged) {
        return;
      }
      const { breakpoint } = state;
      const hasDropdown = hasDropdownBreakpoints.indexOf(breakpoint) > -1;

      if (hasDropdown && !this.dropDown) {
        this.dropDown = new DropDown(wcNode);
      } else if (!hasDropdown && this.dropDown) {
        this.dropDown.destroy();
        delete this.dropDown;
      }
    });

    this.deviceStateObserver.triggerOnce();

    this.unClick = on(this.wcNode, EVENTS.CLICK, this.options.link, this.handleClick, { passive: false });
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
    // @todo: would be cool to be able to use props here, cause now it needs JSON.parse...
    const index = getAttribute(delegateTarget, 'index');
    const { wcNode: { items } } = this;
    /**
     * axa-click event.
     *
     * @event FooterLinks#axa-click
     * @type {object}
     */
    const cancelled = fire(this.wcNode, AXA_EVENTS.AXA_CLICK, items[index], { bubbles: true, cancelable: true, composed: true });

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
