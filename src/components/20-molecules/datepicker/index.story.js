import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Molecules/Datepicker', module)
  .add('Datepicker', () => '<axa-datepicker year="2020" month="3" day="20"></axa-datepicker>')
  .add(
    'Datepicker Input',
    () => `
    <axa-datepicker inputField year="2020" month="3" day="20"></axa-datepicker>
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
    <axa-datepicker inputField year="2020" month="3" day="20"></axa-datepicker>
    `
  );
