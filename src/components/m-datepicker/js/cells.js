export class Cell {
  constructor(el) {
    el.classList.add('m-datepicker__calender-body__cell');
  }
}

export class NextMonth extends Cell {
  constructor(el) {
    super(el);
    el.classList.add('m-datepicker__calender-body__not-current-month');
    el.classList.add('js-datepicker__calender-body__next-month');
  }
}

export class LastMonth extends Cell {
  constructor(el) {
    super(el);
    el.classList.add('m-datepicker__calender-body__not-current-month');
    el.classList.add('js-datepicker__calender-body__last-month');
  }
}

export class CurrentMonth extends Cell {
  constructor(el) {
    super(el);
    el.classList.add('m-datepicker__calender-body__current-month');
    el.classList.add('js-datepicker__calender-body__current-month');
  }
}

export class Today extends CurrentMonth {
  constructor(el) {
    super(el);
    el.classList.add('m-datepicker__calender-body__today');
  }
}

export class SelectedDay extends CurrentMonth {
  constructor(el) {
    super(el);
    el.classList.add('m-datepicker__calender-body__selected-day');
  }
}
