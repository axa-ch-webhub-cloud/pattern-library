import { Selector } from 'testcafe';

class DatePickerAccessor {
  constructor(testcafe) {
    this.t = testcafe;
  }

  daySelector = Selector(dayIndex => {
    return document.querySelector('axa-datepicker').shadowRoot.querySelector(`button[data-index="${dayIndex}"]`);
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

  async chooseDayByIndex(dayIndex) {
    const day = await Selector(this.daySelector(dayIndex));
    await this.t.click(day);
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
