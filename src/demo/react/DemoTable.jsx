import React, { createElement } from 'react';

import createAXATable from '../../components/30-organisms/table/index.react';
import createAXASortableTable from '../../components/30-organisms/table-sortable/index.react';

const AXATableReact = createAXATable(createElement);
const AXATableSort = createAXASortableTable(createElement);

const model = {
  thead: [
    { html: 'Title 0', sort: 'ASC' },
    { html: 'Title 1', sort: 'ASC' },
    { html: 'Title 3', sort: 'DESC' },
    { html: 'Title 2' },
  ],
  tbody: [
    [
      { html: '<span>11 Some Text</span>' },
      { html: '<span>Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>1 Some Text</span>' },
      { html: '<span>Z Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>2 Some Text</span>' },
      { html: '<span>A Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'C' },
    ],
  ],
};

const DemoTable = () => {
  return (
    <div>
      <AXATableReact>
        <table>
          <thead>
            <tr>
              <th>Titel 1</th>
              <th>Titel 2</th>
              <th>Titel 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Body 1</td>
              <td>Longer Body 2</td>
              <td>Super Long Body 3 </td>
            </tr>
            <tr>
              <td>Body A1</td>
              <td>Longer Body A2</td>
              <td>Super Long Body A3 </td>
            </tr>
            <tr>
              <td>Body B1</td>
              <td>Longer Body B2</td>
              <td>Super Long Body B3 </td>
            </tr>
          </tbody>
        </table>
      </AXATableReact>
      <h3>2nd axa-table</h3>
      <AXATableReact>
        <table>
          <thead>
            <tr>
              <th>Titel 1</th>
              <th>Titel 2</th>
              <th>Titel 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Body 1</td>
              <td>Longer Body 2</td>
              <td>Super Long Body 3 </td>
            </tr>
            <tr>
              <td>Body A1</td>
              <td>Longer Body A2</td>
              <td>Super Long Body A3 </td>
            </tr>
            <tr>
              <td>Body B1</td>
              <td>Longer Body B2</td>
              <td>Super Long Body B3 </td>
            </tr>
          </tbody>
        </table>
      </AXATableReact>
      <h3>Sortable Table</h3>
      <AXATableSort innerscroll="500" model={model} />
    </div>
  );
};

export default DemoTable;
