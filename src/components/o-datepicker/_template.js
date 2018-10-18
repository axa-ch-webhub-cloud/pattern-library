import html from 'nanohtml';
import { getLocaleDayMonthYear, TODAY } from '../../js/date';

export default ({
  classes,
  locale = 'en-uk',
  outputIso = false,
  higherEndYear = false,
  lowerEndYear = false,
  open,
}, documentFragment, wcNode) => {
  wcNode.datepicker.locale = locale;
  const { localeValue, value } = wcNode.datepicker;
  return html`
    <article class=${classes}>
      ${localeValue ?
        html`<axa-input class="o-datepicker__input js-datepicker__input" placeholder="${getLocaleDayMonthYear(locale)}" value="${localeValue}" name="get-local-day-month-year" icon="datepicker" inline></axa-input>`
    :
        html`<axa-input class="o-datepicker__input js-datepicker__input" placeholder="${getLocaleDayMonthYear(locale)}" name="get-local-day-month-year" icon="datepicker" inline></axa-input>`
      }
      ${open ? html`<axa-m-datepicker higher-end-year="${higherEndYear}" lower-end-year="${lowerEndYear}" output-iso="${outputIso}" selected-day="${value ? value.getDate() : false}" start-month="${value ? value.getMonth() : TODAY}" start-year="${value ? value.getFullYear() : TODAY}" class="o-datepicker__calender js-datepicker__calender" locale="${locale}" button-ok="bestätigen" button-cancel="abbrechen"></axa-m-datepicker>` : ''}
    </article>
  `;
};
