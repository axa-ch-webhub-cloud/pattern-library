import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Table', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Table',
    () =>`
      Custom
      <axa-table>
        <axa-thead>
          <axa-row>
            <axa-th>
              Hello Head 1
            </axa-th>
            <axa-th>
              Hello Head 2
            </axa-th>
            <axa-th>
              Hello Head 3
            </axa-th>
          </axa-row>
        </axa-thead>
        <axa-tbody>
          <axa-row>
            <axa-td>
              Hello Body 1
            </axa-td>
            <axa-td>
              Hello Body 2 and text and text and text and text and text and text and text and text and text
            </axa-td>
            <axa-td>
              Hello Body 3
            </axa-td>
          </axa-row>
        </axa-tbody>
        <axa-tfoot>
          <axa-row>
            <axa-td>
              Hello Foot 1
            </axa-td>
            <axa-td>
              Hello Foot 2
            </axa-td>
            <axa-td>
              Hello Foot 3
            </axa-td>
          </axa-row>
        </axa-tfoot>
      </axa-table>
      `
  );
