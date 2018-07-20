import { AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import getAttribute from '../../../js/get-attribute';

const OK = 'ok';

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
    console.log(wcNode);
  }

  init() {
    this.datepickerInput = this.wcNode.querySelector('.js-datepicker__input');
    this.datepickerCalender = this.wcNode.querySelector('.js-datepicker__calender');
    this.listenToButtons();
    console.log(this.datepickerInput, this.datepickerCalender);
  }

  listenToButtons() {
    this.offListenToButtons();
    this.unListenDatepickerCalender = on(
      this.datepickerCalender, AXA_EVENTS.AXA_CLICK, '',
      this.handleClickDatepickerCalender, {
        capture: true, passive: false,
      },
    );
    this.unListenToDatepickerInput = on(
      this.datepickerInput, AXA_EVENTS.AXA_CLICK, '',
      this.handleClickDatepickerInput, {
        capture: true, passive: false,
      },
    );
  }

  offListenToButtons() {
    if (this.unListenDatepickerCalender) {
      this.unListenDatepickerCalender();
    }
    if (this.unListenToDatepickerInput) {
      this.unListenToDatepickerInput();
    }
  }

  handleClickDatepickerCalender = (e) => {
    e.preventDefault();
    this.displayDatepicker();

    const { detail } = e;
    if (!detail) {
      return;
    }
    const { button, value } = detail;
    if (!button) {
      return;
    }
    if (button === OK) {
      // console.log('ok', value);
    } else {
      // console.log('cancel');
    }
  }

  handleClickDatepickerInput = (e) => {
    e.preventDefault();
    this.displayDatepicker();
    // const { target } = e;
    // const value = target.getAttribute('value');
    const rect = this.datepickerInput.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
  }

  displayDatepicker() {
    console.log(this.wcNode.getAttribute('open'));
    if (getAttribute(this.wcNode, 'open') === true) {
      console.log('drin')
      this.wcNode.removeAttribute('open');
    } else {
      this.wcNode.setAttribute('open', true);
    }
  }
}
