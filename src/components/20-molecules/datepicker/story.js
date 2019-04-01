import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Molecules/Datepicker', module)
  .add(
    'Datepicker',
    () =>
      `<axa-datepicker allowedyears='[2018, 2019, 2020, 2021]' year='2019' month="4" day="22" data-test-id="datepicker"></axa-datepicker>`
  )
  .add(
    'Datepicker Translated (en-GB)',
    () => `<axa-datepicker allowedyears='[2019, 2020, 2021]' year='2020' month="0" day="20" locale='en-GB' data-test-id="datepicker-translated"
    ></axa-datepicker>`
  )
  .add(
    'Datepicker Input',
    () => `
    <axa-datepicker inputfield year="2020" month="2" day="2" data-test-id="datepicker-input-2019"></axa-datepicker>    `
  );
