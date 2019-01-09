import html from 'nanohtml';

export default props => html`
  <div class="m-datepicker-body js-datepicker-body">
    ${props.cells ? props.cells.map((cell, index) =>
      html`<button data-index="${index}" class="${cell.className}">${cell.text}</button>`) : ''}
  </div>
`;
