import { Selector } from 'testcafe';
import { DatePickerAccessor } from './datepicker-accessor';

fixture('Datepicker').page('http://localhost:6006/iframe.html?id=molecules-datepicker--datepicker');

test('Should select february the 14th', async t => {
  const datePickerAccessor = new DatePickerAccessor(t);
  await datePickerAccessor.chooseFebruary();
  // 14. february
  await datePickerAccessor.chooseDayByIndex(18);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Februar');
  await datePickerAccessor.assertDay(14);
});

test('Should select the first of march from within the february view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t);
  await datePickerAccessor.chooseFebruary();
  // 1. march
  await datePickerAccessor.chooseDayByIndex(34);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('März');
  await datePickerAccessor.assertDay(1);
});

test('Should select the 31th of january from within the february view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t);
  await datePickerAccessor.chooseFebruary();
  // 31. january
  await datePickerAccessor.chooseDayByIndex(4);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Januar');
  await datePickerAccessor.assertDay(31);
});
