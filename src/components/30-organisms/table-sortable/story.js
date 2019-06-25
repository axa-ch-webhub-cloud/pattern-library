import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

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

storiesOf('Organisms/Table', module)
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
  );
