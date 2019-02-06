export class Cell {
  constructor(text = '', value = '', index = 0, isToday = false, isSelected = false) {
    this.text = text;
    this.value = value;
    this.index = index;
    this.isToday = isToday;
    this.isSelected = isSelected;
    this.baseClass = `m-datepicker-body__cell js-datepicker__calender-body__cell${isSelected ? ' m-datepicker-body__selected-day' : ''}`;
    this.className = '';
  }
}

export class NextMonth extends Cell {
  constructor(text = '', value, index = 0, isToday = false, isSelected = false) {
    super(text, value, index, isToday, isSelected);
    this.className = `${this.baseClass} m-datepicker-body__not-current-month m-datepicker-body__next-month`;
  }
}

export class LastMonth extends Cell {
  constructor(text = '', value, index = 0, isToday = false, isSelected = false) {
    super(text, value, index, isToday, isSelected);
    this.className = `${this.baseClass} m-datepicker-body__not-current-month m-datepicker-body__prev-month`;
  }
}

export class CurrentMonth extends Cell {
  constructor(text = '', value, index = 0, isToday = false, isSelected = false) {
    super(text, value, index, isToday, isSelected);
    this.className = `${this.baseClass} m-datepicker-body__current-month${isToday ? ' m-datepicker-body__today' : ''}`;
  }
}
