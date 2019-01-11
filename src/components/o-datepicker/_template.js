import html from 'nanohtml';
import raw from 'nanohtml/raw';
import { getLocaleDayMonthYear } from '../../js/date';

export default ({
  classes,
  locale = 'en-UK',
  outputValue = '',
  open,
  lowerEndYear = '',
  higherEndYear = '',
  startDateYear = [],
  startDateMonth = [],
  startDateDay = [],
  allowedYears = [],
  buttonOk = 'ok',
  buttonCancel = 'cancel',
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
          class="js-datepicker__calendar"
          button-ok="${buttonOk}" 
          button-cancel="${buttonCancel}" 
          locale="${locale}"
          lower-end-year='${lowerEndYear}'
          higher-end-year='${higherEndYear}'
          allowed-years='${allowedYears}'
          start-date-year='${startDateYear}'
          start-date-month='${startDateMonth}'
          start-date-day='${startDateDay}'
          ${open === false ? 'hidden' : ''}
        >
        </axa-m-datepicker>`)
      }
    </article>
  `;
