import { Selector } from 'testcafe';
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

fixture('Datepicker - Collapsable Version').page(
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

  await datePickerAccessor2019.assertDatepickerInput('14.2.2019');
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
