import html from 'nanohtml';

import expandTableData from '../../js/expand-table-data';
import getNodId from '../../js/get-node-id';

export default ({ items }, fragmentChildren, wcNode) => {
  let rows;

  if (items) {
    ({ rows } = expandTableData(items));
  }

  return Array.isArray(rows) && rows.length ?
    rows.map(({ cells, id: rowId, ...rowAttrs }, rowIndex) => html`
      <tr is="axa-tr" foot ${rowAttrs} id="${getNodId(wcNode, rowId, rowIndex, 'tr')}">
        ${(Array.isArray(cells) && cells.map(({ text, id: cellId, ...attrs }, cellIndex) => html`
          <th is="axa-th" ${attrs} id="${getNodId(wcNode, cellId, cellIndex, 'th')}">${text}</th>
        `)) || ''}
      </tr>
    `)
    : fragmentChildren;
};
