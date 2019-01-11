import { CurrentMonth, LastMonth, NextMonth } from './cells';

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

  getMonthInformation(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    // exmpale year: 2019: month: 01
    const startDate = new Date(year, month, 1); // Tue 01 2019 00:00:00 GMT+0100
    const endDate = new Date(year, month + 1, 0); // // Thu 31 2019 00:00:00 GMT+0100

    const startDay = startDate.getDay(); // 2 (Tuesday) 0 is Sunday and 6 is Saturday
    const currentMonthTotalDays = endDate.getDate(); // 31 // Day of the current month.

    const prevMonthEndDate = new Date(year, month, 0); // 31. Dec. 2019
    const prevMontLastDay = prevMonthEndDate.getDate(); // ie. 31
    let nextMonthDay = 1;

    prevMonthEndDate.setDate(prevMontLastDay - (startDay - 2)); // rewind as many days to the start of the current day of month

    let prevMonthDay = prevMonthEndDate.getDate();

    const today = new Date();
    const dates = [];
    for (let i = 0; i < 42; i += 1) {
      const dateCell = {};
      const dayToStart = startDay - 1;

      // Previous month dates (if month does not start on Sunday)
      if (i < dayToStart) {
        dateCell.date = new Date(year, month - 1, prevMonthDay);
        dateCell.type = 'prev';
        dateCell.isToday = false;
        dateCell.cell = new LastMonth(dateCell.date.getDate(), dateCell.date.getDate(), i, false, false);
        prevMonthDay += 1;

      // Next month dates (if month does not end on Saturday)
      } else if (i > currentMonthTotalDays + (dayToStart - 2)) {
        dateCell.date = new Date(year, month + 1, nextMonthDay);
        dateCell.type = 'next';
        dateCell.isToday = false;
        dateCell.cell = new NextMonth(dateCell.date.getDate(), dateCell.date.getDate(), i, false, false);
        nextMonthDay += 1;

      // Current month dates. */
      } else {
        const currentDate = new Date(year, month, (i - dayToStart) + 1);
        const isToday = currentDate.toDateString() === today.toDateString();
        const isSelected = currentDate.toDateString() === date.toDateString();
        dateCell.date = currentDate;
        dateCell.type = 'current';
        dateCell.isToday = isToday;
        dateCell.cell = new CurrentMonth(currentDate.getDate(), currentDate.getDate(), i, isToday, isSelected);
      }

      dates.push(dateCell);
    }

    return dates;
  }

  init(date) {
    const daysOfMonth = this.getMonthInformation(date);
    this.cells = [];

    // TODO:: Combine legacy with refactored code. Remove the double loop.
    daysOfMonth.forEach((day) => {
      this.cells.push(day.cell);
    });

    // console.log('january 2019', this.getMonthInformation(2019, 1));
    // console.log('february 2019', this.getMonthInformation(2019, 2));
    // console.log('march 2019', this.getMonthInformation(2019, 3));
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
