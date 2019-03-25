import { Selector } from 'testcafe';
import { DatePickerAccessor } from '../datepicker/datepicker.accessor';

class DatePickerInputAccessor extends DatePickerAccessor {
  constructor(testcafe) {
    super(testcafe);
  }
}

export { DatePickerInputAccessor };
