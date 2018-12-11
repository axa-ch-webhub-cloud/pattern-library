import html from 'nanohtml';

import getNodeId from '../../js/get-node-id';

const renderCells = (store) => {
  if (!store) {
    return [];
  }
  return store.getCells();
};

export default (props, childNodes, wcNode) => html`
  <div class="m-datepicker-body js-datepicker-body">
    ${renderCells(wcNode.datepickerBody.store).map((cell, index) =>
      html`<button data-index="${index}" class="${cell.getClasses()}" id="${getNodeId(wcNode, null, index)}">${cell.getText()}</button>`)}
  </div>
`;
