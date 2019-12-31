import { Selector, ClientFunction } from 'testcafe';
import { DatePickerAccessor } from './test.accessor';

const host = process.env.TEST_HOST_STORYBOOK_URL;

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

  const range = (start, end) =>
    new Array(end - start + 1).fill(undefined).map((_, i) => i + start);

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
  `${host}/iframe.html?id=molecules-datepicker--datepicker&knob-locale=en-GB`
);

test('should display month in english', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();

  await datePickerAccessor.assertMonth('February');
});

fixture('Datepicker - Collapsible Version').page(
  `${host}/iframe.html?id=molecules-datepicker--datepicker&knob-inputfield=true&knob-year=2019`
);

test('should write date into input field for input calendars', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');
  await datePickerAccessor.openCalendar();

  await datePickerAccessor.assertYear(2019);
  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfCurrentMonth(14);
  await datePickerAccessor.submit();
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

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfCurrentMonth(14);

  await datePickerAccessor.assertDropdownTitle('Februar');
});

// React smoke test
fixture('Datepicker React').page(
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-as-react-component`
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
  `${host}/iframe.html?id=molecules-datepicker-react-demos--controlled-component-react-ified-datepicker-with-inputfield`
);
test('datepicker should behave correctly when controlled', async t => {
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
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-as-react-component&knob-inputfield=true&knob-locale=de-CH`
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

fixture('Datepicker React inputfield').page(
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-as-react-component&knob-inputfield=true&knob-locale=de-CH&knob-defaultValue=25.1.2020`
);

test('should react to programmatic date property changes', async t => {
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

  const datepickerYearDropdown = await Selector(() =>
    document.querySelector(`#datepicker-react .js-datepicker__dropdown-year`)
  );

  await t
    .expect(datepickerYearDropdown.getAttribute('items'))
    .contains('{"selected":true,"name":"2019","value":"2019"}');

  const getSelectedDay = ClientFunction(
    () =>
      document.querySelector(`#datepicker-react
 .js-datepicker__calendar .m-datepicker__calendar-selected-day`).innerText
  );

  await t.expect(await getSelectedDay()).eql('27');
});

fixture('Datepicker React empty inputfield').page(
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-as-react-component&knob-inputfield=true&knob-locale=de-CH`
);

test('should allow month change from default date', async t => {
  const datepicker = await Selector(() =>
    document.querySelector(`#datepicker-react`)
  );
  await t.setTestSpeed(0.5);
  await t.expect(datepicker.exists).ok();

  // open it
  await t.click('#datepicker-react .m-datepicker__input-button');

  const datePickerIsOpen = ClientFunction(() => {
    const domNode = document.querySelector(`#datepicker-react`);
    return domNode.open;
  });

  await t
    .wait(50 /* allow for DOM to stabilize */)
    .expect(await datePickerIsOpen())
    .ok();

  // verify datepicker displays current date:

  // open month dropdown
  await t.click('#datepicker-react .js-datepicker__dropdown-month');

  // commit current date
  await t.wait(50).click(`#datepicker-react .js-datepicker__button-ok`);

  const getInputValue = ClientFunction(
    () =>
      document.querySelector(`#datepicker-react .js-datepicker__input`).value
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
  await t.wait(50).click('#datepicker-react .m-datepicker__input-button');

  await t
    .wait(50 /* allow for DOM to stabilize */)
    .expect(await datePickerIsOpen())
    .ok();

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
  await t.wait(50).click(`#datepicker-react .js-datepicker__button-ok`);

  // verify committed date meets expectation
  const newDateString = `.${newMonth + 1}.${d.getFullYear()}`;

  await t
    .wait(50)
    .expect(await getInputValue())
    .contains(newDateString);
});

fixture('Datepicker React empty inputfield').page(
  `${host}/iframe.html?id=molecules-datepicker-react--datepicker-as-react-component&knob-inputfield=true&knob-locale=de-CH`
);

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

fixture('Datepicker Form').page(
  `${host}/iframe.html?id=molecules-datepicker-demos--feature-datepicker-in-a-form`
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

test('should have default width', async t => {
  const datepicker = await Selector(() =>
    document.querySelector('axa-datepicker')
  );
  await t.expect(datepicker.getAttribute('width')).eql('100%');
});

fixture('Datepicker with onchange handler').page(
  `${host}/iframe.html?id=molecules-datepicker-demos--feature-datepicker-with-onchange-handler`
);
test('should fire the right events', async t => {
  const datepickerForm = await Selector(() =>
    document.querySelector(`axa-datepicker[data-test-id="datepicker-onchange"]`)
  );

  await t.setTestSpeed(0.5);

  await t.expect(datepickerForm.exists).ok();

  await t.click('.js-datepicker__input-button');

  await t.wait(100).click('.js-datepicker__button-ok');

  await t
    .wait(50)
    .expect((await Selector('.event-log')).value)
    .eql(`{"name":"date","value":"29.2.2020"}\n\n`);

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

fixture('Datepicker as inputfield with fixed width and height').page(
  `${host}/iframe.html?id=molecules-datepicker--datepicker&knob-inputfield=true&knob-locale=de-CH&knob-year=2020&knob-month=4&knob-day=22&knob-disabled=&knob-autofocus=&knob-checkMark=&knob-label=&knob-labelbuttoncancel=Cancel&knob-labelbuttonok=Ok&knob-monthtitle=Choose Month&knob-yeartitle=Choose Year&knob-invaliddatetext=Invalid date&knob-placeholder=Please select a date&knob-width=200&knob-height=80`
);

test('should have 200px width', async t => {
  const datepicker = await Selector(() =>
    document.querySelector('axa-datepicker')
  );
  await t.expect(datepicker.clientWidth).eql(200);
});

test('button should have correct height', async t => {
  const expectedHeightWithBorderAndPadding = 78;
  const datepicker = await Selector(() =>
    document.querySelector('axa-datepicker')
  ).find('.js-datepicker__input-button');
  await t
    .expect(datepicker.clientHeight)
    .eql(expectedHeightWithBorderAndPadding);
});

fixture('Datepicker as inputfield with 196px width').page(
  `${host}/iframe.html?id=molecules-datepicker--datepicker&knob-inputfield=true&knob-locale=de-CH&knob-year=2020&knob-month=4&knob-day=22&knob-disabled=&knob-autofocus=&knob-checkMark=&knob-label=&knob-labelbuttoncancel=Cancel&knob-labelbuttonok=Ok&knob-monthtitle=Choose Month&knob-yeartitle=Choose Year&knob-invaliddatetext=Invalid date&knob-placeholder=Please select a date&knob-width=196&knob-height=40`
);
test('should have a minimum width', async t => {
  const datepicker = await Selector(() =>
    document.querySelector('axa-datepicker')
  );
  await t.expect(datepicker.clientWidth).eql(197);
});
