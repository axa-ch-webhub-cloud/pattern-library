import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

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

storiesOf('Organisms/Table Sortable', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Table Sortable - default',
    () => `
      <axa-table-sortable model='${JSON.stringify(model)}'>
      </axa-table-sortable>
      `
  )
  .add(
    'Table Sortable - innerscroll',
    () => `
      <axa-table-sortable innerscroll="500" model='${JSON.stringify(model)}'>
      </axa-table-sortable>
      `
  )
  .add(
    'Table Sortable - maxheight',
    () => `
      <axa-table-sortable
        maxheight="160"
        innerscroll="500"
        model='${JSON.stringify(model)}'>
      </axa-table-sortable>
      `
  );
