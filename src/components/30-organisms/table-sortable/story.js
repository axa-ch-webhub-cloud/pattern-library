import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
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
  .addDecorator(withMarkdown(Readme))
  .add(
    'Table Sortable - default',
    () => `
      <h3>AXA Table Sortable Default</h3>
      <p style="color: red; font-weight:bold;">WARNING: on mobile sortable not implemented, use innerscroll option till finished<p/>
      <axa-table-sortable model='${JSON.stringify(model)}'>
      </axa-table-sortable>



      </br>
      </br>

      TODO:</br>

      - Allow cells formatting like axa-table</br>
      - Allow to add callback events onChange or onClick when row is pressed</br>
      `
  )
  .add(
    'Table Sortable - innerscroll',
    () => `
      <h3>AXA Table Sortable With innerscroll</h3>

      <axa-table-sortable innerscroll="500" model='${JSON.stringify(model)}'>
      </axa-table-sortable>

      </br>
      </br>

      TODO:</br>

      - Allow cells formatting like axa-table</br>
      - Allow to add callback events onChange or onClick when row is pressed</br>
      `
  );
