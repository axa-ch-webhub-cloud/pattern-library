import { Selector } from 'testcafe';

class DatePickerAccessor {
  constructor(testcafe, id) {
    this.id = id;
    this.t = testcafe;
  }

  daySelector = Selector((day, currentMonth) => {
    return document
      .querySelector('axa-datepicker')
      .shadowRoot.querySelector(
        currentMonth
          ? `button[class*="m-datepicker__calendar-current-month"][data-day="${day}"]`
          : `button[class*="m-datepicker__calendar-not-current-month"][data-day="${day}"]`
      );
  });

  openCalendarSelector = Selector(id =>
    document.querySelector(`axa-datepicker[id="${id}"]`).shadowRoot.querySelector('button[class*="m-datepicker__input-button"]')
  );

  openCalendarSelector = Selector(id =>
    document.querySelector(`axa-datepicker[id="${id}"]`).shadowRoot.querySelector('button[class*="m-datepicker__input-button"]')
  );

  selectFebruarySelector = Selector(id =>
    document
      .querySelector(`axa-datepicker[id="${id}"]`)
      .shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
      .shadowRoot.querySelector('button[data-value="1"]')
  );

  selectMonthDropdownSelector = Selector(id =>
    document.querySelector(`axa-datepicker[id="${id}"]`).shadowRoot.querySelector('axa-dropdown')
  );

  yearDropdownSelector = Selector(id =>
    document.querySelector(`axa-datepicker[id="${id}"]`).shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-year"]')
  );

  monthDropdownSelector = Selector(id =>
    document.querySelector(`axa-datepicker[id="${id}"]`).shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
  );

  dayListSelector = Selector(id =>
    document.querySelector(`axa-datepicker[id="${id}"]`).shadowRoot.querySelector('button[class*="m-datepicker__calendar-selected-day"]')
  );

  async chooseFebruary() {
    const dropDown = await Selector(this.selectMonthDropdownSelector(this.id));
    await this.t.click(dropDown);
    const monthFebruary = await Selector(this.selectFebruarySelector(this.id));

    await this.t.click(monthFebruary);
  }

  async openCalendar(id) {
    const openCalendar = await Selector(this.openCalendarSelector(this.id));
    await this.t.click(openCalendar);
  }
  async selectDayOfCurrentMonth(day) {
    const dayToSelect = await Selector(this.daySelector(day, true));
    await this.t.click(dayToSelect);
  }

  async selectDayOfOutsideMonth(day) {
    const dayToSelect = await Selector(this.daySelector(day, false));
    await this.t.click(dayToSelect);
  }

  async assertYear(year) {
    const yearDropdown = await Selector(this.yearDropdownSelector(this.id));
    await this.t.expect(yearDropdown.exists).ok();
    await this.t.expect(yearDropdown.getAttribute('items')).contains(`"value":"` + year + `"`);
  }

  async assertMonth(month) {
    const monthDropdown = await Selector(this.monthDropdownSelector(this.id));
    await this.t.expect(monthDropdown.exists).ok();
    await this.t.expect(monthDropdown.getAttribute('title')).contains(month);
  }

  async assertDay(day) {
    const dayList = await Selector(this.dayListSelector(this.id));
    await this.t.expect(dayList.exists).ok();
    await this.t.expect(dayList.innerText).contains(day);
  }
}

export { DatePickerAccessor };
