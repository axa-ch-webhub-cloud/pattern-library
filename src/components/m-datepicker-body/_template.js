import html from 'nanohtml';

export default props => html`
  <div class="m-datepicker-body js-datepicker-body">
    ${props.cells
      ? props.cells.map(
          (cell, index) =>
            html`
              <button tabindex="0" data-index="${index}" data-value="${cell.value}" class="${cell.className}">
                ${cell.text}
              </button>
            `
        )
      : ''}
  </div>
`;
