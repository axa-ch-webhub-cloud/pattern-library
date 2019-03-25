import { Selector } from 'testcafe';

class DatePickerAccessor {
  daySelector = Selector(dayIndex => {
    return document.querySelector('axa-datepicker').shadowRoot.querySelector(`button[data-index="${dayIndex}"]`);
  });

  async chooseFebruary(t) {
    const dropDown = await Selector(() => document.querySelector('axa-datepicker').shadowRoot.querySelector('axa-dropdown'));
    await t.click(dropDown);
    const monthFebruary = await Selector(() =>
      document
        .querySelector('axa-datepicker')
        .shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
        .shadowRoot.querySelector('button[data-value="1"]')
    );

    await t.click(monthFebruary);
  }

  async chooseDayByIndex(t, dayIndex) {
    const day = await Selector(this.daySelector(dayIndex));
    await t.click(day);
  }

  async assertYear(t, year) {
    const yearDropdown = await Selector(() =>
      document.querySelector('axa-datepicker').shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-year"]')
    );
    await t.expect(yearDropdown.exists).ok();
    await t.expect(yearDropdown.getAttribute('items')).contains(`"value":"` + year + `"`);
  }

  async assertMonth(t, month) {
    const monthDropdown = await Selector(() =>
      document.querySelector('axa-datepicker').shadowRoot.querySelector('axa-dropdown[class*="js-datepicker__dropdown-month"]')
    );
    await t.expect(monthDropdown.exists).ok();
    await t.expect(monthDropdown.getAttribute('title')).contains(month);
  }

  async assertDay(t, day) {
    const dayList = await Selector(() =>
      document.querySelector('axa-datepicker').shadowRoot.querySelector('button[class*="m-datepicker__calendar-selected-day"]')
    );
    await t.expect(dayList.exists).ok();
    await t.expect(dayList.innerText).contains(day);
  }
}

const datePickerAccessor = new DatePickerAccessor();
export { datePickerAccessor };
