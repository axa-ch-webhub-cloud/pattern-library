import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';
import { renderLitContainer } from '../../../utils/render-lit-container';

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

export const Text = ({ variant, wrapSlotInSpan, slot }) =>
  renderLitContainer(html`
    <axa-text variant="${variant}">
      ${wrapSlotInSpan ? html`<span>${slot}</span>` : html`${slot}`}
    </axa-text>
  `);
