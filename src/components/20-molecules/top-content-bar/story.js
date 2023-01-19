import { html } from 'lit';
import { args, argTypes } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';
import '../../10-atoms/link/index.wc.js';

export default {
  title: 'Components/Top Content Bar',
  parameters: {
    readme,
    usage: {
      innerHTML: 'Some Text',
      propsPureHTML: 'ctatext="Click Me"',
      propsReact: 'onClick={() => alert("you clicked me")} ctatext="Click Me"',
    },
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const TopContentBar = ({
  ctatext,
  variant,
  closable,
  icon,
  href,
  stickymobile,
  link,
  slot,
}) => html`
  <h1>HEADER</h1>
  <axa-top-content-bar
    variant="${variant}"
    ?stickymobile="${stickymobile}"
    ?closable="${closable}"
    icon="${icon}"
    href="${href}"
    ctatext="${ctatext}"
  >
    ${slot} ${link ? html` <axa-link>${link}</axa-link> ` : ''}
  </axa-top-content-bar>
  <h2>Subheader</h2>
  <h3>Text 1</h3>
  <h3>Text 2</h3>
  <h3>Text 3</h3>
  <h3>Text 4</h3>
`;
