import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default ({
  locale,
  outputValue = '',
  placeholder = 'Select a date',
  open = false,
  startDateYear = [],
  startDateMonth = [],
  startDateDay = [],
  allowedYears = [],
  buttonOk = 'Ok',
  buttonCancel = 'Cancel',
}) => html`
    <article class="o-datepicker__wrap">
      <axa-input
        class="o-datepicker__input js-datepicker__input"
        placeholder="${placeholder}"
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
          allowed-years='${JSON.stringify(allowedYears)}'
          start-date-year='${startDateYear}'
          start-date-month='${startDateMonth}'
          start-date-day='${startDateDay}'
          ${open === false ? 'hidden' : ''}
        >
        </axa-m-datepicker>`)
      }
    </article>
  `;
