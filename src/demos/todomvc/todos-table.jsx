import React from 'react';

import withReact from '../../js/with-react';
import AXAContainer from '../../components/o-container';
import AXATable from '../../components/o-table';

const AXAContainerReact = withReact(AXAContainer);
const AXATableReact = withReact(AXATable);

const headings = JSON.stringify(['Completed', 'Title']);
const toRow = ({ id, title, completed }) => ({
  id,
  cells: [
    { id: `${id}-0`, text: `${!!completed}` },
    { id: `${id}-1`, text: title },
  ],
});
const toItems = (todos) => {
  console.log('toItems', todos);
  console.log(todos.map(toRow));

  return JSON.stringify(todos.map(toRow));
};

const TodoTable = ({
  cap = 'Todos Table-View',
  capSide = 'bottom',
  capAlign = 'right',
  shownTodos,
}) => Array.isArray(shownTodos) && shownTodos.length ? (
  <AXAContainerReact>
    <AXATableReact headings={headings} items={toItems(shownTodos)} cap={cap} capSide={capSide} capAlign={capAlign} />
  </AXAContainerReact>
) : null;

export default TodoTable;
