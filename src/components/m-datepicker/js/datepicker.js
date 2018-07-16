import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
    // this.cellAmount = 42;
    // this.elements = [...Array(this.cellAmount).keys()];

    // this.selectedDate = null

    // this.today = new Date();
  }

  init(year = new Date().getFullYear(), month = new Date().getMonth()) {
    this.date = new Date(year, month);
    this.datepickerBody = this.wcNode.querySelector('.js-datepicker__datepicker-body');
    this.dropdownMonth = this.wcNode.querySelector('.js-datepicker__dropdown__month');
    this.dropdownYear = this.wcNode.querySelector('.js-datepicker__dropdown__year');
    // this.firstDayOfMonth = new Date(year, month, 1);
    // this.lastDayOfMonth = new Date(year, month + 1, 0);

    // this.lastDayOfLastMonth = new Date(year, month, 0);
    // this.firstDayOfNextMonth = new Date(year, month + 1, 1);

    this.listenToChanges();
    // this.listenToDatepickerBody();

    // TEMP VAR
    // this.maxYears = 2;
    // this.futureYears = false;
  }

  listenToChanges() {
    this.offListenToChangess();
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

  offListenToChangess() {
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
      // console.log('cancle');
      // console.log(this.selected, this.date);
    });
    this.unOkButtonListenerEnd = on(this.wcNode.querySelector('.js-datepicker__button__Ok'), EVENTS.CLICK, () => {
      // console.log('okbutton');
      // console.log(this.date, this.selected);
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
    const { target } = e;
    const month = target.getAttribute('month');

    // or if a dropdown changes, update the datepicker body
    if (month || month === 0) {
      this.datepickerBody.setAttribute('month', month);
    }
  }

  handleChangeDropdownYear = (e) => {
    e.preventDefault();
    const { target } = e;
    const year = target.getAttribute('year');

    if (year || year === 0) {
      this.datepickerBody.setAttribute('year', year);
    }
  }

  handleChangeDatepickerBody = (e) => {
    e.preventDefault();
    const { target } = e;
    const month = target.getAttribute('month');
    const year = target.getAttribute('year');

    if (month || month === 0) {
      this.dropdownMonth.setAttribute('value', month);
    }

    if (year || year === 0) {
      this.dropdownYear.setAttribute('value', year);
    }
  }

    // [].slice.call(e.target.classList).forEach((elementClass) => {

      // if (elementClass === 'm-datepicker__calender-body__current-month') {
      //   this.handleCurrentMonth(e);
      // } else if (elementClass === 'js-datepicker__calender-body__next-month') {
      //   if (this.futureYears === true &&
      //     (new Date(this.today.getFullYear() + (this.maxYears - 1), 11, 1) <= this.date)) {
      //     console.log('true und max', this.date);
      //   } else if (this.futureYears === false &&
      //     (new Date(this.today.getFullYear(), 11, 1) <= this.date)) {
      //     console.log('false und max');
      //   } else {
      //     this.handleNextMonth();
      //   }
      // } else if (elementClass === 'js-datepicker__calender-body__last-month') {
      //   if (this.futureYears === false &&
      //     (new Date(this.today.getFullYear() - (this.maxYears - 1), 0, 1) >= this.date)) {
      //     console.log('false und min');
      //   } else if (this.futureYears === true &&
      //     (new Date(this.today.getFullYear(), 0, 1) >= this.date)) {
      //     console.log('true und min');
      //   } else {
      //     this.handleLastMonth();
      //   }
      // }
    // });
}
