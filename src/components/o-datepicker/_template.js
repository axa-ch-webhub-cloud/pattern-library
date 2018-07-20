import html from 'nanohtml';
import { getLocaleDayMonthYear } from '../../js/date';

export default ({
  classes,
  locale = 'en-uk',
  open,
}, documentFragment, wcNode) => {
  const { value } = wcNode.datepicker;
  return html`
    <article class=${classes}>
      ${value ?
        html`<axa-input class="o-datepicker__input js-datepicker__input" placeholder="${getLocaleDayMonthYear(locale)}" value="${value}" name="test-name" icon="datepicker" inline></axa-input>`
    :
        html`<axa-input class="o-datepicker__input js-datepicker__input" placeholder="${getLocaleDayMonthYear(locale)}" name="test-name" icon="datepicker" inline></axa-input>`
      }
      ${open ? html`<axa-m-datepicker class="o-datepicker__calender js-datepicker__calender" locale="${locale}" button-ok="ok" button-cancel="abbrechen"></axa-m-datepicker>` : ''}
    </article>
  `;
};
