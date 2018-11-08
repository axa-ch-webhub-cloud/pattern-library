import html from 'nanohtml';

import expandData from '../o-table/js/expand-data';

export default ({ items }, fragmentChildren) => {
  let rows;

  if (items) {
    ({ rows } = expandData(items));
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
