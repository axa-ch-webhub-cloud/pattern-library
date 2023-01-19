import { html } from 'lit';
import { args, argTypes } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Components/Link',
  parameters: {
    readme,
    usage: {
      innerHTML: 'I am a link',
      propsPureHTML: 'href="https://axa.ch/en/private-customers.html"',
      propsReact: 'href="https://axa.ch/en/private-customers.html"',
    },
    changelog,
  },
  args,
  argTypes,
};

export const Link = ({ link, slot, external, variant, icon }) => html`
  <axa-link
    href="${link}"
    ?external="${external}"
    variant="${variant}"
    icon="${icon}"
    >${slot}</axa-link
  >
`;
