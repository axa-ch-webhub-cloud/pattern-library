import { Selector } from 'testcafe';
import { DatePickerAccessor } from './datepicker-accessor';

fixture('Datepicker').page('http://localhost:9999/iframe.html?id=molecules-datepicker--datepicker');

test('Should select february the 13th and then the 14th', async t => {
  const datePickerAccessor = new DatePickerAccessor(t);

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfCurrentMonth(13);
  await datePickerAccessor.selectDayOfCurrentMonth(14);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Februar');
  await datePickerAccessor.assertDay(14);
});

test('Should select the first of march from within the february view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t);

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfOutsideMonth(1);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('März');
  await datePickerAccessor.assertDay(1);
});

test('Should select the 31th of january from within the february view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t);

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfOutsideMonth(31);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Januar');
  await datePickerAccessor.assertDay(31);
});
