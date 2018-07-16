import html from 'nanohtml';

const renderCells = (store) => {
  if (!store) {
    return [];
  }
  return store.getCells();
};

export default (props, childNodes, wcNode) => html`
  <div class="m-datepicker-body js-datepicker-body">
    ${renderCells(wcNode.datepickerBody.store).map((cell, index) => html`<button data-index="${index}" class="${cell.getClasses()}">${cell.getText()}</button>`)}
  </div>
`;
