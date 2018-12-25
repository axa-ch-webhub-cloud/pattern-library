import { CurrentMonth, Today, LastMonth, NextMonth } from './cells';
import { getNumericWeekday } from '../../../js/date';

const ROWS = 6;
const CELLS = 7;
const TOTAL_CELLS = ROWS * CELLS;

export default class Store {
  constructor(locale, date) {
    this.cells = [];
    this.today = new Date();
    this.locale = locale;
    this.init(date);
  }

  update(date) {
    this.init(date);
  }

  init(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // TODO:: make it smaller
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const dateLastDayOfMonth = lastDayOfMonth.getDate();
    const lastDayOfLastMonth = new Date(year, month, 0);
    const firstDayOfNextMonth = new Date(year, month + 1, 1);
    const numericWeekdayFirstDayOfMonth = getNumericWeekday(this.locale, firstDayOfMonth);
    const todayYear = this.today.getFullYear();
    const todayMonth = this.today.getMonth();
    const todayDate = day || this.today.getDate();

    // TODO:: just use a for loop.. it's exactly the same
    this.cells = [...Array(TOTAL_CELLS).keys()].map((index) => {
      if (index < numericWeekdayFirstDayOfMonth) {
        const dateText = lastDayOfLastMonth.getDate() - (((numericWeekdayFirstDayOfMonth - 1) - index));
        return new LastMonth(dateText, index);
      }

      const currentCellDate = new Date(year, month, ((index + 1) - numericWeekdayFirstDayOfMonth));
      const currentCellTime = currentCellDate.getTime();
      // fot today we need to set year, month and date in order that current time is ignored.
      const todayTime = new Date(todayYear, todayMonth, todayDate).getTime();

      if (day && currentCellDate.getDate() === todayDate && index - numericWeekdayFirstDayOfMonth < dateLastDayOfMonth) {
        return new Today(((index - numericWeekdayFirstDayOfMonth) + 1), index, true);
      }

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
