import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

const model = {
  thead: [{ html: 'Title 1' }, { html: 'Title 2' }],
  tbody: [
    [{ html: '<span>Hello</span>' }, { html: '<span>Cell 2</span>' }],
    [{ html: '<span>Hello 2</span>' }, { html: '<span>Cell 2</span>' }],
    [{ html: '<span>Hello 3</span>' }, { html: '<span>Cell 2</span>' }],
  ],
};

storiesOf('Organisms/Table', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Table Sortable',
    () =>`
      <h3>AXA Table Sortable</h3>
      <axa-table-sortable model='${JSON.stringify(model)}'></axa-table-sortable>
      `
  );
