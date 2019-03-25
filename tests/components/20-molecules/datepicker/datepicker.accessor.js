import { Selector } from 'testcafe';

class DatePickerAccessor {
  constructor(testcafe, id) {
    this.rootComponent = Selector(() => document.querySelector(`axa-datepicker[id="${id}"]`));
    this.t = testcafe;
    this.id = id;
  }

  daySelector = Selector((day, currentMonth) => {
    return this.rootComponent.shadowRoot.querySelector(
      currentMonth
        ? `button[class*="m-datepicker__calendar-current-month"][data-day="${day}"]`
        : `button[class*="m-datepicker__calendar-not-current-month"][data-day="${day}"]`
    );
  });

  openCalendarSelector = Selector(id =>
    document.querySelector(`axa-datepicker[id="${id}"]`).shadowRoot.querySelector('button[class*="m-datepicker__input-button"]')
  );

  async chooseFebruary() {
    const aa = this;
    const dropDown = await Selector(() =>
      aa.rootComponent.shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
    );
    await this.t.click(dropDown);
    const monthFebruary = await Selector(() =>
      document
        .querySelector(`axa-datepicker[id="${this.id}"]`)
        .shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
        .shadowRoot.querySelector('button[data-value="1"]')
    );

    await this.t.click(monthFebruary);
  }

  async openCalendar(id) {
    const openCalendar = await Selector(this.openCalendarSelector(id));
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
    const yearDropdown = await Selector(() =>
      document
        .querySelector(`axa-datepicker[id="${this.id}"]`)
        .shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-year"]')
    );
    await this.t.expect(yearDropdown.exists).ok();
    await this.t.expect(yearDropdown.getAttribute('items')).contains(`"value":"` + year + `"`);
  }

  async assertMonth(month) {
    const monthDropdown = await Selector(() =>
      document
        .querySelector(`axa-datepicker[id="${this.id}"]`)
        .shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
    );
    await this.t.expect(monthDropdown.exists).ok();
    await this.t.expect(monthDropdown.getAttribute('title')).contains(month);
  }

  async assertDay(day) {
    const dayList = await Selector(() =>
      document
        .querySelector(`axa-datepicker[id="${this.id}"]`)
        .shadowRoot.querySelector('button[class*="m-datepicker__calendar-selected-day"]')
    );
    await this.t.expect(dayList.exists).ok();
    await this.t.expect(dayList.innerText).contains(day);
  }
}

export { DatePickerAccessor };
