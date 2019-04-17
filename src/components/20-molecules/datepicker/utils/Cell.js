export class Cell {
  constructor(
    text = '',
    value = '',
    index = 0,
    isToday = false,
    isSelected = false,
    isActive = true
  ) {
    this.text = text;
    this.value = value;
    this.index = index;
    this.isToday = isToday;
    this.isSelected = isSelected;
    this.isActive = isActive;
    this.baseClass = `m-datepicker__calendar-cell js-datepicker__calender-body__cell${
      isSelected ? ' m-datepicker__calendar-selected-day' : ''
    }${!isActive ? ' m-datepicker__calendar-day--inactive' : ''}`;
    this.className = '';
  }
}

export class NextMonth extends Cell {
  constructor(
    text = '',
    value = '',
    index = 0,
    isToday = false,
    isSelected = false,
    isActive = true
  ) {
    super(text, value, index, isToday, isSelected, isActive);
    this.className = `${
      this.baseClass
    } m-datepicker__calendar-not-current-month m-datepicker__calendar-next-month`;
  }
}

export class LastMonth extends Cell {
  constructor(
    text = '',
    value = '',
    index = 0,
    isToday = false,
    isSelected = false,
    isActive = true
  ) {
    super(text, value, index, isToday, isSelected, isActive);
    this.className = `${
      this.baseClass
    } m-datepicker__calendar-not-current-month m-datepicker__calendar-prev-month`;
  }
}

export class CurrentMonth extends Cell {
  constructor(
    text = '',
    value = '',
    index = 0,
    isToday = false,
    isSelected = false,
    isActive = true
  ) {
    super(text, value, index, isToday, isSelected, isActive);
    this.className = `${this.baseClass} m-datepicker__calendar-current-month${
      isToday ? ' m-datepicker__calendar-today' : ''
    }`;
  }
}
