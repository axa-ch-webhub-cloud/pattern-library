import html from 'nanohtml';

import expandTableData from '../../js/expand-table-data';

export default ({ items }, fragmentChildren) => {
  let rows;

  if (items) {
    ({ rows } = expandTableData(items));
  }

  return Array.isArray(rows) && rows.length ?
    rows.map(({ cells, ...rowAttrs }) => html`
      <tr is="axa-tr" foot ${rowAttrs}>
        ${(Array.isArray(cells) && cells.map(({ text, ...attrs }) => html`
          <th is="axa-th" ${attrs}>${text}</th>
        `)) || ''}
      </tr>
    `)
    : fragmentChildren;
};
