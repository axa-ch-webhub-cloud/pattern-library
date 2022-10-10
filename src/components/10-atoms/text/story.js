import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Text',
  parameters: {
    readme,
    usage: {
      innerHTML: 'Lorem ipsum dolor sit amet',
    },
    changelog,
  },
  args,
  argTypes,
};

export const Text = ({ size, slot, tagless, italic, bold }) => html`
  <axa-text
    size="${size}"
    ?tagless="${tagless}"
    ?italic="${italic}"
    ?bold="${bold}"
    >${slot}</axa-text
  >
`;
