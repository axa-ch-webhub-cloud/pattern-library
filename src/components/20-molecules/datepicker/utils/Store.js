import { CurrentMonth, LastMonth, NextMonth } from './Cell';

export default class Store {
  constructor(locale, date, allowedYears) {
    this.cells = [];
    this.today = new Date();
    this.locale = locale;
    this.allowedYears = allowedYears;
    this.init(date);
  }

  update(date) {
    this.init(date);
  }

  getMonthInformation(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const startDate = new Date(year, month, 1); // Tue 01 2019 00:00:00 GMT+0100
    const endDate = new Date(year, month + 1, 0); // // Thu 31 2019 00:00:00 GMT+0100

    const startDay = startDate.getDay(); // 2 (Tuesday) 0 is Sunday and 6 is Saturday
    const currentMonthTotalDays = endDate.getDate(); // 31 // Day of the current month.
    let nextMonthDay = 1;

    const today = new Date();
    const dates = [];
    for (let i = 0; i < 42; i += 1) {
      const dateCell = {};
      dateCell.isActive = true;
      const daysToCount = startDay === 0 ? 6 : startDay - 1;
      // Careful! We are calculating and working with standard ISO-dates. They might not show the same date as the local one in the given timezone.
      // So for the user we are converting it back to the locale via .toLocaleDateString('de-CH|this.locale', options)
      // Proof! -> new Date(Date.parse('2020-01-22T23:00:00.000Z')).toLocaleDateString('de-CH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      // --> "Donnerstag, 23. Januar 2020" (the iso date has it's day on the 22. of January)
      // Previous month dates (if month does not start on Monday)

      if (i < daysToCount) {
        const newDate = new Date(startDate);
        newDate.setDate(startDate.getDate() - (daysToCount - i));
        dateCell.date = newDate;
        dateCell.isToday = false;

        if (this.allowedYears.indexOf(newDate.getFullYear()) < 0) {
          dateCell.isActive = false;
        }

        dateCell.cell = new LastMonth(dateCell.date.getDate(), dateCell.date.toISOString(), i, false, false, dateCell.isActive);
        // Next month dates (if month does not end on Saturday)
      } else if (i > currentMonthTotalDays + (daysToCount - 1)) {
        const newDate = new Date(year, month + 1, nextMonthDay);
        dateCell.date = newDate;
        dateCell.isToday = false;

        if (this.allowedYears.indexOf(newDate.getFullYear()) < 0) {
          dateCell.isActive = false;
        }

        dateCell.cell = new NextMonth(dateCell.date.getDate(), dateCell.date.toISOString(), i, false, false, dateCell.isActive);
        nextMonthDay += 1;
        // Current month dates. */
      } else {
        const newDate = new Date(startDate);
        newDate.setDate(startDate.getDate() + (i - daysToCount));
        const currentDate = newDate;
        const isToday = currentDate.toDateString() === today.toDateString();
        const isSelected = currentDate.toDateString() === date.toDateString();
        dateCell.date = currentDate;
        dateCell.isToday = isToday;
        dateCell.cell = new CurrentMonth(currentDate.getDate(), currentDate.toISOString(), i, isToday, isSelected, dateCell.isActive);
      }

      dates.push(dateCell);
    }

    return dates;
  }

  init(date) {
    const daysOfMonth = this.getMonthInformation(date);
    this.cells = [];

    // TODO:: Combine legacy with refactored code. Remove the double loop.
    daysOfMonth.forEach(day => {
      this.cells.push(day.cell);
    });
  }

  getCell(index) {
    return this.cells[index];
  }

  getCells() {
    return this.cells;
  }
}
