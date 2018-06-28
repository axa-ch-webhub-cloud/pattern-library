import on from '../../../js/on';
import { NotCurrentMonth, CurrentMonth, Today, SelectedDay } from './cells';
import { getNumericWeekday } from '../../../js/date';

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this.cellAmount = 42;
    this.elements = [...Array(this.cellAmount).keys()];

    this.container = document.createElement('div');
  }

  init(year = new Date().getFullYear(), month = new Date(2018, 5).getMonth()) {
    this.dropDownYear = this.wcNode.querySelector('.js-datepicker__dropdown__year');
    this.dropDownMonth = this.wcNode.querySelector('.js-datepicker__dropdown__month');

    this.today = new Date();

    this.date = new Date(year, month);
    this.firstDayOfMonth = new Date(year, month, 1);
    this.lastDayOfMonth = new Date(year, month + 1, 0);

    this.lastDayOfLastMonth = new Date(year, month, 0);
    this.firstDayOfNextMonth = new Date(year, month + 1, 1);

    this.selected = null;

    this.elements.map((index) => {
      const element = document.createElement('button');
      this.container.appendChild(element);

      if (getNumericWeekday('en-uk', this.firstDayOfMonth) > 0
          && index < getNumericWeekday('en-uk', this.firstDayOfMonth)) {
        element.innerHTML = this.lastDayOfLastMonth.getDate() - (((getNumericWeekday('en-uk', this.firstDayOfMonth) - 1) - index));
        return new NotCurrentMonth(element);
      }

      if (new Date(year, month, ((index + 1) - getNumericWeekday('en-uk', this.firstDayOfMonth))).getTime()
      === new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()).getTime()) {
        element.innerHTML = ((index - getNumericWeekday('en-uk', this.firstDayOfMonth)) + 1);
        return new Today(element);
      }

      if (index + 1 === this.selected) {
        return new SelectedDay(element);
      }

      if (index - getNumericWeekday('en-uk', this.firstDayOfMonth) < this.lastDayOfMonth.getDate()) {
        element.innerHTML = ((index - getNumericWeekday('en-uk', this.firstDayOfMonth)) + 1);
        return new CurrentMonth(element);
      }

      element.innerHTML = this.firstDayOfNextMonth.getDate()
       + (index - this.lastDayOfMonth.getDate() - getNumericWeekday('en-uk', this.firstDayOfMonth));
      return new NotCurrentMonth(element);
    });


    const el = this.wcNode.querySelector('.js-datepicker__calender-body');
    el.appendChild(this.container);
    // TODO use capture instead
    [].slice.call(this.wcNode.querySelectorAll('.m-datepicker__calender-body__current-month')).forEach((cell) => {
      on(cell, 'click', () => {
        if (this.selected !== null) {
          this.selected.classList.remove('m-datepicker__calender-body__selected-day');
        }
        cell.classList.add('m-datepicker__calender-body__selected-day');
        this.selected = cell;
      });
    });
  }
}
