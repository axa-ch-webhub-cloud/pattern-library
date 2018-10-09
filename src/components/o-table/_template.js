import html from 'nanohtml';

import expandData from './js/expand-data';

export default ({
  caption,
  headings,
  items,
  footers,
  classes,
}, childrenFragment) => {
  const { rows: headingsRows, props: headingsAttrs } = expandData(headings);
  const { rows: itemsRows, props: itemsAttrs } = expandData(items);
  const { rows: footersRows, props: footersAttrs } = expandData(footers);

  return html`
  <table class="o-table">
    ${childrenFragment}

    ${caption && html`<caption class="o-table__caption">${caption}</caption>`}
    
    ${Array.isArray(headingsRows) && html`
      <thead class="o-table__head">
        ${headingsRows.map(({ cells, ...rowAttrs }) => html`
          <tr class="o-table__row o-table__row--head" ${rowAttrs}>
            ${Array.isArray(cells) && cells.map(({ text, ...attrs }) => html`
              <th class="o-table__cell o-table__cell--head" ${attrs}>${text}</th>
            `)}
          </tr>
        `)}
      </thead>
    `}
    
    ${Array.isArray(footersRows) && html`
      <tfoot class="o-table__foot">
        ${footersRows.map(({ cells, ...rowAttrs }) => html`
          <tr class="o-table__row o-table__row--foot" ${rowAttrs}>
            ${Array.isArray(cells) && cells.map(({ text, ...attrs }) => html`
              <td class="o-table__cell o-table__cell--foot" ${attrs}>${text}</td>
            `)}
          </tr>
        `)}
      </tfoot>
    `}
    
    ${Array.isArray(itemsRows) && html`
      <tbody class="o-table__body">
        ${itemsRows.map(({ cells, ...rowAttrs }) => html`
          <tr class="o-table__row" ${rowAttrs}>
            ${Array.isArray(cells) && cells.map(({ text, ...attrs }) => html`
              <td class="o-table__cell" ${attrs}>${text}</td>
            `)}
          </tr>
        `)}
      </tbody>
    `}
  </table>
  `;
};
