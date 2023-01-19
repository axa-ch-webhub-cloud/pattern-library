import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Components/Stepper',
  parameters: {
    readme,
    usage: {
      propsPureHTML: `steps='["Step 1", "Step 2", "Step 3"]'`,
      propsReact: `steps={['Step 1', 'Step 2', 'Step 3']}`,
    },
    changelog,
    layout: 'fullscreen',
  },
  args: {
    steps: ['Angaben', 'Leistungen', 'Übersicht', 'Fertig'],
    stepActive: 2,
    stepProgress: 0.5,
  },
  argTypes: {
    steps: { control: 'object' },
    stepActive: { control: 'number' },
    stepProgress: { control: 'number' },
  },
};

export const Stepper = ({ steps, stepActive, stepProgress }) => html`
  <axa-stepper
    .steps=${steps}
    .stepActive=${stepActive || 0}
    .stepProgress=${stepProgress || 0}
  ></axa-stepper>
`;
