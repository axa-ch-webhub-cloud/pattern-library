import html from 'nanohtml';
import raw from 'nanohtml/raw';
import { getLocaleDayMonthYear, TODAY } from '../../js/date';

export default ({
  classes,
  locale = 'en-uk',
  outputIso = false,
  higherEndYear = false,
  buttonCancel = 'Cancel',
  buttonOk = 'Ok',
  lowerEndYear = false,
  open,
}, documentFragment, wcNode) => {
  wcNode.datepicker.locale = locale;
  const { localeValue, value } = wcNode.datepicker;
  const dateValue = new Date(value);
  // when falsy, leave out the output-iso attr., otherwise the "false" string value means true within <axa-m-datepicker>
  return html`
    <article class=${classes}>
      ${localeValue ?
        html`<axa-input class="o-datepicker__input js-datepicker__input" placeholder="${getLocaleDayMonthYear(locale)}" value="${localeValue}" name="get-local-day-month-year" icon="datepicker" inline></axa-input>`
    :
        html`<axa-input class="o-datepicker__input js-datepicker__input" placeholder="${getLocaleDayMonthYear(locale)}" name="get-local-day-month-year" icon="datepicker" inline></axa-input>`
      }
      ${open
        ? raw(`<axa-m-datepicker
            ${higherEndYear ? `higher-end-year="${higherEndYear}"` : ''}
            ${lowerEndYear ? `lower-end-year="${lowerEndYear}"` : ''}
            ${outputIso ? 'output-iso' : ''}
            ${value ? `selected-day="${dateValue.getDate()}"` : ''}
            start-month="${value ? dateValue.getMonth() : TODAY}"
            start-year="${value ? dateValue.getFullYear() : TODAY}"
            class="o-datepicker__calender js-datepicker__calender"
            locale="${locale}"
            button-ok="${buttonOk}"
            button-cancel="${buttonCancel}"
            button-cancel="abbrechen"></axa-m-datepicker>`)
        : ''}
    </article>
  `;
};
