import html from 'nanohtml';
import { getCells } from './js/store';

const renderCells = (locale) => {
  return getCells(locale);
};

export default ({ locale }) => html`
  <div class="m-datepicker-body js-datepicker-body">
    ${renderCells(locale).map((cell, index) => html`<button data-index="${index}" class="${cell.getClasses()}">${cell.getText()}</button>`)}
  </div>
`;
