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

  getMonthInformation(year, month) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0); /* 0 `day` gets last day from prior month */
    const today = new Date();
    /* result of getDay(): 0 means Sunday and 6 means Saturday */
    const startDay = startDate.getDay(); // -1.. coz we start on monday which is not the default int us dates. they start on sundays
    /* last day number = total days in current month */
    const currentMonthTotalDays = endDate.getDate();
    // const totalWeeks = Math.ceil((currentMonthTotalDays + startDay) / 7);

    const prevMonthEndDate = new Date(year, month - 1, 0);
    let prevMonthDay = (prevMonthEndDate.getDate() - startDay + 1);
    console.log('predv month day', prevMonthEndDate, ' ', prevMonthDay);
    let nextMonthDay = 1;

    const dates = [];
    for (let i = 0; i < 42; i += 1) {
      const date = {};
      const dayToStart = startDay - 1;

      /* Previous month dates (if month does not start on Sunday) */
      if (i < dayToStart) {
        date.date = new Date(year, month - 1, prevMonthDay);
        date.type = 'prev';
        date.isToday = false;
        date.cell = new LastMonth(date.date.getDate(), i, false);
        prevMonthDay += 1;
      /* Next month dates (if month does not end on Saturday) */
      } else if (i > currentMonthTotalDays + (dayToStart - 1)) {
        date.date = new Date(year, month + 1, nextMonthDay);
        date.type = 'next';
        date.isToday = false;
        date.cell = new NextMonth(date.date.getDate(), i, false);
        nextMonthDay += 1;
        /* Current month dates. */
      } else {
        const currentDate = new Date(year, month, (i - dayToStart) + 1);
        const isToday = currentDate.toDateString() === today.toDateString();
        date.date = currentDate;
        date.type = 'current';
        date.isToday = isToday;
        date.cell = new CurrentMonth(currentDate.getDate(), i, date.isToday);
      }
      dates.push(date);
    }
    console.log('dates', dates);
    return dates;
  }

  init(date) {
    const daysOfMonth = this.getMonthInformation(date.getFullYear(), date.getMonth());
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
