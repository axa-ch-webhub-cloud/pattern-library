import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Molecules/Datepicker', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Datepicker',
    () =>
      `<axa-datepicker allowedyears='["1989-2000", 2012, 2014, "2018-2022"]' year='2020' month="4" day="22" data-test-id="datepicker"></axa-datepicker>`
  )
  .add(
    'Datepicker Translated (en-GB)',
    () => `<axa-datepicker allowedyears='[2019, 2020, 2021]' year='2020' month="0" day="20" locale='en-GB' labelbuttoncancel="Cancel" data-test-id="datepicker-translated"
    ></axa-datepicker>`
  )
  .add(
    'Datepicker Input',
    () => `
      <axa-datepicker inputfield year="2019" month="0" day="1" data-test-id="datepicker-input-2019" labelbuttoncancel="Cancel"></axa-datepicker>
      <axa-datepicker inputfield placeholder="Bitte Datum wählen" year="2020" month="1" day="2" data-test-id="datepicker-input-2020" invaliddatetext="Ungültiges Datum"></axa-datepicker>
      <axa-datepicker inputfield placeholder="Scegli una data" year="2021" month="2" day="3" data-test-id="datepicker-input-2021" invaliddatetext="Data invalida" labelbuttoncancel="Annulare"></axa-datepicker>
    `
  );
