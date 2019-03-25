import { Selector } from 'testcafe';

class DatePickerAccessor {
  constructor(testcafe) {
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

  async chooseFebruary() {
    const dropDown = await Selector(() => document.querySelector('axa-datepicker').shadowRoot.querySelector('axa-dropdown'));
    await this.t.click(dropDown);
    const monthFebruary = await Selector(() =>
      document
        .querySelector('axa-datepicker')
        .shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
        .shadowRoot.querySelector('button[data-value="1"]')
    );

    await this.t.click(monthFebruary);
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
      document.querySelector('axa-datepicker').shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-year"]')
    );
    await this.t.expect(yearDropdown.exists).ok();
    await this.t.expect(yearDropdown.getAttribute('items')).contains(`"value":"` + year + `"`);
  }

  async assertMonth(month) {
    const monthDropdown = await Selector(() =>
      document.querySelector('axa-datepicker').shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
    );
    await this.t.expect(monthDropdown.exists).ok();
    await this.t.expect(monthDropdown.getAttribute('title')).contains(month);
  }

  async assertDay(day) {
    const dayList = await Selector(() =>
      document.querySelector('axa-datepicker').shadowRoot.querySelector('button[class*="m-datepicker__calendar-selected-day"]')
    );
    await this.t.expect(dayList.exists).ok();
    await this.t.expect(dayList.innerText).contains(day);
  }
}

export { DatePickerAccessor };
