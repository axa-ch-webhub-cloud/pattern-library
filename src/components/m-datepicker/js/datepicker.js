import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import fire from '../../../js/fire';
import DeviceStateObserver from '../../../js/device-state';

export const OK = 'ok';

const IS_NATIVE_WHEN = ['xs', 'sm'];

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

    this.listenToChanges();
    // this.listenToButtons();
    // this.listenToDeviceStateChange();
  }

  listenToDeviceStateChange() {
    this.offListenToDeviceStateChange();
    this.unListenToDeviceStateChange = this.deviceStateObserver.listen((state) => {
      if (!this.dropdownMonth || !this.dropdownYear) {
        return;
      }
      const { breakpoint } = state;
      const isNative = !!~IS_NATIVE_WHEN.indexOf(breakpoint);
      this.dropdownMonth.setAttribute('native', isNative);
      this.dropdownYear.setAttribute('native', isNative);
    });

    this.deviceStateObserver.triggerOnce();
  }

  offListenToDeviceStateChange() {
    if (this.unListenToDeviceStateChange) {
      this.unListenToDeviceStateChange();
    }
  }

  listenToChanges() {
    this.offListenToChanges();
    this.unListenToDropdownMonth = on(
      this.dropdownMonth, AXA_EVENTS.AXA_CHANGE, '',
      this.handleChangeDropdownMonth, {
        capture: true, passive: false,
      },
    );
    this.unListenToDropdownYear = on(
      this.dropdownYear, AXA_EVENTS.AXA_CHANGE, '',
      this.handleChangeDropdownYear, {
        capture: true, passive: false,
      },
    );
    this.unListenToDatepickerBody = on(
      this.datepickerBody, AXA_EVENTS.AXA_CHANGE, '',
      this.handleChangeDatepickerBody, {
        capture: true, passive: false,
      },
    );
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
    const month = e.target.value;
    if (month || month === 0) {
      this.datepickerBody.setAttribute('month', month);
    }
  }

  handleChangeDropdownYear = (e) => {
    console.log('set year', e);
    if (e.detail || e.detail === 0) {
      this.datepickerBody.setAttribute('year', e.detail);
    }
  }

  handleChangeDatepickerBody = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.changeDropDowns(e.target);
  }

  changeDropDowns(node) {
    const month = node.getAttribute('month');
    const year = node.getAttribute('year');

    if (month || month === 0) {
      this.dropdownMonth.setAttribute('value', month);
    }

    if (year || year === 0) {
      this.dropdownYear.setAttribute('value', year);
    }
  }

  destroy() {
    this.offListenToDeviceStateChange();
    this.offListenToChanges();
  }
}
