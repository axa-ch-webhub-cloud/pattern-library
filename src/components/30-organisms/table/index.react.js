import withReact from '../../../utils/with-react';
import AXATable from './';

import AXARow from './components/axa-tr';
import AXACell from './components/axa-td';
import AXAHeaderCell from './components/axa-th';
import AXATableHead from './components/axa-thead';
import AXATableBody from './components/axa-tbody';
import AXATableFoot from './components/axa-tfoot';

export default createElement => ({ children }) => withReact(createElement)(
  AXATable.tagName,
  null,
  children
);

export const createAXARow = createElement => ({ children }) => withReact(createElement)(
  AXARow.tagName,
  null,
  children
);

export const createAXACell = createElement => ({ children }) => withReact(createElement)(
  AXACell.tagName,
  null,
  children
);

export const createAXAHeaderCell = createElement => ({ children }) => withReact(createElement)(
  AXAHeaderCell.tagName,
  null,
  children
);

export const createAXATableHead = createElement => ({ children }) => withReact(createElement)(
  AXATableHead.tagName,
  null,
  children
);

export const createAXATableBody = createElement => ({ children }) => withReact(createElement)(
  AXATableBody.tagName,
  null,
  children
);

export const createAXATableFoot = createElement => ({ children }) => withReact(createElement)(
  AXATableFoot.tagName,
  null,
  children
);
