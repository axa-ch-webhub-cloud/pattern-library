# Table

Here an example on how to use the table with React:

```JavaScript
import React, { createElement } from 'react';

import createAXATable, {
  createAXARow,
  createAXACell,
  createAXAHeaderCell,
  createAXATableHead,
  createAXATableBody,
  createAXATableFoot,
} from '../../components/30-organisms/table/index.react';

const AXATableReact = createAXATable(createElement);
const AXARowReact = createAXARow(createElement);
const AXACellReact = createAXACell(createElement);
const AXAHeaderCell = createAXAHeaderCell(createElement);
const AXATableHeadReact = createAXATableHead(createElement);
const AXATableBodyReact = createAXATableBody(createElement);
const AXATableFootReact = createAXATableFoot(createElement);

const DemoTable = () => {
  return (
    <div>
      <AXATableReact>
        <AXATableHeadReact>
          <AXARowReact>
            <AXAHeaderCell>Hello 1</AXAHeaderCell>
            <AXAHeaderCell>Hello 2</AXAHeaderCell>
            <AXAHeaderCell>Hello 3</AXAHeaderCell>
          </AXARowReact>
        </AXATableHeadReact>
        <AXATableBodyReact>
          <AXARowReact>
            <AXACellReact>Hello 1</AXACellReact>
            <AXACellReact>Hello 2</AXACellReact>
            <AXACellReact>Hello 3</AXACellReact>
          </AXARowReact>
        </AXATableBodyReact>
        <AXATableFootReact>
          <AXARowReact>
            <AXACellReact>Hello 1</AXACellReact>
            <AXACellReact>Hello 2</AXACellReact>
            <AXACellReact>Hello 3</AXACellReact>
          </AXARowReact>
        </AXATableFootReact>
      </AXATableReact>
    </div>
  );
};

export default DemoTable;

```
