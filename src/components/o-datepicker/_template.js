import html from 'nanohtml';
import raw from 'nanohtml/raw';
import { getLocaleDayMonthYear, TODAY } from '../../js/date';

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
}, documentFragment, wcNode) => {
  return html`
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
          ${higherEndYear ? `higher-end-year="${higherEndYear}"` : ''}
          ${lowerEndYear ? `lower-end-year="${lowerEndYear}"` : ''}
          ${dateValue ? `selected-day="${dateValue.getDate()}"` : ''}
          start-month="${dateValue ? dateValue.getMonth() : TODAY}"
          start-year="${dateValue ? dateValue.getFullYear() : TODAY}"
          class="o-datepicker__calendar js-datepicker__calendar"
          locale="${locale}"
          button-ok="${buttonOk}"
          button-cancel="${buttonCancel}"
          ${open === false ? "hidden" : "" }
        >
        </axa-m-datepicker>`)
      }
    </article>
  `;
};
