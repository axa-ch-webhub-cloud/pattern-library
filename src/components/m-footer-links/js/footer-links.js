import { subscribe } from '../../../js/pubsub';
import DropDown from '../../m-dropdown/js/drop-down';

const hasDropdownBreakpoints = 'xs';

// @TODO: dependency to a-device-state not explicit
export default class FooterLinks {
  constructor(rootNode) {
    this.rootNode = rootNode;

    this.on();
  }

  on() {
    this.off();

    this.unsubscribe = subscribe('device-state/change', (event) => {
      const { detail: { breakpoint } } = event;
      const hasDropdown = hasDropdownBreakpoints.indexOf(breakpoint) > -1;

      if (hasDropdown && !this.dropDown) {
        this.dropDown = new DropDown(this.rootNode);
      } else if (!hasDropdown && this.dropDown) {
        this.dropDown.destroy();
        delete this.dropDown;
      }
    });
  }

  off() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  destroy() {
    this.off();

    if (this.dropDown) {
      this.dropDown.destroy();
      delete this.dropDown;
    }

    delete this.rootNode;
  }
}
