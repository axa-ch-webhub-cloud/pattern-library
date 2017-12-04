import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import getAttribute from '../../js/get-attribute';
import styles from './index.scss';
import template from './_template';
import DropDown from '../m-dropdown/js/drop-down';
import { domready } from '../../js/domready';
import { subscribe } from '../../js/pubsub';

const breakpoints = ['xs', 'sm'];

class FooterLinks extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const cols = getAttribute(this, 'cols');

    this.className = classnames('m-footer-links', {
      'm-footer-links--cols': cols,
      [`m-footer-links--cols-${cols}`]: cols,
    });

    this.unsubscribe = subscribe('/device-state/change', ({ breakpoint }) => {
      const hasDropdown = breakpoints.indexOf(breakpoint) > -1;

      if (hasDropdown && !this.dropDown) {
        this.dropDown = new DropDown(this);
        console.log('add dropdown');
      } else if (!hasDropdown && this.dropDown) {
        this.dropDown.destroy();
        delete this.dropDown;
        console.log('remove dropdown');
      }
    });
  }

  disconnectedCallback() {
    this.unsubscribe();

    if (this.dropDown) {
      this.dropDown.destroy();
      delete this.dropDown;
    }
  }
}

domready(() => {
  window.customElements.define('axa-footer-links', FooterLinks);
});
