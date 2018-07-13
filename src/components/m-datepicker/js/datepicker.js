import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this.cellAmount = 42;
    this.elements = [...Array(this.cellAmount).keys()];

    // this.selectedDate = null

    this.today = new Date();
  }

  init(year = new Date().getFullYear(), month = new Date().getMonth()) {
    console.log(`year aus init ${year}`);

    this.date = new Date(year, month);
    this.firstDayOfMonth = new Date(year, month, 1);
    this.lastDayOfMonth = new Date(year, month + 1, 0);

    this.lastDayOfLastMonth = new Date(year, month, 0);
    this.firstDayOfNextMonth = new Date(year, month + 1, 1);

    // this.mapElements(year, month);
    // this.appendCalenderBody();
    this.listenToDropdowns();
    // this.listenToButtons();


    // TEMP VAR
    this.maxYears = 2;
    this.futureYears = false;

    this.datepickerBody = this.wcNode.querySelector('.js-datepicker__datepicker-body');


    // this.wcNode.querySelector('.js-datepicker__dropdown__month').setAttribute('value', month);
    // this.wcNode.querySelector('.js-datepicker__dropdown__year').setAttribute('value', year);
  }

  appendCalenderBody() {
    const el = this.wcNode.querySelector('.js-datepicker__calender-body');
    el.innerHTML = '';
    el.appendChild(this.container);
  }

  listenToDropdowns() {
    this.offListenToDropdowns();
    this.unDropdownListenerEnd = on(
      this.wcNode, AXA_EVENTS.AXA_CHANGE, '',
      this.handleDropdownChange, {
        capture: true, passive: false,
      },
    );
  }

  offListenToDropdowns() {
    if (this.unDropdownListenerEnd) {
      this.unDropdownListenerEnd();
    }
  }

  listenToButtons() {
    this.offListenToButtons();
    this.unCancelButtonListenerEnd = on(this.wcNode.querySelector('.js-datepicker__button__Cancel'), 'click', () => {
      // console.log('cancle');
      // console.log(this.selected, this.date);
    });
    this.unOkButtonListenerEnd = on(this.wcNode.querySelector('.js-datepicker__button__Ok'), 'click', () => {
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

  handleDropdownChange = (e) => {
    e.preventDefault();
    const { dataset } = e.target;
    if (dataset.month) {
      this.datepickerBody.setAttribute('month', e.target.value);
    } else {
      this.datepickerBody.setAttribute('year', e.target.value);
    }
    console.log(`${e.target.value} dropdownchange ${this.date}`);
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

  handleLastMonth() {
    if (this.date.getMonth() === 0) {
      this.init(this.date.getFullYear() - 1, this.date.getMonth() - 1);
    } else {
      this.init(this.date.getFullYear(), this.date.getMonth() - 1);
    }
    // if (this.selected !== null) {
    //   this.selected.classList.remove('m-datepicker__calender-body__selected-day');
    // }
    // e.target.classList.add('m-datepicker__calender-body__selected-day');
    // this.selected = e.target;
    // console.log(e.target, e.target.classList);
  }

  handleNextMonth() {
    if (this.date.getMonth() === 11) {
      this.init((this.date.getFullYear() + 1), this.date.getMonth() + 1);
    } else {
      this.init(this.date.getFullYear(), this.date.getMonth() + 1);
    }
  }
}
