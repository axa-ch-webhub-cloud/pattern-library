import { html } from 'lit';
import { args, argTypes, model } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Table Sortable',
  parameters: {
    readme,
    changelog,
  },
  args,
  argTypes,
};

export const TableSortable = ({
  innerscroll,
  maxheight,
  datesortcolumnindex,
}) => html`
  <axa-table-sortable
    innerscroll="${innerscroll}"
    maxheight="${maxheight}"
    datesortcolumnindex="${datesortcolumnindex}"
    model="${JSON.stringify(model)}"
  ></axa-table-sortable>
  <br />
  <axa-text variant="size-3">
    Note: The datesortcolumnindex="3,4" is set. It can't be controlled by the
    Controls.
  </axa-text>
`;
