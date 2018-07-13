import { CurrentMonth, Today, SelectedDay, LastMonth, NextMonth } from './cells';
import { getNumericWeekday } from '../../../js/date';

const ROWS = 6;
const CELLS = 7;
const TOTAL_CELLS = ROWS * CELLS;

const selected = null;
const today = new Date();

let cells = [];

export const initCells = (locale, year = new Date().getFullYear(), month = new Date().getMonth()) => {
  // const date = new Date(year, month);
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const dateLastDayOfMonth = lastDayOfMonth.getDate();

  const lastDayOfLastMonth = new Date(year, month, 0);
  const firstDayOfNextMonth = new Date(year, month + 1, 1);

  const numericWeekdayFirstDayOfMonth = getNumericWeekday(locale, firstDayOfMonth);

  cells = [...Array(TOTAL_CELLS).keys()].map((index) => {
    if (numericWeekdayFirstDayOfMonth > 0 && index < numericWeekdayFirstDayOfMonth) {
      return new LastMonth(lastDayOfLastMonth.getDate() - (((numericWeekdayFirstDayOfMonth - 1) - index)), index);
    }

    if ((new Date(year, month, ((index + 1) - numericWeekdayFirstDayOfMonth)).getTime()
    === new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime())
    && ((index - numericWeekdayFirstDayOfMonth) < today.getDate())) {
      return new Today(((index - numericWeekdayFirstDayOfMonth) + 1), index, true);
    }

    if (index + 1 === selected) {
      return new SelectedDay('', index);
    }

    if (index - numericWeekdayFirstDayOfMonth < dateLastDayOfMonth) {
      return new CurrentMonth(((index - numericWeekdayFirstDayOfMonth) + 1), index);
    }

    return new NextMonth(firstDayOfNextMonth.getDate()
     + (index - dateLastDayOfMonth - numericWeekdayFirstDayOfMonth), index);
  });
};

export const getCells = (locale) => {
  if (cells.length === TOTAL_CELLS) {
    return cells;
  }

  initCells(locale);

  return cells;
};

export const getCell = index => cells[index];
export const setCell = (index, cell) => cells[index] = cell;
