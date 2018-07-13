import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import { CurrentMonth, Today, SelectedDay, LastMonth, NextMonth } from './cells';
import { getNumericWeekday } from '../../../js/date';

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this.cellAmount = 42;
    this.elements = [...Array(this.cellAmount).keys()];

    // this.selectedDate = null;
    this.selected = null;

    this.today = new Date();
  }

  init(year = new Date().getFullYear(), month = new Date().getMonth()) {
    console.log(`year aus init ${year}`);
    this.dropDownYear = this.wcNode.querySelector('.js-datepicker__dropdown__year');
    this.dropDownMonth = this.wcNode.querySelector('.js-datepicker__dropdown__month');

    this.date = new Date(year, month);
    this.firstDayOfMonth = new Date(year, month, 1);
    this.lastDayOfMonth = new Date(year, month + 1, 0);

    this.lastDayOfLastMonth = new Date(year, month, 0);
    this.firstDayOfNextMonth = new Date(year, month + 1, 1);

    this.mapElements(year, month);
    this.appendCalenderBody();
    this.listenToCells();
    this.listenToDropdowns();
    this.listenToButtons();


    // TEMP VAR
    this.maxYears = 2;
    this.futureYears = false;


    this.wcNode.querySelector('.js-datepicker__dropdown__month').setAttribute('value', month);
    this.wcNode.querySelector('.js-datepicker__dropdown__year').setAttribute('value', year);
  }

  mapElements(year, month) {
    const numericWeekdayFirstDayOfMonth = getNumericWeekday('en-uk', this.firstDayOfMonth);
    const dateLastDayOfMonth = this.lastDayOfMonth.getDate();
    this.container = document.createElement('div');
    this.elements.map((index) => {
      const element = document.createElement('button');
      this.container.appendChild(element);

      if (numericWeekdayFirstDayOfMonth > 0 && index < numericWeekdayFirstDayOfMonth) {
        element.innerHTML = this.lastDayOfLastMonth.getDate() - (((numericWeekdayFirstDayOfMonth - 1) - index));
        return new LastMonth(element);
      }

      if ((new Date(year, month, ((index + 1) - numericWeekdayFirstDayOfMonth)).getTime()
      === new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()).getTime())
      && ((index - numericWeekdayFirstDayOfMonth) < this.today.getDate())) {
        element.innerHTML = ((index - numericWeekdayFirstDayOfMonth) + 1);
        return new Today(element);
      }

      if (index + 1 === this.selected) {
        return new SelectedDay(element);
      }

      if (index - numericWeekdayFirstDayOfMonth < dateLastDayOfMonth) {
        element.innerHTML = ((index - numericWeekdayFirstDayOfMonth) + 1);
        return new CurrentMonth(element);
      }

      element.innerHTML = this.firstDayOfNextMonth.getDate()
       + (index - dateLastDayOfMonth - numericWeekdayFirstDayOfMonth);
      return new NextMonth(element);
    });
  }

  appendCalenderBody() {
    const el = this.wcNode.querySelector('.js-datepicker__calender-body');
    el.innerHTML = '';
    el.appendChild(this.container);
  }

  listenToCells() {
    this.offClicks();
    this.unClickEnd = on(
      this.wcNode, EVENTS.CLICK, 'm-datepicker__calender-body__cell',
      this.handleClick, {
        capture: true, passive: false,
      },
    );
  }

  offClicks() {
    if (this.unClickEnd) {
      this.unClickEnd();
    }
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
    if (e.target.value > 11) {
      this.init(e.target.value, this.date.getMonth());
    } else {
      this.init(this.date.getFullYear(), e.target.value);
    }
    console.log(`${e.target.value} dropdownchange ${this.date}`);
  }

  handleClick = (e) => {
    e.preventDefault();
    [].slice.call(e.target.classList).forEach((elementClass) => {
      if (elementClass === 'm-datepicker__calender-body__current-month') {
        this.handleCurrentMonth(e);
      } else if (elementClass === 'js-datepicker__calender-body__next-month') {
        if (this.futureYears === true &&
          (new Date(this.today.getFullYear() + (this.maxYears - 1), 11, 1) <= this.date)) {
          console.log('true und max', this.date);
        } else if (this.futureYears === false &&
          (new Date(this.today.getFullYear(), 11, 1) <= this.date)) {
          console.log('false und max');
        } else {
          this.handleNextMonth();
        }
      } else if (elementClass === 'js-datepicker__calender-body__last-month') {
        if (this.futureYears === false &&
          (new Date(this.today.getFullYear() - (this.maxYears - 1), 0, 1) >= this.date)) {
          console.log('false und min');
        } else if (this.futureYears === true &&
          (new Date(this.today.getFullYear(), 0, 1) >= this.date)) {
          console.log('true und min');
        } else {
          this.handleLastMonth();
        }
      }
    });
  }

  handleCurrentMonth(e) {
    if (this.selected !== null) {
      this.selected.classList.remove('m-datepicker__calender-body__selected-day');
    }
    e.target.classList.add('m-datepicker__calender-body__selected-day');
    this.selected = e.target;
  }

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
