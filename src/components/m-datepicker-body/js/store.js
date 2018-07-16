import { CurrentMonth, Today, LastMonth, NextMonth } from './cells';
import { getNumericWeekday } from '../../../js/date';

const ROWS = 6;
const CELLS = 7;
const TOTAL_CELLS = ROWS * CELLS;

export default class Store {
  constructor(locale, year = new Date().getFullYear(), month = new Date().getMonth()) {
    this.cells = [];
    this.today = new Date();

    this.init(locale, year, month);
  }

  init(locale, year, month) {
    // const date = new Date(year, month);
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const dateLastDayOfMonth = lastDayOfMonth.getDate();

    const lastDayOfLastMonth = new Date(year, month, 0);
    const firstDayOfNextMonth = new Date(year, month + 1, 1);

    const numericWeekdayFirstDayOfMonth = getNumericWeekday(locale, firstDayOfMonth);

    // TODO here some semplification needed
    this.cells = [...Array(TOTAL_CELLS).keys()].map((index) => {
      if (numericWeekdayFirstDayOfMonth > 0 && index < numericWeekdayFirstDayOfMonth) {
        return new LastMonth(lastDayOfLastMonth.getDate() - (((numericWeekdayFirstDayOfMonth - 1) - index)), index);
      }

      if ((new Date(year, month, ((index + 1) - numericWeekdayFirstDayOfMonth)).getTime()
      === new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()).getTime())
      && ((index - numericWeekdayFirstDayOfMonth) < this.today.getDate())) {
        return new Today(((index - numericWeekdayFirstDayOfMonth) + 1), index, true);
      }

      if (index - numericWeekdayFirstDayOfMonth < dateLastDayOfMonth) {
        return new CurrentMonth(((index - numericWeekdayFirstDayOfMonth) + 1), index);
      }

      return new NextMonth(firstDayOfNextMonth.getDate()
       + (index - dateLastDayOfMonth - numericWeekdayFirstDayOfMonth), index);
    });
  }

  setCell(index, cell) {
    this.cells[index] = cell;
  }

  getCell(index) {
    return this.cells[index];
  }

  getCells() {
    return this.cells;
  }
}
