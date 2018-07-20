import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import fire from '../../../js/fire';

export default class Input {
  constructor(wcNode) {
    this.wcNode = wcNode;
  }

  init() {
    this.iconButton = this.wcNode.querySelector('.js-input__icon__button');
    this.listenToButtons();
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
}
