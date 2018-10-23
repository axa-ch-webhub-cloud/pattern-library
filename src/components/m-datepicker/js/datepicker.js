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

  init(outputIso) {
    this.outputIso = outputIso;
    this.datepickerBody = this.wcNode.querySelector('.js-datepicker__datepicker-body');
    this.dropdownMonth = this.wcNode.querySelector('.js-datepicker__dropdown__month');
    this.dropdownYear = this.wcNode.querySelector('.js-datepicker__dropdown__year');
    this.okButton = this.wcNode.querySelector('.js-datepicker__button__Ok');
    this.cancelButton = this.wcNode.querySelector('.js-datepicker__button__Cancel');

    this.listenToChanges();
    this.listenToButtons();
    this.listenToDeviceStateChange();
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
    this.unCancelButtonListenerEnd = on(this.wcNode.querySelector('.js-datepicker__button__Cancel'), EVENTS.CLICK, () => {
      fire(this.cancelButton, AXA_EVENTS.AXA_CLICK, { value: '', button: 'cancel' }, { bubbles: true, cancelable: true, composed: true });
    });
    this.unOkButtonListenerEnd = on(this.wcNode.querySelector('.js-datepicker__button__Ok'), EVENTS.CLICK, () => {
      const year = this.datepickerBody.getAttribute('year');
      const month = this.datepickerBody.getAttribute('month');
      const dayAsValue = this.datepickerBody.getAttribute('value'); // new value - after click on a day
      let dayAsDay = this.datepickerBody.getAttribute('day'); // prev value - prior click on a day
      if (dayAsDay === 'false') {
        dayAsDay = false;
      }
      const day = dayAsValue || dayAsDay;

      if (day) {
        const choosenDate = new Date(year, month, day);

        if (this.outputIso) {
          fire(this.okButton, AXA_EVENTS.AXA_CLICK, { value: choosenDate.getTime(), button: OK }, { bubbles: true, cancelable: true, composed: true });
        } else {
          fire(this.okButton, AXA_EVENTS.AXA_CLICK, { value: choosenDate, button: OK }, { bubbles: true, cancelable: true, composed: true });
        }
      } else {
        fire(this.okButton, AXA_EVENTS.AXA_CLICK, { value: '', button: OK }, { bubbles: true, cancelable: true, composed: true });
      }
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
    e.stopPropagation();
    const { target } = e;
    const month = target.getAttribute('value');

    // or if a dropdown changes, update the datepicker body
    if (month || month === 0) {
      this.datepickerBody.setAttribute('month', month);
    }
  }

  handleChangeDropdownYear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;
    const year = target.getAttribute('value');

    if (year || year === 0) {
      this.datepickerBody.setAttribute('year', year);
    }
  }

  handleChangeDatepickerBody = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;
    this.changeDropDowns(target);
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
