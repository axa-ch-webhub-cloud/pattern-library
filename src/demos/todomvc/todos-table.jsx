import React from 'react';

import withReact from '../../js/with-react';
import AXAContainer from '../../components/o-container';
import AXATable from '../../components/o-table';
import AXACaption from '../../components/a-caption';
import AXATHead from '../../components/m-thead';
import AXATBody from '../../components/m-tbody';
import AXATr from '../../components/m-tr';
import AXATh from '../../components/a-th';
import AXATd from '../../components/a-td';

const AXAContainerReact = withReact(AXAContainer);
const AXATableReact = withReact(AXATable);
const AXACaptionReact = withReact(AXACaption);
const AXATHeadReact = withReact(AXATHead);
const AXATBodyReact = withReact(AXATBody);
const AXATrReact = withReact(AXATr);
const AXAThReact = withReact(AXATh);
const AXATdReact = withReact(AXATd);

const headings = ['Completed', 'Title'];
const headingsJson = JSON.stringify(headings);
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
    <AXATableReact headings={headingsJson} items={toItems(shownTodos)} cap={`${cap} (broken)`} capSide={capSide} capAlign={capAlign} />

    <AXATableReact>
      <AXACaptionReact side={capSide} align={capAlign}>{cap} (working)</AXACaptionReact>

      <AXATHeadReact>
        <AXATrReact>
          {Array.isArray(headings) && headings.map((head, index) => (
            <AXAThReact key={index}>{head}</AXAThReact>
          ))}
        </AXATrReact>
      </AXATHeadReact>

      <AXATBodyReact>
        {Array.isArray(shownTodos) && shownTodos.map(toRow).map(({ id: rowId, cells }) => (
          <AXATrReact key={rowId}>
            {Array.isArray(cells) && cells.map(({ id: cellId, text }) => (
              <AXATdReact key={cellId}>{text}</AXATdReact>
            ))}
          </AXATrReact>
        ))}
      </AXATBodyReact>
    </AXATableReact>
  </AXAContainerReact>
) : null;

export default TodoTable;
