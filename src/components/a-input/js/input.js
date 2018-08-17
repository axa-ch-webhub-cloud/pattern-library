import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import fire from '../../../js/fire';
import getAttribute from '../../../js/get-attribute';

export default class Input {
  constructor(wcNode) {
    this.wcNode = wcNode;
  }

  init() {
    this.iconButton = this.wcNode.querySelector('.js-input__icon__button');
    this.inputfield = this.wcNode.querySelector('.js-input__input');
    this.listenToButtons();
    this.listenToInputChange();
  }

  listenToButtons() {
    this.offListenToButtons();
    this.unIconButtonListenerEnd = on(this.iconButton, EVENTS.CLICK, () => {
      fire(this.iconButton, AXA_EVENTS.AXA_CLICK, '', { bubbles: true, cancelable: true, composed: true });
    });
  }

  offListenToButtons() {
    if (this.unIconButtonListenerEnd) {
      this.unIconButtonListenerEnd();
    }
  }

  listenToInputChange() {
    this.offListenToInputChange();
    this.unInputListenerEnd = on(this.inputfield, EVENTS.KEYUP, () => {
      if (getAttribute(this.wcNode, 'date')) {
        this.inputfield.value = this.inputfield.value.replace(/[^0-9./-]+/, '');
      }
      console.log('fire');
      fire(this.inputfield, AXA_EVENTS.AXA_CHANGE, this.inputfield.value, { bubbles: true, cancelable: true, composed: true });
    });
  }

  offListenToInputChange() {
    if (this.unInputListenerEnd) {
      this.unInputListenerEnd();
    }
  }
}
