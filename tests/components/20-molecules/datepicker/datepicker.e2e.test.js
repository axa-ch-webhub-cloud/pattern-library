import { Selector } from 'testcafe';
import { datePickerAccessor } from './datepicker-accessor';

fixture('Datepicker').page('http://localhost:6006/iframe.html?id=molecules-datepicker--datepicker');

test('Should select february the 14th', async t => {
  await datePickerAccessor.chooseFebruary(t);
  // 14. February
  await datePickerAccessor.chooseDayByIndex(t, 18);

  await datePickerAccessor.assertYear(t, 2020);
  await datePickerAccessor.assertMonth(t, 'Februar');
  await datePickerAccessor.assertDay(t, 14);
});

test('Should select the first of march from within the february view', async t => {});
