import { Selector, ClientFunction } from 'testcafe';
import { DatePickerAccessor } from './test.accessor';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Datepicker').page(
  `${host}/iframe.html?id=molecules-datepicker--datepicker`
);

test('should select February the 13th and then the 14th', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
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
  await t
    .expect(dropdownItems)
    .eql(
      JSON.stringify([
        { selected: false, name: '1989', value: '1989' },
        { selected: false, name: '1990', value: '1990' },
        { selected: false, name: '1991', value: '1991' },
        { selected: false, name: '1992', value: '1992' },
        { selected: false, name: '1993', value: '1993' },
        { selected: false, name: '1994', value: '1994' },
        { selected: false, name: '1995', value: '1995' },
        { selected: false, name: '1996', value: '1996' },
        { selected: false, name: '1997', value: '1997' },
        { selected: false, name: '1998', value: '1998' },
        { selected: false, name: '1999', value: '1999' },
        { selected: false, name: '2000', value: '2000' },
        { selected: false, name: '2012', value: '2012' },
        { selected: false, name: '2014', value: '2014' },
        { selected: false, name: '2018', value: '2018' },
        { selected: false, name: '2019', value: '2019' },
        { selected: true, name: '2020', value: '2020' },
        { selected: false, name: '2021', value: '2021' },
        { selected: false, name: '2022', value: '2022' },
      ])
    );
});

test('should select the first of march from within the February view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfOutsideMonth(1);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('März');
  await datePickerAccessor.assertDay(1);
});

test('should select the 31th of January from within the February view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfOutsideMonth(31);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Januar');
  await datePickerAccessor.assertDay(31);
});

test('should have a 29th of February in 2020 - should correctly handle leap year', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfCurrentMonth(29);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Februar');
  await datePickerAccessor.assertDay(29);
});

fixture('Datepicker - With Locale').page(
  `${host}/iframe.html?id=molecules-datepicker--datepicker-translated-en-gb`
);

test('should display month in english', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker-translated');

  await datePickerAccessor.chooseFebruary();

  await datePickerAccessor.assertMonth('February');
});

fixture('Datepicker - Collapsible Version').page(
  `${host}/iframe.html?id=molecules-datepicker--datepicker-input`
);

test('should close calendar as soon as another one is open', async t => {
  const datePickerAccessor2019 = new DatePickerAccessor(
    t,
    'datepicker-input-2019'
  );
  await datePickerAccessor2019.openCalendar();
  const datePickerAccessor2020 = new DatePickerAccessor(
    t,
    'datepicker-input-2020'
  );
  await datePickerAccessor2020.openCalendar();
  await datePickerAccessor2020.assertIsOpen();
  await datePickerAccessor2019.assertIsClosed();
});

test('should write date into input field for input calendars', async t => {
  const datePickerAccessor2019 = new DatePickerAccessor(
    t,
    'datepicker-input-2019'
  );
  await datePickerAccessor2019.openCalendar();

  await datePickerAccessor2019.chooseFebruary();
  await datePickerAccessor2019.selectDayOfCurrentMonth(14);
  await datePickerAccessor2019.submit();
  // we need to do things on our own here since property access
  // is *not* supported by the TestCafe API (here for 'value')
  const getInputValue = ClientFunction(
    () =>
      document.querySelector(
        `axa-datepicker[data-test-id="datepicker-input-2019"]`
      ).value
  );
  await t.expect(await getInputValue()).eql('14.2.2019');
});

test('should change enhanced dropdown title (only on large screens) on month change', async t => {
  const datePickerAccessor2019 = new DatePickerAccessor(
    t,
    'datepicker-input-2019'
  );
  await datePickerAccessor2019.openCalendar();

  await datePickerAccessor2019.chooseFebruary();
  await datePickerAccessor2019.selectDayOfCurrentMonth(14);

  await datePickerAccessor2019.assertDropdownTitle('Februar');
});

// React smoke test
fixture('Datepicker React').page(
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-as-react-component`
);
test('should render datepicker as reactified component', async t => {
  const datepickerReact = await Selector(() =>
    document.querySelector(`axa-datepicker[data-test-id="datepicker-react"]`)
  );
  await t.expect(datepickerReact.exists).ok();
});
test('should correctly expand year ranges assigned via property', async t => {
  const datepickerReactYearDropdown = await Selector(() =>
    document.querySelector(
      `axa-datepicker[data-test-id="datepicker-react"] .js-datepicker__dropdown-year`
    )
  );

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
  `${host}/iframe.html?id=molecules-datepicker-react-demos--controlled-component-react-ified-datepicker-with-inputfield`
);
test('datepicker should behave correctly when controlled', async t => {
  const datepickerReact = await Selector(() =>
    document.querySelector(
      `axa-datepicker[data-test-id="datepicker-controlled-react"]`
    )
  );
  await t.expect(datepickerReact.exists).ok();

  const getInputValue = ClientFunction(
    () =>
      document.querySelector(
        `axa-datepicker[data-test-id="datepicker-controlled-react"]`
      ).value
  );

  await t.expect(await getInputValue()).eql('4.6.2019');

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
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-with-inputfield-as-react-component`
);

test('should fire onDateChange callback on valid user input', async t => {
  const datepicker = await Selector(() =>
    document.querySelector(`#datepicker-react-inputfield`)
  );
  await t.expect(datepicker.exists).ok();

  // typed-in text with valid date should trigger onDateChange...
  await t.typeText(
    `#datepicker-react-inputfield .js-datepicker__input`,
    '28.2.2020',
    { replace: true }
  );

  await t
    .wait(50 /* allow for DOM to stabilize */)
    .expect(datepicker.getAttribute('title')) // ... reflects onDateChange
    .contains(' Feb 28 2020 ');
});

fixture('Datepicker React inputfield').page(
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-with-inputfield-as-react-component`
);

test('should react to programmatic date property changes', async t => {
  // defaultValue is respected
  const getInputValue = ClientFunction(() => {
    const inputNode = document.querySelector(
      `#datepicker-react-inputfield .js-datepicker__input`
    );
    return inputNode.value;
  });

  await t.expect(await getInputValue()).eql('25.1.2020');

  // setting 'date' property works and can be read back
  const setDate = ClientFunction(() => {
    const domNode = document.querySelector(`#datepicker-react-inputfield`);
    domNode.date = new Date('2019-04-27');
    return `${domNode.date}`;
  });

  await t.expect(await setDate()).contains('Sat Apr 27 2019');

  // now drop down the datepicker and verify it is open
  await t
    .wait(50 /* allow for setDate-derived re-rendering time */)
    .click('#datepicker-react-inputfield .m-datepicker__input-button');

  const datePickerIsOpen = ClientFunction(() => {
    const domNode = document.querySelector(`#datepicker-react-inputfield`);
    return domNode.open;
  });

  await t
    .wait(50 /* allow for DOM to stabilize */)
    .expect(await datePickerIsOpen())
    .ok();

  // check month, year, day meet expectations
  const datepickerMonthDropdown = await Selector(() =>
    document.querySelector(
      `#datepicker-react-inputfield .js-datepicker__dropdown-month`
    )
  );

  await t
    .expect(datepickerMonthDropdown.getAttribute('items'))
    .contains('{"selected":true,"name":"April","value":"3"}');

  const datepickerYearDropdown = await Selector(() =>
    document.querySelector(
      `#datepicker-react-inputfield .js-datepicker__dropdown-year`
    )
  );

  await t
    .expect(datepickerYearDropdown.getAttribute('items'))
    .contains('{"selected":true,"name":"2019","value":"2019"}');

  const getSelectedDay = ClientFunction(
    () =>
      document.querySelector(`#datepicker-react-inputfield
 .js-datepicker__calendar .m-datepicker__calendar-selected-day`).innerText
  );

  await t.expect(await getSelectedDay()).eql('27');
});

fixture('Datepicker React empty inputfield').page(
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-with-empty-inputfield-as-react-component`
);

test('should allow month change from default date', async t => {
  const datepicker = await Selector(() =>
    document.querySelector(`#datepicker-empty-react-inputfield`)
  );
  await t.expect(datepicker.exists).ok();

  // open it
  await t.click(
    '#datepicker-empty-react-inputfield .m-datepicker__input-button'
  );

  const datePickerIsOpen = ClientFunction(() => {
    const domNode = document.querySelector(
      `#datepicker-empty-react-inputfield`
    );
    return domNode.open;
  });

  await t
    .wait(50 /* allow for DOM to stabilize */)
    .expect(await datePickerIsOpen())
    .ok();

  // verify datepicker displays current date:

  // open month dropdown
  await t.click(
    '#datepicker-empty-react-inputfield .js-datepicker__dropdown-month'
  );

  // commit current date
  await t
    .wait(50)
    .click(`#datepicker-empty-react-inputfield .js-datepicker__button-ok`);

  const getInputValue = ClientFunction(
    () =>
      document.querySelector(
        `#datepicker-empty-react-inputfield .js-datepicker__input`
      ).value
  );

  const d = new Date();
  const currentMonth = d.getMonth();
  const currentDateString = `${d.getDate()}.${currentMonth +
    1}.${d.getFullYear()}`;

  // verify committed date meets expectation
  await t
    .wait(50)
    .expect(await getInputValue())
    .eql(currentDateString);

  // select previous (not January) or next (January) month and commit:

  // open it
  await t
    .wait(50)
    .click('#datepicker-empty-react-inputfield .m-datepicker__input-button');

  await t
    .wait(50 /* allow for DOM to stabilize */)
    .expect(await datePickerIsOpen())
    .ok();

  // open month dropdown
  await t.click(
    '#datepicker-empty-react-inputfield .js-datepicker__dropdown-month'
  );

  const JANUARY = 0;
  const newMonth = currentMonth + (currentMonth === JANUARY ? 1 : -1);

  // click on new month
  await t
    .wait(50)
    .click(
      `#datepicker-empty-react-inputfield .js-dropdown__button[data-index="${newMonth}"]`
    );

  // commit new date
  await t
    .wait(50)
    .click(`#datepicker-empty-react-inputfield .js-datepicker__button-ok`);

  // verify committed date meets expectation
  const newDateString = `.${newMonth + 1}.${d.getFullYear()}`;

  await t
    .wait(50)
    .expect(await getInputValue())
    .contains(newDateString);
});

fixture('Datepicker Form').page(
  `${host}/iframe.html?id=molecules-datepicker-demos--feature-datepicker-in-a-form`
);
test('should submit datepicker correctly in form', async t => {
  const datepickerForm = await Selector(() =>
    document.querySelector(`axa-datepicker[data-test-id="datepicker-forms"]`)
  );
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
