import html from 'nanohtml';

import expandData from '../o-table/js/expand-data';

export default ({ items }, fragmentChildren) => Array.isArray(items) && items.length ?
  expandData(items).rows.map(({ cells, ...rowAttrs }) => html`
    <tr is="axa-tr" ${rowAttrs}>
      ${(Array.isArray(cells) && cells.map(({ text, ...attrs }) => html`
        <td is="axa-td" ${attrs}>${text}</td>
      `)) || ''}
    </tr>
  `)
  : fragmentChildren;
