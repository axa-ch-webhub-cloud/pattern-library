import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Molecules/Datepicker', module)
  .add('Datepicker', () => '<axa-datepicker year="2019" month="1" day="1"></axa-datepicker>')
  .add(
    'Datepicker Input',
    () =>
      `<axa-datepicker locale="de-DE" inputField year="2019" month="1" day="1"></axa-datepicker>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <axa-datepicker inputField year="2019" month="1" day="1"></axa-datepicker>
      `
  );
