import html from 'nanohtml';
import raw from 'nanohtml/raw';
import { getLocaleDayMonthYear } from '../../js/date';

export default ({
  classes,
  locale = 'en-UK',
  higherEndYear = false,
  lowerEndYear = false,
  dateValue = new Date(),
  outputValue = '',
  open = false,
  buttonCancel = 'Cancel',
  buttonOk = 'Ok',
}) => html`
    <article class=${classes}>
      <axa-input
        class="o-datepicker__input js-datepicker__input"
        placeholder="${getLocaleDayMonthYear(locale)}"
        name="get-local-day-month-year"
        icon="datepicker"
        value="${outputValue}"
        inline
      >
      </axa-input>
      ${raw(`
        <axa-m-datepicker
          button-ok="ok" 
          button-cancel="abbrechen" 
          locale="de-CH" 
          lower-end-year="2018"
          higher-end-year="2023"
          allowed-years='[2018, 2019, 2020, 2021, 2022, 2023]'
          start-date-year="2019"
          start-date-month="1"
          start-date-day="1"
          ${open === false ? '' : ''}
        >
        </axa-m-datepicker>`)
      }
    </article>
  `;
