import { number, object, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Stepper',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      propsPureHTML: `steps='["Step 1", "Step 2", "Step 3"]'`,
      propsReact: `steps={['Step 1', 'Step 2', 'Step 3']}`,
    },
    changelog,
  },
};

export const Stepper = () => {
  const wrapper = document.createElement('div');

  const steps = object('steps', [
    'Angaben',
    'Leistungen',
    'Übersicht',
    'Fertig',
  ]);

  const stepActive = number('stepActive', 2);
  const stepProgress = number('stepProgress', 0.5);

  const template = html`
    <axa-stepper
      .steps=${steps}
      .stepActive=${stepActive || 0}
      .stepProgress=${stepProgress || 0}
    ></axa-stepper>
  `;

  render(template, wrapper);
  return wrapper;
};
