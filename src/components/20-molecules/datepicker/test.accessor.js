import { Selector } from 'testcafe';

class DatePickerAccessor {
  constructor(testcafe, id) {
    this.id = id;
    this.t = testcafe;
  }

  async chooseFebruary() {
    await this.t.setTestSpeed(0.5);
    const dropDown = await Selector(this.selectMonthDropdownSelector(this.id));
    await this.t.click(dropDown);
    const monthFebruary = await Selector(this.selectFebruarySelector(this.id));
    await this.t.click(monthFebruary);
  }
  async chooseFebruaryNative() {
    await this.t.setTestSpeed(0.5);
    const dropDown = await Selector(this.selectMonthDropdownSelector(this.id));
    await this.t.click(dropDown);
    const monthFebruary = await Selector(
      this.selectFebruarySelectorNative(this.id)
    );
    await this.t.click(monthFebruary);
  }

  async openCalendar() {
    await this.t.setTestSpeed(0.5);
    const openCalendar = await Selector(this.openCalendarSelector(this.id));
    await this.t.click(openCalendar);
  }

  async selectDayOfCurrentMonth(day) {
    await this.t.setTestSpeed(0.5);
    const dayToSelect = await Selector(this.daySelector(day, true));
    await this.t.click(dayToSelect);
  }

  async selectDayOfOutsideMonth(day) {
    await this.t.setTestSpeed(0.5);
    const dayToSelect = await Selector(this.daySelector(day, false));
    await this.t.click(dayToSelect);
  }

  async assertYear(year) {
    await this.t.setTestSpeed(0.5);
    const yearDropdown = await Selector(this.yearDropdownSelector(this.id));
    await this.t.expect(yearDropdown.exists).ok();
    await this.t
      .expect(yearDropdown.getAttribute('items'))
      .contains(`"value":"${year}"`);
  }

  async assertMonth(month) {
    await this.t.setTestSpeed(0.5);
    const monthDropdown = await Selector(this.monthDropdownSelector(this.id));
    await this.t.expect(monthDropdown.exists).ok();
    await this.t.expect(monthDropdown.getAttribute('title')).contains(month);
  }

  async assertDay(day) {
    await this.t.setTestSpeed(0.5);
    const dayList = await Selector(this.dayListSelector(this.id));
    await this.t.expect(dayList.exists).ok();
    await this.t.expect(dayList.innerText).contains(day);
  }

  async assertIsClosed() {
    await this.t.setTestSpeed(0.5);
    const datepicker = await Selector(this.calendarSelector(this.id));
    await this.t.expect(datepicker.hasAttribute('open')).notOk();
  }

  async assertIsOpen() {
    await this.t.setTestSpeed(0.5);
    const datepicker = await Selector(this.calendarSelector(this.id));
    await this.t.expect(datepicker.hasAttribute('open')).ok();
  }

  async assertDropdownTitle(title) {
    await this.t.setTestSpeed(0.5);
    const dropdownButton = await Selector(
      this.datepickerDropdownButton(this.id)
    );
    await this.t.expect(dropdownButton.innerText).contains(title);
  }

  async submit() {
    await this.t.setTestSpeed(0.5);
    const submitButton = await Selector(this.submitButtonSelector(this.id));
    await this.t.click(submitButton);
  }

  submitButtonSelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('axa-button[class*="js-datepicker__button-ok"]')
  );

  datepickerInputFieldSelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('input[class*="js-datepicker__input"]')
  );

  datepickerDropdownButton = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
      .querySelector('.js-dropdown__title')
  );

  calendarSelector = Selector(id =>
    document.querySelector(`axa-datepicker[data-test-id="${id}"]`)
  );

  daySelector = Selector((day, currentMonth) => {
    const month = currentMonth ? '' : '-not';
    return document
      .querySelector('axa-datepicker')
      .querySelector(
        `button[class*="m-datepicker__calendar${month}-current-month"][data-day="${day}"]`
      );
  });

  openCalendarSelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('button[class*="m-datepicker__input-button"]')
  );

  selectFebruarySelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
      .querySelector('button[data-index="2"]')
  );
  selectFebruarySelectorNative = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
      .querySelector('option[data-index="2"]')
  );

  selectMonthDropdownSelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('axa-dropdown')
  );

  yearDropdownSelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('axa-dropdown[class*="js-datepicker__dropdown-year"]')
  );

  monthDropdownSelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
  );

  dayListSelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[data-test-id="${id}"]`)
      .querySelector('button[class*="m-datepicker__calendar-selected-day"]')
  );
}

export { DatePickerAccessor };
