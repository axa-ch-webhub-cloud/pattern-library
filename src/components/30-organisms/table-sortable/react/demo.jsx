/* global document */
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import createTableSortableReact from '../index.react';
import readme from '../README.md';

const TableSortable = createTableSortableReact(createElement);

const model = {
  thead: [
    { html: 'Age', sort: 'ASC' },
    { html: 'Name', sort: 'ASC' },
    { html: 'City', sort: 'DESC' },
    { html: 'Date', sort: 'DESC' },
    { html: 'Department' },
  ],
  tbody: [
    [
      { html: '<span>55</span>' },
      { html: '<span>Peter</span>' },
      { html: '<span>Winterthur</span>' },
      { text: '<span>22.04.2019</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>22</span>' },
      { html: '<span>Chris</span>' },
      { html: '<span>Zürich</span>' },
      { html: '<span>04.06.2019</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>46</span>' },
      { html: '<span>Hubert</span>' },
      { html: '<span>Kreuzlingen</span>' },
      { html: '<span>05.02.2020</span>' },
      { html: 'C' },
    ],
    [
      { html: '<span>51</span>' },
      { html: '<span>Petra</span>' },
      { html: '<span>Kreuzlingen</span>' },
      { html: '<span>11.12.2019</span>' },
      { html: 'D' },
    ],
    [
      { html: '<span>18</span>' },
      { html: '<span>Maria</span>' },
      { html: '<span>Frauenfeld</span>' },
      { html: '<span>01.01.2020</span>' },
      { html: 'E' },
    ],
    [
      { html: '<span>29</span>' },
      { html: '<span>David</span>' },
      { html: '<span>Frauenfeld</span>' },
      { html: '<span>02.05.2015</span>' },
      { html: 'F' },
    ],
  ],
};

export default {
  title: 'Examples/Table Sortable/React',

  parameters: {
    readme,
    changelog,
  },
};

export const OnClickWorksAlsoInReact = () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TableSortable
      model={model}
      datesortcolumnindex="3"
      onClick={ev => {
        window.alert(JSON.stringify(ev));
      }}
    />,
    div
  );
  return div;
};
