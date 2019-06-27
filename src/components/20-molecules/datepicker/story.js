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
    () => `<axa-datepicker allowedyears='[2019, 2020, 2021]' year='2020' month="0" day="20" locale='en-GB' data-test-id="datepicker-translated"
    ></axa-datepicker>`
  )
  .add(
    'Datepicker Input',
    () => `
      <axa-datepicker inputfield year="2019" month="0" day="1" data-test-id="datepicker-input-2019"></axa-datepicker>
      <axa-datepicker inputfield placeholder="Bitte Datum wählen" year="2020" month="1" day="2" data-test-id="datepicker-input-2020" invaliddatetext="Ungültiges Datum"></axa-datepicker>
      <axa-datepicker inputfield placeholder="Scegli una data" year="2021" month="2" day="3" data-test-id="datepicker-input-2021" invaliddatetext="Data invalida"></axa-datepicker>
    `
  )
  .add(
    'Datepicker inside form',
    () => `<form id="datepicker-form" onsubmit="event.preventDefault();document.getElementById('form-data').open=true;var formdata = new FormData(this);for(var i=0,entries=formdata.entries();!entries.next().done;i++);document.getElementById('form-data-date').textContent=formdata.get('date') + ' (of ' + i + ' submittable elements)';">
    <fieldset>
    <legend>Language</legend>
    <axa-datepicker data-test-id="datepicker-forms" name="date" inputfield placeholder="Bitte Datum wählen" year="2020" month="1" day="2"></axa-datepicker>
    <axa-button type="submit" id="datepicker-forms-submit">OK</axa-button>
    <details id="form-data" style="display: inline-block;margin-left: 2rem">
    <summary style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none">form content</summary>
    <div id="datepicker-forms-content" style="display:table; padding: 5px 0">date = <span id="form-data-date"></span></div>
    </details>
    </fieldset>
    </form>
    `
  );
