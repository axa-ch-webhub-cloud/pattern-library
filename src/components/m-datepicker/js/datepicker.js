import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import fire from '../../../js/fire';
import DeviceStateObserver from '../../../js/device-state';

export const OK = 'ok';

// const IS_NATIVE_WHEN = ['xs', 'sm'];

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this.deviceStateObserver = new DeviceStateObserver();
  }

  init() {
    this.datepickerBody = this.wcNode.querySelector('.js-datepicker__datepicker-body');
    this.dropdownMonth = this.wcNode.querySelector('.js-datepicker__dropdown-month');
    this.dropdownYear = this.wcNode.querySelector('.js-datepicker__dropdown-year');
    this.okButton = this.wcNode.querySelector('.js-datepicker__button-ok');
    this.cancelButton = this.wcNode.querySelector('.js-datepicker__button-cancel');

    this.onHandleChangeDropdownMonth =
      on(this.dropdownMonth, AXA_EVENTS.AXA_CHANGE, '', this.handleChangeDropdownMonth, { capture: true, passive: false });
    this.onListenToDropdownYear =
      on(this.dropdownYear, AXA_EVENTS.AXA_CHANGE, '', this.handleChangeDropdownYear, { capture: true, passive: false });
    this.onListenDatepickerBodyDateChange =
      on(this.datepickerBody, AXA_EVENTS.AXA_CHANGE, '', this.handleChangeDatepickerBody, { capture: true, passive: false });
    // this.listenToButtons();
    // this.listenToDeviceStateChange();
  }

  // listenToDeviceStateChange() {
  //   this.offListenToDeviceStateChange();
  //   this.unListenToDeviceStateChange = this.deviceStateObserver.listen((state) => {
  //     if (!this.dropdownMonth || !this.dropdownYear) {
  //       return;
  //     }
  //     const { breakpoint } = state;
  //     const isNative = !!~IS_NATIVE_WHEN.indexOf(breakpoint);
  //     this.dropdownMonth.setAttribute('native', isNative);
  //     this.dropdownYear.setAttribute('native', isNative);
  //   });

  //   this.deviceStateObserver.triggerOnce();
  // }

  offListenToDeviceStateChange() {
    if (this.unListenToDeviceStateChange) {
      this.unListenToDeviceStateChange();
    }
  }

  offListenToChanges() {
    if (this.unListenToDropdownMonth) {
      this.unListenToDropdownMonth();
    }
    if (this.unListenToDropdownYear) {
      this.unListenToDropdownYear();
    }
    if (this.unListenToDatepickerBody) {
      this.unListenToDatepickerBody();
    }
  }

  listenToButtons() {
    this.offListenToButtons();
    const eventOptions = { bubbles: true, cancelable: true, composed: true };
    this.unCancelButtonListenerEnd = on(this.cancelButton, EVENTS.CLICK, () => {
      fire(this.wcNode, 'cancel', {}, eventOptions);
    });
    this.unOkButtonListenerEnd = on(this.okButton, EVENTS.CLICK, () => {
      let out = '';
      const year = this.datepickerBody.getAttribute('year');
      const month = this.datepickerBody.getAttribute('month');
      const day = this.datepickerBody.getAttribute('value');

      // todo create local iso-string date....
      if (day) out = new Date(year, month, day, 23, 0, 0);

      fire(this.okButton, AXA_EVENTS.AXA_CLICK, { value: out, button: OK }, eventOptions);
      fire(this.wcNode, 'date-changed', { value: out }, eventOptions);
    });
  }

  offListenToButtons() {
    if (this.unCancelButtonListenerEnd) {
      this.unCancelButtonListenerEnd();
    }
    if (this.unOkButtonListenerEnd) {
      this.unOkButtonListenerEnd();
    }
  }

  handleChangeDropdownMonth = (e) => {
    e.preventDefault();
    const month = e.detail.index;
    if (month) {
      this.datepickerBody.setAttribute('month', month);
    }
  }

  handleChangeDropdownYear = (e) => {
    e.preventDefault();
    const year = e.detail.value;
    if (year) {
      this.datepickerBody.setAttribute('year', year);
    }
  }

  handleChangeDatepickerBody = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.detail) {
      this.dropdownMonth.setAttribute('value', e.detail.getMonth());
      this.dropdownYear.setAttribute('value', e.detail.getFullYear());
    }
  }

  destroy() {
    this.offListenToDeviceStateChange();
    this.offListenToChanges();
  }
}
