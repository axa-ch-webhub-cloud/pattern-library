export class Cell {
  constructor(text = '', index = 0, isToday = false) {
    this.text = text;
    this.index = index;
    this.isToday = isToday;
    this.baseClass = 'm-datepicker-body__cell js-datepicker__calender-body__cell';
    this.className = '';
  }
}

export class NextMonth extends Cell {
  constructor(text = '', index = 0, isToday = false) {
    super(text, index, isToday);
    this.className = `${this.baseClass} m-datepicker-body__not-current-month`;
  }
}

export class LastMonth extends Cell {
  constructor(text = '', index = 0, isToday = false) {
    super(text, index, isToday);
    this.className = `${this.baseClass} m-datepicker-body__not-current-month`;
  }
}

export class CurrentMonth extends Cell {
  constructor(text = '', index = 0, isToday = false) {
    super(text, index, isToday);
    
    this.className = `${this.baseClass} m-datepicker-body__current-month${isToday ? ' m-datepicker-body__today' : ''}`;
  }
}

export class SelectedDay extends CurrentMonth {
  constructor(text = '', index = 0, isToday = false) {
    super(text, index, isToday);
    this.className = `${this.baseClass} m-datepicker-body__selected-day`;
  }
}
