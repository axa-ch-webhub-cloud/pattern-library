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
    const todayYear = this.today.getFullYear();
    const todayMonth = this.today.getMonth();
    const todayDate = this.today.getDate();

    this.cells = [...Array(TOTAL_CELLS).keys()].map((index) => {
      if (index < numericWeekdayFirstDayOfMonth) {
        const dateText = lastDayOfLastMonth.getDate() - (((numericWeekdayFirstDayOfMonth - 1) - index));
        return new LastMonth(dateText, index);
      }

      const currentCellTime = new Date(year, month, ((index + 1) - numericWeekdayFirstDayOfMonth)).getTime();
      // fot today we need to set year, month and date in order that current time is ignored.
      const todayTime = new Date(todayYear, todayMonth, todayDate).getTime();

      if (currentCellTime === todayTime && (index - numericWeekdayFirstDayOfMonth) < todayDate) {
        return new Today(((index - numericWeekdayFirstDayOfMonth) + 1), index, true);
      }

      if (index - numericWeekdayFirstDayOfMonth < dateLastDayOfMonth) {
        return new CurrentMonth(((index - numericWeekdayFirstDayOfMonth) + 1), index);
      }

      return new NextMonth(firstDayOfNextMonth.getDate() + (index - dateLastDayOfMonth - numericWeekdayFirstDayOfMonth), index);
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
