import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Table', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Table',
    () =>`
      <axa-table>
        <axa-thead>
          <axa-row>
            <axa-th>
              Hallo
            </axa-th>
          </axa-row>
        </axa-thead>
        <axa-row>
          <axa-td>
            Velo
          </axa-td>
        </axa-row>
      </axa-table>
      `
  );
