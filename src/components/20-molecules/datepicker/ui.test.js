import { ClientFunction, Selector } from 'testcafe';
import { DatePickerAccessor } from './test.accessor';
import { range } from './utils/date';

/* eslint-disable */

const host = process.env.TEST_HOST_STORYBOOK_URL;

const datepickerYearDropdown = Selector(() =>
  document.querySelector(`axa-datepicker .js-datepicker__dropdown-year`)
);

const reactDatepickerYearDropdown = Selector(() =>
  document.querySelector(`#datepicker-react .js-datepicker__dropdown-year`)
);

fixture('Datepicker')
  .page(`${host}/iframe.html?id=components--datepicker`)
  .afterEach(async t => {
    await t.maximizeWindow();
  });

test('should select February the 13th and then the 14th', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseMonth(2);
  await datePickerAccessor.selectDayOfCurrentMonth(13);
  await datePickerAccessor.selectDayOfCurrentMonth(14);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Februar');
  await datePickerAccessor.assertDay(14);
});

test('should convert the mixed input values (numbers and ranges) from allowedyears prop correctly', async t => {
  const datepicker = new DatePickerAccessor(t, 'datepicker');
  const dropdown = await Selector(
    datepicker.yearDropdownSelector('datepicker')
  );

  // Rendered array should be equal to the given ranges and custom dates we pass in in story.js allowedYears
  const dropdownItems = await dropdown().getAttribute('items');

  const expected = range(1971, 2000)
    .concat([2012, 2014])
    .concat(range(2018, 2022))
    .map(year => ({
      selected: year === 2020,
      name: `${year}`,
      value: `${year}`,
    }));

  await t.expect(dropdownItems).eql(JSON.stringify(expected));
});

test('should select the first of March from within the February view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseMonth(2);
  await datePickerAccessor.selectDayOfOutsideMonth(1);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('März');
  await datePickerAccessor.assertDay(1);
});

test('should select the 31th of January from within the February view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseMonth(2);
  await datePickerAccessor.selectDayOfOutsideMonth(31);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Januar');
  await datePickerAccessor.assertDay(31);
});

test('should have a 29th of February in 2020 - should correctly handle leap year', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseMonth(2);
  await datePickerAccessor.selectDayOfCurrentMonth(29);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Februar');
  await datePickerAccessor.assertDay(29);
});

test('should begin with September 1 as first Monday in 1980', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');
  await datePickerAccessor.chooseMonth(9, false);
  await datePickerAccessor.chooseYear(1980, false);

  await datePickerAccessor.assertYear(1980);
  await datePickerAccessor.assertMonth('September');

  const firstVisibleDay = await Selector(() =>
    document.querySelector(
      `axa-datepicker[data-test-id="datepicker"] .js-datepicker__calendar .js-datepicker__calender-body__cell:first-child`
    )
  );
  await t.expect(firstVisibleDay.exists).ok();
  await t.expect(firstVisibleDay.innerText).eql('1');
});

test('should have working selection', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  let dayCell22State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    22
  );
  await t.expect(dayCell22State).eql('SELECTED');

  await datePickerAccessor.chooseMonth(1);

  dayCell22State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    22
  );
  await t.expect(dayCell22State).eql('STANDARD');

  await datePickerAccessor.chooseMonth(5);
  dayCell22State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    22
  );
  await t.expect(dayCell22State).eql('SELECTED');

  await datePickerAccessor.chooseYear(1971);

  dayCell22State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    22
  );
  await t.expect(dayCell22State).eql('STANDARD');

  await datePickerAccessor.chooseYear(2020);

  dayCell22State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    22
  );
  await t.expect(dayCell22State).eql('SELECTED');

  let dayCell23State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    23
  );
  await t.expect(dayCell23State).eql('STANDARD');

  await datePickerAccessor.selectDayOfCurrentMonth(23);

  dayCell23State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    22
  );
  await t.expect(dayCell23State).eql('STANDARD');

  dayCell23State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    23
  );
  await t.expect(dayCell23State).eql('HOVER');

  await datePickerAccessor.chooseMonth(1);

  dayCell23State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    23
  );
  await t.expect(dayCell23State).eql('STANDARD');

  await datePickerAccessor.chooseMonth(5);
  dayCell23State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    23
  );
  await t.expect(dayCell23State).eql('SELECTED');

  await datePickerAccessor.chooseYear(1971);

  dayCell23State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    23
  );
  await t.expect(dayCell23State).eql('STANDARD');

  await datePickerAccessor.chooseYear(2020);

  dayCell23State = await datePickerAccessor.getStateOfSpecificDayCellWithinCurrentMonth(
    23
  );
  await t.expect(dayCell23State).eql('SELECTED');
});

test('should handle month change with native dropdown element', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseMonth(2, true);
  await datePickerAccessor.assertMonth('Februar');
}).before(async t => {
  await t.resizeWindow(200, 200);
});

test('should have a fixed width', async t => {
  const width = 236;
  const datepicker = await Selector(() =>
    document.querySelector('axa-datepicker')
  );
  const datepickerWrap = await datepicker.find('.m-datepicker__wrap');
  const datepickerWrapWidth = await datepickerWrap.getStyleProperty('width');

  await t.expect(datepicker.clientWidth).eql(width + 60 + 2 + 40); // 236 min-width + 2*30 padding + 2*1 border + 2*20 margin
  await t.expect(datepickerWrapWidth).eql('296px'); // wrapper has a min-width
});

test('should just add years of a given range', async t => {
  const setProperties = ClientFunction(() => {
    const datepicker = document.querySelector('axa-datepicker');
    datepicker.allowedyears = ['1999-2000'];
  });

  await setProperties();

  const itemsString = await datepickerYearDropdown.getAttribute('items');
  const itemsArray = JSON.parse(itemsString);

  await t.expect(itemsArray.length).eql(2);

  await t.expect(itemsString).contains('"value":"1999"');

  await t.expect(itemsString).contains('"value":"2000"');

  await t.expect(itemsString).notContains('"value":"2020"');
});

test('should set the first entry of allowedyears as startup date (no year set; current year not in allowedyears)', async t => {
  const setProperties = ClientFunction(() => {
    const datepicker = document.querySelector('axa-datepicker');
    datepicker.allowedyears = [1999];
  });
  const itemsString = await datepickerYearDropdown.getAttribute('items');

  await setProperties();
  await t
    .expect(itemsString)
    .contains('{"selected":true,"name":"2020","value":"2020"},');
});

test('should set the first entry of allowedyears as startup date (year is set but value not in allowedyears)', async t => {
  const setProperties = ClientFunction(() => {
    const datepicker = document.querySelector('axa-datepicker');
    datepicker.year = 2019;
    datepicker.allowedyears = [1999];
  });
  const itemsString = await datepickerYearDropdown.getAttribute('items');

  await setProperties();
  await t
    .expect(itemsString)
    .contains('{"selected":true,"name":"2020","value":"2020"},');
});

test('should set current year as startup date', async t => {
  const currentYear = new Date().getFullYear();
  const setProperties = ClientFunction(currentYear => {
    const datepicker = document.querySelector('axa-datepicker');
    datepicker.allowedyears = [1999, currentYear];
  });
  const itemsString = await datepickerYearDropdown.getAttribute('items');

  await setProperties(currentYear);
  await t
    .expect(itemsString)
    .contains(
      `{"selected":true,"name":"${currentYear}","value":"${currentYear}"},`
    );
});

fixture('Datepicker - With Locale').page(
  `${host}/iframe.html?id=components--datepicker&knob-locale=en-GB`
);

test('should display month in English', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseMonth(2);

  await datePickerAccessor.assertMonth('February');
});

fixture('Datepicker - Collapsible Version').page(
  `${host}/iframe.html?id=components--datepicker&knob-inputfield=true&knob-year=2019`
);

test('should write date into input field for input calendars', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');
  await datePickerAccessor.openCalendar();

  await datePickerAccessor.assertYear(2019);
  await datePickerAccessor.chooseMonth(2);
  await datePickerAccessor.selectDayOfCurrentMonth(14);

  // we need to do things on our own here since property access
  // is *not* supported by the TestCafe API (here for 'value')
  const getInputValue = ClientFunction(
    () =>
      document.querySelector(`axa-datepicker[data-test-id="datepicker"]`).value
  );
  await t.expect(await getInputValue()).eql('14.2.2019');
});

test('should change enhanced dropdown title (only on large screens) on month change', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');
  await datePickerAccessor.openCalendar();

  await datePickerAccessor.chooseMonth(2);
  await datePickerAccessor.selectDayOfCurrentMonth(14);
  await datePickerAccessor.openCalendar();

  await datePickerAccessor.assertDropdownTitle('Februar');
});

fixture('Datepicker - Collapsible Version with it-CH locale').page(
  `${host}/iframe.html?id=components--datepicker&knob-inputfield=true&knob-year=2019&knob-locale=it-CH`
);

test('should have correct format at input field', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');
  await datePickerAccessor.openCalendar();

  await datePickerAccessor.assertYear(2019);
  await datePickerAccessor.chooseMonth(2);
  await datePickerAccessor.selectDayOfCurrentMonth(14);

  // we need to do things on our own here since property access
  // is *not* supported by the TestCafe API (here for 'value')
  const getInputValue = ClientFunction(
    () =>
      document.querySelector(`axa-datepicker[data-test-id="datepicker"]`).value
  );
  await t.expect(await getInputValue()).eql('14.2.2019');
});

fixture('Datepicker - Collapsible Version with it-IT locale').page(
  `${host}/iframe.html?id=components--datepicker&knob-inputfield=true&knob-year=2019&knob-locale=it-IT`
);

test('should have correct format at input field', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');
  await datePickerAccessor.openCalendar();

  await datePickerAccessor.assertYear(2019);
  await datePickerAccessor.chooseMonth(2);
  await datePickerAccessor.selectDayOfCurrentMonth(14);

  // we need to do things on our own here since property access
  // is *not* supported by the TestCafe API (here for 'value')
  const getInputValue = ClientFunction(
    () =>
      document.querySelector(`axa-datepicker[data-test-id="datepicker"]`).value
  );
  await t.expect(await getInputValue()).eql('14/2/2019');
});

// React smoke test
fixture('Datepicker React').page(
  `${host}/iframe.html?id=examples-datepicker-react--story`
);
test('should render datepicker as reactified component', async t => {
  const datepickerReact = await Selector(() =>
    document.querySelector(`axa-datepicker[data-test-id="datepicker-react"]`)
  );
  await t.setTestSpeed(0.5);
  await t.expect(datepickerReact.exists).ok();
});

test('should correctly expand year ranges assigned via property', async t => {
  const datepickerReactYearDropdown = await Selector(() =>
    document.querySelector(
      `axa-datepicker[data-test-id="datepicker-react"] .js-datepicker__dropdown-year`
    )
  );
  await t.setTestSpeed(0.5);
  await t.click(datepickerReactYearDropdown);

  await t
    .expect(datepickerReactYearDropdown.getAttribute('items'))
    .contains('"value":"2019"');

  await t
    .expect(datepickerReactYearDropdown.getAttribute('items'))
    .contains('"value":"2020"');
});

// React controlled-component test
fixture('Datepicker React controlled').page(
  `${host}/iframe.html?id=examples-datepicker-react--controlled-component-with-inputfield`
);
test('should behave correctly when controlled', async t => {
  const datepickerReact = await Selector(() =>
    document.querySelector(
      `axa-datepicker[data-test-id="datepicker-controlled-react"]`
    )
  );
  await t.setTestSpeed(0.5);
  await t.expect(datepickerReact.exists).ok();

  const getInputValue = ClientFunction(
    () =>
      document.querySelector(
        `axa-datepicker[data-test-id="datepicker-controlled-react"]`
      ).value
  );

  await t.expect(await getInputValue()).eql('4.6.2019');

  const getError = ClientFunction(
    () =>
      document.querySelector(
        `axa-datepicker[data-test-id="datepicker-controlled-react"]`
      ).error
  );

  // no error on initial render
  await t.expect(await getError()).eql(null);

  // deliberately wrong user input...
  await t.typeText(
    `axa-datepicker[data-test-id="datepicker-controlled-react"] .js-datepicker__input`,
    '28.wrong2.2019',
    { replace: true }
  );
  // ... triggers expected error
  await t.expect(await getError()).eql('Invalid date');

  await t.typeText(
    `axa-datepicker[data-test-id="datepicker-controlled-react"] .js-datepicker__input`,
    '28.2.2019',
    { replace: true }
  );

  await t.expect(await getInputValue()).eql('28.2.2019');
  const checkbox = Selector(
    'axa-checkbox[name="datepicker-controlled-react-checkbox"] .a-checkbox__wrapper'
  );

  await t.click(checkbox);

  await t
    .expect(
      (await Selector('[data-test-id="datepicker-react-controlled-value"]'))
        .innerText
    )
    .eql('28.2.2019 (frozen)');

  await t.typeText(
    `axa-datepicker[data-test-id="datepicker-controlled-react"] .js-datepicker__input`,
    '5.6.2019',
    { replace: true }
  );

  await t.expect(await getInputValue()).eql('28.2.2019');
});

fixture('Datepicker React inputfield').page(
  `${host}/iframe.html?id=examples-datepicker-react--story&knob-inputfield=true&knob-locale=de-CH`
);

test('should fire onDateChange callback on valid user input', async t => {
  const datepicker = await Selector(() =>
    document.querySelector(`#datepicker-react`)
  );
  await t.setTestSpeed(0.5);
  await t.expect(datepicker.exists).ok();

  // typed-in text with valid date should trigger onDateChange...
  await t.typeText(`#datepicker-react .js-datepicker__input`, '28.2.2020', {
    replace: true,
  });

  await t
    .wait(50 /* allow for DOM to stabilize */)
    .expect(datepicker.getAttribute('title')) // ... reflects onDateChange
    .contains(' Feb 28 2020 ');
});

fixture('Datepicker React OnInputfieldKeyUp').page(
  `${host}/iframe.html?id=examples-datepicker-react--using-oninputfieldkeyup-event`
);

test('should fire onInputfieldKeyUp callback on user input', async t => {
  const testoutput = await Selector(() =>
    document.querySelector('#datepicker-react-testoutput')
  ).addCustomDOMProperties({
    innerHTML: el => el.innerHTML,
  });

  await t.typeText('axa-datepicker', 'x', {
    replace: true,
  });

  await t.expect(await testoutput().innerHTML).eql('x');
});

fixture('Datepicker React inputfield defaultValue').page(
  `${host}/iframe.html?id=examples-datepicker-react--story&knob-inputfield=true&knob-locale=de-CH&knob-defaultValue=25.1.2020`
);

test('should react to programmatic date property changes', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker-react');
  // defaultValue is respected
  const getInputValue = ClientFunction(() => {
    const inputNode = document.querySelector(
      `#datepicker-react .js-datepicker__input`
    );
    return inputNode.value;
  });
  await t.setTestSpeed(0.5);
  await t.expect(await getInputValue()).eql('25.1.2020');

  // setting 'date' property works and can be read back
  const setDate = ClientFunction(() => {
    const domNode = document.querySelector(`#datepicker-react`);
    domNode.date = new Date('2019-04-27');
    return `${domNode.date}`;
  });

  await t.expect(await setDate()).contains('Sat Apr 27 2019');

  // now drop down the datepicker and verify it is open
  await t
    .wait(50 /* allow for setDate-derived re-rendering time */)
    .click('#datepicker-react .m-datepicker__input-button');

  const datePickerIsOpen = ClientFunction(() => {
    const domNode = document.querySelector(`#datepicker-react`);
    return domNode.open;
  });

  await t
    .wait(50 /* allow for DOM to stabilize */)
    .expect(await datePickerIsOpen())
    .ok();

  // check month, year, day meet expectations
  const datepickerMonthDropdown = await Selector(() =>
    document.querySelector(`#datepicker-react .js-datepicker__dropdown-month`)
  );

  await t
    .expect(datepickerMonthDropdown.getAttribute('items'))
    .contains('{"selected":true,"name":"April","value":"3"}');

  await t
    .expect(await reactDatepickerYearDropdown.getAttribute('items'))
    .contains('{"selected":true,"name":"2019","value":"2019"}');

  await datePickerAccessor.selectDayOfCurrentMonth('27');

  await t
    .wait(50)
    .expect(await getInputValue())
    .eql('27.4.2019');
});

fixture('Datepicker React empty inputfield').page(
  `${host}/iframe.html?id=examples-datepicker-react--story&knob-inputfield=true&knob-locale=de-CH`
);

test('should allow month change from default date', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker-react');
  const datepicker = await Selector(() =>
    document.querySelector(`#datepicker-react`)
  );
  await t.setTestSpeed(0.5);
  await t.expect(datepicker.exists).ok();

  await datePickerAccessor.openCalendar();

  await datePickerAccessor.assertIsOpen();

  const DAY_TO_SELECT = 30;
  await datePickerAccessor.selectDayOfCurrentMonth(DAY_TO_SELECT);

  const getInputValue = ClientFunction(
    () =>
      document.querySelector(`#datepicker-react .js-datepicker__input`).value
  );

  const preSelectedYear = '1971'; // first entry of allowedyears (see README "year")
  const d = new Date();
  const currentMonth = d.getMonth();
  const currentDateString = `${DAY_TO_SELECT}.${currentMonth +
    1}.${preSelectedYear}`;

  // verify committed date meets expectation
  await t
    .wait(50)
    .expect(await getInputValue())
    .eql(currentDateString);

  // select previous (not January) or next (January) month and commit:

  // open it
  await t.wait(50).click('#datepicker-react .m-datepicker__input-button');

  await datePickerAccessor.assertIsOpen();

  // open month dropdown
  await t.click('#datepicker-react .js-datepicker__dropdown-month');

  const JANUARY = 0;
  const newMonth = currentMonth + (currentMonth === JANUARY ? 1 : -1);

  // click on new month
  await t
    .wait(50)
    .click(
      `#datepicker-react .js-dropdown__button[data-index="${newMonth + 1}"]`
    );

  // commit new date
  await datePickerAccessor.selectDayOfCurrentMonth(26);

  // verify committed date meets expectation: correct month and year
  const newDateString = `.${newMonth + 1}.${preSelectedYear}`;

  // assert date input has the correct year and month
  await t
    .wait(50)
    .expect(await getInputValue())
    .contains(newDateString);
});

test('should pass through className and arbitrary data- attributes + have automatic React displayName', async t => {
  const datepicker = await Selector(() =>
    document.querySelector(`#datepicker-react`)
  );
  await t.setTestSpeed(0.5);
  await t.expect(datepicker.exists).ok();
  await t.expect(datepicker.getAttribute('class')).eql('my-special-class');
  await t.expect(datepicker.getAttribute('data-selenium-id')).eql('0815');
  await t
    .expect(datepicker.getAttribute('data-display-name'))
    .eql('AxaDatepicker');
});

test('should display error message if invalid is set, unless invaliddatetext is empty', async t => {
  const setDatepicker = ClientFunction((property, value) => {
    const domNode = document.querySelector(`#datepicker-react`);
    if (value !== undefined) {
      domNode[property] = value;
    }
    return domNode[property];
  });

  const findNode = Selector(selector => {
    return document.querySelector(`#datepicker-react ${selector}`);
  });

  await t.setTestSpeed(0.5);
  await t.expect(await setDatepicker('invaliddatetext', 'my error')).ok();
  await t.expect(await setDatepicker('invalid', true)).ok();
  await t.expect(await findNode('.m-datepicker__error')).ok();
  await t
    .expect(await findNode('.m-datepicker__error').innerText)
    .eql('my error');

  await t.expect(await setDatepicker('invaliddatetext', '')).notOk();
  await t.expect(await findNode('.m-datepicker__error')).notOk();
});

test('should allow year ranges', async t => {
  const setDatepicker = ClientFunction((property, value) => {
    const domNode = document.querySelector(`#datepicker-react`);
    if (value !== undefined) {
      domNode[property] = value;
    }
    return JSON.stringify(domNode[property]);
  });

  await t.setTestSpeed(0.5);
  await t.expect(await setDatepicker('year', 2020)).ok();
  await t.expect(await setDatepicker('allowedyears', /* empty */ [])).ok();
  await t.expect(await setDatepicker('allowedyears')).eql('[2020]');
  await t.expect(await setDatepicker('allowedyears', ['1920-2003'])).ok();
  await t
    .expect(await setDatepicker('allowedyears'))
    .eql(JSON.stringify(range(2020 - 100, 2020 - 17)));

  // now open calendar
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker-react');
  await t.wait(50).click('#datepicker-react .m-datepicker__input-button');
  await datePickerAccessor.assertIsOpen();
  await t.wait(50);

  // verify all calendar days are visible
  // (to prevent regression against bug that would render all days inactive, i.e. visibility:hidden, upon allowedyears changes)
  const allDaysVisible = ClientFunction(() => {
    const days = Array.prototype.slice.call(
      document.querySelectorAll(
        '#datepicker-react .js-datepicker__calender-body__cell'
      )
    );

    return (
      days.length ===
      days.filter(
        cell => window.getComputedStyle(cell, null).visibility !== 'hidden'
      ).length
    );
  });

  await t.expect(await allDaysVisible()).eql(true);
});

fixture('Datepicker Form').page(
  `${host}/iframe.html?id=examples-datepicker-pure-html--in-a-form`
);
test('should submit datepicker correctly in form', async t => {
  const datepickerForm = await Selector(() =>
    document.querySelector(`axa-datepicker[data-test-id="datepicker-forms"]`)
  );
  await t.setTestSpeed(0.5);
  await t.expect(datepickerForm.exists).ok();
  await t.typeText(
    `axa-datepicker[data-test-id="datepicker-forms"] .js-datepicker__input`,
    '29.2.2020'
  );
  await t.click('#datepicker-forms-submit');
  await t
    .wait(
      50 /* give click handler time to set innerText below,
            and then time for the DOM to stabilize */
    )
    .expect((await Selector('#datepicker-forms-content')).innerText)
    .eql('date = 29.2.2020 (of 1 submittable elements)');
});

fixture('Datepicker with onchange handler').page(
  `${host}/iframe.html?id=examples-datepicker-pure-html--with-onchange-handler`
);
test('should fire the right events', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');
  const datepickerForm = await Selector(() =>
    document.querySelector(`axa-datepicker[data-test-id="datepicker-onchange"]`)
  );

  await t.setTestSpeed(0.5);

  await t.expect(datepickerForm.exists).ok();
  await t.click('.js-datepicker__input-button');

  await t
    .wait(100)
    .click('.m-datepicker__calendar-current-month[data-day="16"]');
  await t
    .wait(50)
    .expect((await Selector('.event-log')).value)
    .eql(`{"name":"date","value":"16.2.2020"}\n\n`);

  await t
    .wait(50)
    .typeText(
      `axa-datepicker[data-test-id="datepicker-onchange"] .js-datepicker__input`,
      '29.2.1976',
      { replace: true }
    );

  await t
    .wait(50)
    .expect((await Selector('.event-log')).value)
    .contains(`\n\n{"name":"date","value":"29.2.1976"}\n\n`);
});

test('should have default width', async t => {
  const datepicker = await Selector(() =>
    document.querySelector('axa-datepicker')
  );
  await t.expect(datepicker.getAttribute('width')).eql('100%');
});

fixture('Datepicker as inputfield with fixed width').page(
  `${host}/iframe.html?id=components--datepicker&knob-inputfield=true&knob-locale=de-CH&knob-year=2020&knob-month=4&knob-day=22&knob-disabled=&knob-autofocus=&knob-checkMark=&knob-label=&knob-monthtitle=Choose Month&knob-yeartitle=Choose Year&knob-invaliddatetext=Invalid date&knob-placeholder=Please select a date&knob-width=200`
);

test('should have 200px width', async t => {
  const datepicker = await Selector(() =>
    document.querySelector('axa-datepicker')
  );
  await t.expect(datepicker.clientWidth).eql(200);
});

test('button should have flex-shrink set because of IE', async t => {
  const datepickerButton = await Selector(() =>
    document.querySelector('axa-datepicker')
  ).find('.js-datepicker__input-button');
  const datepickerButtonMinWidth = await datepickerButton.getStyleProperty(
    'flex-shrink'
  );

  await t.expect(datepickerButtonMinWidth).eql('0');
});

fixture('Datepicker as inputfield with 196px width').page(
  `${host}/iframe.html?id=components--datepicker&knob-inputfield=true&knob-locale=de-CH&knob-year=2020&knob-month=4&knob-day=22&knob-disabled=&knob-autofocus=&knob-checkMark=&knob-label=&knob-monthtitle=Choose Month&knob-yeartitle=Choose Year&knob-invaliddatetext=Invalid date&knob-placeholder=Please select a date&knob-width=196`
);

test('should have no minimum width', async t => {
  const datepicker = await Selector(() =>
    document.querySelector('axa-datepicker')
  );
  const datepickerInputWrap = await datepicker.find(
    '.m-datepicker__input-wrap'
  );
  await t.expect(datepicker.clientWidth).eql(196); // component has no min-width
  await t.expect(datepickerInputWrap.clientWidth).eql(196); // input wrapper has no min-width
});

fixture('Datepicker no next month').page(
  `${host}/iframe.html?id=components--datepicker&knob-locale=de-CH&knob-year=2022&knob-month=11&knob-day=15&knob-allowedyears=["1971-2000",2012,2014,"2018-2022"]&knob-label=&knob-monthtitle=Choose Month&knob-yeartitle=Choose Year&knob-invaliddatetext=Invalid date&knob-placeholder=Please select a date&knob-width=`
);

test('Should disable next button.', async t => {
  const next = Selector(
    () => document.getElementsByClassName('m-datepicker__button-next')[0]
  );

  await t.expect(next.hasAttribute('disabled')).ok();
});

fixture('Datepicker no previous month').page(
  `${host}/iframe.html?id=components--datepicker&knob-locale=de-CH&knob-year=1971&knob-month=0&knob-day=15&knob-allowedyears=["1971-2000",2012,2014,"2018-2022"]&knob-label=&knob-monthtitle=Choose Month&knob-yeartitle=Choose Year&knob-invaliddatetext=Invalid date&knob-placeholder=Please select a date&knob-width=`
);

test('Should disable prev button.', async t => {
  const prev = Selector(
    () => document.getElementsByClassName('m-datepicker__button-prev')[0]
  );

  await t.expect(prev.hasAttribute('disabled')).ok();
});
