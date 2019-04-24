import React, { createElement } from 'react';
import createAXATable from '../../components/30-organisms/table/index.react';

const AXATableReact = createAXATable(createElement);

const DemoTable = () => {
  return (
    <div>
      <AXATableReact>
        TODO
      </AXATableReact>
    </div>
  );
};

export default DemoTable;
