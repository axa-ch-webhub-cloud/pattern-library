import html from 'nanohtml';
import { getLocaleDayMonthYear } from '../../js/date';

export default ({
  classes,
  locale = 'en-uk',
  open,
}) => html`
  <article class=${classes}>
    <axa-input classes="o-datepicker__input" placeholder="${getLocaleDayMonthYear(locale)}" name="test-name" icon="datepicker" inline></axa-input>
    ${open ? html`<axa-m-datepicker class="o-datepicker__calender js-datepicker__calender" button-ok="ok" button-cancel="abbrechen"></axa-m-datepicker>` : ''}
  </article>
`;
