/* global document */
import { storiesOf } from '@storybook/html';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import createTableSortableReact from '../index.react';
import Readme from '../README.md';

const TableSortable = createTableSortableReact(createElement);

const model = {
  thead: [
    { html: 'Age', sort: 'ASC' },
    { html: 'Name', sort: 'ASC' },
    { html: 'City', sort: 'DESC' },
    { html: 'Department' },
  ],
  tbody: [
    [
      { html: '<span>55</span>' },
      { html: '<span>Peter</span>' },
      { html: '<span>Winterthur</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>22</span>' },
      { html: '<span>Chris</span>' },
      { html: '<span>Zürich</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>46</span>' },
      { html: '<span>Hubert</span>' },
      { html: '<span>Kreuzlingen</span>' },
      { html: 'C' },
    ],
    [
      { html: '<span>51</span>' },
      { html: '<span>Petra</span>' },
      { html: '<span>Kreuzlingen</span>' },
      { html: 'D' },
    ],
    [
      { html: '<span>18</span>' },
      { html: '<span>Maria</span>' },
      { html: '<span>Frauenfeld</span>' },
      { html: 'E' },
    ],
    [
      { html: '<span>29</span>' },
      { html: '<span>David</span>' },
      { html: '<span>Frauenfeld</span>' },
      { html: 'F' },
    ],
  ],
};

storiesOf('Organisms/Table Sortable/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('On click works also in react', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TableSortable
        model={model}
        onClick={ev => {
          console.log(ev);
        }}
      />,
      div
    );
    return div;
  });
