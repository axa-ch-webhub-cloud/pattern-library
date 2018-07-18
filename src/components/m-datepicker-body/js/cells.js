export class Cell {
  static classes = 'm-datepicker-body__cell js-datepicker__calender-body__cell';
  constructor(text = '', index = 0, isToday = false) {
    this.text = text;
    this.index = index;
    this.isToday = isToday;
  }
  getClasses() { return Cell.classes; }
  getIndex() { return this.index; }
  getText() { return this.text; }
  getIsToday() { return this.isToday; }
}

export class NextMonth extends Cell {
  static classes = 'm-datepicker-body__not-current-month';
  getClasses() { return `${super.getClasses()} ${NextMonth.classes}`; }
}

export class LastMonth extends Cell {
  static classes = 'm-datepicker-body__not-current-month';
  getClasses() { return `${super.getClasses()} ${LastMonth.classes}`; }
}

export class CurrentMonth extends Cell {
  static classes = 'm-datepicker-body__current-month';
  getClasses() { return `${super.getClasses()} ${CurrentMonth.classes}`; }
}

export class Today extends CurrentMonth {
  static classes = 'm-datepicker-body__today';
  getClasses() { return `${super.getClasses()} ${Today.classes}`; }
}

export class SelectedDay extends CurrentMonth {
  static classes = 'm-datepicker-body__selected-day';
  getClasses() { return `${super.getClasses()} ${SelectedDay.classes}`; }
}
