import { Selector, ClientFunction } from 'testcafe';
import { DatePickerAccessor } from './test.accessor';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Datepicker').page(
  `${host}/iframe.html?id=molecules-datepicker--datepicker`
);

test('should select february the 13th and then the 14th', async t => {
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

test('should select the first of march from within the february view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfOutsideMonth(1);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('März');
  await datePickerAccessor.assertDay(1);
});

test('should select the 31th of january from within the february view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfOutsideMonth(31);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Januar');
  await datePickerAccessor.assertDay(31);
});

test('should have a 29th of februrary in 2020 - should correctly handle leap year', async t => {
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
    .wait(50)
    .expect((await Selector('#datepicker-forms-content')).innerText)
    .eql('date = 29.2.2020 (of 1 submittable elements)');
});
