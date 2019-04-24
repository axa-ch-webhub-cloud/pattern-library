import React, { createElement } from 'react';

import createAXATable from '../../components/30-organisms/table/index.react';

const AXATableReact = createAXATable(createElement);

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
    </div>
  );
};

export default DemoTable;
